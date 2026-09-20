import type { QuestionBank } from '../../../types/curriculum';

export const egBacRoboticsCh4Databank: QuestionBank = {
  easy: [
  {
    "id": "egbac_robotics_ch4_easy_1",
    "titleEn": "[EASY] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Review 1",
    "titleAr": "[مستوى أساسي] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - سؤال 1",
    "questionEn": "[Question 1] In the context of Egyptian STEM robotics and mechatronics regarding Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 1] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
    "correctAnswerAr": "يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
    "explanationEn": "Correct Principle: Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
    "explanationAr": "المبدأ العلمي الصحيح: يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_2",
    "titleEn": "[EASY] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Review 2",
    "titleAr": "[مستوى أساسي] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - سؤال 2",
    "questionEn": "[Question 2] In the context of Egyptian STEM robotics and mechatronics regarding Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 2] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
    "correctAnswerAr": "يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
    "explanationEn": "Correct Principle: Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
    "explanationAr": "المبدأ العلمي الصحيح: يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_3",
    "titleEn": "[EASY] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Review 3",
    "titleAr": "[مستوى أساسي] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - سؤال 3",
    "questionEn": "[Question 3] In the context of Egyptian STEM robotics and mechatronics regarding OPC UA Semantic Information Models & Industrial Cyber-Physical Systems, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 3] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "OPC Unified Architecture (OPC UA) provides platform-independent, service-oriented semantic data exchange for machine-to-machine (M2M) communication across Industry 4.0 shop floors.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "يوفر بروتوكول OPC UA الموحد تبادلاً دلالياً للبيانات مستقلاً عن أنظمة التشغيل للتواصل بين الآلات (M2M) في بيئات الثورة الصناعية الرابعة.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "OPC Unified Architecture (OPC UA) provides platform-independent, service-oriented semantic data exchange for machine-to-machine (M2M) communication across Industry 4.0 shop floors.",
    "correctAnswerAr": "يوفر بروتوكول OPC UA الموحد تبادلاً دلالياً للبيانات مستقلاً عن أنظمة التشغيل للتواصل بين الآلات (M2M) في بيئات الثورة الصناعية الرابعة.",
    "explanationEn": "Correct Principle: OPC Unified Architecture (OPC UA) provides platform-independent, service-oriented semantic data exchange for machine-to-machine (M2M) communication across Industry 4.0 shop floors.",
    "explanationAr": "المبدأ العلمي الصحيح: يوفر بروتوكول OPC UA الموحد تبادلاً دلالياً للبيانات مستقلاً عن أنظمة التشغيل للتواصل بين الآلات (M2M) في بيئات الثورة الصناعية الرابعة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_4",
    "titleEn": "[EASY] Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer - Review 4",
    "titleAr": "[مستوى أساسي] محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع - سؤال 4",
    "questionEn": "[Question 4] In the context of Egyptian STEM robotics and mechatronics regarding Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 4] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Digital Twins simulate complete robotic kinematics, sensor outputs, and multi-body rigid physics inside computer environments before physical deployment on real hardware."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "تحاكي التوائم الرقمية حركيات الروبوت ومخرجات حساساته وفيزياء الأجسام الصلبة بالكامل داخل بيئة حوسبية قبل تنزيل البرامج على العتاد الحقيقي."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Digital Twins simulate complete robotic kinematics, sensor outputs, and multi-body rigid physics inside computer environments before physical deployment on real hardware.",
    "correctAnswerAr": "تحاكي التوائم الرقمية حركيات الروبوت ومخرجات حساساته وفيزياء الأجسام الصلبة بالكامل داخل بيئة حوسبية قبل تنزيل البرامج على العتاد الحقيقي.",
    "explanationEn": "Correct Principle: Digital Twins simulate complete robotic kinematics, sensor outputs, and multi-body rigid physics inside computer environments before physical deployment on real hardware.",
    "explanationAr": "المبدأ العلمي الصحيح: تحاكي التوائم الرقمية حركيات الروبوت ومخرجات حساساته وفيزياء الأجسام الصلبة بالكامل داخل بيئة حوسبية قبل تنزيل البرامج على العتاد الحقيقي.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_5",
    "titleEn": "[EASY] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Review 5",
    "titleAr": "[مستوى أساسي] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - سؤال 5",
    "questionEn": "[Question 5] In the context of Egyptian STEM robotics and mechatronics regarding Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 5] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
    "correctAnswerAr": "يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
    "explanationEn": "Correct Principle: Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
    "explanationAr": "المبدأ العلمي الصحيح: يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_6",
    "titleEn": "[EASY] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Review 6",
    "titleAr": "[مستوى أساسي] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - سؤال 6",
    "questionEn": "[Question 6] In the context of Egyptian STEM robotics and mechatronics regarding Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 6] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
    "correctAnswerAr": "يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
    "explanationEn": "Correct Principle: Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
    "explanationAr": "المبدأ العلمي الصحيح: يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_7",
    "titleEn": "[EASY] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Review 7",
    "titleAr": "[مستوى أساسي] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - سؤال 7",
    "questionEn": "[Question 7] In the context of Egyptian STEM robotics and mechatronics regarding OPC UA Semantic Information Models & Industrial Cyber-Physical Systems, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 7] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "OPC Unified Architecture (OPC UA) provides platform-independent, service-oriented semantic data exchange for machine-to-machine (M2M) communication across Industry 4.0 shop floors.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "يوفر بروتوكول OPC UA الموحد تبادلاً دلالياً للبيانات مستقلاً عن أنظمة التشغيل للتواصل بين الآلات (M2M) في بيئات الثورة الصناعية الرابعة.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "OPC Unified Architecture (OPC UA) provides platform-independent, service-oriented semantic data exchange for machine-to-machine (M2M) communication across Industry 4.0 shop floors.",
    "correctAnswerAr": "يوفر بروتوكول OPC UA الموحد تبادلاً دلالياً للبيانات مستقلاً عن أنظمة التشغيل للتواصل بين الآلات (M2M) في بيئات الثورة الصناعية الرابعة.",
    "explanationEn": "Correct Principle: OPC Unified Architecture (OPC UA) provides platform-independent, service-oriented semantic data exchange for machine-to-machine (M2M) communication across Industry 4.0 shop floors.",
    "explanationAr": "المبدأ العلمي الصحيح: يوفر بروتوكول OPC UA الموحد تبادلاً دلالياً للبيانات مستقلاً عن أنظمة التشغيل للتواصل بين الآلات (M2M) في بيئات الثورة الصناعية الرابعة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_8",
    "titleEn": "[EASY] Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer - Review 8",
    "titleAr": "[مستوى أساسي] محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع - سؤال 8",
    "questionEn": "[Question 8] In the context of Egyptian STEM robotics and mechatronics regarding Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 8] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "Digital Twins simulate complete robotic kinematics, sensor outputs, and multi-body rigid physics inside computer environments before physical deployment on real hardware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تحاكي التوائم الرقمية حركيات الروبوت ومخرجات حساساته وفيزياء الأجسام الصلبة بالكامل داخل بيئة حوسبية قبل تنزيل البرامج على العتاد الحقيقي."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Digital Twins simulate complete robotic kinematics, sensor outputs, and multi-body rigid physics inside computer environments before physical deployment on real hardware.",
    "correctAnswerAr": "تحاكي التوائم الرقمية حركيات الروبوت ومخرجات حساساته وفيزياء الأجسام الصلبة بالكامل داخل بيئة حوسبية قبل تنزيل البرامج على العتاد الحقيقي.",
    "explanationEn": "Correct Principle: Digital Twins simulate complete robotic kinematics, sensor outputs, and multi-body rigid physics inside computer environments before physical deployment on real hardware.",
    "explanationAr": "المبدأ العلمي الصحيح: تحاكي التوائم الرقمية حركيات الروبوت ومخرجات حساساته وفيزياء الأجسام الصلبة بالكامل داخل بيئة حوسبية قبل تنزيل البرامج على العتاد الحقيقي.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_9",
    "titleEn": "[EASY] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Review 9",
    "titleAr": "[مستوى أساسي] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - سؤال 9",
    "questionEn": "[Question 9] In the context of Egyptian STEM robotics and mechatronics regarding Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 9] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
    "correctAnswerAr": "يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
    "explanationEn": "Correct Principle: Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
    "explanationAr": "المبدأ العلمي الصحيح: يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_10",
    "titleEn": "[EASY] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Review 10",
    "titleAr": "[مستوى أساسي] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - سؤال 10",
    "questionEn": "[Question 10] In the context of Egyptian STEM robotics and mechatronics regarding Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 10] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
    "correctAnswerAr": "يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
    "explanationEn": "Correct Principle: Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
    "explanationAr": "المبدأ العلمي الصحيح: يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_11",
    "titleEn": "[EASY] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Review 11",
    "titleAr": "[مستوى أساسي] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - سؤال 11",
    "questionEn": "[Question 11] In the context of Egyptian STEM robotics and mechatronics regarding OPC UA Semantic Information Models & Industrial Cyber-Physical Systems, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 11] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "OPC Unified Architecture (OPC UA) provides platform-independent, service-oriented semantic data exchange for machine-to-machine (M2M) communication across Industry 4.0 shop floors.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "يوفر بروتوكول OPC UA الموحد تبادلاً دلالياً للبيانات مستقلاً عن أنظمة التشغيل للتواصل بين الآلات (M2M) في بيئات الثورة الصناعية الرابعة.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "OPC Unified Architecture (OPC UA) provides platform-independent, service-oriented semantic data exchange for machine-to-machine (M2M) communication across Industry 4.0 shop floors.",
    "correctAnswerAr": "يوفر بروتوكول OPC UA الموحد تبادلاً دلالياً للبيانات مستقلاً عن أنظمة التشغيل للتواصل بين الآلات (M2M) في بيئات الثورة الصناعية الرابعة.",
    "explanationEn": "Correct Principle: OPC Unified Architecture (OPC UA) provides platform-independent, service-oriented semantic data exchange for machine-to-machine (M2M) communication across Industry 4.0 shop floors.",
    "explanationAr": "المبدأ العلمي الصحيح: يوفر بروتوكول OPC UA الموحد تبادلاً دلالياً للبيانات مستقلاً عن أنظمة التشغيل للتواصل بين الآلات (M2M) في بيئات الثورة الصناعية الرابعة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_12",
    "titleEn": "[EASY] Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer - Review 12",
    "titleAr": "[مستوى أساسي] محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع - سؤال 12",
    "questionEn": "[Question 12] In the context of Egyptian STEM robotics and mechatronics regarding Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 12] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "Digital Twins simulate complete robotic kinematics, sensor outputs, and multi-body rigid physics inside computer environments before physical deployment on real hardware."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "تحاكي التوائم الرقمية حركيات الروبوت ومخرجات حساساته وفيزياء الأجسام الصلبة بالكامل داخل بيئة حوسبية قبل تنزيل البرامج على العتاد الحقيقي."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Digital Twins simulate complete robotic kinematics, sensor outputs, and multi-body rigid physics inside computer environments before physical deployment on real hardware.",
    "correctAnswerAr": "تحاكي التوائم الرقمية حركيات الروبوت ومخرجات حساساته وفيزياء الأجسام الصلبة بالكامل داخل بيئة حوسبية قبل تنزيل البرامج على العتاد الحقيقي.",
    "explanationEn": "Correct Principle: Digital Twins simulate complete robotic kinematics, sensor outputs, and multi-body rigid physics inside computer environments before physical deployment on real hardware.",
    "explanationAr": "المبدأ العلمي الصحيح: تحاكي التوائم الرقمية حركيات الروبوت ومخرجات حساساته وفيزياء الأجسام الصلبة بالكامل داخل بيئة حوسبية قبل تنزيل البرامج على العتاد الحقيقي.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_13",
    "titleEn": "[EASY] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Review 13",
    "titleAr": "[مستوى أساسي] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - سؤال 13",
    "questionEn": "[Question 13] In the context of Egyptian STEM robotics and mechatronics regarding Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 13] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
    "correctAnswerAr": "يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
    "explanationEn": "Correct Principle: Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
    "explanationAr": "المبدأ العلمي الصحيح: يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_14",
    "titleEn": "[EASY] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Review 14",
    "titleAr": "[مستوى أساسي] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - سؤال 14",
    "questionEn": "[Question 14] In the context of Egyptian STEM robotics and mechatronics regarding Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 14] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
    "correctAnswerAr": "يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
    "explanationEn": "Correct Principle: Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
    "explanationAr": "المبدأ العلمي الصحيح: يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_15",
    "titleEn": "[EASY] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Review 15",
    "titleAr": "[مستوى أساسي] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - سؤال 15",
    "questionEn": "[Question 15] In the context of Egyptian STEM robotics and mechatronics regarding OPC UA Semantic Information Models & Industrial Cyber-Physical Systems, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 15] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "OPC Unified Architecture (OPC UA) provides platform-independent, service-oriented semantic data exchange for machine-to-machine (M2M) communication across Industry 4.0 shop floors.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "يوفر بروتوكول OPC UA الموحد تبادلاً دلالياً للبيانات مستقلاً عن أنظمة التشغيل للتواصل بين الآلات (M2M) في بيئات الثورة الصناعية الرابعة.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "OPC Unified Architecture (OPC UA) provides platform-independent, service-oriented semantic data exchange for machine-to-machine (M2M) communication across Industry 4.0 shop floors.",
    "correctAnswerAr": "يوفر بروتوكول OPC UA الموحد تبادلاً دلالياً للبيانات مستقلاً عن أنظمة التشغيل للتواصل بين الآلات (M2M) في بيئات الثورة الصناعية الرابعة.",
    "explanationEn": "Correct Principle: OPC Unified Architecture (OPC UA) provides platform-independent, service-oriented semantic data exchange for machine-to-machine (M2M) communication across Industry 4.0 shop floors.",
    "explanationAr": "المبدأ العلمي الصحيح: يوفر بروتوكول OPC UA الموحد تبادلاً دلالياً للبيانات مستقلاً عن أنظمة التشغيل للتواصل بين الآلات (M2M) في بيئات الثورة الصناعية الرابعة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_16",
    "titleEn": "[EASY] Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer - Review 16",
    "titleAr": "[مستوى أساسي] محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع - سؤال 16",
    "questionEn": "[Question 16] In the context of Egyptian STEM robotics and mechatronics regarding Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 16] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Digital Twins simulate complete robotic kinematics, sensor outputs, and multi-body rigid physics inside computer environments before physical deployment on real hardware."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تحاكي التوائم الرقمية حركيات الروبوت ومخرجات حساساته وفيزياء الأجسام الصلبة بالكامل داخل بيئة حوسبية قبل تنزيل البرامج على العتاد الحقيقي."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Digital Twins simulate complete robotic kinematics, sensor outputs, and multi-body rigid physics inside computer environments before physical deployment on real hardware.",
    "correctAnswerAr": "تحاكي التوائم الرقمية حركيات الروبوت ومخرجات حساساته وفيزياء الأجسام الصلبة بالكامل داخل بيئة حوسبية قبل تنزيل البرامج على العتاد الحقيقي.",
    "explanationEn": "Correct Principle: Digital Twins simulate complete robotic kinematics, sensor outputs, and multi-body rigid physics inside computer environments before physical deployment on real hardware.",
    "explanationAr": "المبدأ العلمي الصحيح: تحاكي التوائم الرقمية حركيات الروبوت ومخرجات حساساته وفيزياء الأجسام الصلبة بالكامل داخل بيئة حوسبية قبل تنزيل البرامج على العتاد الحقيقي.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_17",
    "titleEn": "[EASY] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Review 17",
    "titleAr": "[مستوى أساسي] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - سؤال 17",
    "questionEn": "[Question 17] In the context of Egyptian STEM robotics and mechatronics regarding Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 17] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
    "correctAnswerAr": "يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
    "explanationEn": "Correct Principle: Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
    "explanationAr": "المبدأ العلمي الصحيح: يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_18",
    "titleEn": "[EASY] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Review 18",
    "titleAr": "[مستوى أساسي] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - سؤال 18",
    "questionEn": "[Question 18] In the context of Egyptian STEM robotics and mechatronics regarding Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 18] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
    "correctAnswerAr": "يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
    "explanationEn": "Correct Principle: Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
    "explanationAr": "المبدأ العلمي الصحيح: يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_19",
    "titleEn": "[EASY] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Review 19",
    "titleAr": "[مستوى أساسي] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - سؤال 19",
    "questionEn": "[Question 19] In the context of Egyptian STEM robotics and mechatronics regarding OPC UA Semantic Information Models & Industrial Cyber-Physical Systems, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 19] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "OPC Unified Architecture (OPC UA) provides platform-independent, service-oriented semantic data exchange for machine-to-machine (M2M) communication across Industry 4.0 shop floors.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "يوفر بروتوكول OPC UA الموحد تبادلاً دلالياً للبيانات مستقلاً عن أنظمة التشغيل للتواصل بين الآلات (M2M) في بيئات الثورة الصناعية الرابعة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "OPC Unified Architecture (OPC UA) provides platform-independent, service-oriented semantic data exchange for machine-to-machine (M2M) communication across Industry 4.0 shop floors.",
    "correctAnswerAr": "يوفر بروتوكول OPC UA الموحد تبادلاً دلالياً للبيانات مستقلاً عن أنظمة التشغيل للتواصل بين الآلات (M2M) في بيئات الثورة الصناعية الرابعة.",
    "explanationEn": "Correct Principle: OPC Unified Architecture (OPC UA) provides platform-independent, service-oriented semantic data exchange for machine-to-machine (M2M) communication across Industry 4.0 shop floors.",
    "explanationAr": "المبدأ العلمي الصحيح: يوفر بروتوكول OPC UA الموحد تبادلاً دلالياً للبيانات مستقلاً عن أنظمة التشغيل للتواصل بين الآلات (M2M) في بيئات الثورة الصناعية الرابعة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_20",
    "titleEn": "[EASY] Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer - Review 20",
    "titleAr": "[مستوى أساسي] محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع - سؤال 20",
    "questionEn": "[Question 20] In the context of Egyptian STEM robotics and mechatronics regarding Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 20] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "Digital Twins simulate complete robotic kinematics, sensor outputs, and multi-body rigid physics inside computer environments before physical deployment on real hardware."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تحاكي التوائم الرقمية حركيات الروبوت ومخرجات حساساته وفيزياء الأجسام الصلبة بالكامل داخل بيئة حوسبية قبل تنزيل البرامج على العتاد الحقيقي."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Digital Twins simulate complete robotic kinematics, sensor outputs, and multi-body rigid physics inside computer environments before physical deployment on real hardware.",
    "correctAnswerAr": "تحاكي التوائم الرقمية حركيات الروبوت ومخرجات حساساته وفيزياء الأجسام الصلبة بالكامل داخل بيئة حوسبية قبل تنزيل البرامج على العتاد الحقيقي.",
    "explanationEn": "Correct Principle: Digital Twins simulate complete robotic kinematics, sensor outputs, and multi-body rigid physics inside computer environments before physical deployment on real hardware.",
    "explanationAr": "المبدأ العلمي الصحيح: تحاكي التوائم الرقمية حركيات الروبوت ومخرجات حساساته وفيزياء الأجسام الصلبة بالكامل داخل بيئة حوسبية قبل تنزيل البرامج على العتاد الحقيقي.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_21",
    "titleEn": "[EASY] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Review 21",
    "titleAr": "[مستوى أساسي] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - سؤال 21",
    "questionEn": "[Question 21] In the context of Egyptian STEM robotics and mechatronics regarding Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 21] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
    "correctAnswerAr": "يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
    "explanationEn": "Correct Principle: Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
    "explanationAr": "المبدأ العلمي الصحيح: يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_22",
    "titleEn": "[EASY] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Review 22",
    "titleAr": "[مستوى أساسي] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - سؤال 22",
    "questionEn": "[Question 22] In the context of Egyptian STEM robotics and mechatronics regarding Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 22] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
    "correctAnswerAr": "يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
    "explanationEn": "Correct Principle: Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
    "explanationAr": "المبدأ العلمي الصحيح: يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_23",
    "titleEn": "[EASY] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Review 23",
    "titleAr": "[مستوى أساسي] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - سؤال 23",
    "questionEn": "[Question 23] In the context of Egyptian STEM robotics and mechatronics regarding OPC UA Semantic Information Models & Industrial Cyber-Physical Systems, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 23] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "OPC Unified Architecture (OPC UA) provides platform-independent, service-oriented semantic data exchange for machine-to-machine (M2M) communication across Industry 4.0 shop floors.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "يوفر بروتوكول OPC UA الموحد تبادلاً دلالياً للبيانات مستقلاً عن أنظمة التشغيل للتواصل بين الآلات (M2M) في بيئات الثورة الصناعية الرابعة.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "OPC Unified Architecture (OPC UA) provides platform-independent, service-oriented semantic data exchange for machine-to-machine (M2M) communication across Industry 4.0 shop floors.",
    "correctAnswerAr": "يوفر بروتوكول OPC UA الموحد تبادلاً دلالياً للبيانات مستقلاً عن أنظمة التشغيل للتواصل بين الآلات (M2M) في بيئات الثورة الصناعية الرابعة.",
    "explanationEn": "Correct Principle: OPC Unified Architecture (OPC UA) provides platform-independent, service-oriented semantic data exchange for machine-to-machine (M2M) communication across Industry 4.0 shop floors.",
    "explanationAr": "المبدأ العلمي الصحيح: يوفر بروتوكول OPC UA الموحد تبادلاً دلالياً للبيانات مستقلاً عن أنظمة التشغيل للتواصل بين الآلات (M2M) في بيئات الثورة الصناعية الرابعة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_24",
    "titleEn": "[EASY] Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer - Review 24",
    "titleAr": "[مستوى أساسي] محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع - سؤال 24",
    "questionEn": "[Question 24] In the context of Egyptian STEM robotics and mechatronics regarding Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 24] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Digital Twins simulate complete robotic kinematics, sensor outputs, and multi-body rigid physics inside computer environments before physical deployment on real hardware."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "تحاكي التوائم الرقمية حركيات الروبوت ومخرجات حساساته وفيزياء الأجسام الصلبة بالكامل داخل بيئة حوسبية قبل تنزيل البرامج على العتاد الحقيقي."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Digital Twins simulate complete robotic kinematics, sensor outputs, and multi-body rigid physics inside computer environments before physical deployment on real hardware.",
    "correctAnswerAr": "تحاكي التوائم الرقمية حركيات الروبوت ومخرجات حساساته وفيزياء الأجسام الصلبة بالكامل داخل بيئة حوسبية قبل تنزيل البرامج على العتاد الحقيقي.",
    "explanationEn": "Correct Principle: Digital Twins simulate complete robotic kinematics, sensor outputs, and multi-body rigid physics inside computer environments before physical deployment on real hardware.",
    "explanationAr": "المبدأ العلمي الصحيح: تحاكي التوائم الرقمية حركيات الروبوت ومخرجات حساساته وفيزياء الأجسام الصلبة بالكامل داخل بيئة حوسبية قبل تنزيل البرامج على العتاد الحقيقي.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_25",
    "titleEn": "[EASY] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Review 25",
    "titleAr": "[مستوى أساسي] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - سؤال 25",
    "questionEn": "[Question 25] In the context of Egyptian STEM robotics and mechatronics regarding Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 25] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
    "correctAnswerAr": "يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
    "explanationEn": "Correct Principle: Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
    "explanationAr": "المبدأ العلمي الصحيح: يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_26",
    "titleEn": "[EASY] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Review 26",
    "titleAr": "[مستوى أساسي] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - سؤال 26",
    "questionEn": "[Question 26] In the context of Egyptian STEM robotics and mechatronics regarding Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 26] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
    "correctAnswerAr": "يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
    "explanationEn": "Correct Principle: Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
    "explanationAr": "المبدأ العلمي الصحيح: يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_27",
    "titleEn": "[EASY] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Review 27",
    "titleAr": "[مستوى أساسي] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - سؤال 27",
    "questionEn": "[Question 27] In the context of Egyptian STEM robotics and mechatronics regarding OPC UA Semantic Information Models & Industrial Cyber-Physical Systems, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 27] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "OPC Unified Architecture (OPC UA) provides platform-independent, service-oriented semantic data exchange for machine-to-machine (M2M) communication across Industry 4.0 shop floors.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "يوفر بروتوكول OPC UA الموحد تبادلاً دلالياً للبيانات مستقلاً عن أنظمة التشغيل للتواصل بين الآلات (M2M) في بيئات الثورة الصناعية الرابعة.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "OPC Unified Architecture (OPC UA) provides platform-independent, service-oriented semantic data exchange for machine-to-machine (M2M) communication across Industry 4.0 shop floors.",
    "correctAnswerAr": "يوفر بروتوكول OPC UA الموحد تبادلاً دلالياً للبيانات مستقلاً عن أنظمة التشغيل للتواصل بين الآلات (M2M) في بيئات الثورة الصناعية الرابعة.",
    "explanationEn": "Correct Principle: OPC Unified Architecture (OPC UA) provides platform-independent, service-oriented semantic data exchange for machine-to-machine (M2M) communication across Industry 4.0 shop floors.",
    "explanationAr": "المبدأ العلمي الصحيح: يوفر بروتوكول OPC UA الموحد تبادلاً دلالياً للبيانات مستقلاً عن أنظمة التشغيل للتواصل بين الآلات (M2M) في بيئات الثورة الصناعية الرابعة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_28",
    "titleEn": "[EASY] Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer - Review 28",
    "titleAr": "[مستوى أساسي] محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع - سؤال 28",
    "questionEn": "[Question 28] In the context of Egyptian STEM robotics and mechatronics regarding Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 28] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "Digital Twins simulate complete robotic kinematics, sensor outputs, and multi-body rigid physics inside computer environments before physical deployment on real hardware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تحاكي التوائم الرقمية حركيات الروبوت ومخرجات حساساته وفيزياء الأجسام الصلبة بالكامل داخل بيئة حوسبية قبل تنزيل البرامج على العتاد الحقيقي."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Digital Twins simulate complete robotic kinematics, sensor outputs, and multi-body rigid physics inside computer environments before physical deployment on real hardware.",
    "correctAnswerAr": "تحاكي التوائم الرقمية حركيات الروبوت ومخرجات حساساته وفيزياء الأجسام الصلبة بالكامل داخل بيئة حوسبية قبل تنزيل البرامج على العتاد الحقيقي.",
    "explanationEn": "Correct Principle: Digital Twins simulate complete robotic kinematics, sensor outputs, and multi-body rigid physics inside computer environments before physical deployment on real hardware.",
    "explanationAr": "المبدأ العلمي الصحيح: تحاكي التوائم الرقمية حركيات الروبوت ومخرجات حساساته وفيزياء الأجسام الصلبة بالكامل داخل بيئة حوسبية قبل تنزيل البرامج على العتاد الحقيقي.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_29",
    "titleEn": "[EASY] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Review 29",
    "titleAr": "[مستوى أساسي] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - سؤال 29",
    "questionEn": "[Question 29] In the context of Egyptian STEM robotics and mechatronics regarding Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 29] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
    "correctAnswerAr": "يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
    "explanationEn": "Correct Principle: Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
    "explanationAr": "المبدأ العلمي الصحيح: يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_30",
    "titleEn": "[EASY] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Review 30",
    "titleAr": "[مستوى أساسي] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - سؤال 30",
    "questionEn": "[Question 30] In the context of Egyptian STEM robotics and mechatronics regarding Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 30] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
    "correctAnswerAr": "يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
    "explanationEn": "Correct Principle: Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
    "explanationAr": "المبدأ العلمي الصحيح: يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_31",
    "titleEn": "[EASY] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Review 31",
    "titleAr": "[مستوى أساسي] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - سؤال 31",
    "questionEn": "[Question 31] In the context of Egyptian STEM robotics and mechatronics regarding OPC UA Semantic Information Models & Industrial Cyber-Physical Systems, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 31] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "OPC Unified Architecture (OPC UA) provides platform-independent, service-oriented semantic data exchange for machine-to-machine (M2M) communication across Industry 4.0 shop floors.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "يوفر بروتوكول OPC UA الموحد تبادلاً دلالياً للبيانات مستقلاً عن أنظمة التشغيل للتواصل بين الآلات (M2M) في بيئات الثورة الصناعية الرابعة.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "OPC Unified Architecture (OPC UA) provides platform-independent, service-oriented semantic data exchange for machine-to-machine (M2M) communication across Industry 4.0 shop floors.",
    "correctAnswerAr": "يوفر بروتوكول OPC UA الموحد تبادلاً دلالياً للبيانات مستقلاً عن أنظمة التشغيل للتواصل بين الآلات (M2M) في بيئات الثورة الصناعية الرابعة.",
    "explanationEn": "Correct Principle: OPC Unified Architecture (OPC UA) provides platform-independent, service-oriented semantic data exchange for machine-to-machine (M2M) communication across Industry 4.0 shop floors.",
    "explanationAr": "المبدأ العلمي الصحيح: يوفر بروتوكول OPC UA الموحد تبادلاً دلالياً للبيانات مستقلاً عن أنظمة التشغيل للتواصل بين الآلات (M2M) في بيئات الثورة الصناعية الرابعة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_32",
    "titleEn": "[EASY] Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer - Review 32",
    "titleAr": "[مستوى أساسي] محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع - سؤال 32",
    "questionEn": "[Question 32] In the context of Egyptian STEM robotics and mechatronics regarding Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 32] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "Digital Twins simulate complete robotic kinematics, sensor outputs, and multi-body rigid physics inside computer environments before physical deployment on real hardware."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "تحاكي التوائم الرقمية حركيات الروبوت ومخرجات حساساته وفيزياء الأجسام الصلبة بالكامل داخل بيئة حوسبية قبل تنزيل البرامج على العتاد الحقيقي."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Digital Twins simulate complete robotic kinematics, sensor outputs, and multi-body rigid physics inside computer environments before physical deployment on real hardware.",
    "correctAnswerAr": "تحاكي التوائم الرقمية حركيات الروبوت ومخرجات حساساته وفيزياء الأجسام الصلبة بالكامل داخل بيئة حوسبية قبل تنزيل البرامج على العتاد الحقيقي.",
    "explanationEn": "Correct Principle: Digital Twins simulate complete robotic kinematics, sensor outputs, and multi-body rigid physics inside computer environments before physical deployment on real hardware.",
    "explanationAr": "المبدأ العلمي الصحيح: تحاكي التوائم الرقمية حركيات الروبوت ومخرجات حساساته وفيزياء الأجسام الصلبة بالكامل داخل بيئة حوسبية قبل تنزيل البرامج على العتاد الحقيقي.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_33",
    "titleEn": "[EASY] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Review 33",
    "titleAr": "[مستوى أساسي] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - سؤال 33",
    "questionEn": "[Question 33] In the context of Egyptian STEM robotics and mechatronics regarding Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 33] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
    "correctAnswerAr": "يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
    "explanationEn": "Correct Principle: Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
    "explanationAr": "المبدأ العلمي الصحيح: يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_34",
    "titleEn": "[EASY] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Review 34",
    "titleAr": "[مستوى أساسي] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - سؤال 34",
    "questionEn": "[Question 34] In the context of Egyptian STEM robotics and mechatronics regarding Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 34] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
    "correctAnswerAr": "يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
    "explanationEn": "Correct Principle: Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
    "explanationAr": "المبدأ العلمي الصحيح: يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_35",
    "titleEn": "[EASY] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Review 35",
    "titleAr": "[مستوى أساسي] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - سؤال 35",
    "questionEn": "[Question 35] In the context of Egyptian STEM robotics and mechatronics regarding OPC UA Semantic Information Models & Industrial Cyber-Physical Systems, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 35] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "OPC Unified Architecture (OPC UA) provides platform-independent, service-oriented semantic data exchange for machine-to-machine (M2M) communication across Industry 4.0 shop floors.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "يوفر بروتوكول OPC UA الموحد تبادلاً دلالياً للبيانات مستقلاً عن أنظمة التشغيل للتواصل بين الآلات (M2M) في بيئات الثورة الصناعية الرابعة.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "OPC Unified Architecture (OPC UA) provides platform-independent, service-oriented semantic data exchange for machine-to-machine (M2M) communication across Industry 4.0 shop floors.",
    "correctAnswerAr": "يوفر بروتوكول OPC UA الموحد تبادلاً دلالياً للبيانات مستقلاً عن أنظمة التشغيل للتواصل بين الآلات (M2M) في بيئات الثورة الصناعية الرابعة.",
    "explanationEn": "Correct Principle: OPC Unified Architecture (OPC UA) provides platform-independent, service-oriented semantic data exchange for machine-to-machine (M2M) communication across Industry 4.0 shop floors.",
    "explanationAr": "المبدأ العلمي الصحيح: يوفر بروتوكول OPC UA الموحد تبادلاً دلالياً للبيانات مستقلاً عن أنظمة التشغيل للتواصل بين الآلات (M2M) في بيئات الثورة الصناعية الرابعة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_36",
    "titleEn": "[EASY] Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer - Review 36",
    "titleAr": "[مستوى أساسي] محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع - سؤال 36",
    "questionEn": "[Question 36] In the context of Egyptian STEM robotics and mechatronics regarding Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 36] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Digital Twins simulate complete robotic kinematics, sensor outputs, and multi-body rigid physics inside computer environments before physical deployment on real hardware."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تحاكي التوائم الرقمية حركيات الروبوت ومخرجات حساساته وفيزياء الأجسام الصلبة بالكامل داخل بيئة حوسبية قبل تنزيل البرامج على العتاد الحقيقي."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Digital Twins simulate complete robotic kinematics, sensor outputs, and multi-body rigid physics inside computer environments before physical deployment on real hardware.",
    "correctAnswerAr": "تحاكي التوائم الرقمية حركيات الروبوت ومخرجات حساساته وفيزياء الأجسام الصلبة بالكامل داخل بيئة حوسبية قبل تنزيل البرامج على العتاد الحقيقي.",
    "explanationEn": "Correct Principle: Digital Twins simulate complete robotic kinematics, sensor outputs, and multi-body rigid physics inside computer environments before physical deployment on real hardware.",
    "explanationAr": "المبدأ العلمي الصحيح: تحاكي التوائم الرقمية حركيات الروبوت ومخرجات حساساته وفيزياء الأجسام الصلبة بالكامل داخل بيئة حوسبية قبل تنزيل البرامج على العتاد الحقيقي.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_37",
    "titleEn": "[EASY] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Review 37",
    "titleAr": "[مستوى أساسي] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - سؤال 37",
    "questionEn": "[Question 37] In the context of Egyptian STEM robotics and mechatronics regarding Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 37] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
    "correctAnswerAr": "يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
    "explanationEn": "Correct Principle: Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
    "explanationAr": "المبدأ العلمي الصحيح: يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_38",
    "titleEn": "[EASY] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Review 38",
    "titleAr": "[مستوى أساسي] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - سؤال 38",
    "questionEn": "[Question 38] In the context of Egyptian STEM robotics and mechatronics regarding Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 38] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
    "correctAnswerAr": "يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
    "explanationEn": "Correct Principle: Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
    "explanationAr": "المبدأ العلمي الصحيح: يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_39",
    "titleEn": "[EASY] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Review 39",
    "titleAr": "[مستوى أساسي] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - سؤال 39",
    "questionEn": "[Question 39] In the context of Egyptian STEM robotics and mechatronics regarding OPC UA Semantic Information Models & Industrial Cyber-Physical Systems, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 39] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "OPC Unified Architecture (OPC UA) provides platform-independent, service-oriented semantic data exchange for machine-to-machine (M2M) communication across Industry 4.0 shop floors.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "يوفر بروتوكول OPC UA الموحد تبادلاً دلالياً للبيانات مستقلاً عن أنظمة التشغيل للتواصل بين الآلات (M2M) في بيئات الثورة الصناعية الرابعة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "OPC Unified Architecture (OPC UA) provides platform-independent, service-oriented semantic data exchange for machine-to-machine (M2M) communication across Industry 4.0 shop floors.",
    "correctAnswerAr": "يوفر بروتوكول OPC UA الموحد تبادلاً دلالياً للبيانات مستقلاً عن أنظمة التشغيل للتواصل بين الآلات (M2M) في بيئات الثورة الصناعية الرابعة.",
    "explanationEn": "Correct Principle: OPC Unified Architecture (OPC UA) provides platform-independent, service-oriented semantic data exchange for machine-to-machine (M2M) communication across Industry 4.0 shop floors.",
    "explanationAr": "المبدأ العلمي الصحيح: يوفر بروتوكول OPC UA الموحد تبادلاً دلالياً للبيانات مستقلاً عن أنظمة التشغيل للتواصل بين الآلات (M2M) في بيئات الثورة الصناعية الرابعة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_40",
    "titleEn": "[EASY] Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer - Review 40",
    "titleAr": "[مستوى أساسي] محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع - سؤال 40",
    "questionEn": "[Question 40] In the context of Egyptian STEM robotics and mechatronics regarding Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 40] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "Digital Twins simulate complete robotic kinematics, sensor outputs, and multi-body rigid physics inside computer environments before physical deployment on real hardware."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تحاكي التوائم الرقمية حركيات الروبوت ومخرجات حساساته وفيزياء الأجسام الصلبة بالكامل داخل بيئة حوسبية قبل تنزيل البرامج على العتاد الحقيقي."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Digital Twins simulate complete robotic kinematics, sensor outputs, and multi-body rigid physics inside computer environments before physical deployment on real hardware.",
    "correctAnswerAr": "تحاكي التوائم الرقمية حركيات الروبوت ومخرجات حساساته وفيزياء الأجسام الصلبة بالكامل داخل بيئة حوسبية قبل تنزيل البرامج على العتاد الحقيقي.",
    "explanationEn": "Correct Principle: Digital Twins simulate complete robotic kinematics, sensor outputs, and multi-body rigid physics inside computer environments before physical deployment on real hardware.",
    "explanationAr": "المبدأ العلمي الصحيح: تحاكي التوائم الرقمية حركيات الروبوت ومخرجات حساساته وفيزياء الأجسام الصلبة بالكامل داخل بيئة حوسبية قبل تنزيل البرامج على العتاد الحقيقي.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_41",
    "titleEn": "[EASY] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Review 41",
    "titleAr": "[مستوى أساسي] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - سؤال 41",
    "questionEn": "[Question 41] In the context of Egyptian STEM robotics and mechatronics regarding Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 41] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
    "correctAnswerAr": "يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
    "explanationEn": "Correct Principle: Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
    "explanationAr": "المبدأ العلمي الصحيح: يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_42",
    "titleEn": "[EASY] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Review 42",
    "titleAr": "[مستوى أساسي] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - سؤال 42",
    "questionEn": "[Question 42] In the context of Egyptian STEM robotics and mechatronics regarding Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 42] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
    "correctAnswerAr": "يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
    "explanationEn": "Correct Principle: Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
    "explanationAr": "المبدأ العلمي الصحيح: يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_43",
    "titleEn": "[EASY] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Review 43",
    "titleAr": "[مستوى أساسي] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - سؤال 43",
    "questionEn": "[Question 43] In the context of Egyptian STEM robotics and mechatronics regarding OPC UA Semantic Information Models & Industrial Cyber-Physical Systems, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 43] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "OPC Unified Architecture (OPC UA) provides platform-independent, service-oriented semantic data exchange for machine-to-machine (M2M) communication across Industry 4.0 shop floors.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "يوفر بروتوكول OPC UA الموحد تبادلاً دلالياً للبيانات مستقلاً عن أنظمة التشغيل للتواصل بين الآلات (M2M) في بيئات الثورة الصناعية الرابعة.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "OPC Unified Architecture (OPC UA) provides platform-independent, service-oriented semantic data exchange for machine-to-machine (M2M) communication across Industry 4.0 shop floors.",
    "correctAnswerAr": "يوفر بروتوكول OPC UA الموحد تبادلاً دلالياً للبيانات مستقلاً عن أنظمة التشغيل للتواصل بين الآلات (M2M) في بيئات الثورة الصناعية الرابعة.",
    "explanationEn": "Correct Principle: OPC Unified Architecture (OPC UA) provides platform-independent, service-oriented semantic data exchange for machine-to-machine (M2M) communication across Industry 4.0 shop floors.",
    "explanationAr": "المبدأ العلمي الصحيح: يوفر بروتوكول OPC UA الموحد تبادلاً دلالياً للبيانات مستقلاً عن أنظمة التشغيل للتواصل بين الآلات (M2M) في بيئات الثورة الصناعية الرابعة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_44",
    "titleEn": "[EASY] Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer - Review 44",
    "titleAr": "[مستوى أساسي] محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع - سؤال 44",
    "questionEn": "[Question 44] In the context of Egyptian STEM robotics and mechatronics regarding Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 44] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Digital Twins simulate complete robotic kinematics, sensor outputs, and multi-body rigid physics inside computer environments before physical deployment on real hardware."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "تحاكي التوائم الرقمية حركيات الروبوت ومخرجات حساساته وفيزياء الأجسام الصلبة بالكامل داخل بيئة حوسبية قبل تنزيل البرامج على العتاد الحقيقي."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Digital Twins simulate complete robotic kinematics, sensor outputs, and multi-body rigid physics inside computer environments before physical deployment on real hardware.",
    "correctAnswerAr": "تحاكي التوائم الرقمية حركيات الروبوت ومخرجات حساساته وفيزياء الأجسام الصلبة بالكامل داخل بيئة حوسبية قبل تنزيل البرامج على العتاد الحقيقي.",
    "explanationEn": "Correct Principle: Digital Twins simulate complete robotic kinematics, sensor outputs, and multi-body rigid physics inside computer environments before physical deployment on real hardware.",
    "explanationAr": "المبدأ العلمي الصحيح: تحاكي التوائم الرقمية حركيات الروبوت ومخرجات حساساته وفيزياء الأجسام الصلبة بالكامل داخل بيئة حوسبية قبل تنزيل البرامج على العتاد الحقيقي.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_45",
    "titleEn": "[EASY] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Review 45",
    "titleAr": "[مستوى أساسي] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - سؤال 45",
    "questionEn": "[Question 45] In the context of Egyptian STEM robotics and mechatronics regarding Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 45] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
    "correctAnswerAr": "يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
    "explanationEn": "Correct Principle: Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
    "explanationAr": "المبدأ العلمي الصحيح: يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_46",
    "titleEn": "[EASY] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Review 46",
    "titleAr": "[مستوى أساسي] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - سؤال 46",
    "questionEn": "[Question 46] In the context of Egyptian STEM robotics and mechatronics regarding Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 46] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
    "correctAnswerAr": "يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
    "explanationEn": "Correct Principle: Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
    "explanationAr": "المبدأ العلمي الصحيح: يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_47",
    "titleEn": "[EASY] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Review 47",
    "titleAr": "[مستوى أساسي] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - سؤال 47",
    "questionEn": "[Question 47] In the context of Egyptian STEM robotics and mechatronics regarding OPC UA Semantic Information Models & Industrial Cyber-Physical Systems, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 47] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "OPC Unified Architecture (OPC UA) provides platform-independent, service-oriented semantic data exchange for machine-to-machine (M2M) communication across Industry 4.0 shop floors.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "يوفر بروتوكول OPC UA الموحد تبادلاً دلالياً للبيانات مستقلاً عن أنظمة التشغيل للتواصل بين الآلات (M2M) في بيئات الثورة الصناعية الرابعة.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "OPC Unified Architecture (OPC UA) provides platform-independent, service-oriented semantic data exchange for machine-to-machine (M2M) communication across Industry 4.0 shop floors.",
    "correctAnswerAr": "يوفر بروتوكول OPC UA الموحد تبادلاً دلالياً للبيانات مستقلاً عن أنظمة التشغيل للتواصل بين الآلات (M2M) في بيئات الثورة الصناعية الرابعة.",
    "explanationEn": "Correct Principle: OPC Unified Architecture (OPC UA) provides platform-independent, service-oriented semantic data exchange for machine-to-machine (M2M) communication across Industry 4.0 shop floors.",
    "explanationAr": "المبدأ العلمي الصحيح: يوفر بروتوكول OPC UA الموحد تبادلاً دلالياً للبيانات مستقلاً عن أنظمة التشغيل للتواصل بين الآلات (M2M) في بيئات الثورة الصناعية الرابعة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_48",
    "titleEn": "[EASY] Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer - Review 48",
    "titleAr": "[مستوى أساسي] محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع - سؤال 48",
    "questionEn": "[Question 48] In the context of Egyptian STEM robotics and mechatronics regarding Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 48] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "Digital Twins simulate complete robotic kinematics, sensor outputs, and multi-body rigid physics inside computer environments before physical deployment on real hardware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تحاكي التوائم الرقمية حركيات الروبوت ومخرجات حساساته وفيزياء الأجسام الصلبة بالكامل داخل بيئة حوسبية قبل تنزيل البرامج على العتاد الحقيقي."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Digital Twins simulate complete robotic kinematics, sensor outputs, and multi-body rigid physics inside computer environments before physical deployment on real hardware.",
    "correctAnswerAr": "تحاكي التوائم الرقمية حركيات الروبوت ومخرجات حساساته وفيزياء الأجسام الصلبة بالكامل داخل بيئة حوسبية قبل تنزيل البرامج على العتاد الحقيقي.",
    "explanationEn": "Correct Principle: Digital Twins simulate complete robotic kinematics, sensor outputs, and multi-body rigid physics inside computer environments before physical deployment on real hardware.",
    "explanationAr": "المبدأ العلمي الصحيح: تحاكي التوائم الرقمية حركيات الروبوت ومخرجات حساساته وفيزياء الأجسام الصلبة بالكامل داخل بيئة حوسبية قبل تنزيل البرامج على العتاد الحقيقي.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_49",
    "titleEn": "[EASY] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Review 49",
    "titleAr": "[مستوى أساسي] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - سؤال 49",
    "questionEn": "[Question 49] In the context of Egyptian STEM robotics and mechatronics regarding Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 49] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
    "correctAnswerAr": "يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
    "explanationEn": "Correct Principle: Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
    "explanationAr": "المبدأ العلمي الصحيح: يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_50",
    "titleEn": "[EASY] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Review 50",
    "titleAr": "[مستوى أساسي] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - سؤال 50",
    "questionEn": "[Question 50] In the context of Egyptian STEM robotics and mechatronics regarding Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 50] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
    "correctAnswerAr": "يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
    "explanationEn": "Correct Principle: Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
    "explanationAr": "المبدأ العلمي الصحيح: يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_51",
    "titleEn": "[EASY] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Review 51",
    "titleAr": "[مستوى أساسي] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - سؤال 51",
    "questionEn": "[Question 51] In the context of Egyptian STEM robotics and mechatronics regarding OPC UA Semantic Information Models & Industrial Cyber-Physical Systems, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 51] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "OPC Unified Architecture (OPC UA) provides platform-independent, service-oriented semantic data exchange for machine-to-machine (M2M) communication across Industry 4.0 shop floors.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "يوفر بروتوكول OPC UA الموحد تبادلاً دلالياً للبيانات مستقلاً عن أنظمة التشغيل للتواصل بين الآلات (M2M) في بيئات الثورة الصناعية الرابعة.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "OPC Unified Architecture (OPC UA) provides platform-independent, service-oriented semantic data exchange for machine-to-machine (M2M) communication across Industry 4.0 shop floors.",
    "correctAnswerAr": "يوفر بروتوكول OPC UA الموحد تبادلاً دلالياً للبيانات مستقلاً عن أنظمة التشغيل للتواصل بين الآلات (M2M) في بيئات الثورة الصناعية الرابعة.",
    "explanationEn": "Correct Principle: OPC Unified Architecture (OPC UA) provides platform-independent, service-oriented semantic data exchange for machine-to-machine (M2M) communication across Industry 4.0 shop floors.",
    "explanationAr": "المبدأ العلمي الصحيح: يوفر بروتوكول OPC UA الموحد تبادلاً دلالياً للبيانات مستقلاً عن أنظمة التشغيل للتواصل بين الآلات (M2M) في بيئات الثورة الصناعية الرابعة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_52",
    "titleEn": "[EASY] Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer - Review 52",
    "titleAr": "[مستوى أساسي] محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع - سؤال 52",
    "questionEn": "[Question 52] In the context of Egyptian STEM robotics and mechatronics regarding Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 52] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "Digital Twins simulate complete robotic kinematics, sensor outputs, and multi-body rigid physics inside computer environments before physical deployment on real hardware."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "تحاكي التوائم الرقمية حركيات الروبوت ومخرجات حساساته وفيزياء الأجسام الصلبة بالكامل داخل بيئة حوسبية قبل تنزيل البرامج على العتاد الحقيقي."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Digital Twins simulate complete robotic kinematics, sensor outputs, and multi-body rigid physics inside computer environments before physical deployment on real hardware.",
    "correctAnswerAr": "تحاكي التوائم الرقمية حركيات الروبوت ومخرجات حساساته وفيزياء الأجسام الصلبة بالكامل داخل بيئة حوسبية قبل تنزيل البرامج على العتاد الحقيقي.",
    "explanationEn": "Correct Principle: Digital Twins simulate complete robotic kinematics, sensor outputs, and multi-body rigid physics inside computer environments before physical deployment on real hardware.",
    "explanationAr": "المبدأ العلمي الصحيح: تحاكي التوائم الرقمية حركيات الروبوت ومخرجات حساساته وفيزياء الأجسام الصلبة بالكامل داخل بيئة حوسبية قبل تنزيل البرامج على العتاد الحقيقي.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_53",
    "titleEn": "[EASY] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Review 53",
    "titleAr": "[مستوى أساسي] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - سؤال 53",
    "questionEn": "[Question 53] In the context of Egyptian STEM robotics and mechatronics regarding Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 53] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
    "correctAnswerAr": "يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
    "explanationEn": "Correct Principle: Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
    "explanationAr": "المبدأ العلمي الصحيح: يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_54",
    "titleEn": "[EASY] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Review 54",
    "titleAr": "[مستوى أساسي] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - سؤال 54",
    "questionEn": "[Question 54] In the context of Egyptian STEM robotics and mechatronics regarding Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 54] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
    "correctAnswerAr": "يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
    "explanationEn": "Correct Principle: Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
    "explanationAr": "المبدأ العلمي الصحيح: يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_55",
    "titleEn": "[EASY] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Review 55",
    "titleAr": "[مستوى أساسي] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - سؤال 55",
    "questionEn": "[Question 55] In the context of Egyptian STEM robotics and mechatronics regarding OPC UA Semantic Information Models & Industrial Cyber-Physical Systems, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 55] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "OPC Unified Architecture (OPC UA) provides platform-independent, service-oriented semantic data exchange for machine-to-machine (M2M) communication across Industry 4.0 shop floors.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "يوفر بروتوكول OPC UA الموحد تبادلاً دلالياً للبيانات مستقلاً عن أنظمة التشغيل للتواصل بين الآلات (M2M) في بيئات الثورة الصناعية الرابعة.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "OPC Unified Architecture (OPC UA) provides platform-independent, service-oriented semantic data exchange for machine-to-machine (M2M) communication across Industry 4.0 shop floors.",
    "correctAnswerAr": "يوفر بروتوكول OPC UA الموحد تبادلاً دلالياً للبيانات مستقلاً عن أنظمة التشغيل للتواصل بين الآلات (M2M) في بيئات الثورة الصناعية الرابعة.",
    "explanationEn": "Correct Principle: OPC Unified Architecture (OPC UA) provides platform-independent, service-oriented semantic data exchange for machine-to-machine (M2M) communication across Industry 4.0 shop floors.",
    "explanationAr": "المبدأ العلمي الصحيح: يوفر بروتوكول OPC UA الموحد تبادلاً دلالياً للبيانات مستقلاً عن أنظمة التشغيل للتواصل بين الآلات (M2M) في بيئات الثورة الصناعية الرابعة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_56",
    "titleEn": "[EASY] Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer - Review 56",
    "titleAr": "[مستوى أساسي] محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع - سؤال 56",
    "questionEn": "[Question 56] In the context of Egyptian STEM robotics and mechatronics regarding Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 56] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Digital Twins simulate complete robotic kinematics, sensor outputs, and multi-body rigid physics inside computer environments before physical deployment on real hardware."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تحاكي التوائم الرقمية حركيات الروبوت ومخرجات حساساته وفيزياء الأجسام الصلبة بالكامل داخل بيئة حوسبية قبل تنزيل البرامج على العتاد الحقيقي."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Digital Twins simulate complete robotic kinematics, sensor outputs, and multi-body rigid physics inside computer environments before physical deployment on real hardware.",
    "correctAnswerAr": "تحاكي التوائم الرقمية حركيات الروبوت ومخرجات حساساته وفيزياء الأجسام الصلبة بالكامل داخل بيئة حوسبية قبل تنزيل البرامج على العتاد الحقيقي.",
    "explanationEn": "Correct Principle: Digital Twins simulate complete robotic kinematics, sensor outputs, and multi-body rigid physics inside computer environments before physical deployment on real hardware.",
    "explanationAr": "المبدأ العلمي الصحيح: تحاكي التوائم الرقمية حركيات الروبوت ومخرجات حساساته وفيزياء الأجسام الصلبة بالكامل داخل بيئة حوسبية قبل تنزيل البرامج على العتاد الحقيقي.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_57",
    "titleEn": "[EASY] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Review 57",
    "titleAr": "[مستوى أساسي] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - سؤال 57",
    "questionEn": "[Question 57] In the context of Egyptian STEM robotics and mechatronics regarding Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 57] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
    "correctAnswerAr": "يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
    "explanationEn": "Correct Principle: Model Predictive Control (MPC) solves an open-loop constrained optimal control problem at each discrete time step over a finite prediction horizon $N$, applying only the first calculated control input.",
    "explanationAr": "المبدأ العلمي الصحيح: يحل التحكم التنبؤي بالنموذج (MPC) مسألة تحكم أمثل ذات قيود عند كل خطوة زمنية على امتداد أفق تنبؤ زمني محدد $N$، مطبقاً مدخل التحكم الأول فقط في كل دورة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch4_easy_58",
    "titleEn": "[EASY] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Review 58",
    "titleAr": "[مستوى أساسي] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - سؤال 58",
    "questionEn": "[Question 58] In the context of Egyptian STEM robotics and mechatronics regarding Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 58] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
    "correctAnswerAr": "يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
    "explanationEn": "Correct Principle: Multi-Agent Path Finding (MAPF) plans collision-free paths for a fleet of Autonomous Mobile Robots (AMRs) operating simultaneously in high-density automated fulfillment warehouses.",
    "explanationAr": "المبدأ العلمي الصحيح: يخطط مسار الروبوتات المتعددة (MAPF) مسارات خالية من التصادم لأسطول من الروبوتات المتنقلة المستقلة (AMRs) العاملة معاً في المستودعات الذكية.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  }
],
  medium: [
  {
    "id": "egbac_robotics_ch4_med_1",
    "titleEn": "[MEDIUM] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Analysis 1",
    "titleAr": "[مستوى متوسط] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - تحليل 1",
    "questionEn": "[Question 1] When analyzing hardware-software integration and operational control for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance, identify the correct engineering relationship:",
    "questionAr": "[السؤال 1] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
    "correctAnswerAr": "يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
    "explanationEn": "Engineering Analysis: MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
    "explanationAr": "التحليل الهندسي المعتمد: يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_2",
    "titleEn": "[MEDIUM] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Analysis 2",
    "titleAr": "[مستوى متوسط] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - تحليل 2",
    "questionEn": "[Question 2] When analyzing hardware-software integration and operational control for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF, identify the correct engineering relationship:",
    "questionAr": "[السؤال 2] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells)."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells).",
    "correctAnswerAr": "تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة.",
    "explanationEn": "Engineering Analysis: Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells).",
    "explanationAr": "التحليل الهندسي المعتمد: تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_3",
    "titleEn": "[MEDIUM] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Analysis 3",
    "titleAr": "[مستوى متوسط] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - تحليل 3",
    "questionEn": "[Question 3] When analyzing hardware-software integration and operational control for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems, identify the correct engineering relationship:",
    "questionAr": "[السؤال 3] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
    "correctAnswerAr": "تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
    "explanationEn": "Engineering Analysis: OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
    "explanationAr": "التحليل الهندسي المعتمد: تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_4",
    "titleEn": "[MEDIUM] Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer - Analysis 4",
    "titleAr": "[مستوى متوسط] محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع - تحليل 4",
    "questionEn": "[Question 4] When analyzing hardware-software integration and operational control for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer, identify the correct engineering relationship:",
    "questionAr": "[السؤال 4] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Unified Robot Description Format (URDF) defines robot kinematic trees with XML tags for `<link>` (mass, inertia, visual mesh, collision geometry) and `<joint>` (revolute, prismatic, effort limits).",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "يحدد نسق وصف الروبوت الموحد (URDF) شجرة مفاصل الروبوت بملفات XML تشمل وسوم `<link>` للكتلة وعزوم القصور والأبعاد، ووسوم `<joint>` لأنواع المفاصل وحدود العزم.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Unified Robot Description Format (URDF) defines robot kinematic trees with XML tags for `<link>` (mass, inertia, visual mesh, collision geometry) and `<joint>` (revolute, prismatic, effort limits).",
    "correctAnswerAr": "يحدد نسق وصف الروبوت الموحد (URDF) شجرة مفاصل الروبوت بملفات XML تشمل وسوم `<link>` للكتلة وعزوم القصور والأبعاد، ووسوم `<joint>` لأنواع المفاصل وحدود العزم.",
    "explanationEn": "Engineering Analysis: Unified Robot Description Format (URDF) defines robot kinematic trees with XML tags for `<link>` (mass, inertia, visual mesh, collision geometry) and `<joint>` (revolute, prismatic, effort limits).",
    "explanationAr": "التحليل الهندسي المعتمد: يحدد نسق وصف الروبوت الموحد (URDF) شجرة مفاصل الروبوت بملفات XML تشمل وسوم `<link>` للكتلة وعزوم القصور والأبعاد، ووسوم `<joint>` لأنواع المفاصل وحدود العزم.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_5",
    "titleEn": "[MEDIUM] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Analysis 5",
    "titleAr": "[مستوى متوسط] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - تحليل 5",
    "questionEn": "[Question 5] When analyzing hardware-software integration and operational control for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance, identify the correct engineering relationship:",
    "questionAr": "[السؤال 5] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
    "correctAnswerAr": "يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
    "explanationEn": "Engineering Analysis: MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
    "explanationAr": "التحليل الهندسي المعتمد: يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_6",
    "titleEn": "[MEDIUM] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Analysis 6",
    "titleAr": "[مستوى متوسط] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - تحليل 6",
    "questionEn": "[Question 6] When analyzing hardware-software integration and operational control for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF, identify the correct engineering relationship:",
    "questionAr": "[السؤال 6] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells)."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells).",
    "correctAnswerAr": "تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة.",
    "explanationEn": "Engineering Analysis: Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells).",
    "explanationAr": "التحليل الهندسي المعتمد: تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_7",
    "titleEn": "[MEDIUM] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Analysis 7",
    "titleAr": "[مستوى متوسط] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - تحليل 7",
    "questionEn": "[Question 7] When analyzing hardware-software integration and operational control for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems, identify the correct engineering relationship:",
    "questionAr": "[السؤال 7] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
    "correctAnswerAr": "تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
    "explanationEn": "Engineering Analysis: OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
    "explanationAr": "التحليل الهندسي المعتمد: تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_8",
    "titleEn": "[MEDIUM] Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer - Analysis 8",
    "titleAr": "[مستوى متوسط] محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع - تحليل 8",
    "questionEn": "[Question 8] When analyzing hardware-software integration and operational control for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer, identify the correct engineering relationship:",
    "questionAr": "[السؤال 8] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Unified Robot Description Format (URDF) defines robot kinematic trees with XML tags for `<link>` (mass, inertia, visual mesh, collision geometry) and `<joint>` (revolute, prismatic, effort limits).",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "يحدد نسق وصف الروبوت الموحد (URDF) شجرة مفاصل الروبوت بملفات XML تشمل وسوم `<link>` للكتلة وعزوم القصور والأبعاد، ووسوم `<joint>` لأنواع المفاصل وحدود العزم.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Unified Robot Description Format (URDF) defines robot kinematic trees with XML tags for `<link>` (mass, inertia, visual mesh, collision geometry) and `<joint>` (revolute, prismatic, effort limits).",
    "correctAnswerAr": "يحدد نسق وصف الروبوت الموحد (URDF) شجرة مفاصل الروبوت بملفات XML تشمل وسوم `<link>` للكتلة وعزوم القصور والأبعاد، ووسوم `<joint>` لأنواع المفاصل وحدود العزم.",
    "explanationEn": "Engineering Analysis: Unified Robot Description Format (URDF) defines robot kinematic trees with XML tags for `<link>` (mass, inertia, visual mesh, collision geometry) and `<joint>` (revolute, prismatic, effort limits).",
    "explanationAr": "التحليل الهندسي المعتمد: يحدد نسق وصف الروبوت الموحد (URDF) شجرة مفاصل الروبوت بملفات XML تشمل وسوم `<link>` للكتلة وعزوم القصور والأبعاد، ووسوم `<joint>` لأنواع المفاصل وحدود العزم.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_9",
    "titleEn": "[MEDIUM] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Analysis 9",
    "titleAr": "[مستوى متوسط] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - تحليل 9",
    "questionEn": "[Question 9] When analyzing hardware-software integration and operational control for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance, identify the correct engineering relationship:",
    "questionAr": "[السؤال 9] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
    "correctAnswerAr": "يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
    "explanationEn": "Engineering Analysis: MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
    "explanationAr": "التحليل الهندسي المعتمد: يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_10",
    "titleEn": "[MEDIUM] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Analysis 10",
    "titleAr": "[مستوى متوسط] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - تحليل 10",
    "questionEn": "[Question 10] When analyzing hardware-software integration and operational control for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF, identify the correct engineering relationship:",
    "questionAr": "[السؤال 10] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells)."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells).",
    "correctAnswerAr": "تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة.",
    "explanationEn": "Engineering Analysis: Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells).",
    "explanationAr": "التحليل الهندسي المعتمد: تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_11",
    "titleEn": "[MEDIUM] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Analysis 11",
    "titleAr": "[مستوى متوسط] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - تحليل 11",
    "questionEn": "[Question 11] When analyzing hardware-software integration and operational control for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems, identify the correct engineering relationship:",
    "questionAr": "[السؤال 11] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
    "correctAnswerAr": "تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
    "explanationEn": "Engineering Analysis: OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
    "explanationAr": "التحليل الهندسي المعتمد: تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_12",
    "titleEn": "[MEDIUM] Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer - Analysis 12",
    "titleAr": "[مستوى متوسط] محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع - تحليل 12",
    "questionEn": "[Question 12] When analyzing hardware-software integration and operational control for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer, identify the correct engineering relationship:",
    "questionAr": "[السؤال 12] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Unified Robot Description Format (URDF) defines robot kinematic trees with XML tags for `<link>` (mass, inertia, visual mesh, collision geometry) and `<joint>` (revolute, prismatic, effort limits).",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "يحدد نسق وصف الروبوت الموحد (URDF) شجرة مفاصل الروبوت بملفات XML تشمل وسوم `<link>` للكتلة وعزوم القصور والأبعاد، ووسوم `<joint>` لأنواع المفاصل وحدود العزم.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Unified Robot Description Format (URDF) defines robot kinematic trees with XML tags for `<link>` (mass, inertia, visual mesh, collision geometry) and `<joint>` (revolute, prismatic, effort limits).",
    "correctAnswerAr": "يحدد نسق وصف الروبوت الموحد (URDF) شجرة مفاصل الروبوت بملفات XML تشمل وسوم `<link>` للكتلة وعزوم القصور والأبعاد، ووسوم `<joint>` لأنواع المفاصل وحدود العزم.",
    "explanationEn": "Engineering Analysis: Unified Robot Description Format (URDF) defines robot kinematic trees with XML tags for `<link>` (mass, inertia, visual mesh, collision geometry) and `<joint>` (revolute, prismatic, effort limits).",
    "explanationAr": "التحليل الهندسي المعتمد: يحدد نسق وصف الروبوت الموحد (URDF) شجرة مفاصل الروبوت بملفات XML تشمل وسوم `<link>` للكتلة وعزوم القصور والأبعاد، ووسوم `<joint>` لأنواع المفاصل وحدود العزم.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_13",
    "titleEn": "[MEDIUM] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Analysis 13",
    "titleAr": "[مستوى متوسط] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - تحليل 13",
    "questionEn": "[Question 13] When analyzing hardware-software integration and operational control for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance, identify the correct engineering relationship:",
    "questionAr": "[السؤال 13] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
    "correctAnswerAr": "يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
    "explanationEn": "Engineering Analysis: MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
    "explanationAr": "التحليل الهندسي المعتمد: يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_14",
    "titleEn": "[MEDIUM] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Analysis 14",
    "titleAr": "[مستوى متوسط] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - تحليل 14",
    "questionEn": "[Question 14] When analyzing hardware-software integration and operational control for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF, identify the correct engineering relationship:",
    "questionAr": "[السؤال 14] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells)."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells).",
    "correctAnswerAr": "تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة.",
    "explanationEn": "Engineering Analysis: Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells).",
    "explanationAr": "التحليل الهندسي المعتمد: تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_15",
    "titleEn": "[MEDIUM] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Analysis 15",
    "titleAr": "[مستوى متوسط] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - تحليل 15",
    "questionEn": "[Question 15] When analyzing hardware-software integration and operational control for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems, identify the correct engineering relationship:",
    "questionAr": "[السؤال 15] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
    "correctAnswerAr": "تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
    "explanationEn": "Engineering Analysis: OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
    "explanationAr": "التحليل الهندسي المعتمد: تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_16",
    "titleEn": "[MEDIUM] Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer - Analysis 16",
    "titleAr": "[مستوى متوسط] محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع - تحليل 16",
    "questionEn": "[Question 16] When analyzing hardware-software integration and operational control for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer, identify the correct engineering relationship:",
    "questionAr": "[السؤال 16] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Unified Robot Description Format (URDF) defines robot kinematic trees with XML tags for `<link>` (mass, inertia, visual mesh, collision geometry) and `<joint>` (revolute, prismatic, effort limits).",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "يحدد نسق وصف الروبوت الموحد (URDF) شجرة مفاصل الروبوت بملفات XML تشمل وسوم `<link>` للكتلة وعزوم القصور والأبعاد، ووسوم `<joint>` لأنواع المفاصل وحدود العزم.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Unified Robot Description Format (URDF) defines robot kinematic trees with XML tags for `<link>` (mass, inertia, visual mesh, collision geometry) and `<joint>` (revolute, prismatic, effort limits).",
    "correctAnswerAr": "يحدد نسق وصف الروبوت الموحد (URDF) شجرة مفاصل الروبوت بملفات XML تشمل وسوم `<link>` للكتلة وعزوم القصور والأبعاد، ووسوم `<joint>` لأنواع المفاصل وحدود العزم.",
    "explanationEn": "Engineering Analysis: Unified Robot Description Format (URDF) defines robot kinematic trees with XML tags for `<link>` (mass, inertia, visual mesh, collision geometry) and `<joint>` (revolute, prismatic, effort limits).",
    "explanationAr": "التحليل الهندسي المعتمد: يحدد نسق وصف الروبوت الموحد (URDF) شجرة مفاصل الروبوت بملفات XML تشمل وسوم `<link>` للكتلة وعزوم القصور والأبعاد، ووسوم `<joint>` لأنواع المفاصل وحدود العزم.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_17",
    "titleEn": "[MEDIUM] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Analysis 17",
    "titleAr": "[مستوى متوسط] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - تحليل 17",
    "questionEn": "[Question 17] When analyzing hardware-software integration and operational control for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance, identify the correct engineering relationship:",
    "questionAr": "[السؤال 17] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
    "correctAnswerAr": "يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
    "explanationEn": "Engineering Analysis: MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
    "explanationAr": "التحليل الهندسي المعتمد: يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_18",
    "titleEn": "[MEDIUM] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Analysis 18",
    "titleAr": "[مستوى متوسط] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - تحليل 18",
    "questionEn": "[Question 18] When analyzing hardware-software integration and operational control for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF, identify the correct engineering relationship:",
    "questionAr": "[السؤال 18] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells)."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells).",
    "correctAnswerAr": "تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة.",
    "explanationEn": "Engineering Analysis: Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells).",
    "explanationAr": "التحليل الهندسي المعتمد: تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_19",
    "titleEn": "[MEDIUM] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Analysis 19",
    "titleAr": "[مستوى متوسط] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - تحليل 19",
    "questionEn": "[Question 19] When analyzing hardware-software integration and operational control for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems, identify the correct engineering relationship:",
    "questionAr": "[السؤال 19] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
    "correctAnswerAr": "تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
    "explanationEn": "Engineering Analysis: OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
    "explanationAr": "التحليل الهندسي المعتمد: تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_20",
    "titleEn": "[MEDIUM] Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer - Analysis 20",
    "titleAr": "[مستوى متوسط] محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع - تحليل 20",
    "questionEn": "[Question 20] When analyzing hardware-software integration and operational control for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer, identify the correct engineering relationship:",
    "questionAr": "[السؤال 20] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Unified Robot Description Format (URDF) defines robot kinematic trees with XML tags for `<link>` (mass, inertia, visual mesh, collision geometry) and `<joint>` (revolute, prismatic, effort limits).",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "يحدد نسق وصف الروبوت الموحد (URDF) شجرة مفاصل الروبوت بملفات XML تشمل وسوم `<link>` للكتلة وعزوم القصور والأبعاد، ووسوم `<joint>` لأنواع المفاصل وحدود العزم.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Unified Robot Description Format (URDF) defines robot kinematic trees with XML tags for `<link>` (mass, inertia, visual mesh, collision geometry) and `<joint>` (revolute, prismatic, effort limits).",
    "correctAnswerAr": "يحدد نسق وصف الروبوت الموحد (URDF) شجرة مفاصل الروبوت بملفات XML تشمل وسوم `<link>` للكتلة وعزوم القصور والأبعاد، ووسوم `<joint>` لأنواع المفاصل وحدود العزم.",
    "explanationEn": "Engineering Analysis: Unified Robot Description Format (URDF) defines robot kinematic trees with XML tags for `<link>` (mass, inertia, visual mesh, collision geometry) and `<joint>` (revolute, prismatic, effort limits).",
    "explanationAr": "التحليل الهندسي المعتمد: يحدد نسق وصف الروبوت الموحد (URDF) شجرة مفاصل الروبوت بملفات XML تشمل وسوم `<link>` للكتلة وعزوم القصور والأبعاد، ووسوم `<joint>` لأنواع المفاصل وحدود العزم.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_21",
    "titleEn": "[MEDIUM] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Analysis 21",
    "titleAr": "[مستوى متوسط] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - تحليل 21",
    "questionEn": "[Question 21] When analyzing hardware-software integration and operational control for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance, identify the correct engineering relationship:",
    "questionAr": "[السؤال 21] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
    "correctAnswerAr": "يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
    "explanationEn": "Engineering Analysis: MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
    "explanationAr": "التحليل الهندسي المعتمد: يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_22",
    "titleEn": "[MEDIUM] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Analysis 22",
    "titleAr": "[مستوى متوسط] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - تحليل 22",
    "questionEn": "[Question 22] When analyzing hardware-software integration and operational control for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF, identify the correct engineering relationship:",
    "questionAr": "[السؤال 22] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells)."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells).",
    "correctAnswerAr": "تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة.",
    "explanationEn": "Engineering Analysis: Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells).",
    "explanationAr": "التحليل الهندسي المعتمد: تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_23",
    "titleEn": "[MEDIUM] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Analysis 23",
    "titleAr": "[مستوى متوسط] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - تحليل 23",
    "questionEn": "[Question 23] When analyzing hardware-software integration and operational control for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems, identify the correct engineering relationship:",
    "questionAr": "[السؤال 23] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
    "correctAnswerAr": "تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
    "explanationEn": "Engineering Analysis: OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
    "explanationAr": "التحليل الهندسي المعتمد: تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_24",
    "titleEn": "[MEDIUM] Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer - Analysis 24",
    "titleAr": "[مستوى متوسط] محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع - تحليل 24",
    "questionEn": "[Question 24] When analyzing hardware-software integration and operational control for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer, identify the correct engineering relationship:",
    "questionAr": "[السؤال 24] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Unified Robot Description Format (URDF) defines robot kinematic trees with XML tags for `<link>` (mass, inertia, visual mesh, collision geometry) and `<joint>` (revolute, prismatic, effort limits).",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "يحدد نسق وصف الروبوت الموحد (URDF) شجرة مفاصل الروبوت بملفات XML تشمل وسوم `<link>` للكتلة وعزوم القصور والأبعاد، ووسوم `<joint>` لأنواع المفاصل وحدود العزم.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Unified Robot Description Format (URDF) defines robot kinematic trees with XML tags for `<link>` (mass, inertia, visual mesh, collision geometry) and `<joint>` (revolute, prismatic, effort limits).",
    "correctAnswerAr": "يحدد نسق وصف الروبوت الموحد (URDF) شجرة مفاصل الروبوت بملفات XML تشمل وسوم `<link>` للكتلة وعزوم القصور والأبعاد، ووسوم `<joint>` لأنواع المفاصل وحدود العزم.",
    "explanationEn": "Engineering Analysis: Unified Robot Description Format (URDF) defines robot kinematic trees with XML tags for `<link>` (mass, inertia, visual mesh, collision geometry) and `<joint>` (revolute, prismatic, effort limits).",
    "explanationAr": "التحليل الهندسي المعتمد: يحدد نسق وصف الروبوت الموحد (URDF) شجرة مفاصل الروبوت بملفات XML تشمل وسوم `<link>` للكتلة وعزوم القصور والأبعاد، ووسوم `<joint>` لأنواع المفاصل وحدود العزم.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_25",
    "titleEn": "[MEDIUM] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Analysis 25",
    "titleAr": "[مستوى متوسط] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - تحليل 25",
    "questionEn": "[Question 25] When analyzing hardware-software integration and operational control for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance, identify the correct engineering relationship:",
    "questionAr": "[السؤال 25] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
    "correctAnswerAr": "يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
    "explanationEn": "Engineering Analysis: MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
    "explanationAr": "التحليل الهندسي المعتمد: يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_26",
    "titleEn": "[MEDIUM] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Analysis 26",
    "titleAr": "[مستوى متوسط] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - تحليل 26",
    "questionEn": "[Question 26] When analyzing hardware-software integration and operational control for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF, identify the correct engineering relationship:",
    "questionAr": "[السؤال 26] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells)."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells).",
    "correctAnswerAr": "تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة.",
    "explanationEn": "Engineering Analysis: Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells).",
    "explanationAr": "التحليل الهندسي المعتمد: تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_27",
    "titleEn": "[MEDIUM] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Analysis 27",
    "titleAr": "[مستوى متوسط] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - تحليل 27",
    "questionEn": "[Question 27] When analyzing hardware-software integration and operational control for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems, identify the correct engineering relationship:",
    "questionAr": "[السؤال 27] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
    "correctAnswerAr": "تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
    "explanationEn": "Engineering Analysis: OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
    "explanationAr": "التحليل الهندسي المعتمد: تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_28",
    "titleEn": "[MEDIUM] Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer - Analysis 28",
    "titleAr": "[مستوى متوسط] محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع - تحليل 28",
    "questionEn": "[Question 28] When analyzing hardware-software integration and operational control for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer, identify the correct engineering relationship:",
    "questionAr": "[السؤال 28] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Unified Robot Description Format (URDF) defines robot kinematic trees with XML tags for `<link>` (mass, inertia, visual mesh, collision geometry) and `<joint>` (revolute, prismatic, effort limits).",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "يحدد نسق وصف الروبوت الموحد (URDF) شجرة مفاصل الروبوت بملفات XML تشمل وسوم `<link>` للكتلة وعزوم القصور والأبعاد، ووسوم `<joint>` لأنواع المفاصل وحدود العزم.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Unified Robot Description Format (URDF) defines robot kinematic trees with XML tags for `<link>` (mass, inertia, visual mesh, collision geometry) and `<joint>` (revolute, prismatic, effort limits).",
    "correctAnswerAr": "يحدد نسق وصف الروبوت الموحد (URDF) شجرة مفاصل الروبوت بملفات XML تشمل وسوم `<link>` للكتلة وعزوم القصور والأبعاد، ووسوم `<joint>` لأنواع المفاصل وحدود العزم.",
    "explanationEn": "Engineering Analysis: Unified Robot Description Format (URDF) defines robot kinematic trees with XML tags for `<link>` (mass, inertia, visual mesh, collision geometry) and `<joint>` (revolute, prismatic, effort limits).",
    "explanationAr": "التحليل الهندسي المعتمد: يحدد نسق وصف الروبوت الموحد (URDF) شجرة مفاصل الروبوت بملفات XML تشمل وسوم `<link>` للكتلة وعزوم القصور والأبعاد، ووسوم `<joint>` لأنواع المفاصل وحدود العزم.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_29",
    "titleEn": "[MEDIUM] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Analysis 29",
    "titleAr": "[مستوى متوسط] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - تحليل 29",
    "questionEn": "[Question 29] When analyzing hardware-software integration and operational control for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance, identify the correct engineering relationship:",
    "questionAr": "[السؤال 29] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
    "correctAnswerAr": "يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
    "explanationEn": "Engineering Analysis: MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
    "explanationAr": "التحليل الهندسي المعتمد: يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_30",
    "titleEn": "[MEDIUM] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Analysis 30",
    "titleAr": "[مستوى متوسط] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - تحليل 30",
    "questionEn": "[Question 30] When analyzing hardware-software integration and operational control for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF, identify the correct engineering relationship:",
    "questionAr": "[السؤال 30] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells)."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells).",
    "correctAnswerAr": "تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة.",
    "explanationEn": "Engineering Analysis: Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells).",
    "explanationAr": "التحليل الهندسي المعتمد: تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_31",
    "titleEn": "[MEDIUM] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Analysis 31",
    "titleAr": "[مستوى متوسط] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - تحليل 31",
    "questionEn": "[Question 31] When analyzing hardware-software integration and operational control for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems, identify the correct engineering relationship:",
    "questionAr": "[السؤال 31] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
    "correctAnswerAr": "تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
    "explanationEn": "Engineering Analysis: OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
    "explanationAr": "التحليل الهندسي المعتمد: تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_32",
    "titleEn": "[MEDIUM] Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer - Analysis 32",
    "titleAr": "[مستوى متوسط] محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع - تحليل 32",
    "questionEn": "[Question 32] When analyzing hardware-software integration and operational control for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer, identify the correct engineering relationship:",
    "questionAr": "[السؤال 32] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Unified Robot Description Format (URDF) defines robot kinematic trees with XML tags for `<link>` (mass, inertia, visual mesh, collision geometry) and `<joint>` (revolute, prismatic, effort limits).",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "يحدد نسق وصف الروبوت الموحد (URDF) شجرة مفاصل الروبوت بملفات XML تشمل وسوم `<link>` للكتلة وعزوم القصور والأبعاد، ووسوم `<joint>` لأنواع المفاصل وحدود العزم.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Unified Robot Description Format (URDF) defines robot kinematic trees with XML tags for `<link>` (mass, inertia, visual mesh, collision geometry) and `<joint>` (revolute, prismatic, effort limits).",
    "correctAnswerAr": "يحدد نسق وصف الروبوت الموحد (URDF) شجرة مفاصل الروبوت بملفات XML تشمل وسوم `<link>` للكتلة وعزوم القصور والأبعاد، ووسوم `<joint>` لأنواع المفاصل وحدود العزم.",
    "explanationEn": "Engineering Analysis: Unified Robot Description Format (URDF) defines robot kinematic trees with XML tags for `<link>` (mass, inertia, visual mesh, collision geometry) and `<joint>` (revolute, prismatic, effort limits).",
    "explanationAr": "التحليل الهندسي المعتمد: يحدد نسق وصف الروبوت الموحد (URDF) شجرة مفاصل الروبوت بملفات XML تشمل وسوم `<link>` للكتلة وعزوم القصور والأبعاد، ووسوم `<joint>` لأنواع المفاصل وحدود العزم.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_33",
    "titleEn": "[MEDIUM] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Analysis 33",
    "titleAr": "[مستوى متوسط] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - تحليل 33",
    "questionEn": "[Question 33] When analyzing hardware-software integration and operational control for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance, identify the correct engineering relationship:",
    "questionAr": "[السؤال 33] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
    "correctAnswerAr": "يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
    "explanationEn": "Engineering Analysis: MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
    "explanationAr": "التحليل الهندسي المعتمد: يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_34",
    "titleEn": "[MEDIUM] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Analysis 34",
    "titleAr": "[مستوى متوسط] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - تحليل 34",
    "questionEn": "[Question 34] When analyzing hardware-software integration and operational control for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF, identify the correct engineering relationship:",
    "questionAr": "[السؤال 34] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells)."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells).",
    "correctAnswerAr": "تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة.",
    "explanationEn": "Engineering Analysis: Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells).",
    "explanationAr": "التحليل الهندسي المعتمد: تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_35",
    "titleEn": "[MEDIUM] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Analysis 35",
    "titleAr": "[مستوى متوسط] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - تحليل 35",
    "questionEn": "[Question 35] When analyzing hardware-software integration and operational control for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems, identify the correct engineering relationship:",
    "questionAr": "[السؤال 35] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
    "correctAnswerAr": "تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
    "explanationEn": "Engineering Analysis: OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
    "explanationAr": "التحليل الهندسي المعتمد: تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_36",
    "titleEn": "[MEDIUM] Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer - Analysis 36",
    "titleAr": "[مستوى متوسط] محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع - تحليل 36",
    "questionEn": "[Question 36] When analyzing hardware-software integration and operational control for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer, identify the correct engineering relationship:",
    "questionAr": "[السؤال 36] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Unified Robot Description Format (URDF) defines robot kinematic trees with XML tags for `<link>` (mass, inertia, visual mesh, collision geometry) and `<joint>` (revolute, prismatic, effort limits).",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "يحدد نسق وصف الروبوت الموحد (URDF) شجرة مفاصل الروبوت بملفات XML تشمل وسوم `<link>` للكتلة وعزوم القصور والأبعاد، ووسوم `<joint>` لأنواع المفاصل وحدود العزم.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Unified Robot Description Format (URDF) defines robot kinematic trees with XML tags for `<link>` (mass, inertia, visual mesh, collision geometry) and `<joint>` (revolute, prismatic, effort limits).",
    "correctAnswerAr": "يحدد نسق وصف الروبوت الموحد (URDF) شجرة مفاصل الروبوت بملفات XML تشمل وسوم `<link>` للكتلة وعزوم القصور والأبعاد، ووسوم `<joint>` لأنواع المفاصل وحدود العزم.",
    "explanationEn": "Engineering Analysis: Unified Robot Description Format (URDF) defines robot kinematic trees with XML tags for `<link>` (mass, inertia, visual mesh, collision geometry) and `<joint>` (revolute, prismatic, effort limits).",
    "explanationAr": "التحليل الهندسي المعتمد: يحدد نسق وصف الروبوت الموحد (URDF) شجرة مفاصل الروبوت بملفات XML تشمل وسوم `<link>` للكتلة وعزوم القصور والأبعاد، ووسوم `<joint>` لأنواع المفاصل وحدود العزم.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_37",
    "titleEn": "[MEDIUM] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Analysis 37",
    "titleAr": "[مستوى متوسط] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - تحليل 37",
    "questionEn": "[Question 37] When analyzing hardware-software integration and operational control for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance, identify the correct engineering relationship:",
    "questionAr": "[السؤال 37] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
    "correctAnswerAr": "يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
    "explanationEn": "Engineering Analysis: MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
    "explanationAr": "التحليل الهندسي المعتمد: يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_38",
    "titleEn": "[MEDIUM] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Analysis 38",
    "titleAr": "[مستوى متوسط] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - تحليل 38",
    "questionEn": "[Question 38] When analyzing hardware-software integration and operational control for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF, identify the correct engineering relationship:",
    "questionAr": "[السؤال 38] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells)."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells).",
    "correctAnswerAr": "تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة.",
    "explanationEn": "Engineering Analysis: Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells).",
    "explanationAr": "التحليل الهندسي المعتمد: تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_39",
    "titleEn": "[MEDIUM] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Analysis 39",
    "titleAr": "[مستوى متوسط] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - تحليل 39",
    "questionEn": "[Question 39] When analyzing hardware-software integration and operational control for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems, identify the correct engineering relationship:",
    "questionAr": "[السؤال 39] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
    "correctAnswerAr": "تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
    "explanationEn": "Engineering Analysis: OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
    "explanationAr": "التحليل الهندسي المعتمد: تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_40",
    "titleEn": "[MEDIUM] Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer - Analysis 40",
    "titleAr": "[مستوى متوسط] محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع - تحليل 40",
    "questionEn": "[Question 40] When analyzing hardware-software integration and operational control for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer, identify the correct engineering relationship:",
    "questionAr": "[السؤال 40] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Unified Robot Description Format (URDF) defines robot kinematic trees with XML tags for `<link>` (mass, inertia, visual mesh, collision geometry) and `<joint>` (revolute, prismatic, effort limits).",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "يحدد نسق وصف الروبوت الموحد (URDF) شجرة مفاصل الروبوت بملفات XML تشمل وسوم `<link>` للكتلة وعزوم القصور والأبعاد، ووسوم `<joint>` لأنواع المفاصل وحدود العزم.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Unified Robot Description Format (URDF) defines robot kinematic trees with XML tags for `<link>` (mass, inertia, visual mesh, collision geometry) and `<joint>` (revolute, prismatic, effort limits).",
    "correctAnswerAr": "يحدد نسق وصف الروبوت الموحد (URDF) شجرة مفاصل الروبوت بملفات XML تشمل وسوم `<link>` للكتلة وعزوم القصور والأبعاد، ووسوم `<joint>` لأنواع المفاصل وحدود العزم.",
    "explanationEn": "Engineering Analysis: Unified Robot Description Format (URDF) defines robot kinematic trees with XML tags for `<link>` (mass, inertia, visual mesh, collision geometry) and `<joint>` (revolute, prismatic, effort limits).",
    "explanationAr": "التحليل الهندسي المعتمد: يحدد نسق وصف الروبوت الموحد (URDF) شجرة مفاصل الروبوت بملفات XML تشمل وسوم `<link>` للكتلة وعزوم القصور والأبعاد، ووسوم `<joint>` لأنواع المفاصل وحدود العزم.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_41",
    "titleEn": "[MEDIUM] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Analysis 41",
    "titleAr": "[مستوى متوسط] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - تحليل 41",
    "questionEn": "[Question 41] When analyzing hardware-software integration and operational control for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance, identify the correct engineering relationship:",
    "questionAr": "[السؤال 41] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
    "correctAnswerAr": "يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
    "explanationEn": "Engineering Analysis: MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
    "explanationAr": "التحليل الهندسي المعتمد: يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_42",
    "titleEn": "[MEDIUM] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Analysis 42",
    "titleAr": "[مستوى متوسط] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - تحليل 42",
    "questionEn": "[Question 42] When analyzing hardware-software integration and operational control for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF, identify the correct engineering relationship:",
    "questionAr": "[السؤال 42] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells)."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells).",
    "correctAnswerAr": "تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة.",
    "explanationEn": "Engineering Analysis: Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells).",
    "explanationAr": "التحليل الهندسي المعتمد: تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_43",
    "titleEn": "[MEDIUM] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Analysis 43",
    "titleAr": "[مستوى متوسط] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - تحليل 43",
    "questionEn": "[Question 43] When analyzing hardware-software integration and operational control for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems, identify the correct engineering relationship:",
    "questionAr": "[السؤال 43] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
    "correctAnswerAr": "تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
    "explanationEn": "Engineering Analysis: OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
    "explanationAr": "التحليل الهندسي المعتمد: تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_44",
    "titleEn": "[MEDIUM] Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer - Analysis 44",
    "titleAr": "[مستوى متوسط] محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع - تحليل 44",
    "questionEn": "[Question 44] When analyzing hardware-software integration and operational control for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer, identify the correct engineering relationship:",
    "questionAr": "[السؤال 44] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Unified Robot Description Format (URDF) defines robot kinematic trees with XML tags for `<link>` (mass, inertia, visual mesh, collision geometry) and `<joint>` (revolute, prismatic, effort limits).",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "يحدد نسق وصف الروبوت الموحد (URDF) شجرة مفاصل الروبوت بملفات XML تشمل وسوم `<link>` للكتلة وعزوم القصور والأبعاد، ووسوم `<joint>` لأنواع المفاصل وحدود العزم.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Unified Robot Description Format (URDF) defines robot kinematic trees with XML tags for `<link>` (mass, inertia, visual mesh, collision geometry) and `<joint>` (revolute, prismatic, effort limits).",
    "correctAnswerAr": "يحدد نسق وصف الروبوت الموحد (URDF) شجرة مفاصل الروبوت بملفات XML تشمل وسوم `<link>` للكتلة وعزوم القصور والأبعاد، ووسوم `<joint>` لأنواع المفاصل وحدود العزم.",
    "explanationEn": "Engineering Analysis: Unified Robot Description Format (URDF) defines robot kinematic trees with XML tags for `<link>` (mass, inertia, visual mesh, collision geometry) and `<joint>` (revolute, prismatic, effort limits).",
    "explanationAr": "التحليل الهندسي المعتمد: يحدد نسق وصف الروبوت الموحد (URDF) شجرة مفاصل الروبوت بملفات XML تشمل وسوم `<link>` للكتلة وعزوم القصور والأبعاد، ووسوم `<joint>` لأنواع المفاصل وحدود العزم.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_45",
    "titleEn": "[MEDIUM] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Analysis 45",
    "titleAr": "[مستوى متوسط] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - تحليل 45",
    "questionEn": "[Question 45] When analyzing hardware-software integration and operational control for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance, identify the correct engineering relationship:",
    "questionAr": "[السؤال 45] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
    "correctAnswerAr": "يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
    "explanationEn": "Engineering Analysis: MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
    "explanationAr": "التحليل الهندسي المعتمد: يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_46",
    "titleEn": "[MEDIUM] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Analysis 46",
    "titleAr": "[مستوى متوسط] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - تحليل 46",
    "questionEn": "[Question 46] When analyzing hardware-software integration and operational control for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF, identify the correct engineering relationship:",
    "questionAr": "[السؤال 46] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells)."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells).",
    "correctAnswerAr": "تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة.",
    "explanationEn": "Engineering Analysis: Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells).",
    "explanationAr": "التحليل الهندسي المعتمد: تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_47",
    "titleEn": "[MEDIUM] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Analysis 47",
    "titleAr": "[مستوى متوسط] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - تحليل 47",
    "questionEn": "[Question 47] When analyzing hardware-software integration and operational control for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems, identify the correct engineering relationship:",
    "questionAr": "[السؤال 47] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
    "correctAnswerAr": "تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
    "explanationEn": "Engineering Analysis: OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
    "explanationAr": "التحليل الهندسي المعتمد: تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_48",
    "titleEn": "[MEDIUM] Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer - Analysis 48",
    "titleAr": "[مستوى متوسط] محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع - تحليل 48",
    "questionEn": "[Question 48] When analyzing hardware-software integration and operational control for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer, identify the correct engineering relationship:",
    "questionAr": "[السؤال 48] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Unified Robot Description Format (URDF) defines robot kinematic trees with XML tags for `<link>` (mass, inertia, visual mesh, collision geometry) and `<joint>` (revolute, prismatic, effort limits).",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "يحدد نسق وصف الروبوت الموحد (URDF) شجرة مفاصل الروبوت بملفات XML تشمل وسوم `<link>` للكتلة وعزوم القصور والأبعاد، ووسوم `<joint>` لأنواع المفاصل وحدود العزم.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Unified Robot Description Format (URDF) defines robot kinematic trees with XML tags for `<link>` (mass, inertia, visual mesh, collision geometry) and `<joint>` (revolute, prismatic, effort limits).",
    "correctAnswerAr": "يحدد نسق وصف الروبوت الموحد (URDF) شجرة مفاصل الروبوت بملفات XML تشمل وسوم `<link>` للكتلة وعزوم القصور والأبعاد، ووسوم `<joint>` لأنواع المفاصل وحدود العزم.",
    "explanationEn": "Engineering Analysis: Unified Robot Description Format (URDF) defines robot kinematic trees with XML tags for `<link>` (mass, inertia, visual mesh, collision geometry) and `<joint>` (revolute, prismatic, effort limits).",
    "explanationAr": "التحليل الهندسي المعتمد: يحدد نسق وصف الروبوت الموحد (URDF) شجرة مفاصل الروبوت بملفات XML تشمل وسوم `<link>` للكتلة وعزوم القصور والأبعاد، ووسوم `<joint>` لأنواع المفاصل وحدود العزم.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_49",
    "titleEn": "[MEDIUM] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Analysis 49",
    "titleAr": "[مستوى متوسط] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - تحليل 49",
    "questionEn": "[Question 49] When analyzing hardware-software integration and operational control for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance, identify the correct engineering relationship:",
    "questionAr": "[السؤال 49] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
    "correctAnswerAr": "يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
    "explanationEn": "Engineering Analysis: MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
    "explanationAr": "التحليل الهندسي المعتمد: يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_50",
    "titleEn": "[MEDIUM] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Analysis 50",
    "titleAr": "[مستوى متوسط] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - تحليل 50",
    "questionEn": "[Question 50] When analyzing hardware-software integration and operational control for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF, identify the correct engineering relationship:",
    "questionAr": "[السؤال 50] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells)."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells).",
    "correctAnswerAr": "تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة.",
    "explanationEn": "Engineering Analysis: Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells).",
    "explanationAr": "التحليل الهندسي المعتمد: تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_51",
    "titleEn": "[MEDIUM] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Analysis 51",
    "titleAr": "[مستوى متوسط] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - تحليل 51",
    "questionEn": "[Question 51] When analyzing hardware-software integration and operational control for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems, identify the correct engineering relationship:",
    "questionAr": "[السؤال 51] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
    "correctAnswerAr": "تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
    "explanationEn": "Engineering Analysis: OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
    "explanationAr": "التحليل الهندسي المعتمد: تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_52",
    "titleEn": "[MEDIUM] Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer - Analysis 52",
    "titleAr": "[مستوى متوسط] محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع - تحليل 52",
    "questionEn": "[Question 52] When analyzing hardware-software integration and operational control for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer, identify the correct engineering relationship:",
    "questionAr": "[السؤال 52] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Unified Robot Description Format (URDF) defines robot kinematic trees with XML tags for `<link>` (mass, inertia, visual mesh, collision geometry) and `<joint>` (revolute, prismatic, effort limits).",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "يحدد نسق وصف الروبوت الموحد (URDF) شجرة مفاصل الروبوت بملفات XML تشمل وسوم `<link>` للكتلة وعزوم القصور والأبعاد، ووسوم `<joint>` لأنواع المفاصل وحدود العزم.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Unified Robot Description Format (URDF) defines robot kinematic trees with XML tags for `<link>` (mass, inertia, visual mesh, collision geometry) and `<joint>` (revolute, prismatic, effort limits).",
    "correctAnswerAr": "يحدد نسق وصف الروبوت الموحد (URDF) شجرة مفاصل الروبوت بملفات XML تشمل وسوم `<link>` للكتلة وعزوم القصور والأبعاد، ووسوم `<joint>` لأنواع المفاصل وحدود العزم.",
    "explanationEn": "Engineering Analysis: Unified Robot Description Format (URDF) defines robot kinematic trees with XML tags for `<link>` (mass, inertia, visual mesh, collision geometry) and `<joint>` (revolute, prismatic, effort limits).",
    "explanationAr": "التحليل الهندسي المعتمد: يحدد نسق وصف الروبوت الموحد (URDF) شجرة مفاصل الروبوت بملفات XML تشمل وسوم `<link>` للكتلة وعزوم القصور والأبعاد، ووسوم `<joint>` لأنواع المفاصل وحدود العزم.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_53",
    "titleEn": "[MEDIUM] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Analysis 53",
    "titleAr": "[مستوى متوسط] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - تحليل 53",
    "questionEn": "[Question 53] When analyzing hardware-software integration and operational control for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance, identify the correct engineering relationship:",
    "questionAr": "[السؤال 53] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
    "correctAnswerAr": "يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
    "explanationEn": "Engineering Analysis: MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
    "explanationAr": "التحليل الهندسي المعتمد: يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_54",
    "titleEn": "[MEDIUM] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Analysis 54",
    "titleAr": "[مستوى متوسط] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - تحليل 54",
    "questionEn": "[Question 54] When analyzing hardware-software integration and operational control for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF, identify the correct engineering relationship:",
    "questionAr": "[السؤال 54] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells)."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells).",
    "correctAnswerAr": "تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة.",
    "explanationEn": "Engineering Analysis: Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells).",
    "explanationAr": "التحليل الهندسي المعتمد: تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_55",
    "titleEn": "[MEDIUM] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Analysis 55",
    "titleAr": "[مستوى متوسط] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - تحليل 55",
    "questionEn": "[Question 55] When analyzing hardware-software integration and operational control for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems, identify the correct engineering relationship:",
    "questionAr": "[السؤال 55] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
    "correctAnswerAr": "تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
    "explanationEn": "Engineering Analysis: OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
    "explanationAr": "التحليل الهندسي المعتمد: تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_56",
    "titleEn": "[MEDIUM] Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer - Analysis 56",
    "titleAr": "[مستوى متوسط] محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع - تحليل 56",
    "questionEn": "[Question 56] When analyzing hardware-software integration and operational control for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer, identify the correct engineering relationship:",
    "questionAr": "[السؤال 56] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Unified Robot Description Format (URDF) defines robot kinematic trees with XML tags for `<link>` (mass, inertia, visual mesh, collision geometry) and `<joint>` (revolute, prismatic, effort limits).",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "يحدد نسق وصف الروبوت الموحد (URDF) شجرة مفاصل الروبوت بملفات XML تشمل وسوم `<link>` للكتلة وعزوم القصور والأبعاد، ووسوم `<joint>` لأنواع المفاصل وحدود العزم.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Unified Robot Description Format (URDF) defines robot kinematic trees with XML tags for `<link>` (mass, inertia, visual mesh, collision geometry) and `<joint>` (revolute, prismatic, effort limits).",
    "correctAnswerAr": "يحدد نسق وصف الروبوت الموحد (URDF) شجرة مفاصل الروبوت بملفات XML تشمل وسوم `<link>` للكتلة وعزوم القصور والأبعاد، ووسوم `<joint>` لأنواع المفاصل وحدود العزم.",
    "explanationEn": "Engineering Analysis: Unified Robot Description Format (URDF) defines robot kinematic trees with XML tags for `<link>` (mass, inertia, visual mesh, collision geometry) and `<joint>` (revolute, prismatic, effort limits).",
    "explanationAr": "التحليل الهندسي المعتمد: يحدد نسق وصف الروبوت الموحد (URDF) شجرة مفاصل الروبوت بملفات XML تشمل وسوم `<link>` للكتلة وعزوم القصور والأبعاد، ووسوم `<joint>` لأنواع المفاصل وحدود العزم.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_57",
    "titleEn": "[MEDIUM] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Analysis 57",
    "titleAr": "[مستوى متوسط] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - تحليل 57",
    "questionEn": "[Question 57] When analyzing hardware-software integration and operational control for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance, identify the correct engineering relationship:",
    "questionAr": "[السؤال 57] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
    "correctAnswerAr": "يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
    "explanationEn": "Engineering Analysis: MPC handles hard non-linear state and actuator constraints directly: $v_{min} \\le v_k \\le v_{max}$, $a_{min} \\le a_k \\le a_{max}$, and minimum Euclidean distance constraints to surrounding obstacles.",
    "explanationAr": "التحليل الهندسي المعتمد: يعالج MPC قيود الحالة والمحركات الصارمة مباشرة: حدود السرعة والتسارع الدنيا والقصوى، وحدود المسافة الإقليدية الآمنة التي تفصل الروبوت عن العوائق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_58",
    "titleEn": "[MEDIUM] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Analysis 58",
    "titleAr": "[مستوى متوسط] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - تحليل 58",
    "questionEn": "[Question 58] When analyzing hardware-software integration and operational control for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF, identify the correct engineering relationship:",
    "questionAr": "[السؤال 58] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells)."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells).",
    "correctAnswerAr": "تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة.",
    "explanationEn": "Engineering Analysis: Conflict-Based Search (CBS) is a two-level algorithm: the low level plans individual robot paths, while the high level builds a Constraint Tree to resolve vertex collisions (same cell at same time) and edge collisions (swapping cells).",
    "explanationAr": "التحليل الهندسي المعتمد: تعتبر خوارزمية CBS ذات مستويين: يخطط المستوى الأدنى مسارات الروبوتات المنفردة، بينما يبني المستوى الأعلى شجرة قيود لفض نزاعات التقاطع وتبادل الأماكن في نفس اللحظة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch4_med_59",
    "titleEn": "[MEDIUM] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Analysis 59",
    "titleAr": "[مستوى متوسط] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - تحليل 59",
    "questionEn": "[Question 59] When analyzing hardware-software integration and operational control for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems, identify the correct engineering relationship:",
    "questionAr": "[السؤال 59] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
    "correctAnswerAr": "تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
    "explanationEn": "Engineering Analysis: OPC UA nodes represent industrial entities in an AddressSpace graph with typed References (Hierarchical, Non-Hierarchical) and rich ObjectTypes defining robot axes, temperatures, and production states.",
    "explanationAr": "التحليل الهندسي المعتمد: تمثل عقد OPC UA الكيانات الصناعية في فضاء عنونة مترابط بروابط مرجعية محددة الأنواع، مع تعريفات دقيقة لمحاور الروبوت ودرجات الحرارة وحالات الإنتاج.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  }
],
  hots: [
  {
    "id": "egbac_robotics_ch4_hots_1",
    "titleEn": "[HOTS] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Advanced Synthesis 1",
    "titleAr": "[تفكير عليا] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - تركيب متقدم 1",
    "questionEn": "[Question 1 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance. Determine the mathematically validated result:",
    "questionAr": "[السؤال 1 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$)."
    ],
    "optionsAr": [
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "correctAnswerAr": "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "explanationEn": "Detailed Quantitative Solution: A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_2",
    "titleEn": "[HOTS] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Advanced Synthesis 2",
    "titleAr": "[تفكير عليا] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - تركيب متقدم 2",
    "questionEn": "[Question 2 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF. Determine the mathematically validated result:",
    "questionAr": "[السؤال 2 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only."
    ],
    "optionsAr": [
      "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "correctAnswerAr": "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "explanationEn": "Detailed Quantitative Solution: For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_3",
    "titleEn": "[HOTS] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Advanced Synthesis 3",
    "titleAr": "[تفكير عليا] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - تركيب متقدم 3",
    "questionEn": "[Question 3 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems. Determine the mathematically validated result:",
    "questionAr": "[السؤال 3 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
    "correctAnswerAr": "تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
    "explanationEn": "Detailed Quantitative Solution: Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_4",
    "titleEn": "[HOTS] Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer - Advanced Synthesis 4",
    "titleAr": "[تفكير عليا] محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع - تركيب متقدم 4",
    "questionEn": "[Question 4 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer. Determine the mathematically validated result:",
    "questionAr": "[السؤال 4 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices."
    ],
    "optionsAr": [
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
    "correctAnswerAr": "تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
    "explanationEn": "Detailed Quantitative Solution: Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_5",
    "titleEn": "[HOTS] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Advanced Synthesis 5",
    "titleAr": "[تفكير عليا] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - تركيب متقدم 5",
    "questionEn": "[Question 5 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance. Determine the mathematically validated result:",
    "questionAr": "[السؤال 5 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$)."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "correctAnswerAr": "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "explanationEn": "Detailed Quantitative Solution: A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_6",
    "titleEn": "[HOTS] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Advanced Synthesis 6",
    "titleAr": "[تفكير عليا] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - تركيب متقدم 6",
    "questionEn": "[Question 6 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF. Determine the mathematically validated result:",
    "questionAr": "[السؤال 6 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "correctAnswerAr": "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "explanationEn": "Detailed Quantitative Solution: For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_7",
    "titleEn": "[HOTS] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Advanced Synthesis 7",
    "titleAr": "[تفكير عليا] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - تركيب متقدم 7",
    "questionEn": "[Question 7 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems. Determine the mathematically validated result:",
    "questionAr": "[السؤال 7 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light."
    ],
    "optionsAr": [
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
    "correctAnswerAr": "تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
    "explanationEn": "Detailed Quantitative Solution: Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_8",
    "titleEn": "[HOTS] Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer - Advanced Synthesis 8",
    "titleAr": "[تفكير عليا] محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع - تركيب متقدم 8",
    "questionEn": "[Question 8 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer. Determine the mathematically validated result:",
    "questionAr": "[السؤال 8 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages."
    ],
    "optionsAr": [
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
    "correctAnswerAr": "تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
    "explanationEn": "Detailed Quantitative Solution: Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_9",
    "titleEn": "[HOTS] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Advanced Synthesis 9",
    "titleAr": "[تفكير عليا] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - تركيب متقدم 9",
    "questionEn": "[Question 9 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance. Determine the mathematically validated result:",
    "questionAr": "[السؤال 9 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$)."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "correctAnswerAr": "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "explanationEn": "Detailed Quantitative Solution: A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_10",
    "titleEn": "[HOTS] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Advanced Synthesis 10",
    "titleAr": "[تفكير عليا] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - تركيب متقدم 10",
    "questionEn": "[Question 10 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF. Determine the mathematically validated result:",
    "questionAr": "[السؤال 10 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "correctAnswerAr": "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "explanationEn": "Detailed Quantitative Solution: For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_11",
    "titleEn": "[HOTS] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Advanced Synthesis 11",
    "titleAr": "[تفكير عليا] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - تركيب متقدم 11",
    "questionEn": "[Question 11 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems. Determine the mathematically validated result:",
    "questionAr": "[السؤال 11 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction."
    ],
    "optionsAr": [
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
    "correctAnswerAr": "تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
    "explanationEn": "Detailed Quantitative Solution: Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_12",
    "titleEn": "[HOTS] Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer - Advanced Synthesis 12",
    "titleAr": "[تفكير عليا] محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع - تركيب متقدم 12",
    "questionEn": "[Question 12 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer. Determine the mathematically validated result:",
    "questionAr": "[السؤال 12 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
    "correctAnswerAr": "تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
    "explanationEn": "Detailed Quantitative Solution: Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_13",
    "titleEn": "[HOTS] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Advanced Synthesis 13",
    "titleAr": "[تفكير عليا] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - تركيب متقدم 13",
    "questionEn": "[Question 13 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance. Determine the mathematically validated result:",
    "questionAr": "[السؤال 13 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$)."
    ],
    "optionsAr": [
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "correctAnswerAr": "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "explanationEn": "Detailed Quantitative Solution: A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_14",
    "titleEn": "[HOTS] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Advanced Synthesis 14",
    "titleAr": "[تفكير عليا] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - تركيب متقدم 14",
    "questionEn": "[Question 14 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF. Determine the mathematically validated result:",
    "questionAr": "[السؤال 14 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends."
    ],
    "optionsAr": [
      "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "correctAnswerAr": "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "explanationEn": "Detailed Quantitative Solution: For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_15",
    "titleEn": "[HOTS] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Advanced Synthesis 15",
    "titleAr": "[تفكير عليا] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - تركيب متقدم 15",
    "questionEn": "[Question 15 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems. Determine the mathematically validated result:",
    "questionAr": "[السؤال 15 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
    "correctAnswerAr": "تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
    "explanationEn": "Detailed Quantitative Solution: Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_16",
    "titleEn": "[HOTS] Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer - Advanced Synthesis 16",
    "titleAr": "[تفكير عليا] محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع - تركيب متقدم 16",
    "questionEn": "[Question 16 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer. Determine the mathematically validated result:",
    "questionAr": "[السؤال 16 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion."
    ],
    "optionsAr": [
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
    "correctAnswerAr": "تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
    "explanationEn": "Detailed Quantitative Solution: Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_17",
    "titleEn": "[HOTS] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Advanced Synthesis 17",
    "titleAr": "[تفكير عليا] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - تركيب متقدم 17",
    "questionEn": "[Question 17 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance. Determine the mathematically validated result:",
    "questionAr": "[السؤال 17 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$)."
    ],
    "optionsAr": [
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "correctAnswerAr": "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "explanationEn": "Detailed Quantitative Solution: A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_18",
    "titleEn": "[HOTS] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Advanced Synthesis 18",
    "titleAr": "[تفكير عليا] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - تركيب متقدم 18",
    "questionEn": "[Question 18 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF. Determine the mathematically validated result:",
    "questionAr": "[السؤال 18 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "correctAnswerAr": "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "explanationEn": "Detailed Quantitative Solution: For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_19",
    "titleEn": "[HOTS] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Advanced Synthesis 19",
    "titleAr": "[تفكير عليا] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - تركيب متقدم 19",
    "questionEn": "[Question 19 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems. Determine the mathematically validated result:",
    "questionAr": "[السؤال 19 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices."
    ],
    "optionsAr": [
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
    "correctAnswerAr": "تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
    "explanationEn": "Detailed Quantitative Solution: Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_20",
    "titleEn": "[HOTS] Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer - Advanced Synthesis 20",
    "titleAr": "[تفكير عليا] محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع - تركيب متقدم 20",
    "questionEn": "[Question 20 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer. Determine the mathematically validated result:",
    "questionAr": "[السؤال 20 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
    "correctAnswerAr": "تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
    "explanationEn": "Detailed Quantitative Solution: Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_21",
    "titleEn": "[HOTS] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Advanced Synthesis 21",
    "titleAr": "[تفكير عليا] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - تركيب متقدم 21",
    "questionEn": "[Question 21 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance. Determine the mathematically validated result:",
    "questionAr": "[السؤال 21 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$)."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "correctAnswerAr": "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "explanationEn": "Detailed Quantitative Solution: A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_22",
    "titleEn": "[HOTS] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Advanced Synthesis 22",
    "titleAr": "[تفكير عليا] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - تركيب متقدم 22",
    "questionEn": "[Question 22 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF. Determine the mathematically validated result:",
    "questionAr": "[السؤال 22 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light."
    ],
    "optionsAr": [
      "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "correctAnswerAr": "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "explanationEn": "Detailed Quantitative Solution: For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_23",
    "titleEn": "[HOTS] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Advanced Synthesis 23",
    "titleAr": "[تفكير عليا] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - تركيب متقدم 23",
    "questionEn": "[Question 23 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems. Determine the mathematically validated result:",
    "questionAr": "[السؤال 23 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages."
    ],
    "optionsAr": [
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
    "correctAnswerAr": "تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
    "explanationEn": "Detailed Quantitative Solution: Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_24",
    "titleEn": "[HOTS] Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer - Advanced Synthesis 24",
    "titleAr": "[تفكير عليا] محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع - تركيب متقدم 24",
    "questionEn": "[Question 24 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer. Determine the mathematically validated result:",
    "questionAr": "[السؤال 24 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
    "correctAnswerAr": "تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
    "explanationEn": "Detailed Quantitative Solution: Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_25",
    "titleEn": "[HOTS] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Advanced Synthesis 25",
    "titleAr": "[تفكير عليا] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - تركيب متقدم 25",
    "questionEn": "[Question 25 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance. Determine the mathematically validated result:",
    "questionAr": "[السؤال 25 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$)."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "correctAnswerAr": "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "explanationEn": "Detailed Quantitative Solution: A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_26",
    "titleEn": "[HOTS] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Advanced Synthesis 26",
    "titleAr": "[تفكير عليا] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - تركيب متقدم 26",
    "questionEn": "[Question 26 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF. Determine the mathematically validated result:",
    "questionAr": "[السؤال 26 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction."
    ],
    "optionsAr": [
      "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "correctAnswerAr": "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "explanationEn": "Detailed Quantitative Solution: For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_27",
    "titleEn": "[HOTS] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Advanced Synthesis 27",
    "titleAr": "[تفكير عليا] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - تركيب متقدم 27",
    "questionEn": "[Question 27 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems. Determine the mathematically validated result:",
    "questionAr": "[السؤال 27 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
    "correctAnswerAr": "تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
    "explanationEn": "Detailed Quantitative Solution: Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_28",
    "titleEn": "[HOTS] Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer - Advanced Synthesis 28",
    "titleAr": "[تفكير عليا] محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع - تركيب متقدم 28",
    "questionEn": "[Question 28 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer. Determine the mathematically validated result:",
    "questionAr": "[السؤال 28 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting."
    ],
    "optionsAr": [
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
    "correctAnswerAr": "تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
    "explanationEn": "Detailed Quantitative Solution: Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_29",
    "titleEn": "[HOTS] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Advanced Synthesis 29",
    "titleAr": "[تفكير عليا] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - تركيب متقدم 29",
    "questionEn": "[Question 29 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance. Determine the mathematically validated result:",
    "questionAr": "[السؤال 29 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$)."
    ],
    "optionsAr": [
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "correctAnswerAr": "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "explanationEn": "Detailed Quantitative Solution: A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_30",
    "titleEn": "[HOTS] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Advanced Synthesis 30",
    "titleAr": "[تفكير عليا] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - تركيب متقدم 30",
    "questionEn": "[Question 30 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF. Determine the mathematically validated result:",
    "questionAr": "[السؤال 30 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "correctAnswerAr": "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "explanationEn": "Detailed Quantitative Solution: For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_31",
    "titleEn": "[HOTS] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Advanced Synthesis 31",
    "titleAr": "[تفكير عليا] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - تركيب متقدم 31",
    "questionEn": "[Question 31 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems. Determine the mathematically validated result:",
    "questionAr": "[السؤال 31 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion."
    ],
    "optionsAr": [
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
    "correctAnswerAr": "تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
    "explanationEn": "Detailed Quantitative Solution: Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_32",
    "titleEn": "[HOTS] Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer - Advanced Synthesis 32",
    "titleAr": "[تفكير عليا] محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع - تركيب متقدم 32",
    "questionEn": "[Question 32 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer. Determine the mathematically validated result:",
    "questionAr": "[السؤال 32 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only."
    ],
    "optionsAr": [
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
    "correctAnswerAr": "تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
    "explanationEn": "Detailed Quantitative Solution: Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_33",
    "titleEn": "[HOTS] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Advanced Synthesis 33",
    "titleAr": "[تفكير عليا] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - تركيب متقدم 33",
    "questionEn": "[Question 33 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance. Determine the mathematically validated result:",
    "questionAr": "[السؤال 33 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$)."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "correctAnswerAr": "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "explanationEn": "Detailed Quantitative Solution: A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_34",
    "titleEn": "[HOTS] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Advanced Synthesis 34",
    "titleAr": "[تفكير عليا] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - تركيب متقدم 34",
    "questionEn": "[Question 34 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF. Determine the mathematically validated result:",
    "questionAr": "[السؤال 34 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices."
    ],
    "optionsAr": [
      "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "correctAnswerAr": "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "explanationEn": "Detailed Quantitative Solution: For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_35",
    "titleEn": "[HOTS] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Advanced Synthesis 35",
    "titleAr": "[تفكير عليا] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - تركيب متقدم 35",
    "questionEn": "[Question 35 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems. Determine the mathematically validated result:",
    "questionAr": "[السؤال 35 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
    "correctAnswerAr": "تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
    "explanationEn": "Detailed Quantitative Solution: Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_36",
    "titleEn": "[HOTS] Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer - Advanced Synthesis 36",
    "titleAr": "[تفكير عليا] محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع - تركيب متقدم 36",
    "questionEn": "[Question 36 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer. Determine the mathematically validated result:",
    "questionAr": "[السؤال 36 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
    "correctAnswerAr": "تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
    "explanationEn": "Detailed Quantitative Solution: Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_37",
    "titleEn": "[HOTS] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Advanced Synthesis 37",
    "titleAr": "[تفكير عليا] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - تركيب متقدم 37",
    "questionEn": "[Question 37 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance. Determine the mathematically validated result:",
    "questionAr": "[السؤال 37 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$)."
    ],
    "optionsAr": [
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "correctAnswerAr": "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "explanationEn": "Detailed Quantitative Solution: A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_38",
    "titleEn": "[HOTS] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Advanced Synthesis 38",
    "titleAr": "[تفكير عليا] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - تركيب متقدم 38",
    "questionEn": "[Question 38 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF. Determine the mathematically validated result:",
    "questionAr": "[السؤال 38 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages."
    ],
    "optionsAr": [
      "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "correctAnswerAr": "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "explanationEn": "Detailed Quantitative Solution: For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_39",
    "titleEn": "[HOTS] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Advanced Synthesis 39",
    "titleAr": "[تفكير عليا] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - تركيب متقدم 39",
    "questionEn": "[Question 39 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems. Determine the mathematically validated result:",
    "questionAr": "[السؤال 39 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
    "correctAnswerAr": "تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
    "explanationEn": "Detailed Quantitative Solution: Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_40",
    "titleEn": "[HOTS] Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer - Advanced Synthesis 40",
    "titleAr": "[تفكير عليا] محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع - تركيب متقدم 40",
    "questionEn": "[Question 40 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer. Determine the mathematically validated result:",
    "questionAr": "[السؤال 40 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
    "correctAnswerAr": "تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
    "explanationEn": "Detailed Quantitative Solution: Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_41",
    "titleEn": "[HOTS] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Advanced Synthesis 41",
    "titleAr": "[تفكير عليا] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - تركيب متقدم 41",
    "questionEn": "[Question 41 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance. Determine the mathematically validated result:",
    "questionAr": "[السؤال 41 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$)."
    ],
    "optionsAr": [
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "correctAnswerAr": "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "explanationEn": "Detailed Quantitative Solution: A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_42",
    "titleEn": "[HOTS] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Advanced Synthesis 42",
    "titleAr": "[تفكير عليا] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - تركيب متقدم 42",
    "questionEn": "[Question 42 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF. Determine the mathematically validated result:",
    "questionAr": "[السؤال 42 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "correctAnswerAr": "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "explanationEn": "Detailed Quantitative Solution: For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_43",
    "titleEn": "[HOTS] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Advanced Synthesis 43",
    "titleAr": "[تفكير عليا] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - تركيب متقدم 43",
    "questionEn": "[Question 43 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems. Determine the mathematically validated result:",
    "questionAr": "[السؤال 43 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting."
    ],
    "optionsAr": [
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
    "correctAnswerAr": "تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
    "explanationEn": "Detailed Quantitative Solution: Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_44",
    "titleEn": "[HOTS] Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer - Advanced Synthesis 44",
    "titleAr": "[تفكير عليا] محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع - تركيب متقدم 44",
    "questionEn": "[Question 44 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer. Determine the mathematically validated result:",
    "questionAr": "[السؤال 44 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends."
    ],
    "optionsAr": [
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
    "correctAnswerAr": "تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
    "explanationEn": "Detailed Quantitative Solution: Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_45",
    "titleEn": "[HOTS] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Advanced Synthesis 45",
    "titleAr": "[تفكير عليا] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - تركيب متقدم 45",
    "questionEn": "[Question 45 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance. Determine the mathematically validated result:",
    "questionAr": "[السؤال 45 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$)."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "correctAnswerAr": "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "explanationEn": "Detailed Quantitative Solution: A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_46",
    "titleEn": "[HOTS] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Advanced Synthesis 46",
    "titleAr": "[تفكير عليا] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - تركيب متقدم 46",
    "questionEn": "[Question 46 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF. Determine the mathematically validated result:",
    "questionAr": "[السؤال 46 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion."
    ],
    "optionsAr": [
      "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "correctAnswerAr": "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "explanationEn": "Detailed Quantitative Solution: For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_47",
    "titleEn": "[HOTS] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Advanced Synthesis 47",
    "titleAr": "[تفكير عليا] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - تركيب متقدم 47",
    "questionEn": "[Question 47 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems. Determine the mathematically validated result:",
    "questionAr": "[السؤال 47 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only."
    ],
    "optionsAr": [
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
    "correctAnswerAr": "تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
    "explanationEn": "Detailed Quantitative Solution: Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_48",
    "titleEn": "[HOTS] Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer - Advanced Synthesis 48",
    "titleAr": "[تفكير عليا] محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع - تركيب متقدم 48",
    "questionEn": "[Question 48 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer. Determine the mathematically validated result:",
    "questionAr": "[السؤال 48 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
    "correctAnswerAr": "تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
    "explanationEn": "Detailed Quantitative Solution: Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_49",
    "titleEn": "[HOTS] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Advanced Synthesis 49",
    "titleAr": "[تفكير عليا] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - تركيب متقدم 49",
    "questionEn": "[Question 49 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance. Determine the mathematically validated result:",
    "questionAr": "[السؤال 49 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$)."
    ],
    "optionsAr": [
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "correctAnswerAr": "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "explanationEn": "Detailed Quantitative Solution: A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_50",
    "titleEn": "[HOTS] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Advanced Synthesis 50",
    "titleAr": "[تفكير عليا] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - تركيب متقدم 50",
    "questionEn": "[Question 50 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF. Determine the mathematically validated result:",
    "questionAr": "[السؤال 50 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "correctAnswerAr": "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "explanationEn": "Detailed Quantitative Solution: For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_51",
    "titleEn": "[HOTS] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Advanced Synthesis 51",
    "titleAr": "[تفكير عليا] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - تركيب متقدم 51",
    "questionEn": "[Question 51 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems. Determine the mathematically validated result:",
    "questionAr": "[السؤال 51 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
    "correctAnswerAr": "تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
    "explanationEn": "Detailed Quantitative Solution: Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_52",
    "titleEn": "[HOTS] Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer - Advanced Synthesis 52",
    "titleAr": "[تفكير عليا] محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع - تركيب متقدم 52",
    "questionEn": "[Question 52 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer. Determine the mathematically validated result:",
    "questionAr": "[السؤال 52 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light."
    ],
    "optionsAr": [
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
    "correctAnswerAr": "تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
    "explanationEn": "Detailed Quantitative Solution: Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_53",
    "titleEn": "[HOTS] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Advanced Synthesis 53",
    "titleAr": "[تفكير عليا] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - تركيب متقدم 53",
    "questionEn": "[Question 53 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance. Determine the mathematically validated result:",
    "questionAr": "[السؤال 53 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$)."
    ],
    "optionsAr": [
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "correctAnswerAr": "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "explanationEn": "Detailed Quantitative Solution: A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_54",
    "titleEn": "[HOTS] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Advanced Synthesis 54",
    "titleAr": "[تفكير عليا] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - تركيب متقدم 54",
    "questionEn": "[Question 54 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF. Determine the mathematically validated result:",
    "questionAr": "[السؤال 54 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "correctAnswerAr": "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "explanationEn": "Detailed Quantitative Solution: For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_55",
    "titleEn": "[HOTS] OPC UA Semantic Information Models & Industrial Cyber-Physical Systems - Advanced Synthesis 55",
    "titleAr": "[تفكير عليا] نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية - تركيب متقدم 55",
    "questionEn": "[Question 55 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems. Determine the mathematically validated result:",
    "questionAr": "[السؤال 55 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
    "correctAnswerAr": "تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
    "explanationEn": "Detailed Quantitative Solution: Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_56",
    "titleEn": "[HOTS] Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer - Advanced Synthesis 56",
    "titleAr": "[تفكير عليا] محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع - تركيب متقدم 56",
    "questionEn": "[Question 56 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer. Determine the mathematically validated result:",
    "questionAr": "[السؤال 56 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction."
    ],
    "optionsAr": [
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
    "correctAnswerAr": "تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
    "explanationEn": "Detailed Quantitative Solution: Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_57",
    "titleEn": "[HOTS] Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance - Advanced Synthesis 57",
    "titleAr": "[تفكير عليا] التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق - تركيب متقدم 57",
    "questionEn": "[Question 57 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance. Determine the mathematically validated result:",
    "questionAr": "[السؤال 57 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$)."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "correctAnswerAr": "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "explanationEn": "Detailed Quantitative Solution: A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_hots_58",
    "titleEn": "[HOTS] Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF - Advanced Synthesis 58",
    "titleAr": "[تفكير عليا] إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات - تركيب متقدم 58",
    "questionEn": "[Question 58 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF. Determine the mathematically validated result:",
    "questionAr": "[السؤال 58 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting."
    ],
    "optionsAr": [
      "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "correctAnswerAr": "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "explanationEn": "Detailed Quantitative Solution: For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  }
]
};
