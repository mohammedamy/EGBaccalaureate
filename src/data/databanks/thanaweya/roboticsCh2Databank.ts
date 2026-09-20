import type { QuestionBank } from '../../../types/curriculum';

export const roboticsCh2Databank: QuestionBank = {
  easy: [
  {
    "id": "th_robotics_ch2_easy_1",
    "titleEn": "[EASY] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Review 1",
    "titleAr": "[مستوى أساسي] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - سؤال 1",
    "questionEn": "[Question 1] In the context of Egyptian STEM robotics and mechatronics regarding Inertial Measurement Units (IMU) & Complementary Filter Fusion, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 1] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
    "correctAnswerAr": "تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
    "explanationEn": "Correct Principle: A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
    "explanationAr": "المبدأ العلمي الصحيح: تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_2",
    "titleEn": "[EASY] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Review 2",
    "titleAr": "[مستوى أساسي] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - سؤال 2",
    "questionEn": "[Question 2] In the context of Egyptian STEM robotics and mechatronics regarding Optical Quadrature Encoders, X4 Decoding & Wheel Odometry, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 2] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
    "correctAnswerAr": "تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
    "explanationEn": "Correct Principle: Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
    "explanationAr": "المبدأ العلمي الصحيح: تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_3",
    "titleEn": "[EASY] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Review 3",
    "titleAr": "[مستوى أساسي] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - سؤال 3",
    "questionEn": "[Question 3] In the context of Egyptian STEM robotics and mechatronics regarding Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 3] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Time-of-Flight (ToF) LiDAR emits pulsed laser beams at light speed $c \\approx 3 \\times 10^8\\ m/s$ and measures round-trip time $\\Delta t$ to calculate object distance: $d = \\frac{c \\Delta t}{2}$.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "يرسل رادار الليزر ToF نبضات ليزرية بسرعة الضوء $c \\approx 3 \\times 10^8\\ m/s$ ويقيس زمن الذهاب والعودة $\\Delta t$ لحساب المسافة: $d = \\frac{c \\Delta t}{2}$.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Time-of-Flight (ToF) LiDAR emits pulsed laser beams at light speed $c \\approx 3 \\times 10^8\\ m/s$ and measures round-trip time $\\Delta t$ to calculate object distance: $d = \\frac{c \\Delta t}{2}$.",
    "correctAnswerAr": "يرسل رادار الليزر ToF نبضات ليزرية بسرعة الضوء $c \\approx 3 \\times 10^8\\ m/s$ ويقيس زمن الذهاب والعودة $\\Delta t$ لحساب المسافة: $d = \\frac{c \\Delta t}{2}$.",
    "explanationEn": "Correct Principle: Time-of-Flight (ToF) LiDAR emits pulsed laser beams at light speed $c \\approx 3 \\times 10^8\\ m/s$ and measures round-trip time $\\Delta t$ to calculate object distance: $d = \\frac{c \\Delta t}{2}$.",
    "explanationAr": "المبدأ العلمي الصحيح: يرسل رادار الليزر ToF نبضات ليزرية بسرعة الضوء $c \\approx 3 \\times 10^8\\ m/s$ ويقيس زمن الذهاب والعودة $\\Delta t$ لحساب المسافة: $d = \\frac{c \\Delta t}{2}$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_4",
    "titleEn": "[EASY] OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform - Review 4",
    "titleAr": "[مستوى أساسي] استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف - سؤال 4",
    "questionEn": "[Question 4] In the context of Egyptian STEM robotics and mechatronics regarding OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 4] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Digital image processing in robotics converts RGB color frames to grayscale before applying Gaussian smoothing convolution kernels to suppress high-frequency sensor noise."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "تحول معالجة الصور الرقمية في الروبوتات إطارات الألوان RGB إلى التدرج الرمادي قبل تطبيق نوى التفاف غاوس لإزالة الضوضاء عالية التردد."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Digital image processing in robotics converts RGB color frames to grayscale before applying Gaussian smoothing convolution kernels to suppress high-frequency sensor noise.",
    "correctAnswerAr": "تحول معالجة الصور الرقمية في الروبوتات إطارات الألوان RGB إلى التدرج الرمادي قبل تطبيق نوى التفاف غاوس لإزالة الضوضاء عالية التردد.",
    "explanationEn": "Correct Principle: Digital image processing in robotics converts RGB color frames to grayscale before applying Gaussian smoothing convolution kernels to suppress high-frequency sensor noise.",
    "explanationAr": "المبدأ العلمي الصحيح: تحول معالجة الصور الرقمية في الروبوتات إطارات الألوان RGB إلى التدرج الرمادي قبل تطبيق نوى التفاف غاوس لإزالة الضوضاء عالية التردد.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_5",
    "titleEn": "[EASY] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Review 5",
    "titleAr": "[مستوى أساسي] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - سؤال 5",
    "questionEn": "[Question 5] In the context of Egyptian STEM robotics and mechatronics regarding Inertial Measurement Units (IMU) & Complementary Filter Fusion, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 5] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
    "correctAnswerAr": "تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
    "explanationEn": "Correct Principle: A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
    "explanationAr": "المبدأ العلمي الصحيح: تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_6",
    "titleEn": "[EASY] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Review 6",
    "titleAr": "[مستوى أساسي] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - سؤال 6",
    "questionEn": "[Question 6] In the context of Egyptian STEM robotics and mechatronics regarding Optical Quadrature Encoders, X4 Decoding & Wheel Odometry, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 6] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
    "correctAnswerAr": "تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
    "explanationEn": "Correct Principle: Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
    "explanationAr": "المبدأ العلمي الصحيح: تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_7",
    "titleEn": "[EASY] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Review 7",
    "titleAr": "[مستوى أساسي] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - سؤال 7",
    "questionEn": "[Question 7] In the context of Egyptian STEM robotics and mechatronics regarding Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 7] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "Time-of-Flight (ToF) LiDAR emits pulsed laser beams at light speed $c \\approx 3 \\times 10^8\\ m/s$ and measures round-trip time $\\Delta t$ to calculate object distance: $d = \\frac{c \\Delta t}{2}$.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "يرسل رادار الليزر ToF نبضات ليزرية بسرعة الضوء $c \\approx 3 \\times 10^8\\ m/s$ ويقيس زمن الذهاب والعودة $\\Delta t$ لحساب المسافة: $d = \\frac{c \\Delta t}{2}$.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Time-of-Flight (ToF) LiDAR emits pulsed laser beams at light speed $c \\approx 3 \\times 10^8\\ m/s$ and measures round-trip time $\\Delta t$ to calculate object distance: $d = \\frac{c \\Delta t}{2}$.",
    "correctAnswerAr": "يرسل رادار الليزر ToF نبضات ليزرية بسرعة الضوء $c \\approx 3 \\times 10^8\\ m/s$ ويقيس زمن الذهاب والعودة $\\Delta t$ لحساب المسافة: $d = \\frac{c \\Delta t}{2}$.",
    "explanationEn": "Correct Principle: Time-of-Flight (ToF) LiDAR emits pulsed laser beams at light speed $c \\approx 3 \\times 10^8\\ m/s$ and measures round-trip time $\\Delta t$ to calculate object distance: $d = \\frac{c \\Delta t}{2}$.",
    "explanationAr": "المبدأ العلمي الصحيح: يرسل رادار الليزر ToF نبضات ليزرية بسرعة الضوء $c \\approx 3 \\times 10^8\\ m/s$ ويقيس زمن الذهاب والعودة $\\Delta t$ لحساب المسافة: $d = \\frac{c \\Delta t}{2}$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_8",
    "titleEn": "[EASY] OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform - Review 8",
    "titleAr": "[مستوى أساسي] استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف - سؤال 8",
    "questionEn": "[Question 8] In the context of Egyptian STEM robotics and mechatronics regarding OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 8] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "Digital image processing in robotics converts RGB color frames to grayscale before applying Gaussian smoothing convolution kernels to suppress high-frequency sensor noise."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تحول معالجة الصور الرقمية في الروبوتات إطارات الألوان RGB إلى التدرج الرمادي قبل تطبيق نوى التفاف غاوس لإزالة الضوضاء عالية التردد."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Digital image processing in robotics converts RGB color frames to grayscale before applying Gaussian smoothing convolution kernels to suppress high-frequency sensor noise.",
    "correctAnswerAr": "تحول معالجة الصور الرقمية في الروبوتات إطارات الألوان RGB إلى التدرج الرمادي قبل تطبيق نوى التفاف غاوس لإزالة الضوضاء عالية التردد.",
    "explanationEn": "Correct Principle: Digital image processing in robotics converts RGB color frames to grayscale before applying Gaussian smoothing convolution kernels to suppress high-frequency sensor noise.",
    "explanationAr": "المبدأ العلمي الصحيح: تحول معالجة الصور الرقمية في الروبوتات إطارات الألوان RGB إلى التدرج الرمادي قبل تطبيق نوى التفاف غاوس لإزالة الضوضاء عالية التردد.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_9",
    "titleEn": "[EASY] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Review 9",
    "titleAr": "[مستوى أساسي] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - سؤال 9",
    "questionEn": "[Question 9] In the context of Egyptian STEM robotics and mechatronics regarding Inertial Measurement Units (IMU) & Complementary Filter Fusion, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 9] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
    "correctAnswerAr": "تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
    "explanationEn": "Correct Principle: A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
    "explanationAr": "المبدأ العلمي الصحيح: تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_10",
    "titleEn": "[EASY] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Review 10",
    "titleAr": "[مستوى أساسي] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - سؤال 10",
    "questionEn": "[Question 10] In the context of Egyptian STEM robotics and mechatronics regarding Optical Quadrature Encoders, X4 Decoding & Wheel Odometry, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 10] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
    "correctAnswerAr": "تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
    "explanationEn": "Correct Principle: Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
    "explanationAr": "المبدأ العلمي الصحيح: تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_11",
    "titleEn": "[EASY] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Review 11",
    "titleAr": "[مستوى أساسي] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - سؤال 11",
    "questionEn": "[Question 11] In the context of Egyptian STEM robotics and mechatronics regarding Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 11] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Time-of-Flight (ToF) LiDAR emits pulsed laser beams at light speed $c \\approx 3 \\times 10^8\\ m/s$ and measures round-trip time $\\Delta t$ to calculate object distance: $d = \\frac{c \\Delta t}{2}$.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "يرسل رادار الليزر ToF نبضات ليزرية بسرعة الضوء $c \\approx 3 \\times 10^8\\ m/s$ ويقيس زمن الذهاب والعودة $\\Delta t$ لحساب المسافة: $d = \\frac{c \\Delta t}{2}$.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Time-of-Flight (ToF) LiDAR emits pulsed laser beams at light speed $c \\approx 3 \\times 10^8\\ m/s$ and measures round-trip time $\\Delta t$ to calculate object distance: $d = \\frac{c \\Delta t}{2}$.",
    "correctAnswerAr": "يرسل رادار الليزر ToF نبضات ليزرية بسرعة الضوء $c \\approx 3 \\times 10^8\\ m/s$ ويقيس زمن الذهاب والعودة $\\Delta t$ لحساب المسافة: $d = \\frac{c \\Delta t}{2}$.",
    "explanationEn": "Correct Principle: Time-of-Flight (ToF) LiDAR emits pulsed laser beams at light speed $c \\approx 3 \\times 10^8\\ m/s$ and measures round-trip time $\\Delta t$ to calculate object distance: $d = \\frac{c \\Delta t}{2}$.",
    "explanationAr": "المبدأ العلمي الصحيح: يرسل رادار الليزر ToF نبضات ليزرية بسرعة الضوء $c \\approx 3 \\times 10^8\\ m/s$ ويقيس زمن الذهاب والعودة $\\Delta t$ لحساب المسافة: $d = \\frac{c \\Delta t}{2}$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_12",
    "titleEn": "[EASY] OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform - Review 12",
    "titleAr": "[مستوى أساسي] استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف - سؤال 12",
    "questionEn": "[Question 12] In the context of Egyptian STEM robotics and mechatronics regarding OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 12] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "Digital image processing in robotics converts RGB color frames to grayscale before applying Gaussian smoothing convolution kernels to suppress high-frequency sensor noise."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "تحول معالجة الصور الرقمية في الروبوتات إطارات الألوان RGB إلى التدرج الرمادي قبل تطبيق نوى التفاف غاوس لإزالة الضوضاء عالية التردد."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Digital image processing in robotics converts RGB color frames to grayscale before applying Gaussian smoothing convolution kernels to suppress high-frequency sensor noise.",
    "correctAnswerAr": "تحول معالجة الصور الرقمية في الروبوتات إطارات الألوان RGB إلى التدرج الرمادي قبل تطبيق نوى التفاف غاوس لإزالة الضوضاء عالية التردد.",
    "explanationEn": "Correct Principle: Digital image processing in robotics converts RGB color frames to grayscale before applying Gaussian smoothing convolution kernels to suppress high-frequency sensor noise.",
    "explanationAr": "المبدأ العلمي الصحيح: تحول معالجة الصور الرقمية في الروبوتات إطارات الألوان RGB إلى التدرج الرمادي قبل تطبيق نوى التفاف غاوس لإزالة الضوضاء عالية التردد.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_13",
    "titleEn": "[EASY] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Review 13",
    "titleAr": "[مستوى أساسي] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - سؤال 13",
    "questionEn": "[Question 13] In the context of Egyptian STEM robotics and mechatronics regarding Inertial Measurement Units (IMU) & Complementary Filter Fusion, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 13] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
    "correctAnswerAr": "تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
    "explanationEn": "Correct Principle: A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
    "explanationAr": "المبدأ العلمي الصحيح: تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_14",
    "titleEn": "[EASY] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Review 14",
    "titleAr": "[مستوى أساسي] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - سؤال 14",
    "questionEn": "[Question 14] In the context of Egyptian STEM robotics and mechatronics regarding Optical Quadrature Encoders, X4 Decoding & Wheel Odometry, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 14] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
    "correctAnswerAr": "تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
    "explanationEn": "Correct Principle: Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
    "explanationAr": "المبدأ العلمي الصحيح: تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_15",
    "titleEn": "[EASY] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Review 15",
    "titleAr": "[مستوى أساسي] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - سؤال 15",
    "questionEn": "[Question 15] In the context of Egyptian STEM robotics and mechatronics regarding Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 15] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Time-of-Flight (ToF) LiDAR emits pulsed laser beams at light speed $c \\approx 3 \\times 10^8\\ m/s$ and measures round-trip time $\\Delta t$ to calculate object distance: $d = \\frac{c \\Delta t}{2}$.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "يرسل رادار الليزر ToF نبضات ليزرية بسرعة الضوء $c \\approx 3 \\times 10^8\\ m/s$ ويقيس زمن الذهاب والعودة $\\Delta t$ لحساب المسافة: $d = \\frac{c \\Delta t}{2}$.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Time-of-Flight (ToF) LiDAR emits pulsed laser beams at light speed $c \\approx 3 \\times 10^8\\ m/s$ and measures round-trip time $\\Delta t$ to calculate object distance: $d = \\frac{c \\Delta t}{2}$.",
    "correctAnswerAr": "يرسل رادار الليزر ToF نبضات ليزرية بسرعة الضوء $c \\approx 3 \\times 10^8\\ m/s$ ويقيس زمن الذهاب والعودة $\\Delta t$ لحساب المسافة: $d = \\frac{c \\Delta t}{2}$.",
    "explanationEn": "Correct Principle: Time-of-Flight (ToF) LiDAR emits pulsed laser beams at light speed $c \\approx 3 \\times 10^8\\ m/s$ and measures round-trip time $\\Delta t$ to calculate object distance: $d = \\frac{c \\Delta t}{2}$.",
    "explanationAr": "المبدأ العلمي الصحيح: يرسل رادار الليزر ToF نبضات ليزرية بسرعة الضوء $c \\approx 3 \\times 10^8\\ m/s$ ويقيس زمن الذهاب والعودة $\\Delta t$ لحساب المسافة: $d = \\frac{c \\Delta t}{2}$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_16",
    "titleEn": "[EASY] OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform - Review 16",
    "titleAr": "[مستوى أساسي] استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف - سؤال 16",
    "questionEn": "[Question 16] In the context of Egyptian STEM robotics and mechatronics regarding OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 16] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Digital image processing in robotics converts RGB color frames to grayscale before applying Gaussian smoothing convolution kernels to suppress high-frequency sensor noise."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تحول معالجة الصور الرقمية في الروبوتات إطارات الألوان RGB إلى التدرج الرمادي قبل تطبيق نوى التفاف غاوس لإزالة الضوضاء عالية التردد."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Digital image processing in robotics converts RGB color frames to grayscale before applying Gaussian smoothing convolution kernels to suppress high-frequency sensor noise.",
    "correctAnswerAr": "تحول معالجة الصور الرقمية في الروبوتات إطارات الألوان RGB إلى التدرج الرمادي قبل تطبيق نوى التفاف غاوس لإزالة الضوضاء عالية التردد.",
    "explanationEn": "Correct Principle: Digital image processing in robotics converts RGB color frames to grayscale before applying Gaussian smoothing convolution kernels to suppress high-frequency sensor noise.",
    "explanationAr": "المبدأ العلمي الصحيح: تحول معالجة الصور الرقمية في الروبوتات إطارات الألوان RGB إلى التدرج الرمادي قبل تطبيق نوى التفاف غاوس لإزالة الضوضاء عالية التردد.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_17",
    "titleEn": "[EASY] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Review 17",
    "titleAr": "[مستوى أساسي] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - سؤال 17",
    "questionEn": "[Question 17] In the context of Egyptian STEM robotics and mechatronics regarding Inertial Measurement Units (IMU) & Complementary Filter Fusion, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 17] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
    "correctAnswerAr": "تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
    "explanationEn": "Correct Principle: A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
    "explanationAr": "المبدأ العلمي الصحيح: تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_18",
    "titleEn": "[EASY] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Review 18",
    "titleAr": "[مستوى أساسي] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - سؤال 18",
    "questionEn": "[Question 18] In the context of Egyptian STEM robotics and mechatronics regarding Optical Quadrature Encoders, X4 Decoding & Wheel Odometry, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 18] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
    "correctAnswerAr": "تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
    "explanationEn": "Correct Principle: Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
    "explanationAr": "المبدأ العلمي الصحيح: تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_19",
    "titleEn": "[EASY] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Review 19",
    "titleAr": "[مستوى أساسي] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - سؤال 19",
    "questionEn": "[Question 19] In the context of Egyptian STEM robotics and mechatronics regarding Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 19] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Time-of-Flight (ToF) LiDAR emits pulsed laser beams at light speed $c \\approx 3 \\times 10^8\\ m/s$ and measures round-trip time $\\Delta t$ to calculate object distance: $d = \\frac{c \\Delta t}{2}$.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "يرسل رادار الليزر ToF نبضات ليزرية بسرعة الضوء $c \\approx 3 \\times 10^8\\ m/s$ ويقيس زمن الذهاب والعودة $\\Delta t$ لحساب المسافة: $d = \\frac{c \\Delta t}{2}$.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Time-of-Flight (ToF) LiDAR emits pulsed laser beams at light speed $c \\approx 3 \\times 10^8\\ m/s$ and measures round-trip time $\\Delta t$ to calculate object distance: $d = \\frac{c \\Delta t}{2}$.",
    "correctAnswerAr": "يرسل رادار الليزر ToF نبضات ليزرية بسرعة الضوء $c \\approx 3 \\times 10^8\\ m/s$ ويقيس زمن الذهاب والعودة $\\Delta t$ لحساب المسافة: $d = \\frac{c \\Delta t}{2}$.",
    "explanationEn": "Correct Principle: Time-of-Flight (ToF) LiDAR emits pulsed laser beams at light speed $c \\approx 3 \\times 10^8\\ m/s$ and measures round-trip time $\\Delta t$ to calculate object distance: $d = \\frac{c \\Delta t}{2}$.",
    "explanationAr": "المبدأ العلمي الصحيح: يرسل رادار الليزر ToF نبضات ليزرية بسرعة الضوء $c \\approx 3 \\times 10^8\\ m/s$ ويقيس زمن الذهاب والعودة $\\Delta t$ لحساب المسافة: $d = \\frac{c \\Delta t}{2}$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_20",
    "titleEn": "[EASY] OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform - Review 20",
    "titleAr": "[مستوى أساسي] استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف - سؤال 20",
    "questionEn": "[Question 20] In the context of Egyptian STEM robotics and mechatronics regarding OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 20] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "Digital image processing in robotics converts RGB color frames to grayscale before applying Gaussian smoothing convolution kernels to suppress high-frequency sensor noise."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تحول معالجة الصور الرقمية في الروبوتات إطارات الألوان RGB إلى التدرج الرمادي قبل تطبيق نوى التفاف غاوس لإزالة الضوضاء عالية التردد."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Digital image processing in robotics converts RGB color frames to grayscale before applying Gaussian smoothing convolution kernels to suppress high-frequency sensor noise.",
    "correctAnswerAr": "تحول معالجة الصور الرقمية في الروبوتات إطارات الألوان RGB إلى التدرج الرمادي قبل تطبيق نوى التفاف غاوس لإزالة الضوضاء عالية التردد.",
    "explanationEn": "Correct Principle: Digital image processing in robotics converts RGB color frames to grayscale before applying Gaussian smoothing convolution kernels to suppress high-frequency sensor noise.",
    "explanationAr": "المبدأ العلمي الصحيح: تحول معالجة الصور الرقمية في الروبوتات إطارات الألوان RGB إلى التدرج الرمادي قبل تطبيق نوى التفاف غاوس لإزالة الضوضاء عالية التردد.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_21",
    "titleEn": "[EASY] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Review 21",
    "titleAr": "[مستوى أساسي] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - سؤال 21",
    "questionEn": "[Question 21] In the context of Egyptian STEM robotics and mechatronics regarding Inertial Measurement Units (IMU) & Complementary Filter Fusion, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 21] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
    "correctAnswerAr": "تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
    "explanationEn": "Correct Principle: A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
    "explanationAr": "المبدأ العلمي الصحيح: تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_22",
    "titleEn": "[EASY] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Review 22",
    "titleAr": "[مستوى أساسي] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - سؤال 22",
    "questionEn": "[Question 22] In the context of Egyptian STEM robotics and mechatronics regarding Optical Quadrature Encoders, X4 Decoding & Wheel Odometry, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 22] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
    "correctAnswerAr": "تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
    "explanationEn": "Correct Principle: Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
    "explanationAr": "المبدأ العلمي الصحيح: تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_23",
    "titleEn": "[EASY] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Review 23",
    "titleAr": "[مستوى أساسي] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - سؤال 23",
    "questionEn": "[Question 23] In the context of Egyptian STEM robotics and mechatronics regarding Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 23] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Time-of-Flight (ToF) LiDAR emits pulsed laser beams at light speed $c \\approx 3 \\times 10^8\\ m/s$ and measures round-trip time $\\Delta t$ to calculate object distance: $d = \\frac{c \\Delta t}{2}$.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "يرسل رادار الليزر ToF نبضات ليزرية بسرعة الضوء $c \\approx 3 \\times 10^8\\ m/s$ ويقيس زمن الذهاب والعودة $\\Delta t$ لحساب المسافة: $d = \\frac{c \\Delta t}{2}$.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Time-of-Flight (ToF) LiDAR emits pulsed laser beams at light speed $c \\approx 3 \\times 10^8\\ m/s$ and measures round-trip time $\\Delta t$ to calculate object distance: $d = \\frac{c \\Delta t}{2}$.",
    "correctAnswerAr": "يرسل رادار الليزر ToF نبضات ليزرية بسرعة الضوء $c \\approx 3 \\times 10^8\\ m/s$ ويقيس زمن الذهاب والعودة $\\Delta t$ لحساب المسافة: $d = \\frac{c \\Delta t}{2}$.",
    "explanationEn": "Correct Principle: Time-of-Flight (ToF) LiDAR emits pulsed laser beams at light speed $c \\approx 3 \\times 10^8\\ m/s$ and measures round-trip time $\\Delta t$ to calculate object distance: $d = \\frac{c \\Delta t}{2}$.",
    "explanationAr": "المبدأ العلمي الصحيح: يرسل رادار الليزر ToF نبضات ليزرية بسرعة الضوء $c \\approx 3 \\times 10^8\\ m/s$ ويقيس زمن الذهاب والعودة $\\Delta t$ لحساب المسافة: $d = \\frac{c \\Delta t}{2}$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_24",
    "titleEn": "[EASY] OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform - Review 24",
    "titleAr": "[مستوى أساسي] استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف - سؤال 24",
    "questionEn": "[Question 24] In the context of Egyptian STEM robotics and mechatronics regarding OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 24] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Digital image processing in robotics converts RGB color frames to grayscale before applying Gaussian smoothing convolution kernels to suppress high-frequency sensor noise."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "تحول معالجة الصور الرقمية في الروبوتات إطارات الألوان RGB إلى التدرج الرمادي قبل تطبيق نوى التفاف غاوس لإزالة الضوضاء عالية التردد."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Digital image processing in robotics converts RGB color frames to grayscale before applying Gaussian smoothing convolution kernels to suppress high-frequency sensor noise.",
    "correctAnswerAr": "تحول معالجة الصور الرقمية في الروبوتات إطارات الألوان RGB إلى التدرج الرمادي قبل تطبيق نوى التفاف غاوس لإزالة الضوضاء عالية التردد.",
    "explanationEn": "Correct Principle: Digital image processing in robotics converts RGB color frames to grayscale before applying Gaussian smoothing convolution kernels to suppress high-frequency sensor noise.",
    "explanationAr": "المبدأ العلمي الصحيح: تحول معالجة الصور الرقمية في الروبوتات إطارات الألوان RGB إلى التدرج الرمادي قبل تطبيق نوى التفاف غاوس لإزالة الضوضاء عالية التردد.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_25",
    "titleEn": "[EASY] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Review 25",
    "titleAr": "[مستوى أساسي] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - سؤال 25",
    "questionEn": "[Question 25] In the context of Egyptian STEM robotics and mechatronics regarding Inertial Measurement Units (IMU) & Complementary Filter Fusion, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 25] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
    "correctAnswerAr": "تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
    "explanationEn": "Correct Principle: A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
    "explanationAr": "المبدأ العلمي الصحيح: تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_26",
    "titleEn": "[EASY] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Review 26",
    "titleAr": "[مستوى أساسي] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - سؤال 26",
    "questionEn": "[Question 26] In the context of Egyptian STEM robotics and mechatronics regarding Optical Quadrature Encoders, X4 Decoding & Wheel Odometry, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 26] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
    "correctAnswerAr": "تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
    "explanationEn": "Correct Principle: Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
    "explanationAr": "المبدأ العلمي الصحيح: تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_27",
    "titleEn": "[EASY] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Review 27",
    "titleAr": "[مستوى أساسي] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - سؤال 27",
    "questionEn": "[Question 27] In the context of Egyptian STEM robotics and mechatronics regarding Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 27] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "Time-of-Flight (ToF) LiDAR emits pulsed laser beams at light speed $c \\approx 3 \\times 10^8\\ m/s$ and measures round-trip time $\\Delta t$ to calculate object distance: $d = \\frac{c \\Delta t}{2}$.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "يرسل رادار الليزر ToF نبضات ليزرية بسرعة الضوء $c \\approx 3 \\times 10^8\\ m/s$ ويقيس زمن الذهاب والعودة $\\Delta t$ لحساب المسافة: $d = \\frac{c \\Delta t}{2}$.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Time-of-Flight (ToF) LiDAR emits pulsed laser beams at light speed $c \\approx 3 \\times 10^8\\ m/s$ and measures round-trip time $\\Delta t$ to calculate object distance: $d = \\frac{c \\Delta t}{2}$.",
    "correctAnswerAr": "يرسل رادار الليزر ToF نبضات ليزرية بسرعة الضوء $c \\approx 3 \\times 10^8\\ m/s$ ويقيس زمن الذهاب والعودة $\\Delta t$ لحساب المسافة: $d = \\frac{c \\Delta t}{2}$.",
    "explanationEn": "Correct Principle: Time-of-Flight (ToF) LiDAR emits pulsed laser beams at light speed $c \\approx 3 \\times 10^8\\ m/s$ and measures round-trip time $\\Delta t$ to calculate object distance: $d = \\frac{c \\Delta t}{2}$.",
    "explanationAr": "المبدأ العلمي الصحيح: يرسل رادار الليزر ToF نبضات ليزرية بسرعة الضوء $c \\approx 3 \\times 10^8\\ m/s$ ويقيس زمن الذهاب والعودة $\\Delta t$ لحساب المسافة: $d = \\frac{c \\Delta t}{2}$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_28",
    "titleEn": "[EASY] OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform - Review 28",
    "titleAr": "[مستوى أساسي] استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف - سؤال 28",
    "questionEn": "[Question 28] In the context of Egyptian STEM robotics and mechatronics regarding OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 28] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "Digital image processing in robotics converts RGB color frames to grayscale before applying Gaussian smoothing convolution kernels to suppress high-frequency sensor noise."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تحول معالجة الصور الرقمية في الروبوتات إطارات الألوان RGB إلى التدرج الرمادي قبل تطبيق نوى التفاف غاوس لإزالة الضوضاء عالية التردد."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Digital image processing in robotics converts RGB color frames to grayscale before applying Gaussian smoothing convolution kernels to suppress high-frequency sensor noise.",
    "correctAnswerAr": "تحول معالجة الصور الرقمية في الروبوتات إطارات الألوان RGB إلى التدرج الرمادي قبل تطبيق نوى التفاف غاوس لإزالة الضوضاء عالية التردد.",
    "explanationEn": "Correct Principle: Digital image processing in robotics converts RGB color frames to grayscale before applying Gaussian smoothing convolution kernels to suppress high-frequency sensor noise.",
    "explanationAr": "المبدأ العلمي الصحيح: تحول معالجة الصور الرقمية في الروبوتات إطارات الألوان RGB إلى التدرج الرمادي قبل تطبيق نوى التفاف غاوس لإزالة الضوضاء عالية التردد.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_29",
    "titleEn": "[EASY] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Review 29",
    "titleAr": "[مستوى أساسي] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - سؤال 29",
    "questionEn": "[Question 29] In the context of Egyptian STEM robotics and mechatronics regarding Inertial Measurement Units (IMU) & Complementary Filter Fusion, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 29] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
    "correctAnswerAr": "تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
    "explanationEn": "Correct Principle: A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
    "explanationAr": "المبدأ العلمي الصحيح: تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_30",
    "titleEn": "[EASY] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Review 30",
    "titleAr": "[مستوى أساسي] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - سؤال 30",
    "questionEn": "[Question 30] In the context of Egyptian STEM robotics and mechatronics regarding Optical Quadrature Encoders, X4 Decoding & Wheel Odometry, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 30] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
    "correctAnswerAr": "تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
    "explanationEn": "Correct Principle: Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
    "explanationAr": "المبدأ العلمي الصحيح: تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_31",
    "titleEn": "[EASY] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Review 31",
    "titleAr": "[مستوى أساسي] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - سؤال 31",
    "questionEn": "[Question 31] In the context of Egyptian STEM robotics and mechatronics regarding Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 31] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Time-of-Flight (ToF) LiDAR emits pulsed laser beams at light speed $c \\approx 3 \\times 10^8\\ m/s$ and measures round-trip time $\\Delta t$ to calculate object distance: $d = \\frac{c \\Delta t}{2}$.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "يرسل رادار الليزر ToF نبضات ليزرية بسرعة الضوء $c \\approx 3 \\times 10^8\\ m/s$ ويقيس زمن الذهاب والعودة $\\Delta t$ لحساب المسافة: $d = \\frac{c \\Delta t}{2}$.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Time-of-Flight (ToF) LiDAR emits pulsed laser beams at light speed $c \\approx 3 \\times 10^8\\ m/s$ and measures round-trip time $\\Delta t$ to calculate object distance: $d = \\frac{c \\Delta t}{2}$.",
    "correctAnswerAr": "يرسل رادار الليزر ToF نبضات ليزرية بسرعة الضوء $c \\approx 3 \\times 10^8\\ m/s$ ويقيس زمن الذهاب والعودة $\\Delta t$ لحساب المسافة: $d = \\frac{c \\Delta t}{2}$.",
    "explanationEn": "Correct Principle: Time-of-Flight (ToF) LiDAR emits pulsed laser beams at light speed $c \\approx 3 \\times 10^8\\ m/s$ and measures round-trip time $\\Delta t$ to calculate object distance: $d = \\frac{c \\Delta t}{2}$.",
    "explanationAr": "المبدأ العلمي الصحيح: يرسل رادار الليزر ToF نبضات ليزرية بسرعة الضوء $c \\approx 3 \\times 10^8\\ m/s$ ويقيس زمن الذهاب والعودة $\\Delta t$ لحساب المسافة: $d = \\frac{c \\Delta t}{2}$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_32",
    "titleEn": "[EASY] OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform - Review 32",
    "titleAr": "[مستوى أساسي] استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف - سؤال 32",
    "questionEn": "[Question 32] In the context of Egyptian STEM robotics and mechatronics regarding OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 32] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "Digital image processing in robotics converts RGB color frames to grayscale before applying Gaussian smoothing convolution kernels to suppress high-frequency sensor noise."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "تحول معالجة الصور الرقمية في الروبوتات إطارات الألوان RGB إلى التدرج الرمادي قبل تطبيق نوى التفاف غاوس لإزالة الضوضاء عالية التردد."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Digital image processing in robotics converts RGB color frames to grayscale before applying Gaussian smoothing convolution kernels to suppress high-frequency sensor noise.",
    "correctAnswerAr": "تحول معالجة الصور الرقمية في الروبوتات إطارات الألوان RGB إلى التدرج الرمادي قبل تطبيق نوى التفاف غاوس لإزالة الضوضاء عالية التردد.",
    "explanationEn": "Correct Principle: Digital image processing in robotics converts RGB color frames to grayscale before applying Gaussian smoothing convolution kernels to suppress high-frequency sensor noise.",
    "explanationAr": "المبدأ العلمي الصحيح: تحول معالجة الصور الرقمية في الروبوتات إطارات الألوان RGB إلى التدرج الرمادي قبل تطبيق نوى التفاف غاوس لإزالة الضوضاء عالية التردد.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_33",
    "titleEn": "[EASY] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Review 33",
    "titleAr": "[مستوى أساسي] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - سؤال 33",
    "questionEn": "[Question 33] In the context of Egyptian STEM robotics and mechatronics regarding Inertial Measurement Units (IMU) & Complementary Filter Fusion, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 33] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
    "correctAnswerAr": "تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
    "explanationEn": "Correct Principle: A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
    "explanationAr": "المبدأ العلمي الصحيح: تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_34",
    "titleEn": "[EASY] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Review 34",
    "titleAr": "[مستوى أساسي] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - سؤال 34",
    "questionEn": "[Question 34] In the context of Egyptian STEM robotics and mechatronics regarding Optical Quadrature Encoders, X4 Decoding & Wheel Odometry, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 34] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
    "correctAnswerAr": "تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
    "explanationEn": "Correct Principle: Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
    "explanationAr": "المبدأ العلمي الصحيح: تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_35",
    "titleEn": "[EASY] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Review 35",
    "titleAr": "[مستوى أساسي] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - سؤال 35",
    "questionEn": "[Question 35] In the context of Egyptian STEM robotics and mechatronics regarding Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 35] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Time-of-Flight (ToF) LiDAR emits pulsed laser beams at light speed $c \\approx 3 \\times 10^8\\ m/s$ and measures round-trip time $\\Delta t$ to calculate object distance: $d = \\frac{c \\Delta t}{2}$.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "يرسل رادار الليزر ToF نبضات ليزرية بسرعة الضوء $c \\approx 3 \\times 10^8\\ m/s$ ويقيس زمن الذهاب والعودة $\\Delta t$ لحساب المسافة: $d = \\frac{c \\Delta t}{2}$.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Time-of-Flight (ToF) LiDAR emits pulsed laser beams at light speed $c \\approx 3 \\times 10^8\\ m/s$ and measures round-trip time $\\Delta t$ to calculate object distance: $d = \\frac{c \\Delta t}{2}$.",
    "correctAnswerAr": "يرسل رادار الليزر ToF نبضات ليزرية بسرعة الضوء $c \\approx 3 \\times 10^8\\ m/s$ ويقيس زمن الذهاب والعودة $\\Delta t$ لحساب المسافة: $d = \\frac{c \\Delta t}{2}$.",
    "explanationEn": "Correct Principle: Time-of-Flight (ToF) LiDAR emits pulsed laser beams at light speed $c \\approx 3 \\times 10^8\\ m/s$ and measures round-trip time $\\Delta t$ to calculate object distance: $d = \\frac{c \\Delta t}{2}$.",
    "explanationAr": "المبدأ العلمي الصحيح: يرسل رادار الليزر ToF نبضات ليزرية بسرعة الضوء $c \\approx 3 \\times 10^8\\ m/s$ ويقيس زمن الذهاب والعودة $\\Delta t$ لحساب المسافة: $d = \\frac{c \\Delta t}{2}$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_36",
    "titleEn": "[EASY] OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform - Review 36",
    "titleAr": "[مستوى أساسي] استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف - سؤال 36",
    "questionEn": "[Question 36] In the context of Egyptian STEM robotics and mechatronics regarding OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 36] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Digital image processing in robotics converts RGB color frames to grayscale before applying Gaussian smoothing convolution kernels to suppress high-frequency sensor noise."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تحول معالجة الصور الرقمية في الروبوتات إطارات الألوان RGB إلى التدرج الرمادي قبل تطبيق نوى التفاف غاوس لإزالة الضوضاء عالية التردد."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Digital image processing in robotics converts RGB color frames to grayscale before applying Gaussian smoothing convolution kernels to suppress high-frequency sensor noise.",
    "correctAnswerAr": "تحول معالجة الصور الرقمية في الروبوتات إطارات الألوان RGB إلى التدرج الرمادي قبل تطبيق نوى التفاف غاوس لإزالة الضوضاء عالية التردد.",
    "explanationEn": "Correct Principle: Digital image processing in robotics converts RGB color frames to grayscale before applying Gaussian smoothing convolution kernels to suppress high-frequency sensor noise.",
    "explanationAr": "المبدأ العلمي الصحيح: تحول معالجة الصور الرقمية في الروبوتات إطارات الألوان RGB إلى التدرج الرمادي قبل تطبيق نوى التفاف غاوس لإزالة الضوضاء عالية التردد.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_37",
    "titleEn": "[EASY] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Review 37",
    "titleAr": "[مستوى أساسي] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - سؤال 37",
    "questionEn": "[Question 37] In the context of Egyptian STEM robotics and mechatronics regarding Inertial Measurement Units (IMU) & Complementary Filter Fusion, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 37] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
    "correctAnswerAr": "تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
    "explanationEn": "Correct Principle: A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
    "explanationAr": "المبدأ العلمي الصحيح: تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_38",
    "titleEn": "[EASY] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Review 38",
    "titleAr": "[مستوى أساسي] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - سؤال 38",
    "questionEn": "[Question 38] In the context of Egyptian STEM robotics and mechatronics regarding Optical Quadrature Encoders, X4 Decoding & Wheel Odometry, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 38] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
    "correctAnswerAr": "تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
    "explanationEn": "Correct Principle: Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
    "explanationAr": "المبدأ العلمي الصحيح: تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_39",
    "titleEn": "[EASY] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Review 39",
    "titleAr": "[مستوى أساسي] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - سؤال 39",
    "questionEn": "[Question 39] In the context of Egyptian STEM robotics and mechatronics regarding Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 39] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Time-of-Flight (ToF) LiDAR emits pulsed laser beams at light speed $c \\approx 3 \\times 10^8\\ m/s$ and measures round-trip time $\\Delta t$ to calculate object distance: $d = \\frac{c \\Delta t}{2}$.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "يرسل رادار الليزر ToF نبضات ليزرية بسرعة الضوء $c \\approx 3 \\times 10^8\\ m/s$ ويقيس زمن الذهاب والعودة $\\Delta t$ لحساب المسافة: $d = \\frac{c \\Delta t}{2}$.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Time-of-Flight (ToF) LiDAR emits pulsed laser beams at light speed $c \\approx 3 \\times 10^8\\ m/s$ and measures round-trip time $\\Delta t$ to calculate object distance: $d = \\frac{c \\Delta t}{2}$.",
    "correctAnswerAr": "يرسل رادار الليزر ToF نبضات ليزرية بسرعة الضوء $c \\approx 3 \\times 10^8\\ m/s$ ويقيس زمن الذهاب والعودة $\\Delta t$ لحساب المسافة: $d = \\frac{c \\Delta t}{2}$.",
    "explanationEn": "Correct Principle: Time-of-Flight (ToF) LiDAR emits pulsed laser beams at light speed $c \\approx 3 \\times 10^8\\ m/s$ and measures round-trip time $\\Delta t$ to calculate object distance: $d = \\frac{c \\Delta t}{2}$.",
    "explanationAr": "المبدأ العلمي الصحيح: يرسل رادار الليزر ToF نبضات ليزرية بسرعة الضوء $c \\approx 3 \\times 10^8\\ m/s$ ويقيس زمن الذهاب والعودة $\\Delta t$ لحساب المسافة: $d = \\frac{c \\Delta t}{2}$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_40",
    "titleEn": "[EASY] OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform - Review 40",
    "titleAr": "[مستوى أساسي] استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف - سؤال 40",
    "questionEn": "[Question 40] In the context of Egyptian STEM robotics and mechatronics regarding OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 40] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "Digital image processing in robotics converts RGB color frames to grayscale before applying Gaussian smoothing convolution kernels to suppress high-frequency sensor noise."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تحول معالجة الصور الرقمية في الروبوتات إطارات الألوان RGB إلى التدرج الرمادي قبل تطبيق نوى التفاف غاوس لإزالة الضوضاء عالية التردد."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Digital image processing in robotics converts RGB color frames to grayscale before applying Gaussian smoothing convolution kernels to suppress high-frequency sensor noise.",
    "correctAnswerAr": "تحول معالجة الصور الرقمية في الروبوتات إطارات الألوان RGB إلى التدرج الرمادي قبل تطبيق نوى التفاف غاوس لإزالة الضوضاء عالية التردد.",
    "explanationEn": "Correct Principle: Digital image processing in robotics converts RGB color frames to grayscale before applying Gaussian smoothing convolution kernels to suppress high-frequency sensor noise.",
    "explanationAr": "المبدأ العلمي الصحيح: تحول معالجة الصور الرقمية في الروبوتات إطارات الألوان RGB إلى التدرج الرمادي قبل تطبيق نوى التفاف غاوس لإزالة الضوضاء عالية التردد.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_41",
    "titleEn": "[EASY] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Review 41",
    "titleAr": "[مستوى أساسي] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - سؤال 41",
    "questionEn": "[Question 41] In the context of Egyptian STEM robotics and mechatronics regarding Inertial Measurement Units (IMU) & Complementary Filter Fusion, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 41] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
    "correctAnswerAr": "تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
    "explanationEn": "Correct Principle: A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
    "explanationAr": "المبدأ العلمي الصحيح: تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_42",
    "titleEn": "[EASY] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Review 42",
    "titleAr": "[مستوى أساسي] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - سؤال 42",
    "questionEn": "[Question 42] In the context of Egyptian STEM robotics and mechatronics regarding Optical Quadrature Encoders, X4 Decoding & Wheel Odometry, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 42] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
    "correctAnswerAr": "تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
    "explanationEn": "Correct Principle: Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
    "explanationAr": "المبدأ العلمي الصحيح: تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_43",
    "titleEn": "[EASY] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Review 43",
    "titleAr": "[مستوى أساسي] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - سؤال 43",
    "questionEn": "[Question 43] In the context of Egyptian STEM robotics and mechatronics regarding Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 43] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Time-of-Flight (ToF) LiDAR emits pulsed laser beams at light speed $c \\approx 3 \\times 10^8\\ m/s$ and measures round-trip time $\\Delta t$ to calculate object distance: $d = \\frac{c \\Delta t}{2}$.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "يرسل رادار الليزر ToF نبضات ليزرية بسرعة الضوء $c \\approx 3 \\times 10^8\\ m/s$ ويقيس زمن الذهاب والعودة $\\Delta t$ لحساب المسافة: $d = \\frac{c \\Delta t}{2}$.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Time-of-Flight (ToF) LiDAR emits pulsed laser beams at light speed $c \\approx 3 \\times 10^8\\ m/s$ and measures round-trip time $\\Delta t$ to calculate object distance: $d = \\frac{c \\Delta t}{2}$.",
    "correctAnswerAr": "يرسل رادار الليزر ToF نبضات ليزرية بسرعة الضوء $c \\approx 3 \\times 10^8\\ m/s$ ويقيس زمن الذهاب والعودة $\\Delta t$ لحساب المسافة: $d = \\frac{c \\Delta t}{2}$.",
    "explanationEn": "Correct Principle: Time-of-Flight (ToF) LiDAR emits pulsed laser beams at light speed $c \\approx 3 \\times 10^8\\ m/s$ and measures round-trip time $\\Delta t$ to calculate object distance: $d = \\frac{c \\Delta t}{2}$.",
    "explanationAr": "المبدأ العلمي الصحيح: يرسل رادار الليزر ToF نبضات ليزرية بسرعة الضوء $c \\approx 3 \\times 10^8\\ m/s$ ويقيس زمن الذهاب والعودة $\\Delta t$ لحساب المسافة: $d = \\frac{c \\Delta t}{2}$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_44",
    "titleEn": "[EASY] OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform - Review 44",
    "titleAr": "[مستوى أساسي] استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف - سؤال 44",
    "questionEn": "[Question 44] In the context of Egyptian STEM robotics and mechatronics regarding OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 44] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Digital image processing in robotics converts RGB color frames to grayscale before applying Gaussian smoothing convolution kernels to suppress high-frequency sensor noise."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "تحول معالجة الصور الرقمية في الروبوتات إطارات الألوان RGB إلى التدرج الرمادي قبل تطبيق نوى التفاف غاوس لإزالة الضوضاء عالية التردد."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Digital image processing in robotics converts RGB color frames to grayscale before applying Gaussian smoothing convolution kernels to suppress high-frequency sensor noise.",
    "correctAnswerAr": "تحول معالجة الصور الرقمية في الروبوتات إطارات الألوان RGB إلى التدرج الرمادي قبل تطبيق نوى التفاف غاوس لإزالة الضوضاء عالية التردد.",
    "explanationEn": "Correct Principle: Digital image processing in robotics converts RGB color frames to grayscale before applying Gaussian smoothing convolution kernels to suppress high-frequency sensor noise.",
    "explanationAr": "المبدأ العلمي الصحيح: تحول معالجة الصور الرقمية في الروبوتات إطارات الألوان RGB إلى التدرج الرمادي قبل تطبيق نوى التفاف غاوس لإزالة الضوضاء عالية التردد.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_45",
    "titleEn": "[EASY] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Review 45",
    "titleAr": "[مستوى أساسي] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - سؤال 45",
    "questionEn": "[Question 45] In the context of Egyptian STEM robotics and mechatronics regarding Inertial Measurement Units (IMU) & Complementary Filter Fusion, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 45] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
    "correctAnswerAr": "تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
    "explanationEn": "Correct Principle: A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
    "explanationAr": "المبدأ العلمي الصحيح: تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_46",
    "titleEn": "[EASY] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Review 46",
    "titleAr": "[مستوى أساسي] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - سؤال 46",
    "questionEn": "[Question 46] In the context of Egyptian STEM robotics and mechatronics regarding Optical Quadrature Encoders, X4 Decoding & Wheel Odometry, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 46] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
    "correctAnswerAr": "تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
    "explanationEn": "Correct Principle: Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
    "explanationAr": "المبدأ العلمي الصحيح: تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_47",
    "titleEn": "[EASY] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Review 47",
    "titleAr": "[مستوى أساسي] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - سؤال 47",
    "questionEn": "[Question 47] In the context of Egyptian STEM robotics and mechatronics regarding Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 47] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "Time-of-Flight (ToF) LiDAR emits pulsed laser beams at light speed $c \\approx 3 \\times 10^8\\ m/s$ and measures round-trip time $\\Delta t$ to calculate object distance: $d = \\frac{c \\Delta t}{2}$.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "يرسل رادار الليزر ToF نبضات ليزرية بسرعة الضوء $c \\approx 3 \\times 10^8\\ m/s$ ويقيس زمن الذهاب والعودة $\\Delta t$ لحساب المسافة: $d = \\frac{c \\Delta t}{2}$.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Time-of-Flight (ToF) LiDAR emits pulsed laser beams at light speed $c \\approx 3 \\times 10^8\\ m/s$ and measures round-trip time $\\Delta t$ to calculate object distance: $d = \\frac{c \\Delta t}{2}$.",
    "correctAnswerAr": "يرسل رادار الليزر ToF نبضات ليزرية بسرعة الضوء $c \\approx 3 \\times 10^8\\ m/s$ ويقيس زمن الذهاب والعودة $\\Delta t$ لحساب المسافة: $d = \\frac{c \\Delta t}{2}$.",
    "explanationEn": "Correct Principle: Time-of-Flight (ToF) LiDAR emits pulsed laser beams at light speed $c \\approx 3 \\times 10^8\\ m/s$ and measures round-trip time $\\Delta t$ to calculate object distance: $d = \\frac{c \\Delta t}{2}$.",
    "explanationAr": "المبدأ العلمي الصحيح: يرسل رادار الليزر ToF نبضات ليزرية بسرعة الضوء $c \\approx 3 \\times 10^8\\ m/s$ ويقيس زمن الذهاب والعودة $\\Delta t$ لحساب المسافة: $d = \\frac{c \\Delta t}{2}$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_48",
    "titleEn": "[EASY] OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform - Review 48",
    "titleAr": "[مستوى أساسي] استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف - سؤال 48",
    "questionEn": "[Question 48] In the context of Egyptian STEM robotics and mechatronics regarding OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 48] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "Digital image processing in robotics converts RGB color frames to grayscale before applying Gaussian smoothing convolution kernels to suppress high-frequency sensor noise."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تحول معالجة الصور الرقمية في الروبوتات إطارات الألوان RGB إلى التدرج الرمادي قبل تطبيق نوى التفاف غاوس لإزالة الضوضاء عالية التردد."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Digital image processing in robotics converts RGB color frames to grayscale before applying Gaussian smoothing convolution kernels to suppress high-frequency sensor noise.",
    "correctAnswerAr": "تحول معالجة الصور الرقمية في الروبوتات إطارات الألوان RGB إلى التدرج الرمادي قبل تطبيق نوى التفاف غاوس لإزالة الضوضاء عالية التردد.",
    "explanationEn": "Correct Principle: Digital image processing in robotics converts RGB color frames to grayscale before applying Gaussian smoothing convolution kernels to suppress high-frequency sensor noise.",
    "explanationAr": "المبدأ العلمي الصحيح: تحول معالجة الصور الرقمية في الروبوتات إطارات الألوان RGB إلى التدرج الرمادي قبل تطبيق نوى التفاف غاوس لإزالة الضوضاء عالية التردد.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_49",
    "titleEn": "[EASY] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Review 49",
    "titleAr": "[مستوى أساسي] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - سؤال 49",
    "questionEn": "[Question 49] In the context of Egyptian STEM robotics and mechatronics regarding Inertial Measurement Units (IMU) & Complementary Filter Fusion, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 49] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
    "correctAnswerAr": "تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
    "explanationEn": "Correct Principle: A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
    "explanationAr": "المبدأ العلمي الصحيح: تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_50",
    "titleEn": "[EASY] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Review 50",
    "titleAr": "[مستوى أساسي] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - سؤال 50",
    "questionEn": "[Question 50] In the context of Egyptian STEM robotics and mechatronics regarding Optical Quadrature Encoders, X4 Decoding & Wheel Odometry, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 50] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
    "correctAnswerAr": "تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
    "explanationEn": "Correct Principle: Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
    "explanationAr": "المبدأ العلمي الصحيح: تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_51",
    "titleEn": "[EASY] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Review 51",
    "titleAr": "[مستوى أساسي] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - سؤال 51",
    "questionEn": "[Question 51] In the context of Egyptian STEM robotics and mechatronics regarding Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 51] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Time-of-Flight (ToF) LiDAR emits pulsed laser beams at light speed $c \\approx 3 \\times 10^8\\ m/s$ and measures round-trip time $\\Delta t$ to calculate object distance: $d = \\frac{c \\Delta t}{2}$.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "يرسل رادار الليزر ToF نبضات ليزرية بسرعة الضوء $c \\approx 3 \\times 10^8\\ m/s$ ويقيس زمن الذهاب والعودة $\\Delta t$ لحساب المسافة: $d = \\frac{c \\Delta t}{2}$.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Time-of-Flight (ToF) LiDAR emits pulsed laser beams at light speed $c \\approx 3 \\times 10^8\\ m/s$ and measures round-trip time $\\Delta t$ to calculate object distance: $d = \\frac{c \\Delta t}{2}$.",
    "correctAnswerAr": "يرسل رادار الليزر ToF نبضات ليزرية بسرعة الضوء $c \\approx 3 \\times 10^8\\ m/s$ ويقيس زمن الذهاب والعودة $\\Delta t$ لحساب المسافة: $d = \\frac{c \\Delta t}{2}$.",
    "explanationEn": "Correct Principle: Time-of-Flight (ToF) LiDAR emits pulsed laser beams at light speed $c \\approx 3 \\times 10^8\\ m/s$ and measures round-trip time $\\Delta t$ to calculate object distance: $d = \\frac{c \\Delta t}{2}$.",
    "explanationAr": "المبدأ العلمي الصحيح: يرسل رادار الليزر ToF نبضات ليزرية بسرعة الضوء $c \\approx 3 \\times 10^8\\ m/s$ ويقيس زمن الذهاب والعودة $\\Delta t$ لحساب المسافة: $d = \\frac{c \\Delta t}{2}$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_52",
    "titleEn": "[EASY] OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform - Review 52",
    "titleAr": "[مستوى أساسي] استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف - سؤال 52",
    "questionEn": "[Question 52] In the context of Egyptian STEM robotics and mechatronics regarding OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 52] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "Digital image processing in robotics converts RGB color frames to grayscale before applying Gaussian smoothing convolution kernels to suppress high-frequency sensor noise."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "تحول معالجة الصور الرقمية في الروبوتات إطارات الألوان RGB إلى التدرج الرمادي قبل تطبيق نوى التفاف غاوس لإزالة الضوضاء عالية التردد."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Digital image processing in robotics converts RGB color frames to grayscale before applying Gaussian smoothing convolution kernels to suppress high-frequency sensor noise.",
    "correctAnswerAr": "تحول معالجة الصور الرقمية في الروبوتات إطارات الألوان RGB إلى التدرج الرمادي قبل تطبيق نوى التفاف غاوس لإزالة الضوضاء عالية التردد.",
    "explanationEn": "Correct Principle: Digital image processing in robotics converts RGB color frames to grayscale before applying Gaussian smoothing convolution kernels to suppress high-frequency sensor noise.",
    "explanationAr": "المبدأ العلمي الصحيح: تحول معالجة الصور الرقمية في الروبوتات إطارات الألوان RGB إلى التدرج الرمادي قبل تطبيق نوى التفاف غاوس لإزالة الضوضاء عالية التردد.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_53",
    "titleEn": "[EASY] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Review 53",
    "titleAr": "[مستوى أساسي] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - سؤال 53",
    "questionEn": "[Question 53] In the context of Egyptian STEM robotics and mechatronics regarding Inertial Measurement Units (IMU) & Complementary Filter Fusion, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 53] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
    "correctAnswerAr": "تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
    "explanationEn": "Correct Principle: A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
    "explanationAr": "المبدأ العلمي الصحيح: تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_54",
    "titleEn": "[EASY] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Review 54",
    "titleAr": "[مستوى أساسي] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - سؤال 54",
    "questionEn": "[Question 54] In the context of Egyptian STEM robotics and mechatronics regarding Optical Quadrature Encoders, X4 Decoding & Wheel Odometry, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 54] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
    "correctAnswerAr": "تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
    "explanationEn": "Correct Principle: Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
    "explanationAr": "المبدأ العلمي الصحيح: تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_55",
    "titleEn": "[EASY] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Review 55",
    "titleAr": "[مستوى أساسي] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - سؤال 55",
    "questionEn": "[Question 55] In the context of Egyptian STEM robotics and mechatronics regarding Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 55] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Time-of-Flight (ToF) LiDAR emits pulsed laser beams at light speed $c \\approx 3 \\times 10^8\\ m/s$ and measures round-trip time $\\Delta t$ to calculate object distance: $d = \\frac{c \\Delta t}{2}$.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "يرسل رادار الليزر ToF نبضات ليزرية بسرعة الضوء $c \\approx 3 \\times 10^8\\ m/s$ ويقيس زمن الذهاب والعودة $\\Delta t$ لحساب المسافة: $d = \\frac{c \\Delta t}{2}$.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Time-of-Flight (ToF) LiDAR emits pulsed laser beams at light speed $c \\approx 3 \\times 10^8\\ m/s$ and measures round-trip time $\\Delta t$ to calculate object distance: $d = \\frac{c \\Delta t}{2}$.",
    "correctAnswerAr": "يرسل رادار الليزر ToF نبضات ليزرية بسرعة الضوء $c \\approx 3 \\times 10^8\\ m/s$ ويقيس زمن الذهاب والعودة $\\Delta t$ لحساب المسافة: $d = \\frac{c \\Delta t}{2}$.",
    "explanationEn": "Correct Principle: Time-of-Flight (ToF) LiDAR emits pulsed laser beams at light speed $c \\approx 3 \\times 10^8\\ m/s$ and measures round-trip time $\\Delta t$ to calculate object distance: $d = \\frac{c \\Delta t}{2}$.",
    "explanationAr": "المبدأ العلمي الصحيح: يرسل رادار الليزر ToF نبضات ليزرية بسرعة الضوء $c \\approx 3 \\times 10^8\\ m/s$ ويقيس زمن الذهاب والعودة $\\Delta t$ لحساب المسافة: $d = \\frac{c \\Delta t}{2}$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_56",
    "titleEn": "[EASY] OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform - Review 56",
    "titleAr": "[مستوى أساسي] استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف - سؤال 56",
    "questionEn": "[Question 56] In the context of Egyptian STEM robotics and mechatronics regarding OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 56] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Digital image processing in robotics converts RGB color frames to grayscale before applying Gaussian smoothing convolution kernels to suppress high-frequency sensor noise."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تحول معالجة الصور الرقمية في الروبوتات إطارات الألوان RGB إلى التدرج الرمادي قبل تطبيق نوى التفاف غاوس لإزالة الضوضاء عالية التردد."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Digital image processing in robotics converts RGB color frames to grayscale before applying Gaussian smoothing convolution kernels to suppress high-frequency sensor noise.",
    "correctAnswerAr": "تحول معالجة الصور الرقمية في الروبوتات إطارات الألوان RGB إلى التدرج الرمادي قبل تطبيق نوى التفاف غاوس لإزالة الضوضاء عالية التردد.",
    "explanationEn": "Correct Principle: Digital image processing in robotics converts RGB color frames to grayscale before applying Gaussian smoothing convolution kernels to suppress high-frequency sensor noise.",
    "explanationAr": "المبدأ العلمي الصحيح: تحول معالجة الصور الرقمية في الروبوتات إطارات الألوان RGB إلى التدرج الرمادي قبل تطبيق نوى التفاف غاوس لإزالة الضوضاء عالية التردد.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_57",
    "titleEn": "[EASY] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Review 57",
    "titleAr": "[مستوى أساسي] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - سؤال 57",
    "questionEn": "[Question 57] In the context of Egyptian STEM robotics and mechatronics regarding Inertial Measurement Units (IMU) & Complementary Filter Fusion, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 57] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
    "correctAnswerAr": "تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
    "explanationEn": "Correct Principle: A 6-DOF Inertial Measurement Unit (IMU) combines a 3-axis MEMS accelerometer (measuring linear specific force) and a 3-axis gyroscope (measuring angular velocity).",
    "explanationAr": "المبدأ العلمي الصحيح: تدمج وحدة قياس القصور الذاتي (IMU) بست درجات حرية بين مقياس تسارع ثلاثي المحاور (لقياس القوة النوعية الخطية) وجيروسكوب ثلاثي المحاور (لقياس السرعة الزاوية).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch2_easy_58",
    "titleEn": "[EASY] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Review 58",
    "titleAr": "[مستوى أساسي] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - سؤال 58",
    "questionEn": "[Question 58] In the context of Egyptian STEM robotics and mechatronics regarding Optical Quadrature Encoders, X4 Decoding & Wheel Odometry, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 58] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
    "correctAnswerAr": "تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
    "explanationEn": "Correct Principle: Quadrature encoders produce two square wave channels (A and B) shifted by $90^\\circ$ electrical phase, allowing detection of both rotation angle and direction.",
    "explanationAr": "المبدأ العلمي الصحيح: تنتج المشفرات التربيعية قناتي نبضات مربعة (A وB) بينهما إزاحة طورية ۹۰ درجة، مما يتيح تحديد زاوية الدوران واتجاهه.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  }
],
  medium: [
  {
    "id": "th_robotics_ch2_med_1",
    "titleEn": "[MEDIUM] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Analysis 1",
    "titleAr": "[مستوى متوسط] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - تحليل 1",
    "questionEn": "[Question 1] When analyzing hardware-software integration and operational control for Inertial Measurement Units (IMU) & Complementary Filter Fusion, identify the correct engineering relationship:",
    "questionAr": "[السؤال 1] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "correctAnswerAr": "يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "explanationEn": "Engineering Analysis: A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "explanationAr": "التحليل الهندسي المعتمد: يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_2",
    "titleEn": "[MEDIUM] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Analysis 2",
    "titleAr": "[مستوى متوسط] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - تحليل 2",
    "questionEn": "[Question 2] When analyzing hardware-software integration and operational control for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry, identify the correct engineering relationship:",
    "questionAr": "[السؤال 2] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR)."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR).",
    "correctAnswerAr": "يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR).",
    "explanationEn": "Engineering Analysis: X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR).",
    "explanationAr": "التحليل الهندسي المعتمد: يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_3",
    "titleEn": "[MEDIUM] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Analysis 3",
    "titleAr": "[مستوى متوسط] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - تحليل 3",
    "questionEn": "[Question 3] When analyzing hardware-software integration and operational control for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution, identify the correct engineering relationship:",
    "questionAr": "[السؤال 3] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
    "correctAnswerAr": "تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
    "explanationEn": "Engineering Analysis: A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_4",
    "titleEn": "[MEDIUM] OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform - Analysis 4",
    "titleAr": "[مستوى متوسط] استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف - تحليل 4",
    "questionEn": "[Question 4] When analyzing hardware-software integration and operational control for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform, identify the correct engineering relationship:",
    "questionAr": "[السؤال 4] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "The Canny edge detector computes spatial image gradients using Sobel operators, applies non-maximum suppression along gradient vectors, and uses dual-threshold hysteresis for edge continuity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "يحسب كاشف حواف كاني تدرجات الصورة المكانية باستخدام مؤثرات سوبل، ويطبق قمع غير القمم العظمى على امتداد متجه التدرج، ويستخدم عتبات ثنائية للربط.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The Canny edge detector computes spatial image gradients using Sobel operators, applies non-maximum suppression along gradient vectors, and uses dual-threshold hysteresis for edge continuity.",
    "correctAnswerAr": "يحسب كاشف حواف كاني تدرجات الصورة المكانية باستخدام مؤثرات سوبل، ويطبق قمع غير القمم العظمى على امتداد متجه التدرج، ويستخدم عتبات ثنائية للربط.",
    "explanationEn": "Engineering Analysis: The Canny edge detector computes spatial image gradients using Sobel operators, applies non-maximum suppression along gradient vectors, and uses dual-threshold hysteresis for edge continuity.",
    "explanationAr": "التحليل الهندسي المعتمد: يحسب كاشف حواف كاني تدرجات الصورة المكانية باستخدام مؤثرات سوبل، ويطبق قمع غير القمم العظمى على امتداد متجه التدرج، ويستخدم عتبات ثنائية للربط.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_5",
    "titleEn": "[MEDIUM] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Analysis 5",
    "titleAr": "[مستوى متوسط] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - تحليل 5",
    "questionEn": "[Question 5] When analyzing hardware-software integration and operational control for Inertial Measurement Units (IMU) & Complementary Filter Fusion, identify the correct engineering relationship:",
    "questionAr": "[السؤال 5] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "correctAnswerAr": "يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "explanationEn": "Engineering Analysis: A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "explanationAr": "التحليل الهندسي المعتمد: يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_6",
    "titleEn": "[MEDIUM] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Analysis 6",
    "titleAr": "[مستوى متوسط] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - تحليل 6",
    "questionEn": "[Question 6] When analyzing hardware-software integration and operational control for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry, identify the correct engineering relationship:",
    "questionAr": "[السؤال 6] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR)."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR).",
    "correctAnswerAr": "يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR).",
    "explanationEn": "Engineering Analysis: X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR).",
    "explanationAr": "التحليل الهندسي المعتمد: يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_7",
    "titleEn": "[MEDIUM] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Analysis 7",
    "titleAr": "[مستوى متوسط] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - تحليل 7",
    "questionEn": "[Question 7] When analyzing hardware-software integration and operational control for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution, identify the correct engineering relationship:",
    "questionAr": "[السؤال 7] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
    "correctAnswerAr": "تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
    "explanationEn": "Engineering Analysis: A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_8",
    "titleEn": "[MEDIUM] OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform - Analysis 8",
    "titleAr": "[مستوى متوسط] استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف - تحليل 8",
    "questionEn": "[Question 8] When analyzing hardware-software integration and operational control for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform, identify the correct engineering relationship:",
    "questionAr": "[السؤال 8] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "The Canny edge detector computes spatial image gradients using Sobel operators, applies non-maximum suppression along gradient vectors, and uses dual-threshold hysteresis for edge continuity.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "يحسب كاشف حواف كاني تدرجات الصورة المكانية باستخدام مؤثرات سوبل، ويطبق قمع غير القمم العظمى على امتداد متجه التدرج، ويستخدم عتبات ثنائية للربط.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The Canny edge detector computes spatial image gradients using Sobel operators, applies non-maximum suppression along gradient vectors, and uses dual-threshold hysteresis for edge continuity.",
    "correctAnswerAr": "يحسب كاشف حواف كاني تدرجات الصورة المكانية باستخدام مؤثرات سوبل، ويطبق قمع غير القمم العظمى على امتداد متجه التدرج، ويستخدم عتبات ثنائية للربط.",
    "explanationEn": "Engineering Analysis: The Canny edge detector computes spatial image gradients using Sobel operators, applies non-maximum suppression along gradient vectors, and uses dual-threshold hysteresis for edge continuity.",
    "explanationAr": "التحليل الهندسي المعتمد: يحسب كاشف حواف كاني تدرجات الصورة المكانية باستخدام مؤثرات سوبل، ويطبق قمع غير القمم العظمى على امتداد متجه التدرج، ويستخدم عتبات ثنائية للربط.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_9",
    "titleEn": "[MEDIUM] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Analysis 9",
    "titleAr": "[مستوى متوسط] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - تحليل 9",
    "questionEn": "[Question 9] When analyzing hardware-software integration and operational control for Inertial Measurement Units (IMU) & Complementary Filter Fusion, identify the correct engineering relationship:",
    "questionAr": "[السؤال 9] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "correctAnswerAr": "يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "explanationEn": "Engineering Analysis: A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "explanationAr": "التحليل الهندسي المعتمد: يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_10",
    "titleEn": "[MEDIUM] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Analysis 10",
    "titleAr": "[مستوى متوسط] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - تحليل 10",
    "questionEn": "[Question 10] When analyzing hardware-software integration and operational control for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry, identify the correct engineering relationship:",
    "questionAr": "[السؤال 10] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR)."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR).",
    "correctAnswerAr": "يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR).",
    "explanationEn": "Engineering Analysis: X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR).",
    "explanationAr": "التحليل الهندسي المعتمد: يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_11",
    "titleEn": "[MEDIUM] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Analysis 11",
    "titleAr": "[مستوى متوسط] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - تحليل 11",
    "questionEn": "[Question 11] When analyzing hardware-software integration and operational control for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution, identify the correct engineering relationship:",
    "questionAr": "[السؤال 11] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
    "correctAnswerAr": "تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
    "explanationEn": "Engineering Analysis: A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_12",
    "titleEn": "[MEDIUM] OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform - Analysis 12",
    "titleAr": "[مستوى متوسط] استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف - تحليل 12",
    "questionEn": "[Question 12] When analyzing hardware-software integration and operational control for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform, identify the correct engineering relationship:",
    "questionAr": "[السؤال 12] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "The Canny edge detector computes spatial image gradients using Sobel operators, applies non-maximum suppression along gradient vectors, and uses dual-threshold hysteresis for edge continuity.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "يحسب كاشف حواف كاني تدرجات الصورة المكانية باستخدام مؤثرات سوبل، ويطبق قمع غير القمم العظمى على امتداد متجه التدرج، ويستخدم عتبات ثنائية للربط.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The Canny edge detector computes spatial image gradients using Sobel operators, applies non-maximum suppression along gradient vectors, and uses dual-threshold hysteresis for edge continuity.",
    "correctAnswerAr": "يحسب كاشف حواف كاني تدرجات الصورة المكانية باستخدام مؤثرات سوبل، ويطبق قمع غير القمم العظمى على امتداد متجه التدرج، ويستخدم عتبات ثنائية للربط.",
    "explanationEn": "Engineering Analysis: The Canny edge detector computes spatial image gradients using Sobel operators, applies non-maximum suppression along gradient vectors, and uses dual-threshold hysteresis for edge continuity.",
    "explanationAr": "التحليل الهندسي المعتمد: يحسب كاشف حواف كاني تدرجات الصورة المكانية باستخدام مؤثرات سوبل، ويطبق قمع غير القمم العظمى على امتداد متجه التدرج، ويستخدم عتبات ثنائية للربط.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_13",
    "titleEn": "[MEDIUM] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Analysis 13",
    "titleAr": "[مستوى متوسط] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - تحليل 13",
    "questionEn": "[Question 13] When analyzing hardware-software integration and operational control for Inertial Measurement Units (IMU) & Complementary Filter Fusion, identify the correct engineering relationship:",
    "questionAr": "[السؤال 13] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "correctAnswerAr": "يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "explanationEn": "Engineering Analysis: A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "explanationAr": "التحليل الهندسي المعتمد: يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_14",
    "titleEn": "[MEDIUM] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Analysis 14",
    "titleAr": "[مستوى متوسط] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - تحليل 14",
    "questionEn": "[Question 14] When analyzing hardware-software integration and operational control for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry, identify the correct engineering relationship:",
    "questionAr": "[السؤال 14] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR)."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR).",
    "correctAnswerAr": "يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR).",
    "explanationEn": "Engineering Analysis: X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR).",
    "explanationAr": "التحليل الهندسي المعتمد: يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_15",
    "titleEn": "[MEDIUM] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Analysis 15",
    "titleAr": "[مستوى متوسط] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - تحليل 15",
    "questionEn": "[Question 15] When analyzing hardware-software integration and operational control for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution, identify the correct engineering relationship:",
    "questionAr": "[السؤال 15] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
    "correctAnswerAr": "تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
    "explanationEn": "Engineering Analysis: A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_16",
    "titleEn": "[MEDIUM] OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform - Analysis 16",
    "titleAr": "[مستوى متوسط] استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف - تحليل 16",
    "questionEn": "[Question 16] When analyzing hardware-software integration and operational control for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform, identify the correct engineering relationship:",
    "questionAr": "[السؤال 16] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "The Canny edge detector computes spatial image gradients using Sobel operators, applies non-maximum suppression along gradient vectors, and uses dual-threshold hysteresis for edge continuity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "يحسب كاشف حواف كاني تدرجات الصورة المكانية باستخدام مؤثرات سوبل، ويطبق قمع غير القمم العظمى على امتداد متجه التدرج، ويستخدم عتبات ثنائية للربط.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The Canny edge detector computes spatial image gradients using Sobel operators, applies non-maximum suppression along gradient vectors, and uses dual-threshold hysteresis for edge continuity.",
    "correctAnswerAr": "يحسب كاشف حواف كاني تدرجات الصورة المكانية باستخدام مؤثرات سوبل، ويطبق قمع غير القمم العظمى على امتداد متجه التدرج، ويستخدم عتبات ثنائية للربط.",
    "explanationEn": "Engineering Analysis: The Canny edge detector computes spatial image gradients using Sobel operators, applies non-maximum suppression along gradient vectors, and uses dual-threshold hysteresis for edge continuity.",
    "explanationAr": "التحليل الهندسي المعتمد: يحسب كاشف حواف كاني تدرجات الصورة المكانية باستخدام مؤثرات سوبل، ويطبق قمع غير القمم العظمى على امتداد متجه التدرج، ويستخدم عتبات ثنائية للربط.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_17",
    "titleEn": "[MEDIUM] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Analysis 17",
    "titleAr": "[مستوى متوسط] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - تحليل 17",
    "questionEn": "[Question 17] When analyzing hardware-software integration and operational control for Inertial Measurement Units (IMU) & Complementary Filter Fusion, identify the correct engineering relationship:",
    "questionAr": "[السؤال 17] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "correctAnswerAr": "يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "explanationEn": "Engineering Analysis: A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "explanationAr": "التحليل الهندسي المعتمد: يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_18",
    "titleEn": "[MEDIUM] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Analysis 18",
    "titleAr": "[مستوى متوسط] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - تحليل 18",
    "questionEn": "[Question 18] When analyzing hardware-software integration and operational control for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry, identify the correct engineering relationship:",
    "questionAr": "[السؤال 18] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR)."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR).",
    "correctAnswerAr": "يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR).",
    "explanationEn": "Engineering Analysis: X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR).",
    "explanationAr": "التحليل الهندسي المعتمد: يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_19",
    "titleEn": "[MEDIUM] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Analysis 19",
    "titleAr": "[مستوى متوسط] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - تحليل 19",
    "questionEn": "[Question 19] When analyzing hardware-software integration and operational control for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution, identify the correct engineering relationship:",
    "questionAr": "[السؤال 19] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
    "correctAnswerAr": "تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
    "explanationEn": "Engineering Analysis: A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_20",
    "titleEn": "[MEDIUM] OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform - Analysis 20",
    "titleAr": "[مستوى متوسط] استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف - تحليل 20",
    "questionEn": "[Question 20] When analyzing hardware-software integration and operational control for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform, identify the correct engineering relationship:",
    "questionAr": "[السؤال 20] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "The Canny edge detector computes spatial image gradients using Sobel operators, applies non-maximum suppression along gradient vectors, and uses dual-threshold hysteresis for edge continuity.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "يحسب كاشف حواف كاني تدرجات الصورة المكانية باستخدام مؤثرات سوبل، ويطبق قمع غير القمم العظمى على امتداد متجه التدرج، ويستخدم عتبات ثنائية للربط.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The Canny edge detector computes spatial image gradients using Sobel operators, applies non-maximum suppression along gradient vectors, and uses dual-threshold hysteresis for edge continuity.",
    "correctAnswerAr": "يحسب كاشف حواف كاني تدرجات الصورة المكانية باستخدام مؤثرات سوبل، ويطبق قمع غير القمم العظمى على امتداد متجه التدرج، ويستخدم عتبات ثنائية للربط.",
    "explanationEn": "Engineering Analysis: The Canny edge detector computes spatial image gradients using Sobel operators, applies non-maximum suppression along gradient vectors, and uses dual-threshold hysteresis for edge continuity.",
    "explanationAr": "التحليل الهندسي المعتمد: يحسب كاشف حواف كاني تدرجات الصورة المكانية باستخدام مؤثرات سوبل، ويطبق قمع غير القمم العظمى على امتداد متجه التدرج، ويستخدم عتبات ثنائية للربط.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_21",
    "titleEn": "[MEDIUM] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Analysis 21",
    "titleAr": "[مستوى متوسط] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - تحليل 21",
    "questionEn": "[Question 21] When analyzing hardware-software integration and operational control for Inertial Measurement Units (IMU) & Complementary Filter Fusion, identify the correct engineering relationship:",
    "questionAr": "[السؤال 21] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "correctAnswerAr": "يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "explanationEn": "Engineering Analysis: A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "explanationAr": "التحليل الهندسي المعتمد: يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_22",
    "titleEn": "[MEDIUM] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Analysis 22",
    "titleAr": "[مستوى متوسط] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - تحليل 22",
    "questionEn": "[Question 22] When analyzing hardware-software integration and operational control for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry, identify the correct engineering relationship:",
    "questionAr": "[السؤال 22] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR)."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR).",
    "correctAnswerAr": "يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR).",
    "explanationEn": "Engineering Analysis: X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR).",
    "explanationAr": "التحليل الهندسي المعتمد: يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_23",
    "titleEn": "[MEDIUM] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Analysis 23",
    "titleAr": "[مستوى متوسط] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - تحليل 23",
    "questionEn": "[Question 23] When analyzing hardware-software integration and operational control for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution, identify the correct engineering relationship:",
    "questionAr": "[السؤال 23] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
    "correctAnswerAr": "تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
    "explanationEn": "Engineering Analysis: A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_24",
    "titleEn": "[MEDIUM] OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform - Analysis 24",
    "titleAr": "[مستوى متوسط] استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف - تحليل 24",
    "questionEn": "[Question 24] When analyzing hardware-software integration and operational control for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform, identify the correct engineering relationship:",
    "questionAr": "[السؤال 24] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "The Canny edge detector computes spatial image gradients using Sobel operators, applies non-maximum suppression along gradient vectors, and uses dual-threshold hysteresis for edge continuity.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "يحسب كاشف حواف كاني تدرجات الصورة المكانية باستخدام مؤثرات سوبل، ويطبق قمع غير القمم العظمى على امتداد متجه التدرج، ويستخدم عتبات ثنائية للربط.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The Canny edge detector computes spatial image gradients using Sobel operators, applies non-maximum suppression along gradient vectors, and uses dual-threshold hysteresis for edge continuity.",
    "correctAnswerAr": "يحسب كاشف حواف كاني تدرجات الصورة المكانية باستخدام مؤثرات سوبل، ويطبق قمع غير القمم العظمى على امتداد متجه التدرج، ويستخدم عتبات ثنائية للربط.",
    "explanationEn": "Engineering Analysis: The Canny edge detector computes spatial image gradients using Sobel operators, applies non-maximum suppression along gradient vectors, and uses dual-threshold hysteresis for edge continuity.",
    "explanationAr": "التحليل الهندسي المعتمد: يحسب كاشف حواف كاني تدرجات الصورة المكانية باستخدام مؤثرات سوبل، ويطبق قمع غير القمم العظمى على امتداد متجه التدرج، ويستخدم عتبات ثنائية للربط.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_25",
    "titleEn": "[MEDIUM] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Analysis 25",
    "titleAr": "[مستوى متوسط] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - تحليل 25",
    "questionEn": "[Question 25] When analyzing hardware-software integration and operational control for Inertial Measurement Units (IMU) & Complementary Filter Fusion, identify the correct engineering relationship:",
    "questionAr": "[السؤال 25] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "correctAnswerAr": "يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "explanationEn": "Engineering Analysis: A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "explanationAr": "التحليل الهندسي المعتمد: يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_26",
    "titleEn": "[MEDIUM] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Analysis 26",
    "titleAr": "[مستوى متوسط] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - تحليل 26",
    "questionEn": "[Question 26] When analyzing hardware-software integration and operational control for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry, identify the correct engineering relationship:",
    "questionAr": "[السؤال 26] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR)."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR).",
    "correctAnswerAr": "يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR).",
    "explanationEn": "Engineering Analysis: X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR).",
    "explanationAr": "التحليل الهندسي المعتمد: يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_27",
    "titleEn": "[MEDIUM] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Analysis 27",
    "titleAr": "[مستوى متوسط] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - تحليل 27",
    "questionEn": "[Question 27] When analyzing hardware-software integration and operational control for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution, identify the correct engineering relationship:",
    "questionAr": "[السؤال 27] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
    "correctAnswerAr": "تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
    "explanationEn": "Engineering Analysis: A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_28",
    "titleEn": "[MEDIUM] OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform - Analysis 28",
    "titleAr": "[مستوى متوسط] استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف - تحليل 28",
    "questionEn": "[Question 28] When analyzing hardware-software integration and operational control for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform, identify the correct engineering relationship:",
    "questionAr": "[السؤال 28] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "The Canny edge detector computes spatial image gradients using Sobel operators, applies non-maximum suppression along gradient vectors, and uses dual-threshold hysteresis for edge continuity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "يحسب كاشف حواف كاني تدرجات الصورة المكانية باستخدام مؤثرات سوبل، ويطبق قمع غير القمم العظمى على امتداد متجه التدرج، ويستخدم عتبات ثنائية للربط.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The Canny edge detector computes spatial image gradients using Sobel operators, applies non-maximum suppression along gradient vectors, and uses dual-threshold hysteresis for edge continuity.",
    "correctAnswerAr": "يحسب كاشف حواف كاني تدرجات الصورة المكانية باستخدام مؤثرات سوبل، ويطبق قمع غير القمم العظمى على امتداد متجه التدرج، ويستخدم عتبات ثنائية للربط.",
    "explanationEn": "Engineering Analysis: The Canny edge detector computes spatial image gradients using Sobel operators, applies non-maximum suppression along gradient vectors, and uses dual-threshold hysteresis for edge continuity.",
    "explanationAr": "التحليل الهندسي المعتمد: يحسب كاشف حواف كاني تدرجات الصورة المكانية باستخدام مؤثرات سوبل، ويطبق قمع غير القمم العظمى على امتداد متجه التدرج، ويستخدم عتبات ثنائية للربط.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_29",
    "titleEn": "[MEDIUM] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Analysis 29",
    "titleAr": "[مستوى متوسط] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - تحليل 29",
    "questionEn": "[Question 29] When analyzing hardware-software integration and operational control for Inertial Measurement Units (IMU) & Complementary Filter Fusion, identify the correct engineering relationship:",
    "questionAr": "[السؤال 29] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "correctAnswerAr": "يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "explanationEn": "Engineering Analysis: A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "explanationAr": "التحليل الهندسي المعتمد: يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_30",
    "titleEn": "[MEDIUM] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Analysis 30",
    "titleAr": "[مستوى متوسط] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - تحليل 30",
    "questionEn": "[Question 30] When analyzing hardware-software integration and operational control for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry, identify the correct engineering relationship:",
    "questionAr": "[السؤال 30] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR)."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR).",
    "correctAnswerAr": "يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR).",
    "explanationEn": "Engineering Analysis: X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR).",
    "explanationAr": "التحليل الهندسي المعتمد: يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_31",
    "titleEn": "[MEDIUM] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Analysis 31",
    "titleAr": "[مستوى متوسط] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - تحليل 31",
    "questionEn": "[Question 31] When analyzing hardware-software integration and operational control for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution, identify the correct engineering relationship:",
    "questionAr": "[السؤال 31] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
    "correctAnswerAr": "تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
    "explanationEn": "Engineering Analysis: A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_32",
    "titleEn": "[MEDIUM] OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform - Analysis 32",
    "titleAr": "[مستوى متوسط] استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف - تحليل 32",
    "questionEn": "[Question 32] When analyzing hardware-software integration and operational control for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform, identify the correct engineering relationship:",
    "questionAr": "[السؤال 32] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "The Canny edge detector computes spatial image gradients using Sobel operators, applies non-maximum suppression along gradient vectors, and uses dual-threshold hysteresis for edge continuity.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "يحسب كاشف حواف كاني تدرجات الصورة المكانية باستخدام مؤثرات سوبل، ويطبق قمع غير القمم العظمى على امتداد متجه التدرج، ويستخدم عتبات ثنائية للربط.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The Canny edge detector computes spatial image gradients using Sobel operators, applies non-maximum suppression along gradient vectors, and uses dual-threshold hysteresis for edge continuity.",
    "correctAnswerAr": "يحسب كاشف حواف كاني تدرجات الصورة المكانية باستخدام مؤثرات سوبل، ويطبق قمع غير القمم العظمى على امتداد متجه التدرج، ويستخدم عتبات ثنائية للربط.",
    "explanationEn": "Engineering Analysis: The Canny edge detector computes spatial image gradients using Sobel operators, applies non-maximum suppression along gradient vectors, and uses dual-threshold hysteresis for edge continuity.",
    "explanationAr": "التحليل الهندسي المعتمد: يحسب كاشف حواف كاني تدرجات الصورة المكانية باستخدام مؤثرات سوبل، ويطبق قمع غير القمم العظمى على امتداد متجه التدرج، ويستخدم عتبات ثنائية للربط.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_33",
    "titleEn": "[MEDIUM] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Analysis 33",
    "titleAr": "[مستوى متوسط] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - تحليل 33",
    "questionEn": "[Question 33] When analyzing hardware-software integration and operational control for Inertial Measurement Units (IMU) & Complementary Filter Fusion, identify the correct engineering relationship:",
    "questionAr": "[السؤال 33] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "correctAnswerAr": "يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "explanationEn": "Engineering Analysis: A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "explanationAr": "التحليل الهندسي المعتمد: يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_34",
    "titleEn": "[MEDIUM] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Analysis 34",
    "titleAr": "[مستوى متوسط] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - تحليل 34",
    "questionEn": "[Question 34] When analyzing hardware-software integration and operational control for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry, identify the correct engineering relationship:",
    "questionAr": "[السؤال 34] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR)."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR).",
    "correctAnswerAr": "يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR).",
    "explanationEn": "Engineering Analysis: X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR).",
    "explanationAr": "التحليل الهندسي المعتمد: يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_35",
    "titleEn": "[MEDIUM] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Analysis 35",
    "titleAr": "[مستوى متوسط] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - تحليل 35",
    "questionEn": "[Question 35] When analyzing hardware-software integration and operational control for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution, identify the correct engineering relationship:",
    "questionAr": "[السؤال 35] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
    "correctAnswerAr": "تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
    "explanationEn": "Engineering Analysis: A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_36",
    "titleEn": "[MEDIUM] OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform - Analysis 36",
    "titleAr": "[مستوى متوسط] استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف - تحليل 36",
    "questionEn": "[Question 36] When analyzing hardware-software integration and operational control for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform, identify the correct engineering relationship:",
    "questionAr": "[السؤال 36] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "The Canny edge detector computes spatial image gradients using Sobel operators, applies non-maximum suppression along gradient vectors, and uses dual-threshold hysteresis for edge continuity.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "يحسب كاشف حواف كاني تدرجات الصورة المكانية باستخدام مؤثرات سوبل، ويطبق قمع غير القمم العظمى على امتداد متجه التدرج، ويستخدم عتبات ثنائية للربط.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The Canny edge detector computes spatial image gradients using Sobel operators, applies non-maximum suppression along gradient vectors, and uses dual-threshold hysteresis for edge continuity.",
    "correctAnswerAr": "يحسب كاشف حواف كاني تدرجات الصورة المكانية باستخدام مؤثرات سوبل، ويطبق قمع غير القمم العظمى على امتداد متجه التدرج، ويستخدم عتبات ثنائية للربط.",
    "explanationEn": "Engineering Analysis: The Canny edge detector computes spatial image gradients using Sobel operators, applies non-maximum suppression along gradient vectors, and uses dual-threshold hysteresis for edge continuity.",
    "explanationAr": "التحليل الهندسي المعتمد: يحسب كاشف حواف كاني تدرجات الصورة المكانية باستخدام مؤثرات سوبل، ويطبق قمع غير القمم العظمى على امتداد متجه التدرج، ويستخدم عتبات ثنائية للربط.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_37",
    "titleEn": "[MEDIUM] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Analysis 37",
    "titleAr": "[مستوى متوسط] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - تحليل 37",
    "questionEn": "[Question 37] When analyzing hardware-software integration and operational control for Inertial Measurement Units (IMU) & Complementary Filter Fusion, identify the correct engineering relationship:",
    "questionAr": "[السؤال 37] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "correctAnswerAr": "يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "explanationEn": "Engineering Analysis: A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "explanationAr": "التحليل الهندسي المعتمد: يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_38",
    "titleEn": "[MEDIUM] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Analysis 38",
    "titleAr": "[مستوى متوسط] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - تحليل 38",
    "questionEn": "[Question 38] When analyzing hardware-software integration and operational control for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry, identify the correct engineering relationship:",
    "questionAr": "[السؤال 38] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR)."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR).",
    "correctAnswerAr": "يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR).",
    "explanationEn": "Engineering Analysis: X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR).",
    "explanationAr": "التحليل الهندسي المعتمد: يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_39",
    "titleEn": "[MEDIUM] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Analysis 39",
    "titleAr": "[مستوى متوسط] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - تحليل 39",
    "questionEn": "[Question 39] When analyzing hardware-software integration and operational control for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution, identify the correct engineering relationship:",
    "questionAr": "[السؤال 39] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
    "correctAnswerAr": "تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
    "explanationEn": "Engineering Analysis: A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_40",
    "titleEn": "[MEDIUM] OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform - Analysis 40",
    "titleAr": "[مستوى متوسط] استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف - تحليل 40",
    "questionEn": "[Question 40] When analyzing hardware-software integration and operational control for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform, identify the correct engineering relationship:",
    "questionAr": "[السؤال 40] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "The Canny edge detector computes spatial image gradients using Sobel operators, applies non-maximum suppression along gradient vectors, and uses dual-threshold hysteresis for edge continuity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "يحسب كاشف حواف كاني تدرجات الصورة المكانية باستخدام مؤثرات سوبل، ويطبق قمع غير القمم العظمى على امتداد متجه التدرج، ويستخدم عتبات ثنائية للربط.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The Canny edge detector computes spatial image gradients using Sobel operators, applies non-maximum suppression along gradient vectors, and uses dual-threshold hysteresis for edge continuity.",
    "correctAnswerAr": "يحسب كاشف حواف كاني تدرجات الصورة المكانية باستخدام مؤثرات سوبل، ويطبق قمع غير القمم العظمى على امتداد متجه التدرج، ويستخدم عتبات ثنائية للربط.",
    "explanationEn": "Engineering Analysis: The Canny edge detector computes spatial image gradients using Sobel operators, applies non-maximum suppression along gradient vectors, and uses dual-threshold hysteresis for edge continuity.",
    "explanationAr": "التحليل الهندسي المعتمد: يحسب كاشف حواف كاني تدرجات الصورة المكانية باستخدام مؤثرات سوبل، ويطبق قمع غير القمم العظمى على امتداد متجه التدرج، ويستخدم عتبات ثنائية للربط.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_41",
    "titleEn": "[MEDIUM] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Analysis 41",
    "titleAr": "[مستوى متوسط] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - تحليل 41",
    "questionEn": "[Question 41] When analyzing hardware-software integration and operational control for Inertial Measurement Units (IMU) & Complementary Filter Fusion, identify the correct engineering relationship:",
    "questionAr": "[السؤال 41] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "correctAnswerAr": "يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "explanationEn": "Engineering Analysis: A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "explanationAr": "التحليل الهندسي المعتمد: يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_42",
    "titleEn": "[MEDIUM] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Analysis 42",
    "titleAr": "[مستوى متوسط] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - تحليل 42",
    "questionEn": "[Question 42] When analyzing hardware-software integration and operational control for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry, identify the correct engineering relationship:",
    "questionAr": "[السؤال 42] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR)."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR).",
    "correctAnswerAr": "يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR).",
    "explanationEn": "Engineering Analysis: X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR).",
    "explanationAr": "التحليل الهندسي المعتمد: يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_43",
    "titleEn": "[MEDIUM] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Analysis 43",
    "titleAr": "[مستوى متوسط] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - تحليل 43",
    "questionEn": "[Question 43] When analyzing hardware-software integration and operational control for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution, identify the correct engineering relationship:",
    "questionAr": "[السؤال 43] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
    "correctAnswerAr": "تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
    "explanationEn": "Engineering Analysis: A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_44",
    "titleEn": "[MEDIUM] OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform - Analysis 44",
    "titleAr": "[مستوى متوسط] استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف - تحليل 44",
    "questionEn": "[Question 44] When analyzing hardware-software integration and operational control for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform, identify the correct engineering relationship:",
    "questionAr": "[السؤال 44] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "The Canny edge detector computes spatial image gradients using Sobel operators, applies non-maximum suppression along gradient vectors, and uses dual-threshold hysteresis for edge continuity.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "يحسب كاشف حواف كاني تدرجات الصورة المكانية باستخدام مؤثرات سوبل، ويطبق قمع غير القمم العظمى على امتداد متجه التدرج، ويستخدم عتبات ثنائية للربط.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The Canny edge detector computes spatial image gradients using Sobel operators, applies non-maximum suppression along gradient vectors, and uses dual-threshold hysteresis for edge continuity.",
    "correctAnswerAr": "يحسب كاشف حواف كاني تدرجات الصورة المكانية باستخدام مؤثرات سوبل، ويطبق قمع غير القمم العظمى على امتداد متجه التدرج، ويستخدم عتبات ثنائية للربط.",
    "explanationEn": "Engineering Analysis: The Canny edge detector computes spatial image gradients using Sobel operators, applies non-maximum suppression along gradient vectors, and uses dual-threshold hysteresis for edge continuity.",
    "explanationAr": "التحليل الهندسي المعتمد: يحسب كاشف حواف كاني تدرجات الصورة المكانية باستخدام مؤثرات سوبل، ويطبق قمع غير القمم العظمى على امتداد متجه التدرج، ويستخدم عتبات ثنائية للربط.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_45",
    "titleEn": "[MEDIUM] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Analysis 45",
    "titleAr": "[مستوى متوسط] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - تحليل 45",
    "questionEn": "[Question 45] When analyzing hardware-software integration and operational control for Inertial Measurement Units (IMU) & Complementary Filter Fusion, identify the correct engineering relationship:",
    "questionAr": "[السؤال 45] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "correctAnswerAr": "يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "explanationEn": "Engineering Analysis: A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "explanationAr": "التحليل الهندسي المعتمد: يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_46",
    "titleEn": "[MEDIUM] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Analysis 46",
    "titleAr": "[مستوى متوسط] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - تحليل 46",
    "questionEn": "[Question 46] When analyzing hardware-software integration and operational control for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry, identify the correct engineering relationship:",
    "questionAr": "[السؤال 46] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR)."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR).",
    "correctAnswerAr": "يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR).",
    "explanationEn": "Engineering Analysis: X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR).",
    "explanationAr": "التحليل الهندسي المعتمد: يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_47",
    "titleEn": "[MEDIUM] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Analysis 47",
    "titleAr": "[مستوى متوسط] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - تحليل 47",
    "questionEn": "[Question 47] When analyzing hardware-software integration and operational control for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution, identify the correct engineering relationship:",
    "questionAr": "[السؤال 47] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
    "correctAnswerAr": "تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
    "explanationEn": "Engineering Analysis: A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_48",
    "titleEn": "[MEDIUM] OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform - Analysis 48",
    "titleAr": "[مستوى متوسط] استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف - تحليل 48",
    "questionEn": "[Question 48] When analyzing hardware-software integration and operational control for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform, identify the correct engineering relationship:",
    "questionAr": "[السؤال 48] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "The Canny edge detector computes spatial image gradients using Sobel operators, applies non-maximum suppression along gradient vectors, and uses dual-threshold hysteresis for edge continuity.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "يحسب كاشف حواف كاني تدرجات الصورة المكانية باستخدام مؤثرات سوبل، ويطبق قمع غير القمم العظمى على امتداد متجه التدرج، ويستخدم عتبات ثنائية للربط.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The Canny edge detector computes spatial image gradients using Sobel operators, applies non-maximum suppression along gradient vectors, and uses dual-threshold hysteresis for edge continuity.",
    "correctAnswerAr": "يحسب كاشف حواف كاني تدرجات الصورة المكانية باستخدام مؤثرات سوبل، ويطبق قمع غير القمم العظمى على امتداد متجه التدرج، ويستخدم عتبات ثنائية للربط.",
    "explanationEn": "Engineering Analysis: The Canny edge detector computes spatial image gradients using Sobel operators, applies non-maximum suppression along gradient vectors, and uses dual-threshold hysteresis for edge continuity.",
    "explanationAr": "التحليل الهندسي المعتمد: يحسب كاشف حواف كاني تدرجات الصورة المكانية باستخدام مؤثرات سوبل، ويطبق قمع غير القمم العظمى على امتداد متجه التدرج، ويستخدم عتبات ثنائية للربط.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_49",
    "titleEn": "[MEDIUM] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Analysis 49",
    "titleAr": "[مستوى متوسط] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - تحليل 49",
    "questionEn": "[Question 49] When analyzing hardware-software integration and operational control for Inertial Measurement Units (IMU) & Complementary Filter Fusion, identify the correct engineering relationship:",
    "questionAr": "[السؤال 49] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "correctAnswerAr": "يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "explanationEn": "Engineering Analysis: A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "explanationAr": "التحليل الهندسي المعتمد: يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_50",
    "titleEn": "[MEDIUM] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Analysis 50",
    "titleAr": "[مستوى متوسط] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - تحليل 50",
    "questionEn": "[Question 50] When analyzing hardware-software integration and operational control for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry, identify the correct engineering relationship:",
    "questionAr": "[السؤال 50] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR)."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR).",
    "correctAnswerAr": "يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR).",
    "explanationEn": "Engineering Analysis: X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR).",
    "explanationAr": "التحليل الهندسي المعتمد: يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_51",
    "titleEn": "[MEDIUM] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Analysis 51",
    "titleAr": "[مستوى متوسط] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - تحليل 51",
    "questionEn": "[Question 51] When analyzing hardware-software integration and operational control for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution, identify the correct engineering relationship:",
    "questionAr": "[السؤال 51] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
    "correctAnswerAr": "تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
    "explanationEn": "Engineering Analysis: A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_52",
    "titleEn": "[MEDIUM] OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform - Analysis 52",
    "titleAr": "[مستوى متوسط] استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف - تحليل 52",
    "questionEn": "[Question 52] When analyzing hardware-software integration and operational control for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform, identify the correct engineering relationship:",
    "questionAr": "[السؤال 52] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "The Canny edge detector computes spatial image gradients using Sobel operators, applies non-maximum suppression along gradient vectors, and uses dual-threshold hysteresis for edge continuity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "يحسب كاشف حواف كاني تدرجات الصورة المكانية باستخدام مؤثرات سوبل، ويطبق قمع غير القمم العظمى على امتداد متجه التدرج، ويستخدم عتبات ثنائية للربط.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The Canny edge detector computes spatial image gradients using Sobel operators, applies non-maximum suppression along gradient vectors, and uses dual-threshold hysteresis for edge continuity.",
    "correctAnswerAr": "يحسب كاشف حواف كاني تدرجات الصورة المكانية باستخدام مؤثرات سوبل، ويطبق قمع غير القمم العظمى على امتداد متجه التدرج، ويستخدم عتبات ثنائية للربط.",
    "explanationEn": "Engineering Analysis: The Canny edge detector computes spatial image gradients using Sobel operators, applies non-maximum suppression along gradient vectors, and uses dual-threshold hysteresis for edge continuity.",
    "explanationAr": "التحليل الهندسي المعتمد: يحسب كاشف حواف كاني تدرجات الصورة المكانية باستخدام مؤثرات سوبل، ويطبق قمع غير القمم العظمى على امتداد متجه التدرج، ويستخدم عتبات ثنائية للربط.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_53",
    "titleEn": "[MEDIUM] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Analysis 53",
    "titleAr": "[مستوى متوسط] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - تحليل 53",
    "questionEn": "[Question 53] When analyzing hardware-software integration and operational control for Inertial Measurement Units (IMU) & Complementary Filter Fusion, identify the correct engineering relationship:",
    "questionAr": "[السؤال 53] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "correctAnswerAr": "يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "explanationEn": "Engineering Analysis: A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "explanationAr": "التحليل الهندسي المعتمد: يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_54",
    "titleEn": "[MEDIUM] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Analysis 54",
    "titleAr": "[مستوى متوسط] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - تحليل 54",
    "questionEn": "[Question 54] When analyzing hardware-software integration and operational control for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry, identify the correct engineering relationship:",
    "questionAr": "[السؤال 54] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR)."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR).",
    "correctAnswerAr": "يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR).",
    "explanationEn": "Engineering Analysis: X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR).",
    "explanationAr": "التحليل الهندسي المعتمد: يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_55",
    "titleEn": "[MEDIUM] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Analysis 55",
    "titleAr": "[مستوى متوسط] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - تحليل 55",
    "questionEn": "[Question 55] When analyzing hardware-software integration and operational control for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution, identify the correct engineering relationship:",
    "questionAr": "[السؤال 55] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
    "correctAnswerAr": "تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
    "explanationEn": "Engineering Analysis: A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_56",
    "titleEn": "[MEDIUM] OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform - Analysis 56",
    "titleAr": "[مستوى متوسط] استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف - تحليل 56",
    "questionEn": "[Question 56] When analyzing hardware-software integration and operational control for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform, identify the correct engineering relationship:",
    "questionAr": "[السؤال 56] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "The Canny edge detector computes spatial image gradients using Sobel operators, applies non-maximum suppression along gradient vectors, and uses dual-threshold hysteresis for edge continuity.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "يحسب كاشف حواف كاني تدرجات الصورة المكانية باستخدام مؤثرات سوبل، ويطبق قمع غير القمم العظمى على امتداد متجه التدرج، ويستخدم عتبات ثنائية للربط.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The Canny edge detector computes spatial image gradients using Sobel operators, applies non-maximum suppression along gradient vectors, and uses dual-threshold hysteresis for edge continuity.",
    "correctAnswerAr": "يحسب كاشف حواف كاني تدرجات الصورة المكانية باستخدام مؤثرات سوبل، ويطبق قمع غير القمم العظمى على امتداد متجه التدرج، ويستخدم عتبات ثنائية للربط.",
    "explanationEn": "Engineering Analysis: The Canny edge detector computes spatial image gradients using Sobel operators, applies non-maximum suppression along gradient vectors, and uses dual-threshold hysteresis for edge continuity.",
    "explanationAr": "التحليل الهندسي المعتمد: يحسب كاشف حواف كاني تدرجات الصورة المكانية باستخدام مؤثرات سوبل، ويطبق قمع غير القمم العظمى على امتداد متجه التدرج، ويستخدم عتبات ثنائية للربط.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_57",
    "titleEn": "[MEDIUM] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Analysis 57",
    "titleAr": "[مستوى متوسط] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - تحليل 57",
    "questionEn": "[Question 57] When analyzing hardware-software integration and operational control for Inertial Measurement Units (IMU) & Complementary Filter Fusion, identify the correct engineering relationship:",
    "questionAr": "[السؤال 57] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "correctAnswerAr": "يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "explanationEn": "Engineering Analysis: A complementary filter fuses high-pass filtered gyro integration (accurate in short term) with low-pass filtered gravity accelerometer angles (stable long term): $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "explanationAr": "التحليل الهندسي المعتمد: يدمج المرشح التكاملي بين تكامل الجيروسكوب بعد ترشيح الترددات العالية وقراءات مقياس التسارع بعد ترشيح الترددات المنخفضة: $\\theta = \\alpha(\\theta + \\omega \\Delta t) + (1-\\alpha)\\theta_{acc}$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_58",
    "titleEn": "[MEDIUM] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Analysis 58",
    "titleAr": "[مستوى متوسط] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - تحليل 58",
    "questionEn": "[Question 58] When analyzing hardware-software integration and operational control for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry, identify the correct engineering relationship:",
    "questionAr": "[السؤال 58] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR)."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR).",
    "correctAnswerAr": "يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR).",
    "explanationEn": "Engineering Analysis: X4 quadrature decoding counts every rising and falling edge of both channels A and B, quadrupling the native disc resolution from $N$ lines to $4N$ counts per revolution (CPR).",
    "explanationAr": "التحليل الهندسي المعتمد: يعد فك التشفير الرباعي X4 كل حافة صاعدة وهابطة في القناتين A وB، مما يضاعف دقة القرص الأصلية أربع مرات من $N$ خط إلى $4N$ نبضة لكل دورة (CPR).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch2_med_59",
    "titleEn": "[MEDIUM] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Analysis 59",
    "titleAr": "[مستوى متوسط] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - تحليل 59",
    "questionEn": "[Question 59] When analyzing hardware-software integration and operational control for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution, identify the correct engineering relationship:",
    "questionAr": "[السؤال 59] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
    "correctAnswerAr": "تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
    "explanationEn": "Engineering Analysis: A rotating mirror spins the laser diode at 5 to 15 Hz, generating a 360-degree polar scan of distance measurements and reflection intensities in an (angle, range) coordinate array.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مرآة دوارة بتدوير صمام الليزر بتردد ٥ إلى ١٥ هرتز، مولدة مسحاً قطبياً شاملاً بـ ٣٦٠ درجة لقياسات المسافة وشدة الانعكاس في مصفوفة (الزاوية، المدى).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  }
],
  hots: [
  {
    "id": "th_robotics_ch2_hots_1",
    "titleEn": "[HOTS] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Advanced Synthesis 1",
    "titleAr": "[تفكير عليا] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - تركيب متقدم 1",
    "questionEn": "[Question 1 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Inertial Measurement Units (IMU) & Complementary Filter Fusion. Determine the mathematically validated result:",
    "questionAr": "[السؤال 1 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$."
    ],
    "optionsAr": [
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "correctAnswerAr": "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "explanationEn": "Detailed Quantitative Solution: With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_2",
    "titleEn": "[HOTS] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Advanced Synthesis 2",
    "titleAr": "[تفكير عليا] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - تركيب متقدم 2",
    "questionEn": "[Question 2 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry. Determine the mathematically validated result:",
    "questionAr": "[السؤال 2 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only."
    ],
    "optionsAr": [
      "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "correctAnswerAr": "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_3",
    "titleEn": "[HOTS] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Advanced Synthesis 3",
    "titleAr": "[تفكير عليا] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - تركيب متقدم 3",
    "questionEn": "[Question 3 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution. Determine the mathematically validated result:",
    "questionAr": "[السؤال 3 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
    "correctAnswerAr": "إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_4",
    "titleEn": "[HOTS] OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform - Advanced Synthesis 4",
    "titleAr": "[تفكير عليا] استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف - تركيب متقدم 4",
    "questionEn": "[Question 4 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform. Determine the mathematically validated result:",
    "questionAr": "[السؤال 4 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices."
    ],
    "optionsAr": [
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
    "correctAnswerAr": "في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
    "explanationEn": "Detailed Quantitative Solution: In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_5",
    "titleEn": "[HOTS] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Advanced Synthesis 5",
    "titleAr": "[تفكير عليا] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - تركيب متقدم 5",
    "questionEn": "[Question 5 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Inertial Measurement Units (IMU) & Complementary Filter Fusion. Determine the mathematically validated result:",
    "questionAr": "[السؤال 5 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "correctAnswerAr": "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "explanationEn": "Detailed Quantitative Solution: With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_6",
    "titleEn": "[HOTS] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Advanced Synthesis 6",
    "titleAr": "[تفكير عليا] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - تركيب متقدم 6",
    "questionEn": "[Question 6 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry. Determine the mathematically validated result:",
    "questionAr": "[السؤال 6 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "correctAnswerAr": "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_7",
    "titleEn": "[HOTS] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Advanced Synthesis 7",
    "titleAr": "[تفكير عليا] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - تركيب متقدم 7",
    "questionEn": "[Question 7 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution. Determine the mathematically validated result:",
    "questionAr": "[السؤال 7 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light."
    ],
    "optionsAr": [
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
    "correctAnswerAr": "إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_8",
    "titleEn": "[HOTS] OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform - Advanced Synthesis 8",
    "titleAr": "[تفكير عليا] استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف - تركيب متقدم 8",
    "questionEn": "[Question 8 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform. Determine the mathematically validated result:",
    "questionAr": "[السؤال 8 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages."
    ],
    "optionsAr": [
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
    "correctAnswerAr": "في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
    "explanationEn": "Detailed Quantitative Solution: In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_9",
    "titleEn": "[HOTS] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Advanced Synthesis 9",
    "titleAr": "[تفكير عليا] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - تركيب متقدم 9",
    "questionEn": "[Question 9 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Inertial Measurement Units (IMU) & Complementary Filter Fusion. Determine the mathematically validated result:",
    "questionAr": "[السؤال 9 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "correctAnswerAr": "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "explanationEn": "Detailed Quantitative Solution: With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_10",
    "titleEn": "[HOTS] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Advanced Synthesis 10",
    "titleAr": "[تفكير عليا] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - تركيب متقدم 10",
    "questionEn": "[Question 10 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry. Determine the mathematically validated result:",
    "questionAr": "[السؤال 10 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "correctAnswerAr": "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_11",
    "titleEn": "[HOTS] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Advanced Synthesis 11",
    "titleAr": "[تفكير عليا] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - تركيب متقدم 11",
    "questionEn": "[Question 11 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution. Determine the mathematically validated result:",
    "questionAr": "[السؤال 11 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction."
    ],
    "optionsAr": [
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
    "correctAnswerAr": "إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_12",
    "titleEn": "[HOTS] OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform - Advanced Synthesis 12",
    "titleAr": "[تفكير عليا] استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف - تركيب متقدم 12",
    "questionEn": "[Question 12 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform. Determine the mathematically validated result:",
    "questionAr": "[السؤال 12 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
    "correctAnswerAr": "في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
    "explanationEn": "Detailed Quantitative Solution: In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_13",
    "titleEn": "[HOTS] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Advanced Synthesis 13",
    "titleAr": "[تفكير عليا] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - تركيب متقدم 13",
    "questionEn": "[Question 13 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Inertial Measurement Units (IMU) & Complementary Filter Fusion. Determine the mathematically validated result:",
    "questionAr": "[السؤال 13 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$."
    ],
    "optionsAr": [
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "correctAnswerAr": "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "explanationEn": "Detailed Quantitative Solution: With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_14",
    "titleEn": "[HOTS] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Advanced Synthesis 14",
    "titleAr": "[تفكير عليا] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - تركيب متقدم 14",
    "questionEn": "[Question 14 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry. Determine the mathematically validated result:",
    "questionAr": "[السؤال 14 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends."
    ],
    "optionsAr": [
      "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "correctAnswerAr": "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_15",
    "titleEn": "[HOTS] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Advanced Synthesis 15",
    "titleAr": "[تفكير عليا] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - تركيب متقدم 15",
    "questionEn": "[Question 15 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution. Determine the mathematically validated result:",
    "questionAr": "[السؤال 15 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
    "correctAnswerAr": "إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_16",
    "titleEn": "[HOTS] OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform - Advanced Synthesis 16",
    "titleAr": "[تفكير عليا] استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف - تركيب متقدم 16",
    "questionEn": "[Question 16 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform. Determine the mathematically validated result:",
    "questionAr": "[السؤال 16 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion."
    ],
    "optionsAr": [
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
    "correctAnswerAr": "في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
    "explanationEn": "Detailed Quantitative Solution: In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_17",
    "titleEn": "[HOTS] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Advanced Synthesis 17",
    "titleAr": "[تفكير عليا] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - تركيب متقدم 17",
    "questionEn": "[Question 17 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Inertial Measurement Units (IMU) & Complementary Filter Fusion. Determine the mathematically validated result:",
    "questionAr": "[السؤال 17 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$."
    ],
    "optionsAr": [
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "correctAnswerAr": "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "explanationEn": "Detailed Quantitative Solution: With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_18",
    "titleEn": "[HOTS] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Advanced Synthesis 18",
    "titleAr": "[تفكير عليا] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - تركيب متقدم 18",
    "questionEn": "[Question 18 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry. Determine the mathematically validated result:",
    "questionAr": "[السؤال 18 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "correctAnswerAr": "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_19",
    "titleEn": "[HOTS] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Advanced Synthesis 19",
    "titleAr": "[تفكير عليا] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - تركيب متقدم 19",
    "questionEn": "[Question 19 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution. Determine the mathematically validated result:",
    "questionAr": "[السؤال 19 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices."
    ],
    "optionsAr": [
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
    "correctAnswerAr": "إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_20",
    "titleEn": "[HOTS] OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform - Advanced Synthesis 20",
    "titleAr": "[تفكير عليا] استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف - تركيب متقدم 20",
    "questionEn": "[Question 20 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform. Determine the mathematically validated result:",
    "questionAr": "[السؤال 20 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
    "correctAnswerAr": "في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
    "explanationEn": "Detailed Quantitative Solution: In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_21",
    "titleEn": "[HOTS] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Advanced Synthesis 21",
    "titleAr": "[تفكير عليا] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - تركيب متقدم 21",
    "questionEn": "[Question 21 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Inertial Measurement Units (IMU) & Complementary Filter Fusion. Determine the mathematically validated result:",
    "questionAr": "[السؤال 21 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "correctAnswerAr": "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "explanationEn": "Detailed Quantitative Solution: With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_22",
    "titleEn": "[HOTS] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Advanced Synthesis 22",
    "titleAr": "[تفكير عليا] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - تركيب متقدم 22",
    "questionEn": "[Question 22 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry. Determine the mathematically validated result:",
    "questionAr": "[السؤال 22 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light."
    ],
    "optionsAr": [
      "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "correctAnswerAr": "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_23",
    "titleEn": "[HOTS] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Advanced Synthesis 23",
    "titleAr": "[تفكير عليا] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - تركيب متقدم 23",
    "questionEn": "[Question 23 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution. Determine the mathematically validated result:",
    "questionAr": "[السؤال 23 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages."
    ],
    "optionsAr": [
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
    "correctAnswerAr": "إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_24",
    "titleEn": "[HOTS] OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform - Advanced Synthesis 24",
    "titleAr": "[تفكير عليا] استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف - تركيب متقدم 24",
    "questionEn": "[Question 24 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform. Determine the mathematically validated result:",
    "questionAr": "[السؤال 24 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
    "correctAnswerAr": "في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
    "explanationEn": "Detailed Quantitative Solution: In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_25",
    "titleEn": "[HOTS] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Advanced Synthesis 25",
    "titleAr": "[تفكير عليا] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - تركيب متقدم 25",
    "questionEn": "[Question 25 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Inertial Measurement Units (IMU) & Complementary Filter Fusion. Determine the mathematically validated result:",
    "questionAr": "[السؤال 25 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "correctAnswerAr": "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "explanationEn": "Detailed Quantitative Solution: With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_26",
    "titleEn": "[HOTS] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Advanced Synthesis 26",
    "titleAr": "[تفكير عليا] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - تركيب متقدم 26",
    "questionEn": "[Question 26 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry. Determine the mathematically validated result:",
    "questionAr": "[السؤال 26 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction."
    ],
    "optionsAr": [
      "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "correctAnswerAr": "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_27",
    "titleEn": "[HOTS] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Advanced Synthesis 27",
    "titleAr": "[تفكير عليا] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - تركيب متقدم 27",
    "questionEn": "[Question 27 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution. Determine the mathematically validated result:",
    "questionAr": "[السؤال 27 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
    "correctAnswerAr": "إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_28",
    "titleEn": "[HOTS] OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform - Advanced Synthesis 28",
    "titleAr": "[تفكير عليا] استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف - تركيب متقدم 28",
    "questionEn": "[Question 28 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform. Determine the mathematically validated result:",
    "questionAr": "[السؤال 28 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting."
    ],
    "optionsAr": [
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
    "correctAnswerAr": "في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
    "explanationEn": "Detailed Quantitative Solution: In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_29",
    "titleEn": "[HOTS] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Advanced Synthesis 29",
    "titleAr": "[تفكير عليا] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - تركيب متقدم 29",
    "questionEn": "[Question 29 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Inertial Measurement Units (IMU) & Complementary Filter Fusion. Determine the mathematically validated result:",
    "questionAr": "[السؤال 29 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$."
    ],
    "optionsAr": [
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "correctAnswerAr": "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "explanationEn": "Detailed Quantitative Solution: With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_30",
    "titleEn": "[HOTS] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Advanced Synthesis 30",
    "titleAr": "[تفكير عليا] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - تركيب متقدم 30",
    "questionEn": "[Question 30 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry. Determine the mathematically validated result:",
    "questionAr": "[السؤال 30 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "correctAnswerAr": "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_31",
    "titleEn": "[HOTS] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Advanced Synthesis 31",
    "titleAr": "[تفكير عليا] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - تركيب متقدم 31",
    "questionEn": "[Question 31 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution. Determine the mathematically validated result:",
    "questionAr": "[السؤال 31 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion."
    ],
    "optionsAr": [
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
    "correctAnswerAr": "إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_32",
    "titleEn": "[HOTS] OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform - Advanced Synthesis 32",
    "titleAr": "[تفكير عليا] استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف - تركيب متقدم 32",
    "questionEn": "[Question 32 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform. Determine the mathematically validated result:",
    "questionAr": "[السؤال 32 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only."
    ],
    "optionsAr": [
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
    "correctAnswerAr": "في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
    "explanationEn": "Detailed Quantitative Solution: In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_33",
    "titleEn": "[HOTS] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Advanced Synthesis 33",
    "titleAr": "[تفكير عليا] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - تركيب متقدم 33",
    "questionEn": "[Question 33 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Inertial Measurement Units (IMU) & Complementary Filter Fusion. Determine the mathematically validated result:",
    "questionAr": "[السؤال 33 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "correctAnswerAr": "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "explanationEn": "Detailed Quantitative Solution: With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_34",
    "titleEn": "[HOTS] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Advanced Synthesis 34",
    "titleAr": "[تفكير عليا] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - تركيب متقدم 34",
    "questionEn": "[Question 34 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry. Determine the mathematically validated result:",
    "questionAr": "[السؤال 34 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices."
    ],
    "optionsAr": [
      "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "correctAnswerAr": "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_35",
    "titleEn": "[HOTS] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Advanced Synthesis 35",
    "titleAr": "[تفكير عليا] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - تركيب متقدم 35",
    "questionEn": "[Question 35 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution. Determine the mathematically validated result:",
    "questionAr": "[السؤال 35 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
    "correctAnswerAr": "إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_36",
    "titleEn": "[HOTS] OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform - Advanced Synthesis 36",
    "titleAr": "[تفكير عليا] استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف - تركيب متقدم 36",
    "questionEn": "[Question 36 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform. Determine the mathematically validated result:",
    "questionAr": "[السؤال 36 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
    "correctAnswerAr": "في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
    "explanationEn": "Detailed Quantitative Solution: In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_37",
    "titleEn": "[HOTS] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Advanced Synthesis 37",
    "titleAr": "[تفكير عليا] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - تركيب متقدم 37",
    "questionEn": "[Question 37 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Inertial Measurement Units (IMU) & Complementary Filter Fusion. Determine the mathematically validated result:",
    "questionAr": "[السؤال 37 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$."
    ],
    "optionsAr": [
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "correctAnswerAr": "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "explanationEn": "Detailed Quantitative Solution: With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_38",
    "titleEn": "[HOTS] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Advanced Synthesis 38",
    "titleAr": "[تفكير عليا] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - تركيب متقدم 38",
    "questionEn": "[Question 38 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry. Determine the mathematically validated result:",
    "questionAr": "[السؤال 38 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages."
    ],
    "optionsAr": [
      "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "correctAnswerAr": "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_39",
    "titleEn": "[HOTS] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Advanced Synthesis 39",
    "titleAr": "[تفكير عليا] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - تركيب متقدم 39",
    "questionEn": "[Question 39 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution. Determine the mathematically validated result:",
    "questionAr": "[السؤال 39 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
    "correctAnswerAr": "إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_40",
    "titleEn": "[HOTS] OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform - Advanced Synthesis 40",
    "titleAr": "[تفكير عليا] استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف - تركيب متقدم 40",
    "questionEn": "[Question 40 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform. Determine the mathematically validated result:",
    "questionAr": "[السؤال 40 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
    "correctAnswerAr": "في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
    "explanationEn": "Detailed Quantitative Solution: In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_41",
    "titleEn": "[HOTS] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Advanced Synthesis 41",
    "titleAr": "[تفكير عليا] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - تركيب متقدم 41",
    "questionEn": "[Question 41 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Inertial Measurement Units (IMU) & Complementary Filter Fusion. Determine the mathematically validated result:",
    "questionAr": "[السؤال 41 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$."
    ],
    "optionsAr": [
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "correctAnswerAr": "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "explanationEn": "Detailed Quantitative Solution: With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_42",
    "titleEn": "[HOTS] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Advanced Synthesis 42",
    "titleAr": "[تفكير عليا] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - تركيب متقدم 42",
    "questionEn": "[Question 42 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry. Determine the mathematically validated result:",
    "questionAr": "[السؤال 42 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "correctAnswerAr": "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_43",
    "titleEn": "[HOTS] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Advanced Synthesis 43",
    "titleAr": "[تفكير عليا] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - تركيب متقدم 43",
    "questionEn": "[Question 43 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution. Determine the mathematically validated result:",
    "questionAr": "[السؤال 43 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting."
    ],
    "optionsAr": [
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
    "correctAnswerAr": "إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_44",
    "titleEn": "[HOTS] OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform - Advanced Synthesis 44",
    "titleAr": "[تفكير عليا] استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف - تركيب متقدم 44",
    "questionEn": "[Question 44 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform. Determine the mathematically validated result:",
    "questionAr": "[السؤال 44 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends."
    ],
    "optionsAr": [
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
    "correctAnswerAr": "في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
    "explanationEn": "Detailed Quantitative Solution: In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_45",
    "titleEn": "[HOTS] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Advanced Synthesis 45",
    "titleAr": "[تفكير عليا] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - تركيب متقدم 45",
    "questionEn": "[Question 45 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Inertial Measurement Units (IMU) & Complementary Filter Fusion. Determine the mathematically validated result:",
    "questionAr": "[السؤال 45 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "correctAnswerAr": "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "explanationEn": "Detailed Quantitative Solution: With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_46",
    "titleEn": "[HOTS] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Advanced Synthesis 46",
    "titleAr": "[تفكير عليا] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - تركيب متقدم 46",
    "questionEn": "[Question 46 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry. Determine the mathematically validated result:",
    "questionAr": "[السؤال 46 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion."
    ],
    "optionsAr": [
      "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "correctAnswerAr": "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_47",
    "titleEn": "[HOTS] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Advanced Synthesis 47",
    "titleAr": "[تفكير عليا] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - تركيب متقدم 47",
    "questionEn": "[Question 47 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution. Determine the mathematically validated result:",
    "questionAr": "[السؤال 47 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only."
    ],
    "optionsAr": [
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
    "correctAnswerAr": "إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_48",
    "titleEn": "[HOTS] OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform - Advanced Synthesis 48",
    "titleAr": "[تفكير عليا] استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف - تركيب متقدم 48",
    "questionEn": "[Question 48 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform. Determine the mathematically validated result:",
    "questionAr": "[السؤال 48 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
    "correctAnswerAr": "في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
    "explanationEn": "Detailed Quantitative Solution: In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_49",
    "titleEn": "[HOTS] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Advanced Synthesis 49",
    "titleAr": "[تفكير عليا] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - تركيب متقدم 49",
    "questionEn": "[Question 49 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Inertial Measurement Units (IMU) & Complementary Filter Fusion. Determine the mathematically validated result:",
    "questionAr": "[السؤال 49 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$."
    ],
    "optionsAr": [
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "correctAnswerAr": "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "explanationEn": "Detailed Quantitative Solution: With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_50",
    "titleEn": "[HOTS] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Advanced Synthesis 50",
    "titleAr": "[تفكير عليا] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - تركيب متقدم 50",
    "questionEn": "[Question 50 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry. Determine the mathematically validated result:",
    "questionAr": "[السؤال 50 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "correctAnswerAr": "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_51",
    "titleEn": "[HOTS] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Advanced Synthesis 51",
    "titleAr": "[تفكير عليا] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - تركيب متقدم 51",
    "questionEn": "[Question 51 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution. Determine the mathematically validated result:",
    "questionAr": "[السؤال 51 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
    "correctAnswerAr": "إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_52",
    "titleEn": "[HOTS] OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform - Advanced Synthesis 52",
    "titleAr": "[تفكير عليا] استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف - تركيب متقدم 52",
    "questionEn": "[Question 52 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform. Determine the mathematically validated result:",
    "questionAr": "[السؤال 52 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light."
    ],
    "optionsAr": [
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
    "correctAnswerAr": "في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
    "explanationEn": "Detailed Quantitative Solution: In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_53",
    "titleEn": "[HOTS] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Advanced Synthesis 53",
    "titleAr": "[تفكير عليا] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - تركيب متقدم 53",
    "questionEn": "[Question 53 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Inertial Measurement Units (IMU) & Complementary Filter Fusion. Determine the mathematically validated result:",
    "questionAr": "[السؤال 53 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$."
    ],
    "optionsAr": [
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "correctAnswerAr": "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "explanationEn": "Detailed Quantitative Solution: With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_54",
    "titleEn": "[HOTS] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Advanced Synthesis 54",
    "titleAr": "[تفكير عليا] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - تركيب متقدم 54",
    "questionEn": "[Question 54 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry. Determine the mathematically validated result:",
    "questionAr": "[السؤال 54 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "correctAnswerAr": "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_55",
    "titleEn": "[HOTS] Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution - Advanced Synthesis 55",
    "titleAr": "[تفكير عليا] مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى - تركيب متقدم 55",
    "questionEn": "[Question 55 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution. Determine the mathematically validated result:",
    "questionAr": "[السؤال 55 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
    "correctAnswerAr": "إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_56",
    "titleEn": "[HOTS] OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform - Advanced Synthesis 56",
    "titleAr": "[تفكير عليا] استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف - تركيب متقدم 56",
    "questionEn": "[Question 56 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform. Determine the mathematically validated result:",
    "questionAr": "[السؤال 56 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction."
    ],
    "optionsAr": [
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
    "correctAnswerAr": "في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
    "explanationEn": "Detailed Quantitative Solution: In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_57",
    "titleEn": "[HOTS] Inertial Measurement Units (IMU) & Complementary Filter Fusion - Advanced Synthesis 57",
    "titleAr": "[تفكير عليا] وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي - تركيب متقدم 57",
    "questionEn": "[Question 57 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Inertial Measurement Units (IMU) & Complementary Filter Fusion. Determine the mathematically validated result:",
    "questionAr": "[السؤال 57 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "correctAnswerAr": "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "explanationEn": "Detailed Quantitative Solution: With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_hots_58",
    "titleEn": "[HOTS] Optical Quadrature Encoders, X4 Decoding & Wheel Odometry - Advanced Synthesis 58",
    "titleAr": "[تفكير عليا] المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات - تركيب متقدم 58",
    "questionEn": "[Question 58 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry. Determine the mathematically validated result:",
    "questionAr": "[السؤال 58 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting."
    ],
    "optionsAr": [
      "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "correctAnswerAr": "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  }
]
};
