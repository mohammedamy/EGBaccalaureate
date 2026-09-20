import type { QuestionBank } from '../../../types/curriculum';

export const egBacRoboticsCh2Databank: QuestionBank = {
  easy: [
  {
    "id": "egbac_robotics_ch2_easy_1",
    "titleEn": "[EASY] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Review 1",
    "titleAr": "[مستوى أساسي] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - سؤال 1",
    "questionEn": "[Question 1] In the context of Egyptian STEM robotics and mechatronics regarding Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 1] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
    "correctAnswerAr": "يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
    "explanationEn": "Correct Principle: The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
    "explanationAr": "المبدأ العلمي الصحيح: يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_2",
    "titleEn": "[EASY] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Review 2",
    "titleAr": "[مستوى أساسي] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - سؤال 2",
    "questionEn": "[Question 2] In the context of Egyptian STEM robotics and mechatronics regarding 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 2] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
    "correctAnswerAr": "تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
    "explanationEn": "Correct Principle: Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
    "explanationAr": "المبدأ العلمي الصحيح: تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_3",
    "titleEn": "[EASY] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Review 3",
    "titleAr": "[مستوى أساسي] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - سؤال 3",
    "questionEn": "[Question 3] In the context of Egyptian STEM robotics and mechatronics regarding Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 3] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Visual-Inertial Odometry (VIO) tightly couples camera image feature tracks with high-rate IMU accelerometer and gyroscope pre-integration to estimate 6-DOF camera trajectory in GPS-denied environments.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "يدمج قياس المسافات البصري العطالي (VIO) مسارات معالم الصور مع التكامل المسبق لبيانات IMU عالية السرعة لتقدير مسار الروبوت بست درجات حرية في غياب GPS.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Visual-Inertial Odometry (VIO) tightly couples camera image feature tracks with high-rate IMU accelerometer and gyroscope pre-integration to estimate 6-DOF camera trajectory in GPS-denied environments.",
    "correctAnswerAr": "يدمج قياس المسافات البصري العطالي (VIO) مسارات معالم الصور مع التكامل المسبق لبيانات IMU عالية السرعة لتقدير مسار الروبوت بست درجات حرية في غياب GPS.",
    "explanationEn": "Correct Principle: Visual-Inertial Odometry (VIO) tightly couples camera image feature tracks with high-rate IMU accelerometer and gyroscope pre-integration to estimate 6-DOF camera trajectory in GPS-denied environments.",
    "explanationAr": "المبدأ العلمي الصحيح: يدمج قياس المسافات البصري العطالي (VIO) مسارات معالم الصور مع التكامل المسبق لبيانات IMU عالية السرعة لتقدير مسار الروبوت بست درجات حرية في غياب GPS.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_4",
    "titleEn": "[EASY] 6D Object Pose Estimation & Deep Learning Robotic Grasping - Review 4",
    "titleAr": "[مستوى أساسي] تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق - سؤال 4",
    "questionEn": "[Question 4] In the context of Egyptian STEM robotics and mechatronics regarding 6D Object Pose Estimation & Deep Learning Robotic Grasping, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 4] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Robotic manipulation requires estimating the full 6D pose (3D position $T \\in \\mathbb{R}^3$ and 3D orientation $R \\in SO(3)$) of target workpieces relative to the robot base frame."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يتطلب التقاط الروبوت للأجسام تقدير موضعها وتوجيهها الكامل بست درجات حرية (الموضع ثلاثي الأبعاد $T$ ومصفوفة الدوران ثلاثية الأبعاد $R$) نسبة لقاعدة الروبوت."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Robotic manipulation requires estimating the full 6D pose (3D position $T \\in \\mathbb{R}^3$ and 3D orientation $R \\in SO(3)$) of target workpieces relative to the robot base frame.",
    "correctAnswerAr": "يتطلب التقاط الروبوت للأجسام تقدير موضعها وتوجيهها الكامل بست درجات حرية (الموضع ثلاثي الأبعاد $T$ ومصفوفة الدوران ثلاثية الأبعاد $R$) نسبة لقاعدة الروبوت.",
    "explanationEn": "Correct Principle: Robotic manipulation requires estimating the full 6D pose (3D position $T \\in \\mathbb{R}^3$ and 3D orientation $R \\in SO(3)$) of target workpieces relative to the robot base frame.",
    "explanationAr": "المبدأ العلمي الصحيح: يتطلب التقاط الروبوت للأجسام تقدير موضعها وتوجيهها الكامل بست درجات حرية (الموضع ثلاثي الأبعاد $T$ ومصفوفة الدوران ثلاثية الأبعاد $R$) نسبة لقاعدة الروبوت.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_5",
    "titleEn": "[EASY] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Review 5",
    "titleAr": "[مستوى أساسي] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - سؤال 5",
    "questionEn": "[Question 5] In the context of Egyptian STEM robotics and mechatronics regarding Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 5] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
    "correctAnswerAr": "يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
    "explanationEn": "Correct Principle: The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
    "explanationAr": "المبدأ العلمي الصحيح: يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_6",
    "titleEn": "[EASY] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Review 6",
    "titleAr": "[مستوى أساسي] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - سؤال 6",
    "questionEn": "[Question 6] In the context of Egyptian STEM robotics and mechatronics regarding 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 6] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
    "correctAnswerAr": "تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
    "explanationEn": "Correct Principle: Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
    "explanationAr": "المبدأ العلمي الصحيح: تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_7",
    "titleEn": "[EASY] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Review 7",
    "titleAr": "[مستوى أساسي] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - سؤال 7",
    "questionEn": "[Question 7] In the context of Egyptian STEM robotics and mechatronics regarding Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 7] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "Visual-Inertial Odometry (VIO) tightly couples camera image feature tracks with high-rate IMU accelerometer and gyroscope pre-integration to estimate 6-DOF camera trajectory in GPS-denied environments.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "يدمج قياس المسافات البصري العطالي (VIO) مسارات معالم الصور مع التكامل المسبق لبيانات IMU عالية السرعة لتقدير مسار الروبوت بست درجات حرية في غياب GPS.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Visual-Inertial Odometry (VIO) tightly couples camera image feature tracks with high-rate IMU accelerometer and gyroscope pre-integration to estimate 6-DOF camera trajectory in GPS-denied environments.",
    "correctAnswerAr": "يدمج قياس المسافات البصري العطالي (VIO) مسارات معالم الصور مع التكامل المسبق لبيانات IMU عالية السرعة لتقدير مسار الروبوت بست درجات حرية في غياب GPS.",
    "explanationEn": "Correct Principle: Visual-Inertial Odometry (VIO) tightly couples camera image feature tracks with high-rate IMU accelerometer and gyroscope pre-integration to estimate 6-DOF camera trajectory in GPS-denied environments.",
    "explanationAr": "المبدأ العلمي الصحيح: يدمج قياس المسافات البصري العطالي (VIO) مسارات معالم الصور مع التكامل المسبق لبيانات IMU عالية السرعة لتقدير مسار الروبوت بست درجات حرية في غياب GPS.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_8",
    "titleEn": "[EASY] 6D Object Pose Estimation & Deep Learning Robotic Grasping - Review 8",
    "titleAr": "[مستوى أساسي] تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق - سؤال 8",
    "questionEn": "[Question 8] In the context of Egyptian STEM robotics and mechatronics regarding 6D Object Pose Estimation & Deep Learning Robotic Grasping, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 8] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "Robotic manipulation requires estimating the full 6D pose (3D position $T \\in \\mathbb{R}^3$ and 3D orientation $R \\in SO(3)$) of target workpieces relative to the robot base frame."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "يتطلب التقاط الروبوت للأجسام تقدير موضعها وتوجيهها الكامل بست درجات حرية (الموضع ثلاثي الأبعاد $T$ ومصفوفة الدوران ثلاثية الأبعاد $R$) نسبة لقاعدة الروبوت."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Robotic manipulation requires estimating the full 6D pose (3D position $T \\in \\mathbb{R}^3$ and 3D orientation $R \\in SO(3)$) of target workpieces relative to the robot base frame.",
    "correctAnswerAr": "يتطلب التقاط الروبوت للأجسام تقدير موضعها وتوجيهها الكامل بست درجات حرية (الموضع ثلاثي الأبعاد $T$ ومصفوفة الدوران ثلاثية الأبعاد $R$) نسبة لقاعدة الروبوت.",
    "explanationEn": "Correct Principle: Robotic manipulation requires estimating the full 6D pose (3D position $T \\in \\mathbb{R}^3$ and 3D orientation $R \\in SO(3)$) of target workpieces relative to the robot base frame.",
    "explanationAr": "المبدأ العلمي الصحيح: يتطلب التقاط الروبوت للأجسام تقدير موضعها وتوجيهها الكامل بست درجات حرية (الموضع ثلاثي الأبعاد $T$ ومصفوفة الدوران ثلاثية الأبعاد $R$) نسبة لقاعدة الروبوت.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_9",
    "titleEn": "[EASY] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Review 9",
    "titleAr": "[مستوى أساسي] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - سؤال 9",
    "questionEn": "[Question 9] In the context of Egyptian STEM robotics and mechatronics regarding Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 9] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
    "correctAnswerAr": "يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
    "explanationEn": "Correct Principle: The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
    "explanationAr": "المبدأ العلمي الصحيح: يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_10",
    "titleEn": "[EASY] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Review 10",
    "titleAr": "[مستوى أساسي] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - سؤال 10",
    "questionEn": "[Question 10] In the context of Egyptian STEM robotics and mechatronics regarding 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 10] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
    "correctAnswerAr": "تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
    "explanationEn": "Correct Principle: Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
    "explanationAr": "المبدأ العلمي الصحيح: تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_11",
    "titleEn": "[EASY] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Review 11",
    "titleAr": "[مستوى أساسي] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - سؤال 11",
    "questionEn": "[Question 11] In the context of Egyptian STEM robotics and mechatronics regarding Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 11] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Visual-Inertial Odometry (VIO) tightly couples camera image feature tracks with high-rate IMU accelerometer and gyroscope pre-integration to estimate 6-DOF camera trajectory in GPS-denied environments.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "يدمج قياس المسافات البصري العطالي (VIO) مسارات معالم الصور مع التكامل المسبق لبيانات IMU عالية السرعة لتقدير مسار الروبوت بست درجات حرية في غياب GPS.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Visual-Inertial Odometry (VIO) tightly couples camera image feature tracks with high-rate IMU accelerometer and gyroscope pre-integration to estimate 6-DOF camera trajectory in GPS-denied environments.",
    "correctAnswerAr": "يدمج قياس المسافات البصري العطالي (VIO) مسارات معالم الصور مع التكامل المسبق لبيانات IMU عالية السرعة لتقدير مسار الروبوت بست درجات حرية في غياب GPS.",
    "explanationEn": "Correct Principle: Visual-Inertial Odometry (VIO) tightly couples camera image feature tracks with high-rate IMU accelerometer and gyroscope pre-integration to estimate 6-DOF camera trajectory in GPS-denied environments.",
    "explanationAr": "المبدأ العلمي الصحيح: يدمج قياس المسافات البصري العطالي (VIO) مسارات معالم الصور مع التكامل المسبق لبيانات IMU عالية السرعة لتقدير مسار الروبوت بست درجات حرية في غياب GPS.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_12",
    "titleEn": "[EASY] 6D Object Pose Estimation & Deep Learning Robotic Grasping - Review 12",
    "titleAr": "[مستوى أساسي] تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق - سؤال 12",
    "questionEn": "[Question 12] In the context of Egyptian STEM robotics and mechatronics regarding 6D Object Pose Estimation & Deep Learning Robotic Grasping, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 12] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "Robotic manipulation requires estimating the full 6D pose (3D position $T \\in \\mathbb{R}^3$ and 3D orientation $R \\in SO(3)$) of target workpieces relative to the robot base frame."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "يتطلب التقاط الروبوت للأجسام تقدير موضعها وتوجيهها الكامل بست درجات حرية (الموضع ثلاثي الأبعاد $T$ ومصفوفة الدوران ثلاثية الأبعاد $R$) نسبة لقاعدة الروبوت."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Robotic manipulation requires estimating the full 6D pose (3D position $T \\in \\mathbb{R}^3$ and 3D orientation $R \\in SO(3)$) of target workpieces relative to the robot base frame.",
    "correctAnswerAr": "يتطلب التقاط الروبوت للأجسام تقدير موضعها وتوجيهها الكامل بست درجات حرية (الموضع ثلاثي الأبعاد $T$ ومصفوفة الدوران ثلاثية الأبعاد $R$) نسبة لقاعدة الروبوت.",
    "explanationEn": "Correct Principle: Robotic manipulation requires estimating the full 6D pose (3D position $T \\in \\mathbb{R}^3$ and 3D orientation $R \\in SO(3)$) of target workpieces relative to the robot base frame.",
    "explanationAr": "المبدأ العلمي الصحيح: يتطلب التقاط الروبوت للأجسام تقدير موضعها وتوجيهها الكامل بست درجات حرية (الموضع ثلاثي الأبعاد $T$ ومصفوفة الدوران ثلاثية الأبعاد $R$) نسبة لقاعدة الروبوت.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_13",
    "titleEn": "[EASY] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Review 13",
    "titleAr": "[مستوى أساسي] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - سؤال 13",
    "questionEn": "[Question 13] In the context of Egyptian STEM robotics and mechatronics regarding Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 13] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
    "correctAnswerAr": "يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
    "explanationEn": "Correct Principle: The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
    "explanationAr": "المبدأ العلمي الصحيح: يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_14",
    "titleEn": "[EASY] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Review 14",
    "titleAr": "[مستوى أساسي] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - سؤال 14",
    "questionEn": "[Question 14] In the context of Egyptian STEM robotics and mechatronics regarding 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 14] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
    "correctAnswerAr": "تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
    "explanationEn": "Correct Principle: Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
    "explanationAr": "المبدأ العلمي الصحيح: تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_15",
    "titleEn": "[EASY] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Review 15",
    "titleAr": "[مستوى أساسي] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - سؤال 15",
    "questionEn": "[Question 15] In the context of Egyptian STEM robotics and mechatronics regarding Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 15] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Visual-Inertial Odometry (VIO) tightly couples camera image feature tracks with high-rate IMU accelerometer and gyroscope pre-integration to estimate 6-DOF camera trajectory in GPS-denied environments.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "يدمج قياس المسافات البصري العطالي (VIO) مسارات معالم الصور مع التكامل المسبق لبيانات IMU عالية السرعة لتقدير مسار الروبوت بست درجات حرية في غياب GPS.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Visual-Inertial Odometry (VIO) tightly couples camera image feature tracks with high-rate IMU accelerometer and gyroscope pre-integration to estimate 6-DOF camera trajectory in GPS-denied environments.",
    "correctAnswerAr": "يدمج قياس المسافات البصري العطالي (VIO) مسارات معالم الصور مع التكامل المسبق لبيانات IMU عالية السرعة لتقدير مسار الروبوت بست درجات حرية في غياب GPS.",
    "explanationEn": "Correct Principle: Visual-Inertial Odometry (VIO) tightly couples camera image feature tracks with high-rate IMU accelerometer and gyroscope pre-integration to estimate 6-DOF camera trajectory in GPS-denied environments.",
    "explanationAr": "المبدأ العلمي الصحيح: يدمج قياس المسافات البصري العطالي (VIO) مسارات معالم الصور مع التكامل المسبق لبيانات IMU عالية السرعة لتقدير مسار الروبوت بست درجات حرية في غياب GPS.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_16",
    "titleEn": "[EASY] 6D Object Pose Estimation & Deep Learning Robotic Grasping - Review 16",
    "titleAr": "[مستوى أساسي] تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق - سؤال 16",
    "questionEn": "[Question 16] In the context of Egyptian STEM robotics and mechatronics regarding 6D Object Pose Estimation & Deep Learning Robotic Grasping, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 16] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Robotic manipulation requires estimating the full 6D pose (3D position $T \\in \\mathbb{R}^3$ and 3D orientation $R \\in SO(3)$) of target workpieces relative to the robot base frame."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "يتطلب التقاط الروبوت للأجسام تقدير موضعها وتوجيهها الكامل بست درجات حرية (الموضع ثلاثي الأبعاد $T$ ومصفوفة الدوران ثلاثية الأبعاد $R$) نسبة لقاعدة الروبوت."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Robotic manipulation requires estimating the full 6D pose (3D position $T \\in \\mathbb{R}^3$ and 3D orientation $R \\in SO(3)$) of target workpieces relative to the robot base frame.",
    "correctAnswerAr": "يتطلب التقاط الروبوت للأجسام تقدير موضعها وتوجيهها الكامل بست درجات حرية (الموضع ثلاثي الأبعاد $T$ ومصفوفة الدوران ثلاثية الأبعاد $R$) نسبة لقاعدة الروبوت.",
    "explanationEn": "Correct Principle: Robotic manipulation requires estimating the full 6D pose (3D position $T \\in \\mathbb{R}^3$ and 3D orientation $R \\in SO(3)$) of target workpieces relative to the robot base frame.",
    "explanationAr": "المبدأ العلمي الصحيح: يتطلب التقاط الروبوت للأجسام تقدير موضعها وتوجيهها الكامل بست درجات حرية (الموضع ثلاثي الأبعاد $T$ ومصفوفة الدوران ثلاثية الأبعاد $R$) نسبة لقاعدة الروبوت.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_17",
    "titleEn": "[EASY] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Review 17",
    "titleAr": "[مستوى أساسي] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - سؤال 17",
    "questionEn": "[Question 17] In the context of Egyptian STEM robotics and mechatronics regarding Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 17] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
    "correctAnswerAr": "يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
    "explanationEn": "Correct Principle: The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
    "explanationAr": "المبدأ العلمي الصحيح: يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_18",
    "titleEn": "[EASY] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Review 18",
    "titleAr": "[مستوى أساسي] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - سؤال 18",
    "questionEn": "[Question 18] In the context of Egyptian STEM robotics and mechatronics regarding 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 18] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
    "correctAnswerAr": "تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
    "explanationEn": "Correct Principle: Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
    "explanationAr": "المبدأ العلمي الصحيح: تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_19",
    "titleEn": "[EASY] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Review 19",
    "titleAr": "[مستوى أساسي] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - سؤال 19",
    "questionEn": "[Question 19] In the context of Egyptian STEM robotics and mechatronics regarding Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 19] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Visual-Inertial Odometry (VIO) tightly couples camera image feature tracks with high-rate IMU accelerometer and gyroscope pre-integration to estimate 6-DOF camera trajectory in GPS-denied environments.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "يدمج قياس المسافات البصري العطالي (VIO) مسارات معالم الصور مع التكامل المسبق لبيانات IMU عالية السرعة لتقدير مسار الروبوت بست درجات حرية في غياب GPS.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Visual-Inertial Odometry (VIO) tightly couples camera image feature tracks with high-rate IMU accelerometer and gyroscope pre-integration to estimate 6-DOF camera trajectory in GPS-denied environments.",
    "correctAnswerAr": "يدمج قياس المسافات البصري العطالي (VIO) مسارات معالم الصور مع التكامل المسبق لبيانات IMU عالية السرعة لتقدير مسار الروبوت بست درجات حرية في غياب GPS.",
    "explanationEn": "Correct Principle: Visual-Inertial Odometry (VIO) tightly couples camera image feature tracks with high-rate IMU accelerometer and gyroscope pre-integration to estimate 6-DOF camera trajectory in GPS-denied environments.",
    "explanationAr": "المبدأ العلمي الصحيح: يدمج قياس المسافات البصري العطالي (VIO) مسارات معالم الصور مع التكامل المسبق لبيانات IMU عالية السرعة لتقدير مسار الروبوت بست درجات حرية في غياب GPS.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_20",
    "titleEn": "[EASY] 6D Object Pose Estimation & Deep Learning Robotic Grasping - Review 20",
    "titleAr": "[مستوى أساسي] تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق - سؤال 20",
    "questionEn": "[Question 20] In the context of Egyptian STEM robotics and mechatronics regarding 6D Object Pose Estimation & Deep Learning Robotic Grasping, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 20] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "Robotic manipulation requires estimating the full 6D pose (3D position $T \\in \\mathbb{R}^3$ and 3D orientation $R \\in SO(3)$) of target workpieces relative to the robot base frame."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "يتطلب التقاط الروبوت للأجسام تقدير موضعها وتوجيهها الكامل بست درجات حرية (الموضع ثلاثي الأبعاد $T$ ومصفوفة الدوران ثلاثية الأبعاد $R$) نسبة لقاعدة الروبوت."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Robotic manipulation requires estimating the full 6D pose (3D position $T \\in \\mathbb{R}^3$ and 3D orientation $R \\in SO(3)$) of target workpieces relative to the robot base frame.",
    "correctAnswerAr": "يتطلب التقاط الروبوت للأجسام تقدير موضعها وتوجيهها الكامل بست درجات حرية (الموضع ثلاثي الأبعاد $T$ ومصفوفة الدوران ثلاثية الأبعاد $R$) نسبة لقاعدة الروبوت.",
    "explanationEn": "Correct Principle: Robotic manipulation requires estimating the full 6D pose (3D position $T \\in \\mathbb{R}^3$ and 3D orientation $R \\in SO(3)$) of target workpieces relative to the robot base frame.",
    "explanationAr": "المبدأ العلمي الصحيح: يتطلب التقاط الروبوت للأجسام تقدير موضعها وتوجيهها الكامل بست درجات حرية (الموضع ثلاثي الأبعاد $T$ ومصفوفة الدوران ثلاثية الأبعاد $R$) نسبة لقاعدة الروبوت.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_21",
    "titleEn": "[EASY] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Review 21",
    "titleAr": "[مستوى أساسي] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - سؤال 21",
    "questionEn": "[Question 21] In the context of Egyptian STEM robotics and mechatronics regarding Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 21] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
    "correctAnswerAr": "يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
    "explanationEn": "Correct Principle: The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
    "explanationAr": "المبدأ العلمي الصحيح: يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_22",
    "titleEn": "[EASY] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Review 22",
    "titleAr": "[مستوى أساسي] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - سؤال 22",
    "questionEn": "[Question 22] In the context of Egyptian STEM robotics and mechatronics regarding 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 22] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
    "correctAnswerAr": "تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
    "explanationEn": "Correct Principle: Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
    "explanationAr": "المبدأ العلمي الصحيح: تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_23",
    "titleEn": "[EASY] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Review 23",
    "titleAr": "[مستوى أساسي] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - سؤال 23",
    "questionEn": "[Question 23] In the context of Egyptian STEM robotics and mechatronics regarding Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 23] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Visual-Inertial Odometry (VIO) tightly couples camera image feature tracks with high-rate IMU accelerometer and gyroscope pre-integration to estimate 6-DOF camera trajectory in GPS-denied environments.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "يدمج قياس المسافات البصري العطالي (VIO) مسارات معالم الصور مع التكامل المسبق لبيانات IMU عالية السرعة لتقدير مسار الروبوت بست درجات حرية في غياب GPS.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Visual-Inertial Odometry (VIO) tightly couples camera image feature tracks with high-rate IMU accelerometer and gyroscope pre-integration to estimate 6-DOF camera trajectory in GPS-denied environments.",
    "correctAnswerAr": "يدمج قياس المسافات البصري العطالي (VIO) مسارات معالم الصور مع التكامل المسبق لبيانات IMU عالية السرعة لتقدير مسار الروبوت بست درجات حرية في غياب GPS.",
    "explanationEn": "Correct Principle: Visual-Inertial Odometry (VIO) tightly couples camera image feature tracks with high-rate IMU accelerometer and gyroscope pre-integration to estimate 6-DOF camera trajectory in GPS-denied environments.",
    "explanationAr": "المبدأ العلمي الصحيح: يدمج قياس المسافات البصري العطالي (VIO) مسارات معالم الصور مع التكامل المسبق لبيانات IMU عالية السرعة لتقدير مسار الروبوت بست درجات حرية في غياب GPS.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_24",
    "titleEn": "[EASY] 6D Object Pose Estimation & Deep Learning Robotic Grasping - Review 24",
    "titleAr": "[مستوى أساسي] تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق - سؤال 24",
    "questionEn": "[Question 24] In the context of Egyptian STEM robotics and mechatronics regarding 6D Object Pose Estimation & Deep Learning Robotic Grasping, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 24] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Robotic manipulation requires estimating the full 6D pose (3D position $T \\in \\mathbb{R}^3$ and 3D orientation $R \\in SO(3)$) of target workpieces relative to the robot base frame."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يتطلب التقاط الروبوت للأجسام تقدير موضعها وتوجيهها الكامل بست درجات حرية (الموضع ثلاثي الأبعاد $T$ ومصفوفة الدوران ثلاثية الأبعاد $R$) نسبة لقاعدة الروبوت."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Robotic manipulation requires estimating the full 6D pose (3D position $T \\in \\mathbb{R}^3$ and 3D orientation $R \\in SO(3)$) of target workpieces relative to the robot base frame.",
    "correctAnswerAr": "يتطلب التقاط الروبوت للأجسام تقدير موضعها وتوجيهها الكامل بست درجات حرية (الموضع ثلاثي الأبعاد $T$ ومصفوفة الدوران ثلاثية الأبعاد $R$) نسبة لقاعدة الروبوت.",
    "explanationEn": "Correct Principle: Robotic manipulation requires estimating the full 6D pose (3D position $T \\in \\mathbb{R}^3$ and 3D orientation $R \\in SO(3)$) of target workpieces relative to the robot base frame.",
    "explanationAr": "المبدأ العلمي الصحيح: يتطلب التقاط الروبوت للأجسام تقدير موضعها وتوجيهها الكامل بست درجات حرية (الموضع ثلاثي الأبعاد $T$ ومصفوفة الدوران ثلاثية الأبعاد $R$) نسبة لقاعدة الروبوت.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_25",
    "titleEn": "[EASY] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Review 25",
    "titleAr": "[مستوى أساسي] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - سؤال 25",
    "questionEn": "[Question 25] In the context of Egyptian STEM robotics and mechatronics regarding Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 25] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
    "correctAnswerAr": "يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
    "explanationEn": "Correct Principle: The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
    "explanationAr": "المبدأ العلمي الصحيح: يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_26",
    "titleEn": "[EASY] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Review 26",
    "titleAr": "[مستوى أساسي] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - سؤال 26",
    "questionEn": "[Question 26] In the context of Egyptian STEM robotics and mechatronics regarding 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 26] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
    "correctAnswerAr": "تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
    "explanationEn": "Correct Principle: Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
    "explanationAr": "المبدأ العلمي الصحيح: تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_27",
    "titleEn": "[EASY] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Review 27",
    "titleAr": "[مستوى أساسي] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - سؤال 27",
    "questionEn": "[Question 27] In the context of Egyptian STEM robotics and mechatronics regarding Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 27] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "Visual-Inertial Odometry (VIO) tightly couples camera image feature tracks with high-rate IMU accelerometer and gyroscope pre-integration to estimate 6-DOF camera trajectory in GPS-denied environments.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "يدمج قياس المسافات البصري العطالي (VIO) مسارات معالم الصور مع التكامل المسبق لبيانات IMU عالية السرعة لتقدير مسار الروبوت بست درجات حرية في غياب GPS.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Visual-Inertial Odometry (VIO) tightly couples camera image feature tracks with high-rate IMU accelerometer and gyroscope pre-integration to estimate 6-DOF camera trajectory in GPS-denied environments.",
    "correctAnswerAr": "يدمج قياس المسافات البصري العطالي (VIO) مسارات معالم الصور مع التكامل المسبق لبيانات IMU عالية السرعة لتقدير مسار الروبوت بست درجات حرية في غياب GPS.",
    "explanationEn": "Correct Principle: Visual-Inertial Odometry (VIO) tightly couples camera image feature tracks with high-rate IMU accelerometer and gyroscope pre-integration to estimate 6-DOF camera trajectory in GPS-denied environments.",
    "explanationAr": "المبدأ العلمي الصحيح: يدمج قياس المسافات البصري العطالي (VIO) مسارات معالم الصور مع التكامل المسبق لبيانات IMU عالية السرعة لتقدير مسار الروبوت بست درجات حرية في غياب GPS.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_28",
    "titleEn": "[EASY] 6D Object Pose Estimation & Deep Learning Robotic Grasping - Review 28",
    "titleAr": "[مستوى أساسي] تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق - سؤال 28",
    "questionEn": "[Question 28] In the context of Egyptian STEM robotics and mechatronics regarding 6D Object Pose Estimation & Deep Learning Robotic Grasping, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 28] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "Robotic manipulation requires estimating the full 6D pose (3D position $T \\in \\mathbb{R}^3$ and 3D orientation $R \\in SO(3)$) of target workpieces relative to the robot base frame."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "يتطلب التقاط الروبوت للأجسام تقدير موضعها وتوجيهها الكامل بست درجات حرية (الموضع ثلاثي الأبعاد $T$ ومصفوفة الدوران ثلاثية الأبعاد $R$) نسبة لقاعدة الروبوت."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Robotic manipulation requires estimating the full 6D pose (3D position $T \\in \\mathbb{R}^3$ and 3D orientation $R \\in SO(3)$) of target workpieces relative to the robot base frame.",
    "correctAnswerAr": "يتطلب التقاط الروبوت للأجسام تقدير موضعها وتوجيهها الكامل بست درجات حرية (الموضع ثلاثي الأبعاد $T$ ومصفوفة الدوران ثلاثية الأبعاد $R$) نسبة لقاعدة الروبوت.",
    "explanationEn": "Correct Principle: Robotic manipulation requires estimating the full 6D pose (3D position $T \\in \\mathbb{R}^3$ and 3D orientation $R \\in SO(3)$) of target workpieces relative to the robot base frame.",
    "explanationAr": "المبدأ العلمي الصحيح: يتطلب التقاط الروبوت للأجسام تقدير موضعها وتوجيهها الكامل بست درجات حرية (الموضع ثلاثي الأبعاد $T$ ومصفوفة الدوران ثلاثية الأبعاد $R$) نسبة لقاعدة الروبوت.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_29",
    "titleEn": "[EASY] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Review 29",
    "titleAr": "[مستوى أساسي] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - سؤال 29",
    "questionEn": "[Question 29] In the context of Egyptian STEM robotics and mechatronics regarding Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 29] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
    "correctAnswerAr": "يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
    "explanationEn": "Correct Principle: The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
    "explanationAr": "المبدأ العلمي الصحيح: يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_30",
    "titleEn": "[EASY] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Review 30",
    "titleAr": "[مستوى أساسي] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - سؤال 30",
    "questionEn": "[Question 30] In the context of Egyptian STEM robotics and mechatronics regarding 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 30] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
    "correctAnswerAr": "تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
    "explanationEn": "Correct Principle: Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
    "explanationAr": "المبدأ العلمي الصحيح: تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_31",
    "titleEn": "[EASY] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Review 31",
    "titleAr": "[مستوى أساسي] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - سؤال 31",
    "questionEn": "[Question 31] In the context of Egyptian STEM robotics and mechatronics regarding Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 31] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Visual-Inertial Odometry (VIO) tightly couples camera image feature tracks with high-rate IMU accelerometer and gyroscope pre-integration to estimate 6-DOF camera trajectory in GPS-denied environments.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "يدمج قياس المسافات البصري العطالي (VIO) مسارات معالم الصور مع التكامل المسبق لبيانات IMU عالية السرعة لتقدير مسار الروبوت بست درجات حرية في غياب GPS.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Visual-Inertial Odometry (VIO) tightly couples camera image feature tracks with high-rate IMU accelerometer and gyroscope pre-integration to estimate 6-DOF camera trajectory in GPS-denied environments.",
    "correctAnswerAr": "يدمج قياس المسافات البصري العطالي (VIO) مسارات معالم الصور مع التكامل المسبق لبيانات IMU عالية السرعة لتقدير مسار الروبوت بست درجات حرية في غياب GPS.",
    "explanationEn": "Correct Principle: Visual-Inertial Odometry (VIO) tightly couples camera image feature tracks with high-rate IMU accelerometer and gyroscope pre-integration to estimate 6-DOF camera trajectory in GPS-denied environments.",
    "explanationAr": "المبدأ العلمي الصحيح: يدمج قياس المسافات البصري العطالي (VIO) مسارات معالم الصور مع التكامل المسبق لبيانات IMU عالية السرعة لتقدير مسار الروبوت بست درجات حرية في غياب GPS.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_32",
    "titleEn": "[EASY] 6D Object Pose Estimation & Deep Learning Robotic Grasping - Review 32",
    "titleAr": "[مستوى أساسي] تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق - سؤال 32",
    "questionEn": "[Question 32] In the context of Egyptian STEM robotics and mechatronics regarding 6D Object Pose Estimation & Deep Learning Robotic Grasping, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 32] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "Robotic manipulation requires estimating the full 6D pose (3D position $T \\in \\mathbb{R}^3$ and 3D orientation $R \\in SO(3)$) of target workpieces relative to the robot base frame."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "يتطلب التقاط الروبوت للأجسام تقدير موضعها وتوجيهها الكامل بست درجات حرية (الموضع ثلاثي الأبعاد $T$ ومصفوفة الدوران ثلاثية الأبعاد $R$) نسبة لقاعدة الروبوت."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Robotic manipulation requires estimating the full 6D pose (3D position $T \\in \\mathbb{R}^3$ and 3D orientation $R \\in SO(3)$) of target workpieces relative to the robot base frame.",
    "correctAnswerAr": "يتطلب التقاط الروبوت للأجسام تقدير موضعها وتوجيهها الكامل بست درجات حرية (الموضع ثلاثي الأبعاد $T$ ومصفوفة الدوران ثلاثية الأبعاد $R$) نسبة لقاعدة الروبوت.",
    "explanationEn": "Correct Principle: Robotic manipulation requires estimating the full 6D pose (3D position $T \\in \\mathbb{R}^3$ and 3D orientation $R \\in SO(3)$) of target workpieces relative to the robot base frame.",
    "explanationAr": "المبدأ العلمي الصحيح: يتطلب التقاط الروبوت للأجسام تقدير موضعها وتوجيهها الكامل بست درجات حرية (الموضع ثلاثي الأبعاد $T$ ومصفوفة الدوران ثلاثية الأبعاد $R$) نسبة لقاعدة الروبوت.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_33",
    "titleEn": "[EASY] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Review 33",
    "titleAr": "[مستوى أساسي] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - سؤال 33",
    "questionEn": "[Question 33] In the context of Egyptian STEM robotics and mechatronics regarding Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 33] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
    "correctAnswerAr": "يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
    "explanationEn": "Correct Principle: The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
    "explanationAr": "المبدأ العلمي الصحيح: يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_34",
    "titleEn": "[EASY] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Review 34",
    "titleAr": "[مستوى أساسي] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - سؤال 34",
    "questionEn": "[Question 34] In the context of Egyptian STEM robotics and mechatronics regarding 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 34] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
    "correctAnswerAr": "تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
    "explanationEn": "Correct Principle: Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
    "explanationAr": "المبدأ العلمي الصحيح: تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_35",
    "titleEn": "[EASY] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Review 35",
    "titleAr": "[مستوى أساسي] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - سؤال 35",
    "questionEn": "[Question 35] In the context of Egyptian STEM robotics and mechatronics regarding Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 35] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Visual-Inertial Odometry (VIO) tightly couples camera image feature tracks with high-rate IMU accelerometer and gyroscope pre-integration to estimate 6-DOF camera trajectory in GPS-denied environments.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "يدمج قياس المسافات البصري العطالي (VIO) مسارات معالم الصور مع التكامل المسبق لبيانات IMU عالية السرعة لتقدير مسار الروبوت بست درجات حرية في غياب GPS.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Visual-Inertial Odometry (VIO) tightly couples camera image feature tracks with high-rate IMU accelerometer and gyroscope pre-integration to estimate 6-DOF camera trajectory in GPS-denied environments.",
    "correctAnswerAr": "يدمج قياس المسافات البصري العطالي (VIO) مسارات معالم الصور مع التكامل المسبق لبيانات IMU عالية السرعة لتقدير مسار الروبوت بست درجات حرية في غياب GPS.",
    "explanationEn": "Correct Principle: Visual-Inertial Odometry (VIO) tightly couples camera image feature tracks with high-rate IMU accelerometer and gyroscope pre-integration to estimate 6-DOF camera trajectory in GPS-denied environments.",
    "explanationAr": "المبدأ العلمي الصحيح: يدمج قياس المسافات البصري العطالي (VIO) مسارات معالم الصور مع التكامل المسبق لبيانات IMU عالية السرعة لتقدير مسار الروبوت بست درجات حرية في غياب GPS.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_36",
    "titleEn": "[EASY] 6D Object Pose Estimation & Deep Learning Robotic Grasping - Review 36",
    "titleAr": "[مستوى أساسي] تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق - سؤال 36",
    "questionEn": "[Question 36] In the context of Egyptian STEM robotics and mechatronics regarding 6D Object Pose Estimation & Deep Learning Robotic Grasping, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 36] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Robotic manipulation requires estimating the full 6D pose (3D position $T \\in \\mathbb{R}^3$ and 3D orientation $R \\in SO(3)$) of target workpieces relative to the robot base frame."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "يتطلب التقاط الروبوت للأجسام تقدير موضعها وتوجيهها الكامل بست درجات حرية (الموضع ثلاثي الأبعاد $T$ ومصفوفة الدوران ثلاثية الأبعاد $R$) نسبة لقاعدة الروبوت."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Robotic manipulation requires estimating the full 6D pose (3D position $T \\in \\mathbb{R}^3$ and 3D orientation $R \\in SO(3)$) of target workpieces relative to the robot base frame.",
    "correctAnswerAr": "يتطلب التقاط الروبوت للأجسام تقدير موضعها وتوجيهها الكامل بست درجات حرية (الموضع ثلاثي الأبعاد $T$ ومصفوفة الدوران ثلاثية الأبعاد $R$) نسبة لقاعدة الروبوت.",
    "explanationEn": "Correct Principle: Robotic manipulation requires estimating the full 6D pose (3D position $T \\in \\mathbb{R}^3$ and 3D orientation $R \\in SO(3)$) of target workpieces relative to the robot base frame.",
    "explanationAr": "المبدأ العلمي الصحيح: يتطلب التقاط الروبوت للأجسام تقدير موضعها وتوجيهها الكامل بست درجات حرية (الموضع ثلاثي الأبعاد $T$ ومصفوفة الدوران ثلاثية الأبعاد $R$) نسبة لقاعدة الروبوت.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_37",
    "titleEn": "[EASY] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Review 37",
    "titleAr": "[مستوى أساسي] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - سؤال 37",
    "questionEn": "[Question 37] In the context of Egyptian STEM robotics and mechatronics regarding Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 37] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
    "correctAnswerAr": "يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
    "explanationEn": "Correct Principle: The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
    "explanationAr": "المبدأ العلمي الصحيح: يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_38",
    "titleEn": "[EASY] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Review 38",
    "titleAr": "[مستوى أساسي] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - سؤال 38",
    "questionEn": "[Question 38] In the context of Egyptian STEM robotics and mechatronics regarding 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 38] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
    "correctAnswerAr": "تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
    "explanationEn": "Correct Principle: Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
    "explanationAr": "المبدأ العلمي الصحيح: تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_39",
    "titleEn": "[EASY] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Review 39",
    "titleAr": "[مستوى أساسي] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - سؤال 39",
    "questionEn": "[Question 39] In the context of Egyptian STEM robotics and mechatronics regarding Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 39] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Visual-Inertial Odometry (VIO) tightly couples camera image feature tracks with high-rate IMU accelerometer and gyroscope pre-integration to estimate 6-DOF camera trajectory in GPS-denied environments.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "يدمج قياس المسافات البصري العطالي (VIO) مسارات معالم الصور مع التكامل المسبق لبيانات IMU عالية السرعة لتقدير مسار الروبوت بست درجات حرية في غياب GPS.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Visual-Inertial Odometry (VIO) tightly couples camera image feature tracks with high-rate IMU accelerometer and gyroscope pre-integration to estimate 6-DOF camera trajectory in GPS-denied environments.",
    "correctAnswerAr": "يدمج قياس المسافات البصري العطالي (VIO) مسارات معالم الصور مع التكامل المسبق لبيانات IMU عالية السرعة لتقدير مسار الروبوت بست درجات حرية في غياب GPS.",
    "explanationEn": "Correct Principle: Visual-Inertial Odometry (VIO) tightly couples camera image feature tracks with high-rate IMU accelerometer and gyroscope pre-integration to estimate 6-DOF camera trajectory in GPS-denied environments.",
    "explanationAr": "المبدأ العلمي الصحيح: يدمج قياس المسافات البصري العطالي (VIO) مسارات معالم الصور مع التكامل المسبق لبيانات IMU عالية السرعة لتقدير مسار الروبوت بست درجات حرية في غياب GPS.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_40",
    "titleEn": "[EASY] 6D Object Pose Estimation & Deep Learning Robotic Grasping - Review 40",
    "titleAr": "[مستوى أساسي] تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق - سؤال 40",
    "questionEn": "[Question 40] In the context of Egyptian STEM robotics and mechatronics regarding 6D Object Pose Estimation & Deep Learning Robotic Grasping, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 40] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "Robotic manipulation requires estimating the full 6D pose (3D position $T \\in \\mathbb{R}^3$ and 3D orientation $R \\in SO(3)$) of target workpieces relative to the robot base frame."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "يتطلب التقاط الروبوت للأجسام تقدير موضعها وتوجيهها الكامل بست درجات حرية (الموضع ثلاثي الأبعاد $T$ ومصفوفة الدوران ثلاثية الأبعاد $R$) نسبة لقاعدة الروبوت."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Robotic manipulation requires estimating the full 6D pose (3D position $T \\in \\mathbb{R}^3$ and 3D orientation $R \\in SO(3)$) of target workpieces relative to the robot base frame.",
    "correctAnswerAr": "يتطلب التقاط الروبوت للأجسام تقدير موضعها وتوجيهها الكامل بست درجات حرية (الموضع ثلاثي الأبعاد $T$ ومصفوفة الدوران ثلاثية الأبعاد $R$) نسبة لقاعدة الروبوت.",
    "explanationEn": "Correct Principle: Robotic manipulation requires estimating the full 6D pose (3D position $T \\in \\mathbb{R}^3$ and 3D orientation $R \\in SO(3)$) of target workpieces relative to the robot base frame.",
    "explanationAr": "المبدأ العلمي الصحيح: يتطلب التقاط الروبوت للأجسام تقدير موضعها وتوجيهها الكامل بست درجات حرية (الموضع ثلاثي الأبعاد $T$ ومصفوفة الدوران ثلاثية الأبعاد $R$) نسبة لقاعدة الروبوت.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_41",
    "titleEn": "[EASY] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Review 41",
    "titleAr": "[مستوى أساسي] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - سؤال 41",
    "questionEn": "[Question 41] In the context of Egyptian STEM robotics and mechatronics regarding Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 41] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
    "correctAnswerAr": "يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
    "explanationEn": "Correct Principle: The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
    "explanationAr": "المبدأ العلمي الصحيح: يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_42",
    "titleEn": "[EASY] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Review 42",
    "titleAr": "[مستوى أساسي] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - سؤال 42",
    "questionEn": "[Question 42] In the context of Egyptian STEM robotics and mechatronics regarding 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 42] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
    "correctAnswerAr": "تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
    "explanationEn": "Correct Principle: Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
    "explanationAr": "المبدأ العلمي الصحيح: تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_43",
    "titleEn": "[EASY] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Review 43",
    "titleAr": "[مستوى أساسي] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - سؤال 43",
    "questionEn": "[Question 43] In the context of Egyptian STEM robotics and mechatronics regarding Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 43] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Visual-Inertial Odometry (VIO) tightly couples camera image feature tracks with high-rate IMU accelerometer and gyroscope pre-integration to estimate 6-DOF camera trajectory in GPS-denied environments.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "يدمج قياس المسافات البصري العطالي (VIO) مسارات معالم الصور مع التكامل المسبق لبيانات IMU عالية السرعة لتقدير مسار الروبوت بست درجات حرية في غياب GPS.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Visual-Inertial Odometry (VIO) tightly couples camera image feature tracks with high-rate IMU accelerometer and gyroscope pre-integration to estimate 6-DOF camera trajectory in GPS-denied environments.",
    "correctAnswerAr": "يدمج قياس المسافات البصري العطالي (VIO) مسارات معالم الصور مع التكامل المسبق لبيانات IMU عالية السرعة لتقدير مسار الروبوت بست درجات حرية في غياب GPS.",
    "explanationEn": "Correct Principle: Visual-Inertial Odometry (VIO) tightly couples camera image feature tracks with high-rate IMU accelerometer and gyroscope pre-integration to estimate 6-DOF camera trajectory in GPS-denied environments.",
    "explanationAr": "المبدأ العلمي الصحيح: يدمج قياس المسافات البصري العطالي (VIO) مسارات معالم الصور مع التكامل المسبق لبيانات IMU عالية السرعة لتقدير مسار الروبوت بست درجات حرية في غياب GPS.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_44",
    "titleEn": "[EASY] 6D Object Pose Estimation & Deep Learning Robotic Grasping - Review 44",
    "titleAr": "[مستوى أساسي] تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق - سؤال 44",
    "questionEn": "[Question 44] In the context of Egyptian STEM robotics and mechatronics regarding 6D Object Pose Estimation & Deep Learning Robotic Grasping, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 44] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Robotic manipulation requires estimating the full 6D pose (3D position $T \\in \\mathbb{R}^3$ and 3D orientation $R \\in SO(3)$) of target workpieces relative to the robot base frame."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يتطلب التقاط الروبوت للأجسام تقدير موضعها وتوجيهها الكامل بست درجات حرية (الموضع ثلاثي الأبعاد $T$ ومصفوفة الدوران ثلاثية الأبعاد $R$) نسبة لقاعدة الروبوت."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Robotic manipulation requires estimating the full 6D pose (3D position $T \\in \\mathbb{R}^3$ and 3D orientation $R \\in SO(3)$) of target workpieces relative to the robot base frame.",
    "correctAnswerAr": "يتطلب التقاط الروبوت للأجسام تقدير موضعها وتوجيهها الكامل بست درجات حرية (الموضع ثلاثي الأبعاد $T$ ومصفوفة الدوران ثلاثية الأبعاد $R$) نسبة لقاعدة الروبوت.",
    "explanationEn": "Correct Principle: Robotic manipulation requires estimating the full 6D pose (3D position $T \\in \\mathbb{R}^3$ and 3D orientation $R \\in SO(3)$) of target workpieces relative to the robot base frame.",
    "explanationAr": "المبدأ العلمي الصحيح: يتطلب التقاط الروبوت للأجسام تقدير موضعها وتوجيهها الكامل بست درجات حرية (الموضع ثلاثي الأبعاد $T$ ومصفوفة الدوران ثلاثية الأبعاد $R$) نسبة لقاعدة الروبوت.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_45",
    "titleEn": "[EASY] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Review 45",
    "titleAr": "[مستوى أساسي] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - سؤال 45",
    "questionEn": "[Question 45] In the context of Egyptian STEM robotics and mechatronics regarding Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 45] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
    "correctAnswerAr": "يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
    "explanationEn": "Correct Principle: The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
    "explanationAr": "المبدأ العلمي الصحيح: يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_46",
    "titleEn": "[EASY] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Review 46",
    "titleAr": "[مستوى أساسي] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - سؤال 46",
    "questionEn": "[Question 46] In the context of Egyptian STEM robotics and mechatronics regarding 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 46] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
    "correctAnswerAr": "تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
    "explanationEn": "Correct Principle: Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
    "explanationAr": "المبدأ العلمي الصحيح: تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_47",
    "titleEn": "[EASY] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Review 47",
    "titleAr": "[مستوى أساسي] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - سؤال 47",
    "questionEn": "[Question 47] In the context of Egyptian STEM robotics and mechatronics regarding Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 47] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "Visual-Inertial Odometry (VIO) tightly couples camera image feature tracks with high-rate IMU accelerometer and gyroscope pre-integration to estimate 6-DOF camera trajectory in GPS-denied environments.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "يدمج قياس المسافات البصري العطالي (VIO) مسارات معالم الصور مع التكامل المسبق لبيانات IMU عالية السرعة لتقدير مسار الروبوت بست درجات حرية في غياب GPS.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Visual-Inertial Odometry (VIO) tightly couples camera image feature tracks with high-rate IMU accelerometer and gyroscope pre-integration to estimate 6-DOF camera trajectory in GPS-denied environments.",
    "correctAnswerAr": "يدمج قياس المسافات البصري العطالي (VIO) مسارات معالم الصور مع التكامل المسبق لبيانات IMU عالية السرعة لتقدير مسار الروبوت بست درجات حرية في غياب GPS.",
    "explanationEn": "Correct Principle: Visual-Inertial Odometry (VIO) tightly couples camera image feature tracks with high-rate IMU accelerometer and gyroscope pre-integration to estimate 6-DOF camera trajectory in GPS-denied environments.",
    "explanationAr": "المبدأ العلمي الصحيح: يدمج قياس المسافات البصري العطالي (VIO) مسارات معالم الصور مع التكامل المسبق لبيانات IMU عالية السرعة لتقدير مسار الروبوت بست درجات حرية في غياب GPS.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_48",
    "titleEn": "[EASY] 6D Object Pose Estimation & Deep Learning Robotic Grasping - Review 48",
    "titleAr": "[مستوى أساسي] تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق - سؤال 48",
    "questionEn": "[Question 48] In the context of Egyptian STEM robotics and mechatronics regarding 6D Object Pose Estimation & Deep Learning Robotic Grasping, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 48] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "Robotic manipulation requires estimating the full 6D pose (3D position $T \\in \\mathbb{R}^3$ and 3D orientation $R \\in SO(3)$) of target workpieces relative to the robot base frame."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "يتطلب التقاط الروبوت للأجسام تقدير موضعها وتوجيهها الكامل بست درجات حرية (الموضع ثلاثي الأبعاد $T$ ومصفوفة الدوران ثلاثية الأبعاد $R$) نسبة لقاعدة الروبوت."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Robotic manipulation requires estimating the full 6D pose (3D position $T \\in \\mathbb{R}^3$ and 3D orientation $R \\in SO(3)$) of target workpieces relative to the robot base frame.",
    "correctAnswerAr": "يتطلب التقاط الروبوت للأجسام تقدير موضعها وتوجيهها الكامل بست درجات حرية (الموضع ثلاثي الأبعاد $T$ ومصفوفة الدوران ثلاثية الأبعاد $R$) نسبة لقاعدة الروبوت.",
    "explanationEn": "Correct Principle: Robotic manipulation requires estimating the full 6D pose (3D position $T \\in \\mathbb{R}^3$ and 3D orientation $R \\in SO(3)$) of target workpieces relative to the robot base frame.",
    "explanationAr": "المبدأ العلمي الصحيح: يتطلب التقاط الروبوت للأجسام تقدير موضعها وتوجيهها الكامل بست درجات حرية (الموضع ثلاثي الأبعاد $T$ ومصفوفة الدوران ثلاثية الأبعاد $R$) نسبة لقاعدة الروبوت.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_49",
    "titleEn": "[EASY] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Review 49",
    "titleAr": "[مستوى أساسي] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - سؤال 49",
    "questionEn": "[Question 49] In the context of Egyptian STEM robotics and mechatronics regarding Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 49] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
    "correctAnswerAr": "يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
    "explanationEn": "Correct Principle: The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
    "explanationAr": "المبدأ العلمي الصحيح: يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_50",
    "titleEn": "[EASY] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Review 50",
    "titleAr": "[مستوى أساسي] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - سؤال 50",
    "questionEn": "[Question 50] In the context of Egyptian STEM robotics and mechatronics regarding 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 50] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
    "correctAnswerAr": "تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
    "explanationEn": "Correct Principle: Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
    "explanationAr": "المبدأ العلمي الصحيح: تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_51",
    "titleEn": "[EASY] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Review 51",
    "titleAr": "[مستوى أساسي] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - سؤال 51",
    "questionEn": "[Question 51] In the context of Egyptian STEM robotics and mechatronics regarding Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 51] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Visual-Inertial Odometry (VIO) tightly couples camera image feature tracks with high-rate IMU accelerometer and gyroscope pre-integration to estimate 6-DOF camera trajectory in GPS-denied environments.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "يدمج قياس المسافات البصري العطالي (VIO) مسارات معالم الصور مع التكامل المسبق لبيانات IMU عالية السرعة لتقدير مسار الروبوت بست درجات حرية في غياب GPS.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Visual-Inertial Odometry (VIO) tightly couples camera image feature tracks with high-rate IMU accelerometer and gyroscope pre-integration to estimate 6-DOF camera trajectory in GPS-denied environments.",
    "correctAnswerAr": "يدمج قياس المسافات البصري العطالي (VIO) مسارات معالم الصور مع التكامل المسبق لبيانات IMU عالية السرعة لتقدير مسار الروبوت بست درجات حرية في غياب GPS.",
    "explanationEn": "Correct Principle: Visual-Inertial Odometry (VIO) tightly couples camera image feature tracks with high-rate IMU accelerometer and gyroscope pre-integration to estimate 6-DOF camera trajectory in GPS-denied environments.",
    "explanationAr": "المبدأ العلمي الصحيح: يدمج قياس المسافات البصري العطالي (VIO) مسارات معالم الصور مع التكامل المسبق لبيانات IMU عالية السرعة لتقدير مسار الروبوت بست درجات حرية في غياب GPS.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_52",
    "titleEn": "[EASY] 6D Object Pose Estimation & Deep Learning Robotic Grasping - Review 52",
    "titleAr": "[مستوى أساسي] تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق - سؤال 52",
    "questionEn": "[Question 52] In the context of Egyptian STEM robotics and mechatronics regarding 6D Object Pose Estimation & Deep Learning Robotic Grasping, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 52] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "Robotic manipulation requires estimating the full 6D pose (3D position $T \\in \\mathbb{R}^3$ and 3D orientation $R \\in SO(3)$) of target workpieces relative to the robot base frame."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "يتطلب التقاط الروبوت للأجسام تقدير موضعها وتوجيهها الكامل بست درجات حرية (الموضع ثلاثي الأبعاد $T$ ومصفوفة الدوران ثلاثية الأبعاد $R$) نسبة لقاعدة الروبوت."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Robotic manipulation requires estimating the full 6D pose (3D position $T \\in \\mathbb{R}^3$ and 3D orientation $R \\in SO(3)$) of target workpieces relative to the robot base frame.",
    "correctAnswerAr": "يتطلب التقاط الروبوت للأجسام تقدير موضعها وتوجيهها الكامل بست درجات حرية (الموضع ثلاثي الأبعاد $T$ ومصفوفة الدوران ثلاثية الأبعاد $R$) نسبة لقاعدة الروبوت.",
    "explanationEn": "Correct Principle: Robotic manipulation requires estimating the full 6D pose (3D position $T \\in \\mathbb{R}^3$ and 3D orientation $R \\in SO(3)$) of target workpieces relative to the robot base frame.",
    "explanationAr": "المبدأ العلمي الصحيح: يتطلب التقاط الروبوت للأجسام تقدير موضعها وتوجيهها الكامل بست درجات حرية (الموضع ثلاثي الأبعاد $T$ ومصفوفة الدوران ثلاثية الأبعاد $R$) نسبة لقاعدة الروبوت.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_53",
    "titleEn": "[EASY] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Review 53",
    "titleAr": "[مستوى أساسي] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - سؤال 53",
    "questionEn": "[Question 53] In the context of Egyptian STEM robotics and mechatronics regarding Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 53] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
    "correctAnswerAr": "يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
    "explanationEn": "Correct Principle: The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
    "explanationAr": "المبدأ العلمي الصحيح: يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_54",
    "titleEn": "[EASY] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Review 54",
    "titleAr": "[مستوى أساسي] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - سؤال 54",
    "questionEn": "[Question 54] In the context of Egyptian STEM robotics and mechatronics regarding 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 54] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
    "correctAnswerAr": "تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
    "explanationEn": "Correct Principle: Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
    "explanationAr": "المبدأ العلمي الصحيح: تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_55",
    "titleEn": "[EASY] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Review 55",
    "titleAr": "[مستوى أساسي] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - سؤال 55",
    "questionEn": "[Question 55] In the context of Egyptian STEM robotics and mechatronics regarding Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 55] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Visual-Inertial Odometry (VIO) tightly couples camera image feature tracks with high-rate IMU accelerometer and gyroscope pre-integration to estimate 6-DOF camera trajectory in GPS-denied environments.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "يدمج قياس المسافات البصري العطالي (VIO) مسارات معالم الصور مع التكامل المسبق لبيانات IMU عالية السرعة لتقدير مسار الروبوت بست درجات حرية في غياب GPS.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Visual-Inertial Odometry (VIO) tightly couples camera image feature tracks with high-rate IMU accelerometer and gyroscope pre-integration to estimate 6-DOF camera trajectory in GPS-denied environments.",
    "correctAnswerAr": "يدمج قياس المسافات البصري العطالي (VIO) مسارات معالم الصور مع التكامل المسبق لبيانات IMU عالية السرعة لتقدير مسار الروبوت بست درجات حرية في غياب GPS.",
    "explanationEn": "Correct Principle: Visual-Inertial Odometry (VIO) tightly couples camera image feature tracks with high-rate IMU accelerometer and gyroscope pre-integration to estimate 6-DOF camera trajectory in GPS-denied environments.",
    "explanationAr": "المبدأ العلمي الصحيح: يدمج قياس المسافات البصري العطالي (VIO) مسارات معالم الصور مع التكامل المسبق لبيانات IMU عالية السرعة لتقدير مسار الروبوت بست درجات حرية في غياب GPS.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_56",
    "titleEn": "[EASY] 6D Object Pose Estimation & Deep Learning Robotic Grasping - Review 56",
    "titleAr": "[مستوى أساسي] تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق - سؤال 56",
    "questionEn": "[Question 56] In the context of Egyptian STEM robotics and mechatronics regarding 6D Object Pose Estimation & Deep Learning Robotic Grasping, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 56] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Robotic manipulation requires estimating the full 6D pose (3D position $T \\in \\mathbb{R}^3$ and 3D orientation $R \\in SO(3)$) of target workpieces relative to the robot base frame."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "يتطلب التقاط الروبوت للأجسام تقدير موضعها وتوجيهها الكامل بست درجات حرية (الموضع ثلاثي الأبعاد $T$ ومصفوفة الدوران ثلاثية الأبعاد $R$) نسبة لقاعدة الروبوت."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Robotic manipulation requires estimating the full 6D pose (3D position $T \\in \\mathbb{R}^3$ and 3D orientation $R \\in SO(3)$) of target workpieces relative to the robot base frame.",
    "correctAnswerAr": "يتطلب التقاط الروبوت للأجسام تقدير موضعها وتوجيهها الكامل بست درجات حرية (الموضع ثلاثي الأبعاد $T$ ومصفوفة الدوران ثلاثية الأبعاد $R$) نسبة لقاعدة الروبوت.",
    "explanationEn": "Correct Principle: Robotic manipulation requires estimating the full 6D pose (3D position $T \\in \\mathbb{R}^3$ and 3D orientation $R \\in SO(3)$) of target workpieces relative to the robot base frame.",
    "explanationAr": "المبدأ العلمي الصحيح: يتطلب التقاط الروبوت للأجسام تقدير موضعها وتوجيهها الكامل بست درجات حرية (الموضع ثلاثي الأبعاد $T$ ومصفوفة الدوران ثلاثية الأبعاد $R$) نسبة لقاعدة الروبوت.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_57",
    "titleEn": "[EASY] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Review 57",
    "titleAr": "[مستوى أساسي] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - سؤال 57",
    "questionEn": "[Question 57] In the context of Egyptian STEM robotics and mechatronics regarding Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 57] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
    "correctAnswerAr": "يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
    "explanationEn": "Correct Principle: The Extended Kalman Filter (EKF) linearizes non-linear robot motion and measurement models around current state estimates using first-order Taylor expansion Jacobian matrices ($F_k, H_k$).",
    "explanationAr": "المبدأ العلمي الصحيح: يقوم مرشح كالمان الممتد (EKF) بخطية نماذج الحركة والقياس غير الخطية للروبوت حول تقديرات الحالة الحالية باستخدام مصفوفات جاكوبيان لمتسلسلة تايلور.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch2_easy_58",
    "titleEn": "[EASY] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Review 58",
    "titleAr": "[مستوى أساسي] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - سؤال 58",
    "questionEn": "[Question 58] In the context of Egyptian STEM robotics and mechatronics regarding 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 58] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
    "correctAnswerAr": "تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
    "explanationEn": "Correct Principle: Point Cloud Library (PCL) structures unordered sets of 3D spatial coordinates $(X, Y, Z)$ acquired from 3D LiDAR scanners and RGB-D depth sensors.",
    "explanationAr": "المبدأ العلمي الصحيح: تنظم مكتبة السحب النقطية (PCL) مجموعات غير مرتبة من الإحداثيات الفراغية ثلاثية الأبعاد $(X, Y, Z)$ المكتسبة من ماسحات الليزر وكاميرات العمق.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  }
],
  medium: [
  {
    "id": "egbac_robotics_ch2_med_1",
    "titleEn": "[MEDIUM] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Analysis 1",
    "titleAr": "[مستوى متوسط] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - تحليل 1",
    "questionEn": "[Question 1] When analyzing hardware-software integration and operational control for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates, identify the correct engineering relationship:",
    "questionAr": "[السؤال 1] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
    "correctAnswerAr": "يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
    "explanationEn": "Engineering Analysis: The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
    "explanationAr": "التحليل الهندسي المعتمد: يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_2",
    "titleEn": "[MEDIUM] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Analysis 2",
    "titleAr": "[مستوى متوسط] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - تحليل 2",
    "questionEn": "[Question 2] When analyzing hardware-software integration and operational control for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering, identify the correct engineering relationship:",
    "questionAr": "[السؤال 2] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features.",
    "correctAnswerAr": "يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة.",
    "explanationEn": "Engineering Analysis: Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features.",
    "explanationAr": "التحليل الهندسي المعتمد: يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_3",
    "titleEn": "[MEDIUM] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Analysis 3",
    "titleAr": "[مستوى متوسط] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - تحليل 3",
    "questionEn": "[Question 3] When analyzing hardware-software integration and operational control for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization, identify the correct engineering relationship:",
    "questionAr": "[السؤال 3] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
    "correctAnswerAr": "يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
    "explanationEn": "Engineering Analysis: IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
    "explanationAr": "التحليل الهندسي المعتمد: يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_4",
    "titleEn": "[MEDIUM] 6D Object Pose Estimation & Deep Learning Robotic Grasping - Analysis 4",
    "titleAr": "[مستوى متوسط] تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق - تحليل 4",
    "questionEn": "[Question 4] When analyzing hardware-software integration and operational control for 6D Object Pose Estimation & Deep Learning Robotic Grasping, identify the correct engineering relationship:",
    "questionAr": "[السؤال 4] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Deep convolutional networks (e.g. YOLOv8 / PoseCNN) predict 2D bounding boxes and 3D bounding box keypoints, which are resolved to 6D metric poses via Perspective-n-Point (PnP) algorithms.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تتنبأ شبكات التعلم العميق الإلتفافية بصناديق الإحاطة ونقاط المعالم ثلاثية الأبعاد، والتي تُحول إلى أوضاع مترية كاملة بخوارزميات Perspective-n-Point (PnP).",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Deep convolutional networks (e.g. YOLOv8 / PoseCNN) predict 2D bounding boxes and 3D bounding box keypoints, which are resolved to 6D metric poses via Perspective-n-Point (PnP) algorithms.",
    "correctAnswerAr": "تتنبأ شبكات التعلم العميق الإلتفافية بصناديق الإحاطة ونقاط المعالم ثلاثية الأبعاد، والتي تُحول إلى أوضاع مترية كاملة بخوارزميات Perspective-n-Point (PnP).",
    "explanationEn": "Engineering Analysis: Deep convolutional networks (e.g. YOLOv8 / PoseCNN) predict 2D bounding boxes and 3D bounding box keypoints, which are resolved to 6D metric poses via Perspective-n-Point (PnP) algorithms.",
    "explanationAr": "التحليل الهندسي المعتمد: تتنبأ شبكات التعلم العميق الإلتفافية بصناديق الإحاطة ونقاط المعالم ثلاثية الأبعاد، والتي تُحول إلى أوضاع مترية كاملة بخوارزميات Perspective-n-Point (PnP).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_5",
    "titleEn": "[MEDIUM] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Analysis 5",
    "titleAr": "[مستوى متوسط] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - تحليل 5",
    "questionEn": "[Question 5] When analyzing hardware-software integration and operational control for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates, identify the correct engineering relationship:",
    "questionAr": "[السؤال 5] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
    "correctAnswerAr": "يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
    "explanationEn": "Engineering Analysis: The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
    "explanationAr": "التحليل الهندسي المعتمد: يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_6",
    "titleEn": "[MEDIUM] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Analysis 6",
    "titleAr": "[مستوى متوسط] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - تحليل 6",
    "questionEn": "[Question 6] When analyzing hardware-software integration and operational control for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering, identify the correct engineering relationship:",
    "questionAr": "[السؤال 6] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features.",
    "correctAnswerAr": "يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة.",
    "explanationEn": "Engineering Analysis: Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features.",
    "explanationAr": "التحليل الهندسي المعتمد: يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_7",
    "titleEn": "[MEDIUM] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Analysis 7",
    "titleAr": "[مستوى متوسط] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - تحليل 7",
    "questionEn": "[Question 7] When analyzing hardware-software integration and operational control for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization, identify the correct engineering relationship:",
    "questionAr": "[السؤال 7] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
    "correctAnswerAr": "يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
    "explanationEn": "Engineering Analysis: IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
    "explanationAr": "التحليل الهندسي المعتمد: يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_8",
    "titleEn": "[MEDIUM] 6D Object Pose Estimation & Deep Learning Robotic Grasping - Analysis 8",
    "titleAr": "[مستوى متوسط] تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق - تحليل 8",
    "questionEn": "[Question 8] When analyzing hardware-software integration and operational control for 6D Object Pose Estimation & Deep Learning Robotic Grasping, identify the correct engineering relationship:",
    "questionAr": "[السؤال 8] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Deep convolutional networks (e.g. YOLOv8 / PoseCNN) predict 2D bounding boxes and 3D bounding box keypoints, which are resolved to 6D metric poses via Perspective-n-Point (PnP) algorithms.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "تتنبأ شبكات التعلم العميق الإلتفافية بصناديق الإحاطة ونقاط المعالم ثلاثية الأبعاد، والتي تُحول إلى أوضاع مترية كاملة بخوارزميات Perspective-n-Point (PnP).",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Deep convolutional networks (e.g. YOLOv8 / PoseCNN) predict 2D bounding boxes and 3D bounding box keypoints, which are resolved to 6D metric poses via Perspective-n-Point (PnP) algorithms.",
    "correctAnswerAr": "تتنبأ شبكات التعلم العميق الإلتفافية بصناديق الإحاطة ونقاط المعالم ثلاثية الأبعاد، والتي تُحول إلى أوضاع مترية كاملة بخوارزميات Perspective-n-Point (PnP).",
    "explanationEn": "Engineering Analysis: Deep convolutional networks (e.g. YOLOv8 / PoseCNN) predict 2D bounding boxes and 3D bounding box keypoints, which are resolved to 6D metric poses via Perspective-n-Point (PnP) algorithms.",
    "explanationAr": "التحليل الهندسي المعتمد: تتنبأ شبكات التعلم العميق الإلتفافية بصناديق الإحاطة ونقاط المعالم ثلاثية الأبعاد، والتي تُحول إلى أوضاع مترية كاملة بخوارزميات Perspective-n-Point (PnP).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_9",
    "titleEn": "[MEDIUM] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Analysis 9",
    "titleAr": "[مستوى متوسط] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - تحليل 9",
    "questionEn": "[Question 9] When analyzing hardware-software integration and operational control for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates, identify the correct engineering relationship:",
    "questionAr": "[السؤال 9] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
    "correctAnswerAr": "يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
    "explanationEn": "Engineering Analysis: The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
    "explanationAr": "التحليل الهندسي المعتمد: يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_10",
    "titleEn": "[MEDIUM] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Analysis 10",
    "titleAr": "[مستوى متوسط] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - تحليل 10",
    "questionEn": "[Question 10] When analyzing hardware-software integration and operational control for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering, identify the correct engineering relationship:",
    "questionAr": "[السؤال 10] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features.",
    "correctAnswerAr": "يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة.",
    "explanationEn": "Engineering Analysis: Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features.",
    "explanationAr": "التحليل الهندسي المعتمد: يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_11",
    "titleEn": "[MEDIUM] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Analysis 11",
    "titleAr": "[مستوى متوسط] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - تحليل 11",
    "questionEn": "[Question 11] When analyzing hardware-software integration and operational control for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization, identify the correct engineering relationship:",
    "questionAr": "[السؤال 11] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
    "correctAnswerAr": "يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
    "explanationEn": "Engineering Analysis: IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
    "explanationAr": "التحليل الهندسي المعتمد: يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_12",
    "titleEn": "[MEDIUM] 6D Object Pose Estimation & Deep Learning Robotic Grasping - Analysis 12",
    "titleAr": "[مستوى متوسط] تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق - تحليل 12",
    "questionEn": "[Question 12] When analyzing hardware-software integration and operational control for 6D Object Pose Estimation & Deep Learning Robotic Grasping, identify the correct engineering relationship:",
    "questionAr": "[السؤال 12] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Deep convolutional networks (e.g. YOLOv8 / PoseCNN) predict 2D bounding boxes and 3D bounding box keypoints, which are resolved to 6D metric poses via Perspective-n-Point (PnP) algorithms.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "تتنبأ شبكات التعلم العميق الإلتفافية بصناديق الإحاطة ونقاط المعالم ثلاثية الأبعاد، والتي تُحول إلى أوضاع مترية كاملة بخوارزميات Perspective-n-Point (PnP).",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Deep convolutional networks (e.g. YOLOv8 / PoseCNN) predict 2D bounding boxes and 3D bounding box keypoints, which are resolved to 6D metric poses via Perspective-n-Point (PnP) algorithms.",
    "correctAnswerAr": "تتنبأ شبكات التعلم العميق الإلتفافية بصناديق الإحاطة ونقاط المعالم ثلاثية الأبعاد، والتي تُحول إلى أوضاع مترية كاملة بخوارزميات Perspective-n-Point (PnP).",
    "explanationEn": "Engineering Analysis: Deep convolutional networks (e.g. YOLOv8 / PoseCNN) predict 2D bounding boxes and 3D bounding box keypoints, which are resolved to 6D metric poses via Perspective-n-Point (PnP) algorithms.",
    "explanationAr": "التحليل الهندسي المعتمد: تتنبأ شبكات التعلم العميق الإلتفافية بصناديق الإحاطة ونقاط المعالم ثلاثية الأبعاد، والتي تُحول إلى أوضاع مترية كاملة بخوارزميات Perspective-n-Point (PnP).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_13",
    "titleEn": "[MEDIUM] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Analysis 13",
    "titleAr": "[مستوى متوسط] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - تحليل 13",
    "questionEn": "[Question 13] When analyzing hardware-software integration and operational control for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates, identify the correct engineering relationship:",
    "questionAr": "[السؤال 13] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
    "correctAnswerAr": "يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
    "explanationEn": "Engineering Analysis: The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
    "explanationAr": "التحليل الهندسي المعتمد: يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_14",
    "titleEn": "[MEDIUM] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Analysis 14",
    "titleAr": "[مستوى متوسط] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - تحليل 14",
    "questionEn": "[Question 14] When analyzing hardware-software integration and operational control for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering, identify the correct engineering relationship:",
    "questionAr": "[السؤال 14] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features.",
    "correctAnswerAr": "يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة.",
    "explanationEn": "Engineering Analysis: Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features.",
    "explanationAr": "التحليل الهندسي المعتمد: يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_15",
    "titleEn": "[MEDIUM] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Analysis 15",
    "titleAr": "[مستوى متوسط] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - تحليل 15",
    "questionEn": "[Question 15] When analyzing hardware-software integration and operational control for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization, identify the correct engineering relationship:",
    "questionAr": "[السؤال 15] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
    "correctAnswerAr": "يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
    "explanationEn": "Engineering Analysis: IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
    "explanationAr": "التحليل الهندسي المعتمد: يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_16",
    "titleEn": "[MEDIUM] 6D Object Pose Estimation & Deep Learning Robotic Grasping - Analysis 16",
    "titleAr": "[مستوى متوسط] تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق - تحليل 16",
    "questionEn": "[Question 16] When analyzing hardware-software integration and operational control for 6D Object Pose Estimation & Deep Learning Robotic Grasping, identify the correct engineering relationship:",
    "questionAr": "[السؤال 16] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Deep convolutional networks (e.g. YOLOv8 / PoseCNN) predict 2D bounding boxes and 3D bounding box keypoints, which are resolved to 6D metric poses via Perspective-n-Point (PnP) algorithms.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تتنبأ شبكات التعلم العميق الإلتفافية بصناديق الإحاطة ونقاط المعالم ثلاثية الأبعاد، والتي تُحول إلى أوضاع مترية كاملة بخوارزميات Perspective-n-Point (PnP).",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Deep convolutional networks (e.g. YOLOv8 / PoseCNN) predict 2D bounding boxes and 3D bounding box keypoints, which are resolved to 6D metric poses via Perspective-n-Point (PnP) algorithms.",
    "correctAnswerAr": "تتنبأ شبكات التعلم العميق الإلتفافية بصناديق الإحاطة ونقاط المعالم ثلاثية الأبعاد، والتي تُحول إلى أوضاع مترية كاملة بخوارزميات Perspective-n-Point (PnP).",
    "explanationEn": "Engineering Analysis: Deep convolutional networks (e.g. YOLOv8 / PoseCNN) predict 2D bounding boxes and 3D bounding box keypoints, which are resolved to 6D metric poses via Perspective-n-Point (PnP) algorithms.",
    "explanationAr": "التحليل الهندسي المعتمد: تتنبأ شبكات التعلم العميق الإلتفافية بصناديق الإحاطة ونقاط المعالم ثلاثية الأبعاد، والتي تُحول إلى أوضاع مترية كاملة بخوارزميات Perspective-n-Point (PnP).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_17",
    "titleEn": "[MEDIUM] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Analysis 17",
    "titleAr": "[مستوى متوسط] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - تحليل 17",
    "questionEn": "[Question 17] When analyzing hardware-software integration and operational control for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates, identify the correct engineering relationship:",
    "questionAr": "[السؤال 17] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
    "correctAnswerAr": "يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
    "explanationEn": "Engineering Analysis: The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
    "explanationAr": "التحليل الهندسي المعتمد: يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_18",
    "titleEn": "[MEDIUM] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Analysis 18",
    "titleAr": "[مستوى متوسط] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - تحليل 18",
    "questionEn": "[Question 18] When analyzing hardware-software integration and operational control for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering, identify the correct engineering relationship:",
    "questionAr": "[السؤال 18] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features.",
    "correctAnswerAr": "يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة.",
    "explanationEn": "Engineering Analysis: Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features.",
    "explanationAr": "التحليل الهندسي المعتمد: يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_19",
    "titleEn": "[MEDIUM] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Analysis 19",
    "titleAr": "[مستوى متوسط] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - تحليل 19",
    "questionEn": "[Question 19] When analyzing hardware-software integration and operational control for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization, identify the correct engineering relationship:",
    "questionAr": "[السؤال 19] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
    "correctAnswerAr": "يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
    "explanationEn": "Engineering Analysis: IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
    "explanationAr": "التحليل الهندسي المعتمد: يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_20",
    "titleEn": "[MEDIUM] 6D Object Pose Estimation & Deep Learning Robotic Grasping - Analysis 20",
    "titleAr": "[مستوى متوسط] تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق - تحليل 20",
    "questionEn": "[Question 20] When analyzing hardware-software integration and operational control for 6D Object Pose Estimation & Deep Learning Robotic Grasping, identify the correct engineering relationship:",
    "questionAr": "[السؤال 20] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Deep convolutional networks (e.g. YOLOv8 / PoseCNN) predict 2D bounding boxes and 3D bounding box keypoints, which are resolved to 6D metric poses via Perspective-n-Point (PnP) algorithms.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "تتنبأ شبكات التعلم العميق الإلتفافية بصناديق الإحاطة ونقاط المعالم ثلاثية الأبعاد، والتي تُحول إلى أوضاع مترية كاملة بخوارزميات Perspective-n-Point (PnP).",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Deep convolutional networks (e.g. YOLOv8 / PoseCNN) predict 2D bounding boxes and 3D bounding box keypoints, which are resolved to 6D metric poses via Perspective-n-Point (PnP) algorithms.",
    "correctAnswerAr": "تتنبأ شبكات التعلم العميق الإلتفافية بصناديق الإحاطة ونقاط المعالم ثلاثية الأبعاد، والتي تُحول إلى أوضاع مترية كاملة بخوارزميات Perspective-n-Point (PnP).",
    "explanationEn": "Engineering Analysis: Deep convolutional networks (e.g. YOLOv8 / PoseCNN) predict 2D bounding boxes and 3D bounding box keypoints, which are resolved to 6D metric poses via Perspective-n-Point (PnP) algorithms.",
    "explanationAr": "التحليل الهندسي المعتمد: تتنبأ شبكات التعلم العميق الإلتفافية بصناديق الإحاطة ونقاط المعالم ثلاثية الأبعاد، والتي تُحول إلى أوضاع مترية كاملة بخوارزميات Perspective-n-Point (PnP).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_21",
    "titleEn": "[MEDIUM] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Analysis 21",
    "titleAr": "[مستوى متوسط] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - تحليل 21",
    "questionEn": "[Question 21] When analyzing hardware-software integration and operational control for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates, identify the correct engineering relationship:",
    "questionAr": "[السؤال 21] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
    "correctAnswerAr": "يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
    "explanationEn": "Engineering Analysis: The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
    "explanationAr": "التحليل الهندسي المعتمد: يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_22",
    "titleEn": "[MEDIUM] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Analysis 22",
    "titleAr": "[مستوى متوسط] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - تحليل 22",
    "questionEn": "[Question 22] When analyzing hardware-software integration and operational control for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering, identify the correct engineering relationship:",
    "questionAr": "[السؤال 22] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features.",
    "correctAnswerAr": "يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة.",
    "explanationEn": "Engineering Analysis: Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features.",
    "explanationAr": "التحليل الهندسي المعتمد: يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_23",
    "titleEn": "[MEDIUM] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Analysis 23",
    "titleAr": "[مستوى متوسط] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - تحليل 23",
    "questionEn": "[Question 23] When analyzing hardware-software integration and operational control for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization, identify the correct engineering relationship:",
    "questionAr": "[السؤال 23] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
    "correctAnswerAr": "يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
    "explanationEn": "Engineering Analysis: IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
    "explanationAr": "التحليل الهندسي المعتمد: يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_24",
    "titleEn": "[MEDIUM] 6D Object Pose Estimation & Deep Learning Robotic Grasping - Analysis 24",
    "titleAr": "[مستوى متوسط] تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق - تحليل 24",
    "questionEn": "[Question 24] When analyzing hardware-software integration and operational control for 6D Object Pose Estimation & Deep Learning Robotic Grasping, identify the correct engineering relationship:",
    "questionAr": "[السؤال 24] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Deep convolutional networks (e.g. YOLOv8 / PoseCNN) predict 2D bounding boxes and 3D bounding box keypoints, which are resolved to 6D metric poses via Perspective-n-Point (PnP) algorithms.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "تتنبأ شبكات التعلم العميق الإلتفافية بصناديق الإحاطة ونقاط المعالم ثلاثية الأبعاد، والتي تُحول إلى أوضاع مترية كاملة بخوارزميات Perspective-n-Point (PnP).",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Deep convolutional networks (e.g. YOLOv8 / PoseCNN) predict 2D bounding boxes and 3D bounding box keypoints, which are resolved to 6D metric poses via Perspective-n-Point (PnP) algorithms.",
    "correctAnswerAr": "تتنبأ شبكات التعلم العميق الإلتفافية بصناديق الإحاطة ونقاط المعالم ثلاثية الأبعاد، والتي تُحول إلى أوضاع مترية كاملة بخوارزميات Perspective-n-Point (PnP).",
    "explanationEn": "Engineering Analysis: Deep convolutional networks (e.g. YOLOv8 / PoseCNN) predict 2D bounding boxes and 3D bounding box keypoints, which are resolved to 6D metric poses via Perspective-n-Point (PnP) algorithms.",
    "explanationAr": "التحليل الهندسي المعتمد: تتنبأ شبكات التعلم العميق الإلتفافية بصناديق الإحاطة ونقاط المعالم ثلاثية الأبعاد، والتي تُحول إلى أوضاع مترية كاملة بخوارزميات Perspective-n-Point (PnP).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_25",
    "titleEn": "[MEDIUM] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Analysis 25",
    "titleAr": "[مستوى متوسط] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - تحليل 25",
    "questionEn": "[Question 25] When analyzing hardware-software integration and operational control for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates, identify the correct engineering relationship:",
    "questionAr": "[السؤال 25] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
    "correctAnswerAr": "يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
    "explanationEn": "Engineering Analysis: The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
    "explanationAr": "التحليل الهندسي المعتمد: يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_26",
    "titleEn": "[MEDIUM] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Analysis 26",
    "titleAr": "[مستوى متوسط] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - تحليل 26",
    "questionEn": "[Question 26] When analyzing hardware-software integration and operational control for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering, identify the correct engineering relationship:",
    "questionAr": "[السؤال 26] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features.",
    "correctAnswerAr": "يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة.",
    "explanationEn": "Engineering Analysis: Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features.",
    "explanationAr": "التحليل الهندسي المعتمد: يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_27",
    "titleEn": "[MEDIUM] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Analysis 27",
    "titleAr": "[مستوى متوسط] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - تحليل 27",
    "questionEn": "[Question 27] When analyzing hardware-software integration and operational control for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization, identify the correct engineering relationship:",
    "questionAr": "[السؤال 27] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
    "correctAnswerAr": "يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
    "explanationEn": "Engineering Analysis: IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
    "explanationAr": "التحليل الهندسي المعتمد: يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_28",
    "titleEn": "[MEDIUM] 6D Object Pose Estimation & Deep Learning Robotic Grasping - Analysis 28",
    "titleAr": "[مستوى متوسط] تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق - تحليل 28",
    "questionEn": "[Question 28] When analyzing hardware-software integration and operational control for 6D Object Pose Estimation & Deep Learning Robotic Grasping, identify the correct engineering relationship:",
    "questionAr": "[السؤال 28] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Deep convolutional networks (e.g. YOLOv8 / PoseCNN) predict 2D bounding boxes and 3D bounding box keypoints, which are resolved to 6D metric poses via Perspective-n-Point (PnP) algorithms.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تتنبأ شبكات التعلم العميق الإلتفافية بصناديق الإحاطة ونقاط المعالم ثلاثية الأبعاد، والتي تُحول إلى أوضاع مترية كاملة بخوارزميات Perspective-n-Point (PnP).",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Deep convolutional networks (e.g. YOLOv8 / PoseCNN) predict 2D bounding boxes and 3D bounding box keypoints, which are resolved to 6D metric poses via Perspective-n-Point (PnP) algorithms.",
    "correctAnswerAr": "تتنبأ شبكات التعلم العميق الإلتفافية بصناديق الإحاطة ونقاط المعالم ثلاثية الأبعاد، والتي تُحول إلى أوضاع مترية كاملة بخوارزميات Perspective-n-Point (PnP).",
    "explanationEn": "Engineering Analysis: Deep convolutional networks (e.g. YOLOv8 / PoseCNN) predict 2D bounding boxes and 3D bounding box keypoints, which are resolved to 6D metric poses via Perspective-n-Point (PnP) algorithms.",
    "explanationAr": "التحليل الهندسي المعتمد: تتنبأ شبكات التعلم العميق الإلتفافية بصناديق الإحاطة ونقاط المعالم ثلاثية الأبعاد، والتي تُحول إلى أوضاع مترية كاملة بخوارزميات Perspective-n-Point (PnP).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_29",
    "titleEn": "[MEDIUM] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Analysis 29",
    "titleAr": "[مستوى متوسط] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - تحليل 29",
    "questionEn": "[Question 29] When analyzing hardware-software integration and operational control for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates, identify the correct engineering relationship:",
    "questionAr": "[السؤال 29] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
    "correctAnswerAr": "يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
    "explanationEn": "Engineering Analysis: The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
    "explanationAr": "التحليل الهندسي المعتمد: يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_30",
    "titleEn": "[MEDIUM] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Analysis 30",
    "titleAr": "[مستوى متوسط] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - تحليل 30",
    "questionEn": "[Question 30] When analyzing hardware-software integration and operational control for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering, identify the correct engineering relationship:",
    "questionAr": "[السؤال 30] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features.",
    "correctAnswerAr": "يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة.",
    "explanationEn": "Engineering Analysis: Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features.",
    "explanationAr": "التحليل الهندسي المعتمد: يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_31",
    "titleEn": "[MEDIUM] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Analysis 31",
    "titleAr": "[مستوى متوسط] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - تحليل 31",
    "questionEn": "[Question 31] When analyzing hardware-software integration and operational control for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization, identify the correct engineering relationship:",
    "questionAr": "[السؤال 31] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
    "correctAnswerAr": "يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
    "explanationEn": "Engineering Analysis: IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
    "explanationAr": "التحليل الهندسي المعتمد: يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_32",
    "titleEn": "[MEDIUM] 6D Object Pose Estimation & Deep Learning Robotic Grasping - Analysis 32",
    "titleAr": "[مستوى متوسط] تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق - تحليل 32",
    "questionEn": "[Question 32] When analyzing hardware-software integration and operational control for 6D Object Pose Estimation & Deep Learning Robotic Grasping, identify the correct engineering relationship:",
    "questionAr": "[السؤال 32] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Deep convolutional networks (e.g. YOLOv8 / PoseCNN) predict 2D bounding boxes and 3D bounding box keypoints, which are resolved to 6D metric poses via Perspective-n-Point (PnP) algorithms.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "تتنبأ شبكات التعلم العميق الإلتفافية بصناديق الإحاطة ونقاط المعالم ثلاثية الأبعاد، والتي تُحول إلى أوضاع مترية كاملة بخوارزميات Perspective-n-Point (PnP).",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Deep convolutional networks (e.g. YOLOv8 / PoseCNN) predict 2D bounding boxes and 3D bounding box keypoints, which are resolved to 6D metric poses via Perspective-n-Point (PnP) algorithms.",
    "correctAnswerAr": "تتنبأ شبكات التعلم العميق الإلتفافية بصناديق الإحاطة ونقاط المعالم ثلاثية الأبعاد، والتي تُحول إلى أوضاع مترية كاملة بخوارزميات Perspective-n-Point (PnP).",
    "explanationEn": "Engineering Analysis: Deep convolutional networks (e.g. YOLOv8 / PoseCNN) predict 2D bounding boxes and 3D bounding box keypoints, which are resolved to 6D metric poses via Perspective-n-Point (PnP) algorithms.",
    "explanationAr": "التحليل الهندسي المعتمد: تتنبأ شبكات التعلم العميق الإلتفافية بصناديق الإحاطة ونقاط المعالم ثلاثية الأبعاد، والتي تُحول إلى أوضاع مترية كاملة بخوارزميات Perspective-n-Point (PnP).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_33",
    "titleEn": "[MEDIUM] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Analysis 33",
    "titleAr": "[مستوى متوسط] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - تحليل 33",
    "questionEn": "[Question 33] When analyzing hardware-software integration and operational control for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates, identify the correct engineering relationship:",
    "questionAr": "[السؤال 33] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
    "correctAnswerAr": "يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
    "explanationEn": "Engineering Analysis: The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
    "explanationAr": "التحليل الهندسي المعتمد: يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_34",
    "titleEn": "[MEDIUM] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Analysis 34",
    "titleAr": "[مستوى متوسط] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - تحليل 34",
    "questionEn": "[Question 34] When analyzing hardware-software integration and operational control for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering, identify the correct engineering relationship:",
    "questionAr": "[السؤال 34] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features.",
    "correctAnswerAr": "يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة.",
    "explanationEn": "Engineering Analysis: Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features.",
    "explanationAr": "التحليل الهندسي المعتمد: يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_35",
    "titleEn": "[MEDIUM] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Analysis 35",
    "titleAr": "[مستوى متوسط] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - تحليل 35",
    "questionEn": "[Question 35] When analyzing hardware-software integration and operational control for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization, identify the correct engineering relationship:",
    "questionAr": "[السؤال 35] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
    "correctAnswerAr": "يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
    "explanationEn": "Engineering Analysis: IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
    "explanationAr": "التحليل الهندسي المعتمد: يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_36",
    "titleEn": "[MEDIUM] 6D Object Pose Estimation & Deep Learning Robotic Grasping - Analysis 36",
    "titleAr": "[مستوى متوسط] تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق - تحليل 36",
    "questionEn": "[Question 36] When analyzing hardware-software integration and operational control for 6D Object Pose Estimation & Deep Learning Robotic Grasping, identify the correct engineering relationship:",
    "questionAr": "[السؤال 36] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Deep convolutional networks (e.g. YOLOv8 / PoseCNN) predict 2D bounding boxes and 3D bounding box keypoints, which are resolved to 6D metric poses via Perspective-n-Point (PnP) algorithms.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "تتنبأ شبكات التعلم العميق الإلتفافية بصناديق الإحاطة ونقاط المعالم ثلاثية الأبعاد، والتي تُحول إلى أوضاع مترية كاملة بخوارزميات Perspective-n-Point (PnP).",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Deep convolutional networks (e.g. YOLOv8 / PoseCNN) predict 2D bounding boxes and 3D bounding box keypoints, which are resolved to 6D metric poses via Perspective-n-Point (PnP) algorithms.",
    "correctAnswerAr": "تتنبأ شبكات التعلم العميق الإلتفافية بصناديق الإحاطة ونقاط المعالم ثلاثية الأبعاد، والتي تُحول إلى أوضاع مترية كاملة بخوارزميات Perspective-n-Point (PnP).",
    "explanationEn": "Engineering Analysis: Deep convolutional networks (e.g. YOLOv8 / PoseCNN) predict 2D bounding boxes and 3D bounding box keypoints, which are resolved to 6D metric poses via Perspective-n-Point (PnP) algorithms.",
    "explanationAr": "التحليل الهندسي المعتمد: تتنبأ شبكات التعلم العميق الإلتفافية بصناديق الإحاطة ونقاط المعالم ثلاثية الأبعاد، والتي تُحول إلى أوضاع مترية كاملة بخوارزميات Perspective-n-Point (PnP).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_37",
    "titleEn": "[MEDIUM] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Analysis 37",
    "titleAr": "[مستوى متوسط] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - تحليل 37",
    "questionEn": "[Question 37] When analyzing hardware-software integration and operational control for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates, identify the correct engineering relationship:",
    "questionAr": "[السؤال 37] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
    "correctAnswerAr": "يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
    "explanationEn": "Engineering Analysis: The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
    "explanationAr": "التحليل الهندسي المعتمد: يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_38",
    "titleEn": "[MEDIUM] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Analysis 38",
    "titleAr": "[مستوى متوسط] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - تحليل 38",
    "questionEn": "[Question 38] When analyzing hardware-software integration and operational control for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering, identify the correct engineering relationship:",
    "questionAr": "[السؤال 38] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features.",
    "correctAnswerAr": "يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة.",
    "explanationEn": "Engineering Analysis: Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features.",
    "explanationAr": "التحليل الهندسي المعتمد: يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_39",
    "titleEn": "[MEDIUM] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Analysis 39",
    "titleAr": "[مستوى متوسط] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - تحليل 39",
    "questionEn": "[Question 39] When analyzing hardware-software integration and operational control for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization, identify the correct engineering relationship:",
    "questionAr": "[السؤال 39] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
    "correctAnswerAr": "يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
    "explanationEn": "Engineering Analysis: IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
    "explanationAr": "التحليل الهندسي المعتمد: يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_40",
    "titleEn": "[MEDIUM] 6D Object Pose Estimation & Deep Learning Robotic Grasping - Analysis 40",
    "titleAr": "[مستوى متوسط] تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق - تحليل 40",
    "questionEn": "[Question 40] When analyzing hardware-software integration and operational control for 6D Object Pose Estimation & Deep Learning Robotic Grasping, identify the correct engineering relationship:",
    "questionAr": "[السؤال 40] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Deep convolutional networks (e.g. YOLOv8 / PoseCNN) predict 2D bounding boxes and 3D bounding box keypoints, which are resolved to 6D metric poses via Perspective-n-Point (PnP) algorithms.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تتنبأ شبكات التعلم العميق الإلتفافية بصناديق الإحاطة ونقاط المعالم ثلاثية الأبعاد، والتي تُحول إلى أوضاع مترية كاملة بخوارزميات Perspective-n-Point (PnP).",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Deep convolutional networks (e.g. YOLOv8 / PoseCNN) predict 2D bounding boxes and 3D bounding box keypoints, which are resolved to 6D metric poses via Perspective-n-Point (PnP) algorithms.",
    "correctAnswerAr": "تتنبأ شبكات التعلم العميق الإلتفافية بصناديق الإحاطة ونقاط المعالم ثلاثية الأبعاد، والتي تُحول إلى أوضاع مترية كاملة بخوارزميات Perspective-n-Point (PnP).",
    "explanationEn": "Engineering Analysis: Deep convolutional networks (e.g. YOLOv8 / PoseCNN) predict 2D bounding boxes and 3D bounding box keypoints, which are resolved to 6D metric poses via Perspective-n-Point (PnP) algorithms.",
    "explanationAr": "التحليل الهندسي المعتمد: تتنبأ شبكات التعلم العميق الإلتفافية بصناديق الإحاطة ونقاط المعالم ثلاثية الأبعاد، والتي تُحول إلى أوضاع مترية كاملة بخوارزميات Perspective-n-Point (PnP).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_41",
    "titleEn": "[MEDIUM] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Analysis 41",
    "titleAr": "[مستوى متوسط] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - تحليل 41",
    "questionEn": "[Question 41] When analyzing hardware-software integration and operational control for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates, identify the correct engineering relationship:",
    "questionAr": "[السؤال 41] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
    "correctAnswerAr": "يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
    "explanationEn": "Engineering Analysis: The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
    "explanationAr": "التحليل الهندسي المعتمد: يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_42",
    "titleEn": "[MEDIUM] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Analysis 42",
    "titleAr": "[مستوى متوسط] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - تحليل 42",
    "questionEn": "[Question 42] When analyzing hardware-software integration and operational control for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering, identify the correct engineering relationship:",
    "questionAr": "[السؤال 42] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features.",
    "correctAnswerAr": "يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة.",
    "explanationEn": "Engineering Analysis: Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features.",
    "explanationAr": "التحليل الهندسي المعتمد: يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_43",
    "titleEn": "[MEDIUM] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Analysis 43",
    "titleAr": "[مستوى متوسط] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - تحليل 43",
    "questionEn": "[Question 43] When analyzing hardware-software integration and operational control for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization, identify the correct engineering relationship:",
    "questionAr": "[السؤال 43] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
    "correctAnswerAr": "يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
    "explanationEn": "Engineering Analysis: IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
    "explanationAr": "التحليل الهندسي المعتمد: يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_44",
    "titleEn": "[MEDIUM] 6D Object Pose Estimation & Deep Learning Robotic Grasping - Analysis 44",
    "titleAr": "[مستوى متوسط] تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق - تحليل 44",
    "questionEn": "[Question 44] When analyzing hardware-software integration and operational control for 6D Object Pose Estimation & Deep Learning Robotic Grasping, identify the correct engineering relationship:",
    "questionAr": "[السؤال 44] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Deep convolutional networks (e.g. YOLOv8 / PoseCNN) predict 2D bounding boxes and 3D bounding box keypoints, which are resolved to 6D metric poses via Perspective-n-Point (PnP) algorithms.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "تتنبأ شبكات التعلم العميق الإلتفافية بصناديق الإحاطة ونقاط المعالم ثلاثية الأبعاد، والتي تُحول إلى أوضاع مترية كاملة بخوارزميات Perspective-n-Point (PnP).",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Deep convolutional networks (e.g. YOLOv8 / PoseCNN) predict 2D bounding boxes and 3D bounding box keypoints, which are resolved to 6D metric poses via Perspective-n-Point (PnP) algorithms.",
    "correctAnswerAr": "تتنبأ شبكات التعلم العميق الإلتفافية بصناديق الإحاطة ونقاط المعالم ثلاثية الأبعاد، والتي تُحول إلى أوضاع مترية كاملة بخوارزميات Perspective-n-Point (PnP).",
    "explanationEn": "Engineering Analysis: Deep convolutional networks (e.g. YOLOv8 / PoseCNN) predict 2D bounding boxes and 3D bounding box keypoints, which are resolved to 6D metric poses via Perspective-n-Point (PnP) algorithms.",
    "explanationAr": "التحليل الهندسي المعتمد: تتنبأ شبكات التعلم العميق الإلتفافية بصناديق الإحاطة ونقاط المعالم ثلاثية الأبعاد، والتي تُحول إلى أوضاع مترية كاملة بخوارزميات Perspective-n-Point (PnP).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_45",
    "titleEn": "[MEDIUM] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Analysis 45",
    "titleAr": "[مستوى متوسط] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - تحليل 45",
    "questionEn": "[Question 45] When analyzing hardware-software integration and operational control for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates, identify the correct engineering relationship:",
    "questionAr": "[السؤال 45] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
    "correctAnswerAr": "يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
    "explanationEn": "Engineering Analysis: The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
    "explanationAr": "التحليل الهندسي المعتمد: يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_46",
    "titleEn": "[MEDIUM] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Analysis 46",
    "titleAr": "[مستوى متوسط] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - تحليل 46",
    "questionEn": "[Question 46] When analyzing hardware-software integration and operational control for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering, identify the correct engineering relationship:",
    "questionAr": "[السؤال 46] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features.",
    "correctAnswerAr": "يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة.",
    "explanationEn": "Engineering Analysis: Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features.",
    "explanationAr": "التحليل الهندسي المعتمد: يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_47",
    "titleEn": "[MEDIUM] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Analysis 47",
    "titleAr": "[مستوى متوسط] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - تحليل 47",
    "questionEn": "[Question 47] When analyzing hardware-software integration and operational control for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization, identify the correct engineering relationship:",
    "questionAr": "[السؤال 47] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
    "correctAnswerAr": "يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
    "explanationEn": "Engineering Analysis: IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
    "explanationAr": "التحليل الهندسي المعتمد: يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_48",
    "titleEn": "[MEDIUM] 6D Object Pose Estimation & Deep Learning Robotic Grasping - Analysis 48",
    "titleAr": "[مستوى متوسط] تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق - تحليل 48",
    "questionEn": "[Question 48] When analyzing hardware-software integration and operational control for 6D Object Pose Estimation & Deep Learning Robotic Grasping, identify the correct engineering relationship:",
    "questionAr": "[السؤال 48] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Deep convolutional networks (e.g. YOLOv8 / PoseCNN) predict 2D bounding boxes and 3D bounding box keypoints, which are resolved to 6D metric poses via Perspective-n-Point (PnP) algorithms.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "تتنبأ شبكات التعلم العميق الإلتفافية بصناديق الإحاطة ونقاط المعالم ثلاثية الأبعاد، والتي تُحول إلى أوضاع مترية كاملة بخوارزميات Perspective-n-Point (PnP).",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Deep convolutional networks (e.g. YOLOv8 / PoseCNN) predict 2D bounding boxes and 3D bounding box keypoints, which are resolved to 6D metric poses via Perspective-n-Point (PnP) algorithms.",
    "correctAnswerAr": "تتنبأ شبكات التعلم العميق الإلتفافية بصناديق الإحاطة ونقاط المعالم ثلاثية الأبعاد، والتي تُحول إلى أوضاع مترية كاملة بخوارزميات Perspective-n-Point (PnP).",
    "explanationEn": "Engineering Analysis: Deep convolutional networks (e.g. YOLOv8 / PoseCNN) predict 2D bounding boxes and 3D bounding box keypoints, which are resolved to 6D metric poses via Perspective-n-Point (PnP) algorithms.",
    "explanationAr": "التحليل الهندسي المعتمد: تتنبأ شبكات التعلم العميق الإلتفافية بصناديق الإحاطة ونقاط المعالم ثلاثية الأبعاد، والتي تُحول إلى أوضاع مترية كاملة بخوارزميات Perspective-n-Point (PnP).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_49",
    "titleEn": "[MEDIUM] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Analysis 49",
    "titleAr": "[مستوى متوسط] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - تحليل 49",
    "questionEn": "[Question 49] When analyzing hardware-software integration and operational control for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates, identify the correct engineering relationship:",
    "questionAr": "[السؤال 49] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
    "correctAnswerAr": "يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
    "explanationEn": "Engineering Analysis: The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
    "explanationAr": "التحليل الهندسي المعتمد: يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_50",
    "titleEn": "[MEDIUM] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Analysis 50",
    "titleAr": "[مستوى متوسط] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - تحليل 50",
    "questionEn": "[Question 50] When analyzing hardware-software integration and operational control for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering, identify the correct engineering relationship:",
    "questionAr": "[السؤال 50] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features.",
    "correctAnswerAr": "يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة.",
    "explanationEn": "Engineering Analysis: Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features.",
    "explanationAr": "التحليل الهندسي المعتمد: يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_51",
    "titleEn": "[MEDIUM] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Analysis 51",
    "titleAr": "[مستوى متوسط] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - تحليل 51",
    "questionEn": "[Question 51] When analyzing hardware-software integration and operational control for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization, identify the correct engineering relationship:",
    "questionAr": "[السؤال 51] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
    "correctAnswerAr": "يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
    "explanationEn": "Engineering Analysis: IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
    "explanationAr": "التحليل الهندسي المعتمد: يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_52",
    "titleEn": "[MEDIUM] 6D Object Pose Estimation & Deep Learning Robotic Grasping - Analysis 52",
    "titleAr": "[مستوى متوسط] تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق - تحليل 52",
    "questionEn": "[Question 52] When analyzing hardware-software integration and operational control for 6D Object Pose Estimation & Deep Learning Robotic Grasping, identify the correct engineering relationship:",
    "questionAr": "[السؤال 52] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Deep convolutional networks (e.g. YOLOv8 / PoseCNN) predict 2D bounding boxes and 3D bounding box keypoints, which are resolved to 6D metric poses via Perspective-n-Point (PnP) algorithms.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تتنبأ شبكات التعلم العميق الإلتفافية بصناديق الإحاطة ونقاط المعالم ثلاثية الأبعاد، والتي تُحول إلى أوضاع مترية كاملة بخوارزميات Perspective-n-Point (PnP).",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Deep convolutional networks (e.g. YOLOv8 / PoseCNN) predict 2D bounding boxes and 3D bounding box keypoints, which are resolved to 6D metric poses via Perspective-n-Point (PnP) algorithms.",
    "correctAnswerAr": "تتنبأ شبكات التعلم العميق الإلتفافية بصناديق الإحاطة ونقاط المعالم ثلاثية الأبعاد، والتي تُحول إلى أوضاع مترية كاملة بخوارزميات Perspective-n-Point (PnP).",
    "explanationEn": "Engineering Analysis: Deep convolutional networks (e.g. YOLOv8 / PoseCNN) predict 2D bounding boxes and 3D bounding box keypoints, which are resolved to 6D metric poses via Perspective-n-Point (PnP) algorithms.",
    "explanationAr": "التحليل الهندسي المعتمد: تتنبأ شبكات التعلم العميق الإلتفافية بصناديق الإحاطة ونقاط المعالم ثلاثية الأبعاد، والتي تُحول إلى أوضاع مترية كاملة بخوارزميات Perspective-n-Point (PnP).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_53",
    "titleEn": "[MEDIUM] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Analysis 53",
    "titleAr": "[مستوى متوسط] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - تحليل 53",
    "questionEn": "[Question 53] When analyzing hardware-software integration and operational control for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates, identify the correct engineering relationship:",
    "questionAr": "[السؤال 53] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
    "correctAnswerAr": "يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
    "explanationEn": "Engineering Analysis: The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
    "explanationAr": "التحليل الهندسي المعتمد: يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_54",
    "titleEn": "[MEDIUM] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Analysis 54",
    "titleAr": "[مستوى متوسط] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - تحليل 54",
    "questionEn": "[Question 54] When analyzing hardware-software integration and operational control for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering, identify the correct engineering relationship:",
    "questionAr": "[السؤال 54] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features.",
    "correctAnswerAr": "يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة.",
    "explanationEn": "Engineering Analysis: Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features.",
    "explanationAr": "التحليل الهندسي المعتمد: يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_55",
    "titleEn": "[MEDIUM] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Analysis 55",
    "titleAr": "[مستوى متوسط] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - تحليل 55",
    "questionEn": "[Question 55] When analyzing hardware-software integration and operational control for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization, identify the correct engineering relationship:",
    "questionAr": "[السؤال 55] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
    "correctAnswerAr": "يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
    "explanationEn": "Engineering Analysis: IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
    "explanationAr": "التحليل الهندسي المعتمد: يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_56",
    "titleEn": "[MEDIUM] 6D Object Pose Estimation & Deep Learning Robotic Grasping - Analysis 56",
    "titleAr": "[مستوى متوسط] تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق - تحليل 56",
    "questionEn": "[Question 56] When analyzing hardware-software integration and operational control for 6D Object Pose Estimation & Deep Learning Robotic Grasping, identify the correct engineering relationship:",
    "questionAr": "[السؤال 56] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Deep convolutional networks (e.g. YOLOv8 / PoseCNN) predict 2D bounding boxes and 3D bounding box keypoints, which are resolved to 6D metric poses via Perspective-n-Point (PnP) algorithms.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "تتنبأ شبكات التعلم العميق الإلتفافية بصناديق الإحاطة ونقاط المعالم ثلاثية الأبعاد، والتي تُحول إلى أوضاع مترية كاملة بخوارزميات Perspective-n-Point (PnP).",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Deep convolutional networks (e.g. YOLOv8 / PoseCNN) predict 2D bounding boxes and 3D bounding box keypoints, which are resolved to 6D metric poses via Perspective-n-Point (PnP) algorithms.",
    "correctAnswerAr": "تتنبأ شبكات التعلم العميق الإلتفافية بصناديق الإحاطة ونقاط المعالم ثلاثية الأبعاد، والتي تُحول إلى أوضاع مترية كاملة بخوارزميات Perspective-n-Point (PnP).",
    "explanationEn": "Engineering Analysis: Deep convolutional networks (e.g. YOLOv8 / PoseCNN) predict 2D bounding boxes and 3D bounding box keypoints, which are resolved to 6D metric poses via Perspective-n-Point (PnP) algorithms.",
    "explanationAr": "التحليل الهندسي المعتمد: تتنبأ شبكات التعلم العميق الإلتفافية بصناديق الإحاطة ونقاط المعالم ثلاثية الأبعاد، والتي تُحول إلى أوضاع مترية كاملة بخوارزميات Perspective-n-Point (PnP).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_57",
    "titleEn": "[MEDIUM] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Analysis 57",
    "titleAr": "[مستوى متوسط] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - تحليل 57",
    "questionEn": "[Question 57] When analyzing hardware-software integration and operational control for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates, identify the correct engineering relationship:",
    "questionAr": "[السؤال 57] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
    "correctAnswerAr": "يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
    "explanationEn": "Engineering Analysis: The Kalman gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$ balances prediction uncertainty against measurement noise covariance $R_k$ to compute minimum variance state updates.",
    "explanationAr": "التحليل الهندسي المعتمد: يوازن معامل كسب كالمان $K_k$ بين عدم يقين التنبؤ ومصفوفة تغاير ضوضاء القياس $R_k$ لحساب تحديثات الحالة ذات التباين الأدنى إحصائياً.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_58",
    "titleEn": "[MEDIUM] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Analysis 58",
    "titleAr": "[مستوى متوسط] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - تحليل 58",
    "questionEn": "[Question 58] When analyzing hardware-software integration and operational control for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering, identify the correct engineering relationship:",
    "questionAr": "[السؤال 58] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features.",
    "correctAnswerAr": "يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة.",
    "explanationEn": "Engineering Analysis: Voxel grid filtering partitions 3D space into cubic bounding boxes (voxels) and replaces all points within each voxel by their spatial centroid, drastically reducing data rate while preserving geometric features.",
    "explanationAr": "التحليل الهندسي المعتمد: يقسم مرشح شبكة الحجيمات (Voxel Grid) الفضاء إلى مكعبات صغيرة ويستبدل جميع النقاط داخل كل حجيم بنقطة مركز ثقلها المكاني، مخفضاً حجم البيانات مع صيانة الهندسة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch2_med_59",
    "titleEn": "[MEDIUM] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Analysis 59",
    "titleAr": "[مستوى متوسط] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - تحليل 59",
    "questionEn": "[Question 59] When analyzing hardware-software integration and operational control for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization, identify the correct engineering relationship:",
    "questionAr": "[السؤال 59] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
    "correctAnswerAr": "يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
    "explanationEn": "Engineering Analysis: IMU pre-integration summarizes hundreds of inertial measurements between camera keyframes into relative motion factors, avoiding costly re-propagation during graph optimization.",
    "explanationAr": "التحليل الهندسي المعتمد: يلخص التكامل المسبق لـ IMU مئات القياسات العطالية بين إطارات الكاميرا الرئيسية في عوامل حركة نسبية، متفادياً إعادة الحساب المكلفة أثناء تحسين المخطط.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  }
],
  hots: [
  {
    "id": "egbac_robotics_ch2_hots_1",
    "titleEn": "[HOTS] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Advanced Synthesis 1",
    "titleAr": "[تفكير عليا] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - تركيب متقدم 1",
    "questionEn": "[Question 1 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates. Determine the mathematically validated result:",
    "questionAr": "[السؤال 1 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$."
    ],
    "optionsAr": [
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "correctAnswerAr": "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "explanationEn": "Detailed Quantitative Solution: For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_2",
    "titleEn": "[HOTS] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Advanced Synthesis 2",
    "titleAr": "[تفكير عليا] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - تركيب متقدم 2",
    "questionEn": "[Question 2 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering. Determine the mathematically validated result:",
    "questionAr": "[السؤال 2 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only."
    ],
    "optionsAr": [
      "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "correctAnswerAr": "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "explanationEn": "Detailed Quantitative Solution: RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_3",
    "titleEn": "[HOTS] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Advanced Synthesis 3",
    "titleAr": "[تفكير عليا] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - تركيب متقدم 3",
    "questionEn": "[Question 3 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization. Determine the mathematically validated result:",
    "questionAr": "[السؤال 3 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
    "correctAnswerAr": "يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
    "explanationEn": "Detailed Quantitative Solution: Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_4",
    "titleEn": "[HOTS] 6D Object Pose Estimation & Deep Learning Robotic Grasping - Advanced Synthesis 4",
    "titleAr": "[تفكير عليا] تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق - تركيب متقدم 4",
    "questionEn": "[Question 4 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 6D Object Pose Estimation & Deep Learning Robotic Grasping. Determine the mathematically validated result:",
    "questionAr": "[السؤال 4 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices."
    ],
    "optionsAr": [
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
    "correctAnswerAr": "لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
    "explanationEn": "Detailed Quantitative Solution: For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_5",
    "titleEn": "[HOTS] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Advanced Synthesis 5",
    "titleAr": "[تفكير عليا] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - تركيب متقدم 5",
    "questionEn": "[Question 5 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates. Determine the mathematically validated result:",
    "questionAr": "[السؤال 5 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "correctAnswerAr": "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "explanationEn": "Detailed Quantitative Solution: For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_6",
    "titleEn": "[HOTS] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Advanced Synthesis 6",
    "titleAr": "[تفكير عليا] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - تركيب متقدم 6",
    "questionEn": "[Question 6 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering. Determine the mathematically validated result:",
    "questionAr": "[السؤال 6 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "correctAnswerAr": "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "explanationEn": "Detailed Quantitative Solution: RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_7",
    "titleEn": "[HOTS] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Advanced Synthesis 7",
    "titleAr": "[تفكير عليا] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - تركيب متقدم 7",
    "questionEn": "[Question 7 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization. Determine the mathematically validated result:",
    "questionAr": "[السؤال 7 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light."
    ],
    "optionsAr": [
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
    "correctAnswerAr": "يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
    "explanationEn": "Detailed Quantitative Solution: Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_8",
    "titleEn": "[HOTS] 6D Object Pose Estimation & Deep Learning Robotic Grasping - Advanced Synthesis 8",
    "titleAr": "[تفكير عليا] تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق - تركيب متقدم 8",
    "questionEn": "[Question 8 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 6D Object Pose Estimation & Deep Learning Robotic Grasping. Determine the mathematically validated result:",
    "questionAr": "[السؤال 8 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages."
    ],
    "optionsAr": [
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
    "correctAnswerAr": "لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
    "explanationEn": "Detailed Quantitative Solution: For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_9",
    "titleEn": "[HOTS] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Advanced Synthesis 9",
    "titleAr": "[تفكير عليا] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - تركيب متقدم 9",
    "questionEn": "[Question 9 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates. Determine the mathematically validated result:",
    "questionAr": "[السؤال 9 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "correctAnswerAr": "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "explanationEn": "Detailed Quantitative Solution: For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_10",
    "titleEn": "[HOTS] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Advanced Synthesis 10",
    "titleAr": "[تفكير عليا] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - تركيب متقدم 10",
    "questionEn": "[Question 10 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering. Determine the mathematically validated result:",
    "questionAr": "[السؤال 10 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "correctAnswerAr": "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "explanationEn": "Detailed Quantitative Solution: RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_11",
    "titleEn": "[HOTS] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Advanced Synthesis 11",
    "titleAr": "[تفكير عليا] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - تركيب متقدم 11",
    "questionEn": "[Question 11 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization. Determine the mathematically validated result:",
    "questionAr": "[السؤال 11 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction."
    ],
    "optionsAr": [
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
    "correctAnswerAr": "يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
    "explanationEn": "Detailed Quantitative Solution: Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_12",
    "titleEn": "[HOTS] 6D Object Pose Estimation & Deep Learning Robotic Grasping - Advanced Synthesis 12",
    "titleAr": "[تفكير عليا] تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق - تركيب متقدم 12",
    "questionEn": "[Question 12 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 6D Object Pose Estimation & Deep Learning Robotic Grasping. Determine the mathematically validated result:",
    "questionAr": "[السؤال 12 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
    "correctAnswerAr": "لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
    "explanationEn": "Detailed Quantitative Solution: For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_13",
    "titleEn": "[HOTS] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Advanced Synthesis 13",
    "titleAr": "[تفكير عليا] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - تركيب متقدم 13",
    "questionEn": "[Question 13 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates. Determine the mathematically validated result:",
    "questionAr": "[السؤال 13 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$."
    ],
    "optionsAr": [
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "correctAnswerAr": "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "explanationEn": "Detailed Quantitative Solution: For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_14",
    "titleEn": "[HOTS] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Advanced Synthesis 14",
    "titleAr": "[تفكير عليا] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - تركيب متقدم 14",
    "questionEn": "[Question 14 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering. Determine the mathematically validated result:",
    "questionAr": "[السؤال 14 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends."
    ],
    "optionsAr": [
      "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "correctAnswerAr": "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "explanationEn": "Detailed Quantitative Solution: RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_15",
    "titleEn": "[HOTS] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Advanced Synthesis 15",
    "titleAr": "[تفكير عليا] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - تركيب متقدم 15",
    "questionEn": "[Question 15 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization. Determine the mathematically validated result:",
    "questionAr": "[السؤال 15 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
    "correctAnswerAr": "يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
    "explanationEn": "Detailed Quantitative Solution: Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_16",
    "titleEn": "[HOTS] 6D Object Pose Estimation & Deep Learning Robotic Grasping - Advanced Synthesis 16",
    "titleAr": "[تفكير عليا] تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق - تركيب متقدم 16",
    "questionEn": "[Question 16 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 6D Object Pose Estimation & Deep Learning Robotic Grasping. Determine the mathematically validated result:",
    "questionAr": "[السؤال 16 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion."
    ],
    "optionsAr": [
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
    "correctAnswerAr": "لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
    "explanationEn": "Detailed Quantitative Solution: For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_17",
    "titleEn": "[HOTS] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Advanced Synthesis 17",
    "titleAr": "[تفكير عليا] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - تركيب متقدم 17",
    "questionEn": "[Question 17 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates. Determine the mathematically validated result:",
    "questionAr": "[السؤال 17 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$."
    ],
    "optionsAr": [
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "correctAnswerAr": "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "explanationEn": "Detailed Quantitative Solution: For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_18",
    "titleEn": "[HOTS] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Advanced Synthesis 18",
    "titleAr": "[تفكير عليا] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - تركيب متقدم 18",
    "questionEn": "[Question 18 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering. Determine the mathematically validated result:",
    "questionAr": "[السؤال 18 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "correctAnswerAr": "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "explanationEn": "Detailed Quantitative Solution: RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_19",
    "titleEn": "[HOTS] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Advanced Synthesis 19",
    "titleAr": "[تفكير عليا] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - تركيب متقدم 19",
    "questionEn": "[Question 19 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization. Determine the mathematically validated result:",
    "questionAr": "[السؤال 19 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices."
    ],
    "optionsAr": [
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
    "correctAnswerAr": "يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
    "explanationEn": "Detailed Quantitative Solution: Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_20",
    "titleEn": "[HOTS] 6D Object Pose Estimation & Deep Learning Robotic Grasping - Advanced Synthesis 20",
    "titleAr": "[تفكير عليا] تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق - تركيب متقدم 20",
    "questionEn": "[Question 20 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 6D Object Pose Estimation & Deep Learning Robotic Grasping. Determine the mathematically validated result:",
    "questionAr": "[السؤال 20 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
    "correctAnswerAr": "لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
    "explanationEn": "Detailed Quantitative Solution: For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_21",
    "titleEn": "[HOTS] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Advanced Synthesis 21",
    "titleAr": "[تفكير عليا] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - تركيب متقدم 21",
    "questionEn": "[Question 21 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates. Determine the mathematically validated result:",
    "questionAr": "[السؤال 21 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "correctAnswerAr": "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "explanationEn": "Detailed Quantitative Solution: For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_22",
    "titleEn": "[HOTS] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Advanced Synthesis 22",
    "titleAr": "[تفكير عليا] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - تركيب متقدم 22",
    "questionEn": "[Question 22 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering. Determine the mathematically validated result:",
    "questionAr": "[السؤال 22 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light."
    ],
    "optionsAr": [
      "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "correctAnswerAr": "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "explanationEn": "Detailed Quantitative Solution: RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_23",
    "titleEn": "[HOTS] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Advanced Synthesis 23",
    "titleAr": "[تفكير عليا] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - تركيب متقدم 23",
    "questionEn": "[Question 23 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization. Determine the mathematically validated result:",
    "questionAr": "[السؤال 23 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages."
    ],
    "optionsAr": [
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
    "correctAnswerAr": "يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
    "explanationEn": "Detailed Quantitative Solution: Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_24",
    "titleEn": "[HOTS] 6D Object Pose Estimation & Deep Learning Robotic Grasping - Advanced Synthesis 24",
    "titleAr": "[تفكير عليا] تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق - تركيب متقدم 24",
    "questionEn": "[Question 24 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 6D Object Pose Estimation & Deep Learning Robotic Grasping. Determine the mathematically validated result:",
    "questionAr": "[السؤال 24 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
    "correctAnswerAr": "لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
    "explanationEn": "Detailed Quantitative Solution: For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_25",
    "titleEn": "[HOTS] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Advanced Synthesis 25",
    "titleAr": "[تفكير عليا] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - تركيب متقدم 25",
    "questionEn": "[Question 25 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates. Determine the mathematically validated result:",
    "questionAr": "[السؤال 25 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "correctAnswerAr": "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "explanationEn": "Detailed Quantitative Solution: For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_26",
    "titleEn": "[HOTS] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Advanced Synthesis 26",
    "titleAr": "[تفكير عليا] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - تركيب متقدم 26",
    "questionEn": "[Question 26 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering. Determine the mathematically validated result:",
    "questionAr": "[السؤال 26 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction."
    ],
    "optionsAr": [
      "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "correctAnswerAr": "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "explanationEn": "Detailed Quantitative Solution: RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_27",
    "titleEn": "[HOTS] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Advanced Synthesis 27",
    "titleAr": "[تفكير عليا] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - تركيب متقدم 27",
    "questionEn": "[Question 27 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization. Determine the mathematically validated result:",
    "questionAr": "[السؤال 27 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
    "correctAnswerAr": "يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
    "explanationEn": "Detailed Quantitative Solution: Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_28",
    "titleEn": "[HOTS] 6D Object Pose Estimation & Deep Learning Robotic Grasping - Advanced Synthesis 28",
    "titleAr": "[تفكير عليا] تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق - تركيب متقدم 28",
    "questionEn": "[Question 28 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 6D Object Pose Estimation & Deep Learning Robotic Grasping. Determine the mathematically validated result:",
    "questionAr": "[السؤال 28 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting."
    ],
    "optionsAr": [
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
    "correctAnswerAr": "لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
    "explanationEn": "Detailed Quantitative Solution: For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_29",
    "titleEn": "[HOTS] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Advanced Synthesis 29",
    "titleAr": "[تفكير عليا] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - تركيب متقدم 29",
    "questionEn": "[Question 29 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates. Determine the mathematically validated result:",
    "questionAr": "[السؤال 29 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$."
    ],
    "optionsAr": [
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "correctAnswerAr": "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "explanationEn": "Detailed Quantitative Solution: For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_30",
    "titleEn": "[HOTS] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Advanced Synthesis 30",
    "titleAr": "[تفكير عليا] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - تركيب متقدم 30",
    "questionEn": "[Question 30 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering. Determine the mathematically validated result:",
    "questionAr": "[السؤال 30 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "correctAnswerAr": "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "explanationEn": "Detailed Quantitative Solution: RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_31",
    "titleEn": "[HOTS] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Advanced Synthesis 31",
    "titleAr": "[تفكير عليا] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - تركيب متقدم 31",
    "questionEn": "[Question 31 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization. Determine the mathematically validated result:",
    "questionAr": "[السؤال 31 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion."
    ],
    "optionsAr": [
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
    "correctAnswerAr": "يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
    "explanationEn": "Detailed Quantitative Solution: Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_32",
    "titleEn": "[HOTS] 6D Object Pose Estimation & Deep Learning Robotic Grasping - Advanced Synthesis 32",
    "titleAr": "[تفكير عليا] تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق - تركيب متقدم 32",
    "questionEn": "[Question 32 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 6D Object Pose Estimation & Deep Learning Robotic Grasping. Determine the mathematically validated result:",
    "questionAr": "[السؤال 32 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only."
    ],
    "optionsAr": [
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
    "correctAnswerAr": "لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
    "explanationEn": "Detailed Quantitative Solution: For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_33",
    "titleEn": "[HOTS] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Advanced Synthesis 33",
    "titleAr": "[تفكير عليا] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - تركيب متقدم 33",
    "questionEn": "[Question 33 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates. Determine the mathematically validated result:",
    "questionAr": "[السؤال 33 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "correctAnswerAr": "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "explanationEn": "Detailed Quantitative Solution: For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_34",
    "titleEn": "[HOTS] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Advanced Synthesis 34",
    "titleAr": "[تفكير عليا] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - تركيب متقدم 34",
    "questionEn": "[Question 34 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering. Determine the mathematically validated result:",
    "questionAr": "[السؤال 34 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices."
    ],
    "optionsAr": [
      "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "correctAnswerAr": "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "explanationEn": "Detailed Quantitative Solution: RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_35",
    "titleEn": "[HOTS] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Advanced Synthesis 35",
    "titleAr": "[تفكير عليا] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - تركيب متقدم 35",
    "questionEn": "[Question 35 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization. Determine the mathematically validated result:",
    "questionAr": "[السؤال 35 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
    "correctAnswerAr": "يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
    "explanationEn": "Detailed Quantitative Solution: Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_36",
    "titleEn": "[HOTS] 6D Object Pose Estimation & Deep Learning Robotic Grasping - Advanced Synthesis 36",
    "titleAr": "[تفكير عليا] تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق - تركيب متقدم 36",
    "questionEn": "[Question 36 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 6D Object Pose Estimation & Deep Learning Robotic Grasping. Determine the mathematically validated result:",
    "questionAr": "[السؤال 36 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
    "correctAnswerAr": "لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
    "explanationEn": "Detailed Quantitative Solution: For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_37",
    "titleEn": "[HOTS] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Advanced Synthesis 37",
    "titleAr": "[تفكير عليا] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - تركيب متقدم 37",
    "questionEn": "[Question 37 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates. Determine the mathematically validated result:",
    "questionAr": "[السؤال 37 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$."
    ],
    "optionsAr": [
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "correctAnswerAr": "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "explanationEn": "Detailed Quantitative Solution: For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_38",
    "titleEn": "[HOTS] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Advanced Synthesis 38",
    "titleAr": "[تفكير عليا] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - تركيب متقدم 38",
    "questionEn": "[Question 38 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering. Determine the mathematically validated result:",
    "questionAr": "[السؤال 38 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages."
    ],
    "optionsAr": [
      "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "correctAnswerAr": "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "explanationEn": "Detailed Quantitative Solution: RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_39",
    "titleEn": "[HOTS] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Advanced Synthesis 39",
    "titleAr": "[تفكير عليا] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - تركيب متقدم 39",
    "questionEn": "[Question 39 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization. Determine the mathematically validated result:",
    "questionAr": "[السؤال 39 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
    "correctAnswerAr": "يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
    "explanationEn": "Detailed Quantitative Solution: Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_40",
    "titleEn": "[HOTS] 6D Object Pose Estimation & Deep Learning Robotic Grasping - Advanced Synthesis 40",
    "titleAr": "[تفكير عليا] تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق - تركيب متقدم 40",
    "questionEn": "[Question 40 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 6D Object Pose Estimation & Deep Learning Robotic Grasping. Determine the mathematically validated result:",
    "questionAr": "[السؤال 40 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
    "correctAnswerAr": "لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
    "explanationEn": "Detailed Quantitative Solution: For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_41",
    "titleEn": "[HOTS] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Advanced Synthesis 41",
    "titleAr": "[تفكير عليا] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - تركيب متقدم 41",
    "questionEn": "[Question 41 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates. Determine the mathematically validated result:",
    "questionAr": "[السؤال 41 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$."
    ],
    "optionsAr": [
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "correctAnswerAr": "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "explanationEn": "Detailed Quantitative Solution: For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_42",
    "titleEn": "[HOTS] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Advanced Synthesis 42",
    "titleAr": "[تفكير عليا] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - تركيب متقدم 42",
    "questionEn": "[Question 42 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering. Determine the mathematically validated result:",
    "questionAr": "[السؤال 42 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "correctAnswerAr": "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "explanationEn": "Detailed Quantitative Solution: RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_43",
    "titleEn": "[HOTS] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Advanced Synthesis 43",
    "titleAr": "[تفكير عليا] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - تركيب متقدم 43",
    "questionEn": "[Question 43 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization. Determine the mathematically validated result:",
    "questionAr": "[السؤال 43 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting."
    ],
    "optionsAr": [
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
    "correctAnswerAr": "يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
    "explanationEn": "Detailed Quantitative Solution: Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_44",
    "titleEn": "[HOTS] 6D Object Pose Estimation & Deep Learning Robotic Grasping - Advanced Synthesis 44",
    "titleAr": "[تفكير عليا] تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق - تركيب متقدم 44",
    "questionEn": "[Question 44 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 6D Object Pose Estimation & Deep Learning Robotic Grasping. Determine the mathematically validated result:",
    "questionAr": "[السؤال 44 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends."
    ],
    "optionsAr": [
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
    "correctAnswerAr": "لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
    "explanationEn": "Detailed Quantitative Solution: For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_45",
    "titleEn": "[HOTS] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Advanced Synthesis 45",
    "titleAr": "[تفكير عليا] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - تركيب متقدم 45",
    "questionEn": "[Question 45 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates. Determine the mathematically validated result:",
    "questionAr": "[السؤال 45 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "correctAnswerAr": "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "explanationEn": "Detailed Quantitative Solution: For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_46",
    "titleEn": "[HOTS] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Advanced Synthesis 46",
    "titleAr": "[تفكير عليا] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - تركيب متقدم 46",
    "questionEn": "[Question 46 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering. Determine the mathematically validated result:",
    "questionAr": "[السؤال 46 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion."
    ],
    "optionsAr": [
      "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "correctAnswerAr": "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "explanationEn": "Detailed Quantitative Solution: RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_47",
    "titleEn": "[HOTS] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Advanced Synthesis 47",
    "titleAr": "[تفكير عليا] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - تركيب متقدم 47",
    "questionEn": "[Question 47 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization. Determine the mathematically validated result:",
    "questionAr": "[السؤال 47 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only."
    ],
    "optionsAr": [
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
    "correctAnswerAr": "يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
    "explanationEn": "Detailed Quantitative Solution: Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_48",
    "titleEn": "[HOTS] 6D Object Pose Estimation & Deep Learning Robotic Grasping - Advanced Synthesis 48",
    "titleAr": "[تفكير عليا] تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق - تركيب متقدم 48",
    "questionEn": "[Question 48 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 6D Object Pose Estimation & Deep Learning Robotic Grasping. Determine the mathematically validated result:",
    "questionAr": "[السؤال 48 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
    "correctAnswerAr": "لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
    "explanationEn": "Detailed Quantitative Solution: For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_49",
    "titleEn": "[HOTS] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Advanced Synthesis 49",
    "titleAr": "[تفكير عليا] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - تركيب متقدم 49",
    "questionEn": "[Question 49 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates. Determine the mathematically validated result:",
    "questionAr": "[السؤال 49 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$."
    ],
    "optionsAr": [
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "correctAnswerAr": "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "explanationEn": "Detailed Quantitative Solution: For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_50",
    "titleEn": "[HOTS] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Advanced Synthesis 50",
    "titleAr": "[تفكير عليا] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - تركيب متقدم 50",
    "questionEn": "[Question 50 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering. Determine the mathematically validated result:",
    "questionAr": "[السؤال 50 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "correctAnswerAr": "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "explanationEn": "Detailed Quantitative Solution: RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_51",
    "titleEn": "[HOTS] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Advanced Synthesis 51",
    "titleAr": "[تفكير عليا] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - تركيب متقدم 51",
    "questionEn": "[Question 51 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization. Determine the mathematically validated result:",
    "questionAr": "[السؤال 51 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
    "correctAnswerAr": "يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
    "explanationEn": "Detailed Quantitative Solution: Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_52",
    "titleEn": "[HOTS] 6D Object Pose Estimation & Deep Learning Robotic Grasping - Advanced Synthesis 52",
    "titleAr": "[تفكير عليا] تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق - تركيب متقدم 52",
    "questionEn": "[Question 52 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 6D Object Pose Estimation & Deep Learning Robotic Grasping. Determine the mathematically validated result:",
    "questionAr": "[السؤال 52 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light."
    ],
    "optionsAr": [
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
    "correctAnswerAr": "لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
    "explanationEn": "Detailed Quantitative Solution: For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_53",
    "titleEn": "[HOTS] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Advanced Synthesis 53",
    "titleAr": "[تفكير عليا] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - تركيب متقدم 53",
    "questionEn": "[Question 53 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates. Determine the mathematically validated result:",
    "questionAr": "[السؤال 53 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$."
    ],
    "optionsAr": [
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "correctAnswerAr": "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "explanationEn": "Detailed Quantitative Solution: For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_54",
    "titleEn": "[HOTS] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Advanced Synthesis 54",
    "titleAr": "[تفكير عليا] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - تركيب متقدم 54",
    "questionEn": "[Question 54 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering. Determine the mathematically validated result:",
    "questionAr": "[السؤال 54 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "correctAnswerAr": "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "explanationEn": "Detailed Quantitative Solution: RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_55",
    "titleEn": "[HOTS] Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization - Advanced Synthesis 55",
    "titleAr": "[تفكير عليا] قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني - تركيب متقدم 55",
    "questionEn": "[Question 55 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization. Determine the mathematically validated result:",
    "questionAr": "[السؤال 55 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
    "correctAnswerAr": "يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
    "explanationEn": "Detailed Quantitative Solution: Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_56",
    "titleEn": "[HOTS] 6D Object Pose Estimation & Deep Learning Robotic Grasping - Advanced Synthesis 56",
    "titleAr": "[تفكير عليا] تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق - تركيب متقدم 56",
    "questionEn": "[Question 56 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 6D Object Pose Estimation & Deep Learning Robotic Grasping. Determine the mathematically validated result:",
    "questionAr": "[السؤال 56 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction."
    ],
    "optionsAr": [
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
    "correctAnswerAr": "لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
    "explanationEn": "Detailed Quantitative Solution: For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_57",
    "titleEn": "[HOTS] Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates - Advanced Synthesis 57",
    "titleAr": "[تفكير عليا] تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير - تركيب متقدم 57",
    "questionEn": "[Question 57 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates. Determine the mathematically validated result:",
    "questionAr": "[السؤال 57 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "correctAnswerAr": "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "explanationEn": "Detailed Quantitative Solution: For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_hots_58",
    "titleEn": "[HOTS] 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering - Advanced Synthesis 58",
    "titleAr": "[تفكير عليا] معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط - تركيب متقدم 58",
    "questionEn": "[Question 58 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering. Determine the mathematically validated result:",
    "questionAr": "[السؤال 58 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting."
    ],
    "optionsAr": [
      "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "correctAnswerAr": "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "explanationEn": "Detailed Quantitative Solution: RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  }
]
};
