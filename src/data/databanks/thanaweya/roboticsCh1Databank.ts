import type { QuestionBank } from '../../../types/curriculum';

export const roboticsCh1Databank: QuestionBank = {
  easy: [
  {
    "id": "th_robotics_ch1_easy_1",
    "titleEn": "[EASY] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Review 1",
    "titleAr": "[مستوى أساسي] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - سؤال 1",
    "questionEn": "[Question 1] In the context of Egyptian STEM robotics and mechatronics regarding Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 1] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
    "correctAnswerAr": "يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
    "explanationEn": "Correct Principle: The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_2",
    "titleEn": "[EASY] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Review 2",
    "titleAr": "[مستوى أساسي] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - سؤال 2",
    "questionEn": "[Question 2] In the context of Egyptian STEM robotics and mechatronics regarding Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 2] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
    "correctAnswerAr": "تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
    "explanationEn": "Correct Principle: Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
    "explanationAr": "المبدأ العلمي الصحيح: تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_3",
    "titleEn": "[EASY] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Review 3",
    "titleAr": "[مستوى أساسي] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - سؤال 3",
    "questionEn": "[Question 3] In the context of Egyptian STEM robotics and mechatronics regarding Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 3] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Brushless DC (BLDC) motors replace mechanical brushes with electronic commutation using Hall-effect sensors or back-EMF sensing to energize stator windings synchronously with rotor position.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "تستبدل المحركات عديمة المسفرات (BLDC) الفرش الميكانيكية بالتبديل الإلكتروني باستخدام حساسات هول أو قياس القوة الدافعة الكهربية العكسية لتغذية ملفات العضو الثابت بالتزامن مع حركة العضو الدوار.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Brushless DC (BLDC) motors replace mechanical brushes with electronic commutation using Hall-effect sensors or back-EMF sensing to energize stator windings synchronously with rotor position.",
    "correctAnswerAr": "تستبدل المحركات عديمة المسفرات (BLDC) الفرش الميكانيكية بالتبديل الإلكتروني باستخدام حساسات هول أو قياس القوة الدافعة الكهربية العكسية لتغذية ملفات العضو الثابت بالتزامن مع حركة العضو الدوار.",
    "explanationEn": "Correct Principle: Brushless DC (BLDC) motors replace mechanical brushes with electronic commutation using Hall-effect sensors or back-EMF sensing to energize stator windings synchronously with rotor position.",
    "explanationAr": "المبدأ العلمي الصحيح: تستبدل المحركات عديمة المسفرات (BLDC) الفرش الميكانيكية بالتبديل الإلكتروني باستخدام حساسات هول أو قياس القوة الدافعة الكهربية العكسية لتغذية ملفات العضو الثابت بالتزامن مع حركة العضو الدوار.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_4",
    "titleEn": "[EASY] H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection - Review 4",
    "titleAr": "[مستوى أساسي] بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن - سؤال 4",
    "questionEn": "[Question 4] In the context of Egyptian STEM robotics and mechatronics regarding H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 4] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "An H-bridge motor driver employs 4 semiconductor switches (MOSFETs/IGBTs) to control DC motor rotational direction and speed via Pulse Width Modulation (PWM)."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "تستخدم قنطرة H-Bridge أربعة مفاتيح أشباه موصلات (MOSFETs/IGBTs) للتحكم في اتجاه وسرعة دوران محركات التيار المستمر بواسطة تضمين عرض النبضة (PWM)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "An H-bridge motor driver employs 4 semiconductor switches (MOSFETs/IGBTs) to control DC motor rotational direction and speed via Pulse Width Modulation (PWM).",
    "correctAnswerAr": "تستخدم قنطرة H-Bridge أربعة مفاتيح أشباه موصلات (MOSFETs/IGBTs) للتحكم في اتجاه وسرعة دوران محركات التيار المستمر بواسطة تضمين عرض النبضة (PWM).",
    "explanationEn": "Correct Principle: An H-bridge motor driver employs 4 semiconductor switches (MOSFETs/IGBTs) to control DC motor rotational direction and speed via Pulse Width Modulation (PWM).",
    "explanationAr": "المبدأ العلمي الصحيح: تستخدم قنطرة H-Bridge أربعة مفاتيح أشباه موصلات (MOSFETs/IGBTs) للتحكم في اتجاه وسرعة دوران محركات التيار المستمر بواسطة تضمين عرض النبضة (PWM).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_5",
    "titleEn": "[EASY] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Review 5",
    "titleAr": "[مستوى أساسي] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - سؤال 5",
    "questionEn": "[Question 5] In the context of Egyptian STEM robotics and mechatronics regarding Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 5] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
    "correctAnswerAr": "يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
    "explanationEn": "Correct Principle: The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_6",
    "titleEn": "[EASY] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Review 6",
    "titleAr": "[مستوى أساسي] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - سؤال 6",
    "questionEn": "[Question 6] In the context of Egyptian STEM robotics and mechatronics regarding Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 6] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
    "correctAnswerAr": "تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
    "explanationEn": "Correct Principle: Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
    "explanationAr": "المبدأ العلمي الصحيح: تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_7",
    "titleEn": "[EASY] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Review 7",
    "titleAr": "[مستوى أساسي] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - سؤال 7",
    "questionEn": "[Question 7] In the context of Egyptian STEM robotics and mechatronics regarding Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 7] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "Brushless DC (BLDC) motors replace mechanical brushes with electronic commutation using Hall-effect sensors or back-EMF sensing to energize stator windings synchronously with rotor position.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "تستبدل المحركات عديمة المسفرات (BLDC) الفرش الميكانيكية بالتبديل الإلكتروني باستخدام حساسات هول أو قياس القوة الدافعة الكهربية العكسية لتغذية ملفات العضو الثابت بالتزامن مع حركة العضو الدوار.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Brushless DC (BLDC) motors replace mechanical brushes with electronic commutation using Hall-effect sensors or back-EMF sensing to energize stator windings synchronously with rotor position.",
    "correctAnswerAr": "تستبدل المحركات عديمة المسفرات (BLDC) الفرش الميكانيكية بالتبديل الإلكتروني باستخدام حساسات هول أو قياس القوة الدافعة الكهربية العكسية لتغذية ملفات العضو الثابت بالتزامن مع حركة العضو الدوار.",
    "explanationEn": "Correct Principle: Brushless DC (BLDC) motors replace mechanical brushes with electronic commutation using Hall-effect sensors or back-EMF sensing to energize stator windings synchronously with rotor position.",
    "explanationAr": "المبدأ العلمي الصحيح: تستبدل المحركات عديمة المسفرات (BLDC) الفرش الميكانيكية بالتبديل الإلكتروني باستخدام حساسات هول أو قياس القوة الدافعة الكهربية العكسية لتغذية ملفات العضو الثابت بالتزامن مع حركة العضو الدوار.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_8",
    "titleEn": "[EASY] H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection - Review 8",
    "titleAr": "[مستوى أساسي] بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن - سؤال 8",
    "questionEn": "[Question 8] In the context of Egyptian STEM robotics and mechatronics regarding H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 8] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "An H-bridge motor driver employs 4 semiconductor switches (MOSFETs/IGBTs) to control DC motor rotational direction and speed via Pulse Width Modulation (PWM)."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تستخدم قنطرة H-Bridge أربعة مفاتيح أشباه موصلات (MOSFETs/IGBTs) للتحكم في اتجاه وسرعة دوران محركات التيار المستمر بواسطة تضمين عرض النبضة (PWM)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "An H-bridge motor driver employs 4 semiconductor switches (MOSFETs/IGBTs) to control DC motor rotational direction and speed via Pulse Width Modulation (PWM).",
    "correctAnswerAr": "تستخدم قنطرة H-Bridge أربعة مفاتيح أشباه موصلات (MOSFETs/IGBTs) للتحكم في اتجاه وسرعة دوران محركات التيار المستمر بواسطة تضمين عرض النبضة (PWM).",
    "explanationEn": "Correct Principle: An H-bridge motor driver employs 4 semiconductor switches (MOSFETs/IGBTs) to control DC motor rotational direction and speed via Pulse Width Modulation (PWM).",
    "explanationAr": "المبدأ العلمي الصحيح: تستخدم قنطرة H-Bridge أربعة مفاتيح أشباه موصلات (MOSFETs/IGBTs) للتحكم في اتجاه وسرعة دوران محركات التيار المستمر بواسطة تضمين عرض النبضة (PWM).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_9",
    "titleEn": "[EASY] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Review 9",
    "titleAr": "[مستوى أساسي] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - سؤال 9",
    "questionEn": "[Question 9] In the context of Egyptian STEM robotics and mechatronics regarding Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 9] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
    "correctAnswerAr": "يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
    "explanationEn": "Correct Principle: The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_10",
    "titleEn": "[EASY] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Review 10",
    "titleAr": "[مستوى أساسي] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - سؤال 10",
    "questionEn": "[Question 10] In the context of Egyptian STEM robotics and mechatronics regarding Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 10] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
    "correctAnswerAr": "تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
    "explanationEn": "Correct Principle: Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
    "explanationAr": "المبدأ العلمي الصحيح: تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_11",
    "titleEn": "[EASY] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Review 11",
    "titleAr": "[مستوى أساسي] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - سؤال 11",
    "questionEn": "[Question 11] In the context of Egyptian STEM robotics and mechatronics regarding Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 11] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Brushless DC (BLDC) motors replace mechanical brushes with electronic commutation using Hall-effect sensors or back-EMF sensing to energize stator windings synchronously with rotor position.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تستبدل المحركات عديمة المسفرات (BLDC) الفرش الميكانيكية بالتبديل الإلكتروني باستخدام حساسات هول أو قياس القوة الدافعة الكهربية العكسية لتغذية ملفات العضو الثابت بالتزامن مع حركة العضو الدوار.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Brushless DC (BLDC) motors replace mechanical brushes with electronic commutation using Hall-effect sensors or back-EMF sensing to energize stator windings synchronously with rotor position.",
    "correctAnswerAr": "تستبدل المحركات عديمة المسفرات (BLDC) الفرش الميكانيكية بالتبديل الإلكتروني باستخدام حساسات هول أو قياس القوة الدافعة الكهربية العكسية لتغذية ملفات العضو الثابت بالتزامن مع حركة العضو الدوار.",
    "explanationEn": "Correct Principle: Brushless DC (BLDC) motors replace mechanical brushes with electronic commutation using Hall-effect sensors or back-EMF sensing to energize stator windings synchronously with rotor position.",
    "explanationAr": "المبدأ العلمي الصحيح: تستبدل المحركات عديمة المسفرات (BLDC) الفرش الميكانيكية بالتبديل الإلكتروني باستخدام حساسات هول أو قياس القوة الدافعة الكهربية العكسية لتغذية ملفات العضو الثابت بالتزامن مع حركة العضو الدوار.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_12",
    "titleEn": "[EASY] H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection - Review 12",
    "titleAr": "[مستوى أساسي] بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن - سؤال 12",
    "questionEn": "[Question 12] In the context of Egyptian STEM robotics and mechatronics regarding H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 12] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "An H-bridge motor driver employs 4 semiconductor switches (MOSFETs/IGBTs) to control DC motor rotational direction and speed via Pulse Width Modulation (PWM)."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "تستخدم قنطرة H-Bridge أربعة مفاتيح أشباه موصلات (MOSFETs/IGBTs) للتحكم في اتجاه وسرعة دوران محركات التيار المستمر بواسطة تضمين عرض النبضة (PWM)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "An H-bridge motor driver employs 4 semiconductor switches (MOSFETs/IGBTs) to control DC motor rotational direction and speed via Pulse Width Modulation (PWM).",
    "correctAnswerAr": "تستخدم قنطرة H-Bridge أربعة مفاتيح أشباه موصلات (MOSFETs/IGBTs) للتحكم في اتجاه وسرعة دوران محركات التيار المستمر بواسطة تضمين عرض النبضة (PWM).",
    "explanationEn": "Correct Principle: An H-bridge motor driver employs 4 semiconductor switches (MOSFETs/IGBTs) to control DC motor rotational direction and speed via Pulse Width Modulation (PWM).",
    "explanationAr": "المبدأ العلمي الصحيح: تستخدم قنطرة H-Bridge أربعة مفاتيح أشباه موصلات (MOSFETs/IGBTs) للتحكم في اتجاه وسرعة دوران محركات التيار المستمر بواسطة تضمين عرض النبضة (PWM).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_13",
    "titleEn": "[EASY] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Review 13",
    "titleAr": "[مستوى أساسي] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - سؤال 13",
    "questionEn": "[Question 13] In the context of Egyptian STEM robotics and mechatronics regarding Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 13] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
    "correctAnswerAr": "يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
    "explanationEn": "Correct Principle: The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_14",
    "titleEn": "[EASY] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Review 14",
    "titleAr": "[مستوى أساسي] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - سؤال 14",
    "questionEn": "[Question 14] In the context of Egyptian STEM robotics and mechatronics regarding Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 14] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
    "correctAnswerAr": "تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
    "explanationEn": "Correct Principle: Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
    "explanationAr": "المبدأ العلمي الصحيح: تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_15",
    "titleEn": "[EASY] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Review 15",
    "titleAr": "[مستوى أساسي] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - سؤال 15",
    "questionEn": "[Question 15] In the context of Egyptian STEM robotics and mechatronics regarding Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 15] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors replace mechanical brushes with electronic commutation using Hall-effect sensors or back-EMF sensing to energize stator windings synchronously with rotor position.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تستبدل المحركات عديمة المسفرات (BLDC) الفرش الميكانيكية بالتبديل الإلكتروني باستخدام حساسات هول أو قياس القوة الدافعة الكهربية العكسية لتغذية ملفات العضو الثابت بالتزامن مع حركة العضو الدوار.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Brushless DC (BLDC) motors replace mechanical brushes with electronic commutation using Hall-effect sensors or back-EMF sensing to energize stator windings synchronously with rotor position.",
    "correctAnswerAr": "تستبدل المحركات عديمة المسفرات (BLDC) الفرش الميكانيكية بالتبديل الإلكتروني باستخدام حساسات هول أو قياس القوة الدافعة الكهربية العكسية لتغذية ملفات العضو الثابت بالتزامن مع حركة العضو الدوار.",
    "explanationEn": "Correct Principle: Brushless DC (BLDC) motors replace mechanical brushes with electronic commutation using Hall-effect sensors or back-EMF sensing to energize stator windings synchronously with rotor position.",
    "explanationAr": "المبدأ العلمي الصحيح: تستبدل المحركات عديمة المسفرات (BLDC) الفرش الميكانيكية بالتبديل الإلكتروني باستخدام حساسات هول أو قياس القوة الدافعة الكهربية العكسية لتغذية ملفات العضو الثابت بالتزامن مع حركة العضو الدوار.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_16",
    "titleEn": "[EASY] H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection - Review 16",
    "titleAr": "[مستوى أساسي] بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن - سؤال 16",
    "questionEn": "[Question 16] In the context of Egyptian STEM robotics and mechatronics regarding H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 16] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "An H-bridge motor driver employs 4 semiconductor switches (MOSFETs/IGBTs) to control DC motor rotational direction and speed via Pulse Width Modulation (PWM)."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تستخدم قنطرة H-Bridge أربعة مفاتيح أشباه موصلات (MOSFETs/IGBTs) للتحكم في اتجاه وسرعة دوران محركات التيار المستمر بواسطة تضمين عرض النبضة (PWM)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "An H-bridge motor driver employs 4 semiconductor switches (MOSFETs/IGBTs) to control DC motor rotational direction and speed via Pulse Width Modulation (PWM).",
    "correctAnswerAr": "تستخدم قنطرة H-Bridge أربعة مفاتيح أشباه موصلات (MOSFETs/IGBTs) للتحكم في اتجاه وسرعة دوران محركات التيار المستمر بواسطة تضمين عرض النبضة (PWM).",
    "explanationEn": "Correct Principle: An H-bridge motor driver employs 4 semiconductor switches (MOSFETs/IGBTs) to control DC motor rotational direction and speed via Pulse Width Modulation (PWM).",
    "explanationAr": "المبدأ العلمي الصحيح: تستخدم قنطرة H-Bridge أربعة مفاتيح أشباه موصلات (MOSFETs/IGBTs) للتحكم في اتجاه وسرعة دوران محركات التيار المستمر بواسطة تضمين عرض النبضة (PWM).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_17",
    "titleEn": "[EASY] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Review 17",
    "titleAr": "[مستوى أساسي] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - سؤال 17",
    "questionEn": "[Question 17] In the context of Egyptian STEM robotics and mechatronics regarding Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 17] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
    "correctAnswerAr": "يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
    "explanationEn": "Correct Principle: The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_18",
    "titleEn": "[EASY] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Review 18",
    "titleAr": "[مستوى أساسي] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - سؤال 18",
    "questionEn": "[Question 18] In the context of Egyptian STEM robotics and mechatronics regarding Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 18] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
    "correctAnswerAr": "تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
    "explanationEn": "Correct Principle: Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
    "explanationAr": "المبدأ العلمي الصحيح: تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_19",
    "titleEn": "[EASY] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Review 19",
    "titleAr": "[مستوى أساسي] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - سؤال 19",
    "questionEn": "[Question 19] In the context of Egyptian STEM robotics and mechatronics regarding Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 19] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Brushless DC (BLDC) motors replace mechanical brushes with electronic commutation using Hall-effect sensors or back-EMF sensing to energize stator windings synchronously with rotor position.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تستبدل المحركات عديمة المسفرات (BLDC) الفرش الميكانيكية بالتبديل الإلكتروني باستخدام حساسات هول أو قياس القوة الدافعة الكهربية العكسية لتغذية ملفات العضو الثابت بالتزامن مع حركة العضو الدوار.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Brushless DC (BLDC) motors replace mechanical brushes with electronic commutation using Hall-effect sensors or back-EMF sensing to energize stator windings synchronously with rotor position.",
    "correctAnswerAr": "تستبدل المحركات عديمة المسفرات (BLDC) الفرش الميكانيكية بالتبديل الإلكتروني باستخدام حساسات هول أو قياس القوة الدافعة الكهربية العكسية لتغذية ملفات العضو الثابت بالتزامن مع حركة العضو الدوار.",
    "explanationEn": "Correct Principle: Brushless DC (BLDC) motors replace mechanical brushes with electronic commutation using Hall-effect sensors or back-EMF sensing to energize stator windings synchronously with rotor position.",
    "explanationAr": "المبدأ العلمي الصحيح: تستبدل المحركات عديمة المسفرات (BLDC) الفرش الميكانيكية بالتبديل الإلكتروني باستخدام حساسات هول أو قياس القوة الدافعة الكهربية العكسية لتغذية ملفات العضو الثابت بالتزامن مع حركة العضو الدوار.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_20",
    "titleEn": "[EASY] H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection - Review 20",
    "titleAr": "[مستوى أساسي] بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن - سؤال 20",
    "questionEn": "[Question 20] In the context of Egyptian STEM robotics and mechatronics regarding H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 20] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver employs 4 semiconductor switches (MOSFETs/IGBTs) to control DC motor rotational direction and speed via Pulse Width Modulation (PWM)."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تستخدم قنطرة H-Bridge أربعة مفاتيح أشباه موصلات (MOSFETs/IGBTs) للتحكم في اتجاه وسرعة دوران محركات التيار المستمر بواسطة تضمين عرض النبضة (PWM)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "An H-bridge motor driver employs 4 semiconductor switches (MOSFETs/IGBTs) to control DC motor rotational direction and speed via Pulse Width Modulation (PWM).",
    "correctAnswerAr": "تستخدم قنطرة H-Bridge أربعة مفاتيح أشباه موصلات (MOSFETs/IGBTs) للتحكم في اتجاه وسرعة دوران محركات التيار المستمر بواسطة تضمين عرض النبضة (PWM).",
    "explanationEn": "Correct Principle: An H-bridge motor driver employs 4 semiconductor switches (MOSFETs/IGBTs) to control DC motor rotational direction and speed via Pulse Width Modulation (PWM).",
    "explanationAr": "المبدأ العلمي الصحيح: تستخدم قنطرة H-Bridge أربعة مفاتيح أشباه موصلات (MOSFETs/IGBTs) للتحكم في اتجاه وسرعة دوران محركات التيار المستمر بواسطة تضمين عرض النبضة (PWM).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_21",
    "titleEn": "[EASY] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Review 21",
    "titleAr": "[مستوى أساسي] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - سؤال 21",
    "questionEn": "[Question 21] In the context of Egyptian STEM robotics and mechatronics regarding Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 21] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
    "correctAnswerAr": "يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
    "explanationEn": "Correct Principle: The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_22",
    "titleEn": "[EASY] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Review 22",
    "titleAr": "[مستوى أساسي] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - سؤال 22",
    "questionEn": "[Question 22] In the context of Egyptian STEM robotics and mechatronics regarding Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 22] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
    "correctAnswerAr": "تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
    "explanationEn": "Correct Principle: Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
    "explanationAr": "المبدأ العلمي الصحيح: تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_23",
    "titleEn": "[EASY] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Review 23",
    "titleAr": "[مستوى أساسي] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - سؤال 23",
    "questionEn": "[Question 23] In the context of Egyptian STEM robotics and mechatronics regarding Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 23] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Brushless DC (BLDC) motors replace mechanical brushes with electronic commutation using Hall-effect sensors or back-EMF sensing to energize stator windings synchronously with rotor position.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "تستبدل المحركات عديمة المسفرات (BLDC) الفرش الميكانيكية بالتبديل الإلكتروني باستخدام حساسات هول أو قياس القوة الدافعة الكهربية العكسية لتغذية ملفات العضو الثابت بالتزامن مع حركة العضو الدوار.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Brushless DC (BLDC) motors replace mechanical brushes with electronic commutation using Hall-effect sensors or back-EMF sensing to energize stator windings synchronously with rotor position.",
    "correctAnswerAr": "تستبدل المحركات عديمة المسفرات (BLDC) الفرش الميكانيكية بالتبديل الإلكتروني باستخدام حساسات هول أو قياس القوة الدافعة الكهربية العكسية لتغذية ملفات العضو الثابت بالتزامن مع حركة العضو الدوار.",
    "explanationEn": "Correct Principle: Brushless DC (BLDC) motors replace mechanical brushes with electronic commutation using Hall-effect sensors or back-EMF sensing to energize stator windings synchronously with rotor position.",
    "explanationAr": "المبدأ العلمي الصحيح: تستبدل المحركات عديمة المسفرات (BLDC) الفرش الميكانيكية بالتبديل الإلكتروني باستخدام حساسات هول أو قياس القوة الدافعة الكهربية العكسية لتغذية ملفات العضو الثابت بالتزامن مع حركة العضو الدوار.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_24",
    "titleEn": "[EASY] H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection - Review 24",
    "titleAr": "[مستوى أساسي] بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن - سؤال 24",
    "questionEn": "[Question 24] In the context of Egyptian STEM robotics and mechatronics regarding H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 24] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "An H-bridge motor driver employs 4 semiconductor switches (MOSFETs/IGBTs) to control DC motor rotational direction and speed via Pulse Width Modulation (PWM)."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "تستخدم قنطرة H-Bridge أربعة مفاتيح أشباه موصلات (MOSFETs/IGBTs) للتحكم في اتجاه وسرعة دوران محركات التيار المستمر بواسطة تضمين عرض النبضة (PWM)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "An H-bridge motor driver employs 4 semiconductor switches (MOSFETs/IGBTs) to control DC motor rotational direction and speed via Pulse Width Modulation (PWM).",
    "correctAnswerAr": "تستخدم قنطرة H-Bridge أربعة مفاتيح أشباه موصلات (MOSFETs/IGBTs) للتحكم في اتجاه وسرعة دوران محركات التيار المستمر بواسطة تضمين عرض النبضة (PWM).",
    "explanationEn": "Correct Principle: An H-bridge motor driver employs 4 semiconductor switches (MOSFETs/IGBTs) to control DC motor rotational direction and speed via Pulse Width Modulation (PWM).",
    "explanationAr": "المبدأ العلمي الصحيح: تستخدم قنطرة H-Bridge أربعة مفاتيح أشباه موصلات (MOSFETs/IGBTs) للتحكم في اتجاه وسرعة دوران محركات التيار المستمر بواسطة تضمين عرض النبضة (PWM).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_25",
    "titleEn": "[EASY] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Review 25",
    "titleAr": "[مستوى أساسي] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - سؤال 25",
    "questionEn": "[Question 25] In the context of Egyptian STEM robotics and mechatronics regarding Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 25] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
    "correctAnswerAr": "يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
    "explanationEn": "Correct Principle: The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_26",
    "titleEn": "[EASY] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Review 26",
    "titleAr": "[مستوى أساسي] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - سؤال 26",
    "questionEn": "[Question 26] In the context of Egyptian STEM robotics and mechatronics regarding Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 26] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
    "correctAnswerAr": "تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
    "explanationEn": "Correct Principle: Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
    "explanationAr": "المبدأ العلمي الصحيح: تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_27",
    "titleEn": "[EASY] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Review 27",
    "titleAr": "[مستوى أساسي] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - سؤال 27",
    "questionEn": "[Question 27] In the context of Egyptian STEM robotics and mechatronics regarding Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 27] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "Brushless DC (BLDC) motors replace mechanical brushes with electronic commutation using Hall-effect sensors or back-EMF sensing to energize stator windings synchronously with rotor position.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "تستبدل المحركات عديمة المسفرات (BLDC) الفرش الميكانيكية بالتبديل الإلكتروني باستخدام حساسات هول أو قياس القوة الدافعة الكهربية العكسية لتغذية ملفات العضو الثابت بالتزامن مع حركة العضو الدوار.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Brushless DC (BLDC) motors replace mechanical brushes with electronic commutation using Hall-effect sensors or back-EMF sensing to energize stator windings synchronously with rotor position.",
    "correctAnswerAr": "تستبدل المحركات عديمة المسفرات (BLDC) الفرش الميكانيكية بالتبديل الإلكتروني باستخدام حساسات هول أو قياس القوة الدافعة الكهربية العكسية لتغذية ملفات العضو الثابت بالتزامن مع حركة العضو الدوار.",
    "explanationEn": "Correct Principle: Brushless DC (BLDC) motors replace mechanical brushes with electronic commutation using Hall-effect sensors or back-EMF sensing to energize stator windings synchronously with rotor position.",
    "explanationAr": "المبدأ العلمي الصحيح: تستبدل المحركات عديمة المسفرات (BLDC) الفرش الميكانيكية بالتبديل الإلكتروني باستخدام حساسات هول أو قياس القوة الدافعة الكهربية العكسية لتغذية ملفات العضو الثابت بالتزامن مع حركة العضو الدوار.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_28",
    "titleEn": "[EASY] H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection - Review 28",
    "titleAr": "[مستوى أساسي] بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن - سؤال 28",
    "questionEn": "[Question 28] In the context of Egyptian STEM robotics and mechatronics regarding H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 28] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "An H-bridge motor driver employs 4 semiconductor switches (MOSFETs/IGBTs) to control DC motor rotational direction and speed via Pulse Width Modulation (PWM)."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تستخدم قنطرة H-Bridge أربعة مفاتيح أشباه موصلات (MOSFETs/IGBTs) للتحكم في اتجاه وسرعة دوران محركات التيار المستمر بواسطة تضمين عرض النبضة (PWM)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "An H-bridge motor driver employs 4 semiconductor switches (MOSFETs/IGBTs) to control DC motor rotational direction and speed via Pulse Width Modulation (PWM).",
    "correctAnswerAr": "تستخدم قنطرة H-Bridge أربعة مفاتيح أشباه موصلات (MOSFETs/IGBTs) للتحكم في اتجاه وسرعة دوران محركات التيار المستمر بواسطة تضمين عرض النبضة (PWM).",
    "explanationEn": "Correct Principle: An H-bridge motor driver employs 4 semiconductor switches (MOSFETs/IGBTs) to control DC motor rotational direction and speed via Pulse Width Modulation (PWM).",
    "explanationAr": "المبدأ العلمي الصحيح: تستخدم قنطرة H-Bridge أربعة مفاتيح أشباه موصلات (MOSFETs/IGBTs) للتحكم في اتجاه وسرعة دوران محركات التيار المستمر بواسطة تضمين عرض النبضة (PWM).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_29",
    "titleEn": "[EASY] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Review 29",
    "titleAr": "[مستوى أساسي] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - سؤال 29",
    "questionEn": "[Question 29] In the context of Egyptian STEM robotics and mechatronics regarding Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 29] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
    "correctAnswerAr": "يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
    "explanationEn": "Correct Principle: The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_30",
    "titleEn": "[EASY] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Review 30",
    "titleAr": "[مستوى أساسي] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - سؤال 30",
    "questionEn": "[Question 30] In the context of Egyptian STEM robotics and mechatronics regarding Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 30] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
    "correctAnswerAr": "تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
    "explanationEn": "Correct Principle: Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
    "explanationAr": "المبدأ العلمي الصحيح: تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_31",
    "titleEn": "[EASY] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Review 31",
    "titleAr": "[مستوى أساسي] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - سؤال 31",
    "questionEn": "[Question 31] In the context of Egyptian STEM robotics and mechatronics regarding Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 31] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Brushless DC (BLDC) motors replace mechanical brushes with electronic commutation using Hall-effect sensors or back-EMF sensing to energize stator windings synchronously with rotor position.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تستبدل المحركات عديمة المسفرات (BLDC) الفرش الميكانيكية بالتبديل الإلكتروني باستخدام حساسات هول أو قياس القوة الدافعة الكهربية العكسية لتغذية ملفات العضو الثابت بالتزامن مع حركة العضو الدوار.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Brushless DC (BLDC) motors replace mechanical brushes with electronic commutation using Hall-effect sensors or back-EMF sensing to energize stator windings synchronously with rotor position.",
    "correctAnswerAr": "تستبدل المحركات عديمة المسفرات (BLDC) الفرش الميكانيكية بالتبديل الإلكتروني باستخدام حساسات هول أو قياس القوة الدافعة الكهربية العكسية لتغذية ملفات العضو الثابت بالتزامن مع حركة العضو الدوار.",
    "explanationEn": "Correct Principle: Brushless DC (BLDC) motors replace mechanical brushes with electronic commutation using Hall-effect sensors or back-EMF sensing to energize stator windings synchronously with rotor position.",
    "explanationAr": "المبدأ العلمي الصحيح: تستبدل المحركات عديمة المسفرات (BLDC) الفرش الميكانيكية بالتبديل الإلكتروني باستخدام حساسات هول أو قياس القوة الدافعة الكهربية العكسية لتغذية ملفات العضو الثابت بالتزامن مع حركة العضو الدوار.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_32",
    "titleEn": "[EASY] H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection - Review 32",
    "titleAr": "[مستوى أساسي] بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن - سؤال 32",
    "questionEn": "[Question 32] In the context of Egyptian STEM robotics and mechatronics regarding H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 32] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "An H-bridge motor driver employs 4 semiconductor switches (MOSFETs/IGBTs) to control DC motor rotational direction and speed via Pulse Width Modulation (PWM)."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "تستخدم قنطرة H-Bridge أربعة مفاتيح أشباه موصلات (MOSFETs/IGBTs) للتحكم في اتجاه وسرعة دوران محركات التيار المستمر بواسطة تضمين عرض النبضة (PWM)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "An H-bridge motor driver employs 4 semiconductor switches (MOSFETs/IGBTs) to control DC motor rotational direction and speed via Pulse Width Modulation (PWM).",
    "correctAnswerAr": "تستخدم قنطرة H-Bridge أربعة مفاتيح أشباه موصلات (MOSFETs/IGBTs) للتحكم في اتجاه وسرعة دوران محركات التيار المستمر بواسطة تضمين عرض النبضة (PWM).",
    "explanationEn": "Correct Principle: An H-bridge motor driver employs 4 semiconductor switches (MOSFETs/IGBTs) to control DC motor rotational direction and speed via Pulse Width Modulation (PWM).",
    "explanationAr": "المبدأ العلمي الصحيح: تستخدم قنطرة H-Bridge أربعة مفاتيح أشباه موصلات (MOSFETs/IGBTs) للتحكم في اتجاه وسرعة دوران محركات التيار المستمر بواسطة تضمين عرض النبضة (PWM).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_33",
    "titleEn": "[EASY] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Review 33",
    "titleAr": "[مستوى أساسي] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - سؤال 33",
    "questionEn": "[Question 33] In the context of Egyptian STEM robotics and mechatronics regarding Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 33] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
    "correctAnswerAr": "يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
    "explanationEn": "Correct Principle: The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_34",
    "titleEn": "[EASY] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Review 34",
    "titleAr": "[مستوى أساسي] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - سؤال 34",
    "questionEn": "[Question 34] In the context of Egyptian STEM robotics and mechatronics regarding Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 34] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
    "correctAnswerAr": "تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
    "explanationEn": "Correct Principle: Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
    "explanationAr": "المبدأ العلمي الصحيح: تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_35",
    "titleEn": "[EASY] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Review 35",
    "titleAr": "[مستوى أساسي] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - سؤال 35",
    "questionEn": "[Question 35] In the context of Egyptian STEM robotics and mechatronics regarding Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 35] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors replace mechanical brushes with electronic commutation using Hall-effect sensors or back-EMF sensing to energize stator windings synchronously with rotor position.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تستبدل المحركات عديمة المسفرات (BLDC) الفرش الميكانيكية بالتبديل الإلكتروني باستخدام حساسات هول أو قياس القوة الدافعة الكهربية العكسية لتغذية ملفات العضو الثابت بالتزامن مع حركة العضو الدوار.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Brushless DC (BLDC) motors replace mechanical brushes with electronic commutation using Hall-effect sensors or back-EMF sensing to energize stator windings synchronously with rotor position.",
    "correctAnswerAr": "تستبدل المحركات عديمة المسفرات (BLDC) الفرش الميكانيكية بالتبديل الإلكتروني باستخدام حساسات هول أو قياس القوة الدافعة الكهربية العكسية لتغذية ملفات العضو الثابت بالتزامن مع حركة العضو الدوار.",
    "explanationEn": "Correct Principle: Brushless DC (BLDC) motors replace mechanical brushes with electronic commutation using Hall-effect sensors or back-EMF sensing to energize stator windings synchronously with rotor position.",
    "explanationAr": "المبدأ العلمي الصحيح: تستبدل المحركات عديمة المسفرات (BLDC) الفرش الميكانيكية بالتبديل الإلكتروني باستخدام حساسات هول أو قياس القوة الدافعة الكهربية العكسية لتغذية ملفات العضو الثابت بالتزامن مع حركة العضو الدوار.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_36",
    "titleEn": "[EASY] H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection - Review 36",
    "titleAr": "[مستوى أساسي] بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن - سؤال 36",
    "questionEn": "[Question 36] In the context of Egyptian STEM robotics and mechatronics regarding H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 36] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "An H-bridge motor driver employs 4 semiconductor switches (MOSFETs/IGBTs) to control DC motor rotational direction and speed via Pulse Width Modulation (PWM)."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تستخدم قنطرة H-Bridge أربعة مفاتيح أشباه موصلات (MOSFETs/IGBTs) للتحكم في اتجاه وسرعة دوران محركات التيار المستمر بواسطة تضمين عرض النبضة (PWM)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "An H-bridge motor driver employs 4 semiconductor switches (MOSFETs/IGBTs) to control DC motor rotational direction and speed via Pulse Width Modulation (PWM).",
    "correctAnswerAr": "تستخدم قنطرة H-Bridge أربعة مفاتيح أشباه موصلات (MOSFETs/IGBTs) للتحكم في اتجاه وسرعة دوران محركات التيار المستمر بواسطة تضمين عرض النبضة (PWM).",
    "explanationEn": "Correct Principle: An H-bridge motor driver employs 4 semiconductor switches (MOSFETs/IGBTs) to control DC motor rotational direction and speed via Pulse Width Modulation (PWM).",
    "explanationAr": "المبدأ العلمي الصحيح: تستخدم قنطرة H-Bridge أربعة مفاتيح أشباه موصلات (MOSFETs/IGBTs) للتحكم في اتجاه وسرعة دوران محركات التيار المستمر بواسطة تضمين عرض النبضة (PWM).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_37",
    "titleEn": "[EASY] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Review 37",
    "titleAr": "[مستوى أساسي] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - سؤال 37",
    "questionEn": "[Question 37] In the context of Egyptian STEM robotics and mechatronics regarding Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 37] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
    "correctAnswerAr": "يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
    "explanationEn": "Correct Principle: The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_38",
    "titleEn": "[EASY] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Review 38",
    "titleAr": "[مستوى أساسي] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - سؤال 38",
    "questionEn": "[Question 38] In the context of Egyptian STEM robotics and mechatronics regarding Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 38] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
    "correctAnswerAr": "تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
    "explanationEn": "Correct Principle: Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
    "explanationAr": "المبدأ العلمي الصحيح: تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_39",
    "titleEn": "[EASY] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Review 39",
    "titleAr": "[مستوى أساسي] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - سؤال 39",
    "questionEn": "[Question 39] In the context of Egyptian STEM robotics and mechatronics regarding Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 39] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Brushless DC (BLDC) motors replace mechanical brushes with electronic commutation using Hall-effect sensors or back-EMF sensing to energize stator windings synchronously with rotor position.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تستبدل المحركات عديمة المسفرات (BLDC) الفرش الميكانيكية بالتبديل الإلكتروني باستخدام حساسات هول أو قياس القوة الدافعة الكهربية العكسية لتغذية ملفات العضو الثابت بالتزامن مع حركة العضو الدوار.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Brushless DC (BLDC) motors replace mechanical brushes with electronic commutation using Hall-effect sensors or back-EMF sensing to energize stator windings synchronously with rotor position.",
    "correctAnswerAr": "تستبدل المحركات عديمة المسفرات (BLDC) الفرش الميكانيكية بالتبديل الإلكتروني باستخدام حساسات هول أو قياس القوة الدافعة الكهربية العكسية لتغذية ملفات العضو الثابت بالتزامن مع حركة العضو الدوار.",
    "explanationEn": "Correct Principle: Brushless DC (BLDC) motors replace mechanical brushes with electronic commutation using Hall-effect sensors or back-EMF sensing to energize stator windings synchronously with rotor position.",
    "explanationAr": "المبدأ العلمي الصحيح: تستبدل المحركات عديمة المسفرات (BLDC) الفرش الميكانيكية بالتبديل الإلكتروني باستخدام حساسات هول أو قياس القوة الدافعة الكهربية العكسية لتغذية ملفات العضو الثابت بالتزامن مع حركة العضو الدوار.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_40",
    "titleEn": "[EASY] H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection - Review 40",
    "titleAr": "[مستوى أساسي] بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن - سؤال 40",
    "questionEn": "[Question 40] In the context of Egyptian STEM robotics and mechatronics regarding H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 40] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver employs 4 semiconductor switches (MOSFETs/IGBTs) to control DC motor rotational direction and speed via Pulse Width Modulation (PWM)."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تستخدم قنطرة H-Bridge أربعة مفاتيح أشباه موصلات (MOSFETs/IGBTs) للتحكم في اتجاه وسرعة دوران محركات التيار المستمر بواسطة تضمين عرض النبضة (PWM)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "An H-bridge motor driver employs 4 semiconductor switches (MOSFETs/IGBTs) to control DC motor rotational direction and speed via Pulse Width Modulation (PWM).",
    "correctAnswerAr": "تستخدم قنطرة H-Bridge أربعة مفاتيح أشباه موصلات (MOSFETs/IGBTs) للتحكم في اتجاه وسرعة دوران محركات التيار المستمر بواسطة تضمين عرض النبضة (PWM).",
    "explanationEn": "Correct Principle: An H-bridge motor driver employs 4 semiconductor switches (MOSFETs/IGBTs) to control DC motor rotational direction and speed via Pulse Width Modulation (PWM).",
    "explanationAr": "المبدأ العلمي الصحيح: تستخدم قنطرة H-Bridge أربعة مفاتيح أشباه موصلات (MOSFETs/IGBTs) للتحكم في اتجاه وسرعة دوران محركات التيار المستمر بواسطة تضمين عرض النبضة (PWM).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_41",
    "titleEn": "[EASY] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Review 41",
    "titleAr": "[مستوى أساسي] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - سؤال 41",
    "questionEn": "[Question 41] In the context of Egyptian STEM robotics and mechatronics regarding Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 41] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
    "correctAnswerAr": "يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
    "explanationEn": "Correct Principle: The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_42",
    "titleEn": "[EASY] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Review 42",
    "titleAr": "[مستوى أساسي] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - سؤال 42",
    "questionEn": "[Question 42] In the context of Egyptian STEM robotics and mechatronics regarding Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 42] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
    "correctAnswerAr": "تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
    "explanationEn": "Correct Principle: Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
    "explanationAr": "المبدأ العلمي الصحيح: تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_43",
    "titleEn": "[EASY] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Review 43",
    "titleAr": "[مستوى أساسي] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - سؤال 43",
    "questionEn": "[Question 43] In the context of Egyptian STEM robotics and mechatronics regarding Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 43] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Brushless DC (BLDC) motors replace mechanical brushes with electronic commutation using Hall-effect sensors or back-EMF sensing to energize stator windings synchronously with rotor position.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "تستبدل المحركات عديمة المسفرات (BLDC) الفرش الميكانيكية بالتبديل الإلكتروني باستخدام حساسات هول أو قياس القوة الدافعة الكهربية العكسية لتغذية ملفات العضو الثابت بالتزامن مع حركة العضو الدوار.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Brushless DC (BLDC) motors replace mechanical brushes with electronic commutation using Hall-effect sensors or back-EMF sensing to energize stator windings synchronously with rotor position.",
    "correctAnswerAr": "تستبدل المحركات عديمة المسفرات (BLDC) الفرش الميكانيكية بالتبديل الإلكتروني باستخدام حساسات هول أو قياس القوة الدافعة الكهربية العكسية لتغذية ملفات العضو الثابت بالتزامن مع حركة العضو الدوار.",
    "explanationEn": "Correct Principle: Brushless DC (BLDC) motors replace mechanical brushes with electronic commutation using Hall-effect sensors or back-EMF sensing to energize stator windings synchronously with rotor position.",
    "explanationAr": "المبدأ العلمي الصحيح: تستبدل المحركات عديمة المسفرات (BLDC) الفرش الميكانيكية بالتبديل الإلكتروني باستخدام حساسات هول أو قياس القوة الدافعة الكهربية العكسية لتغذية ملفات العضو الثابت بالتزامن مع حركة العضو الدوار.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_44",
    "titleEn": "[EASY] H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection - Review 44",
    "titleAr": "[مستوى أساسي] بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن - سؤال 44",
    "questionEn": "[Question 44] In the context of Egyptian STEM robotics and mechatronics regarding H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 44] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "An H-bridge motor driver employs 4 semiconductor switches (MOSFETs/IGBTs) to control DC motor rotational direction and speed via Pulse Width Modulation (PWM)."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "تستخدم قنطرة H-Bridge أربعة مفاتيح أشباه موصلات (MOSFETs/IGBTs) للتحكم في اتجاه وسرعة دوران محركات التيار المستمر بواسطة تضمين عرض النبضة (PWM)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "An H-bridge motor driver employs 4 semiconductor switches (MOSFETs/IGBTs) to control DC motor rotational direction and speed via Pulse Width Modulation (PWM).",
    "correctAnswerAr": "تستخدم قنطرة H-Bridge أربعة مفاتيح أشباه موصلات (MOSFETs/IGBTs) للتحكم في اتجاه وسرعة دوران محركات التيار المستمر بواسطة تضمين عرض النبضة (PWM).",
    "explanationEn": "Correct Principle: An H-bridge motor driver employs 4 semiconductor switches (MOSFETs/IGBTs) to control DC motor rotational direction and speed via Pulse Width Modulation (PWM).",
    "explanationAr": "المبدأ العلمي الصحيح: تستخدم قنطرة H-Bridge أربعة مفاتيح أشباه موصلات (MOSFETs/IGBTs) للتحكم في اتجاه وسرعة دوران محركات التيار المستمر بواسطة تضمين عرض النبضة (PWM).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_45",
    "titleEn": "[EASY] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Review 45",
    "titleAr": "[مستوى أساسي] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - سؤال 45",
    "questionEn": "[Question 45] In the context of Egyptian STEM robotics and mechatronics regarding Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 45] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
    "correctAnswerAr": "يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
    "explanationEn": "Correct Principle: The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_46",
    "titleEn": "[EASY] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Review 46",
    "titleAr": "[مستوى أساسي] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - سؤال 46",
    "questionEn": "[Question 46] In the context of Egyptian STEM robotics and mechatronics regarding Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 46] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
    "correctAnswerAr": "تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
    "explanationEn": "Correct Principle: Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
    "explanationAr": "المبدأ العلمي الصحيح: تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_47",
    "titleEn": "[EASY] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Review 47",
    "titleAr": "[مستوى أساسي] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - سؤال 47",
    "questionEn": "[Question 47] In the context of Egyptian STEM robotics and mechatronics regarding Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 47] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "Brushless DC (BLDC) motors replace mechanical brushes with electronic commutation using Hall-effect sensors or back-EMF sensing to energize stator windings synchronously with rotor position.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "تستبدل المحركات عديمة المسفرات (BLDC) الفرش الميكانيكية بالتبديل الإلكتروني باستخدام حساسات هول أو قياس القوة الدافعة الكهربية العكسية لتغذية ملفات العضو الثابت بالتزامن مع حركة العضو الدوار.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Brushless DC (BLDC) motors replace mechanical brushes with electronic commutation using Hall-effect sensors or back-EMF sensing to energize stator windings synchronously with rotor position.",
    "correctAnswerAr": "تستبدل المحركات عديمة المسفرات (BLDC) الفرش الميكانيكية بالتبديل الإلكتروني باستخدام حساسات هول أو قياس القوة الدافعة الكهربية العكسية لتغذية ملفات العضو الثابت بالتزامن مع حركة العضو الدوار.",
    "explanationEn": "Correct Principle: Brushless DC (BLDC) motors replace mechanical brushes with electronic commutation using Hall-effect sensors or back-EMF sensing to energize stator windings synchronously with rotor position.",
    "explanationAr": "المبدأ العلمي الصحيح: تستبدل المحركات عديمة المسفرات (BLDC) الفرش الميكانيكية بالتبديل الإلكتروني باستخدام حساسات هول أو قياس القوة الدافعة الكهربية العكسية لتغذية ملفات العضو الثابت بالتزامن مع حركة العضو الدوار.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_48",
    "titleEn": "[EASY] H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection - Review 48",
    "titleAr": "[مستوى أساسي] بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن - سؤال 48",
    "questionEn": "[Question 48] In the context of Egyptian STEM robotics and mechatronics regarding H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 48] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "An H-bridge motor driver employs 4 semiconductor switches (MOSFETs/IGBTs) to control DC motor rotational direction and speed via Pulse Width Modulation (PWM)."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تستخدم قنطرة H-Bridge أربعة مفاتيح أشباه موصلات (MOSFETs/IGBTs) للتحكم في اتجاه وسرعة دوران محركات التيار المستمر بواسطة تضمين عرض النبضة (PWM)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "An H-bridge motor driver employs 4 semiconductor switches (MOSFETs/IGBTs) to control DC motor rotational direction and speed via Pulse Width Modulation (PWM).",
    "correctAnswerAr": "تستخدم قنطرة H-Bridge أربعة مفاتيح أشباه موصلات (MOSFETs/IGBTs) للتحكم في اتجاه وسرعة دوران محركات التيار المستمر بواسطة تضمين عرض النبضة (PWM).",
    "explanationEn": "Correct Principle: An H-bridge motor driver employs 4 semiconductor switches (MOSFETs/IGBTs) to control DC motor rotational direction and speed via Pulse Width Modulation (PWM).",
    "explanationAr": "المبدأ العلمي الصحيح: تستخدم قنطرة H-Bridge أربعة مفاتيح أشباه موصلات (MOSFETs/IGBTs) للتحكم في اتجاه وسرعة دوران محركات التيار المستمر بواسطة تضمين عرض النبضة (PWM).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_49",
    "titleEn": "[EASY] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Review 49",
    "titleAr": "[مستوى أساسي] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - سؤال 49",
    "questionEn": "[Question 49] In the context of Egyptian STEM robotics and mechatronics regarding Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 49] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
    "correctAnswerAr": "يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
    "explanationEn": "Correct Principle: The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_50",
    "titleEn": "[EASY] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Review 50",
    "titleAr": "[مستوى أساسي] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - سؤال 50",
    "questionEn": "[Question 50] In the context of Egyptian STEM robotics and mechatronics regarding Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 50] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
    "correctAnswerAr": "تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
    "explanationEn": "Correct Principle: Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
    "explanationAr": "المبدأ العلمي الصحيح: تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_51",
    "titleEn": "[EASY] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Review 51",
    "titleAr": "[مستوى أساسي] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - سؤال 51",
    "questionEn": "[Question 51] In the context of Egyptian STEM robotics and mechatronics regarding Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 51] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Brushless DC (BLDC) motors replace mechanical brushes with electronic commutation using Hall-effect sensors or back-EMF sensing to energize stator windings synchronously with rotor position.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تستبدل المحركات عديمة المسفرات (BLDC) الفرش الميكانيكية بالتبديل الإلكتروني باستخدام حساسات هول أو قياس القوة الدافعة الكهربية العكسية لتغذية ملفات العضو الثابت بالتزامن مع حركة العضو الدوار.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Brushless DC (BLDC) motors replace mechanical brushes with electronic commutation using Hall-effect sensors or back-EMF sensing to energize stator windings synchronously with rotor position.",
    "correctAnswerAr": "تستبدل المحركات عديمة المسفرات (BLDC) الفرش الميكانيكية بالتبديل الإلكتروني باستخدام حساسات هول أو قياس القوة الدافعة الكهربية العكسية لتغذية ملفات العضو الثابت بالتزامن مع حركة العضو الدوار.",
    "explanationEn": "Correct Principle: Brushless DC (BLDC) motors replace mechanical brushes with electronic commutation using Hall-effect sensors or back-EMF sensing to energize stator windings synchronously with rotor position.",
    "explanationAr": "المبدأ العلمي الصحيح: تستبدل المحركات عديمة المسفرات (BLDC) الفرش الميكانيكية بالتبديل الإلكتروني باستخدام حساسات هول أو قياس القوة الدافعة الكهربية العكسية لتغذية ملفات العضو الثابت بالتزامن مع حركة العضو الدوار.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_52",
    "titleEn": "[EASY] H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection - Review 52",
    "titleAr": "[مستوى أساسي] بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن - سؤال 52",
    "questionEn": "[Question 52] In the context of Egyptian STEM robotics and mechatronics regarding H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 52] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "An H-bridge motor driver employs 4 semiconductor switches (MOSFETs/IGBTs) to control DC motor rotational direction and speed via Pulse Width Modulation (PWM)."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "تستخدم قنطرة H-Bridge أربعة مفاتيح أشباه موصلات (MOSFETs/IGBTs) للتحكم في اتجاه وسرعة دوران محركات التيار المستمر بواسطة تضمين عرض النبضة (PWM)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "An H-bridge motor driver employs 4 semiconductor switches (MOSFETs/IGBTs) to control DC motor rotational direction and speed via Pulse Width Modulation (PWM).",
    "correctAnswerAr": "تستخدم قنطرة H-Bridge أربعة مفاتيح أشباه موصلات (MOSFETs/IGBTs) للتحكم في اتجاه وسرعة دوران محركات التيار المستمر بواسطة تضمين عرض النبضة (PWM).",
    "explanationEn": "Correct Principle: An H-bridge motor driver employs 4 semiconductor switches (MOSFETs/IGBTs) to control DC motor rotational direction and speed via Pulse Width Modulation (PWM).",
    "explanationAr": "المبدأ العلمي الصحيح: تستخدم قنطرة H-Bridge أربعة مفاتيح أشباه موصلات (MOSFETs/IGBTs) للتحكم في اتجاه وسرعة دوران محركات التيار المستمر بواسطة تضمين عرض النبضة (PWM).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_53",
    "titleEn": "[EASY] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Review 53",
    "titleAr": "[مستوى أساسي] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - سؤال 53",
    "questionEn": "[Question 53] In the context of Egyptian STEM robotics and mechatronics regarding Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 53] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
    "correctAnswerAr": "يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
    "explanationEn": "Correct Principle: The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_54",
    "titleEn": "[EASY] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Review 54",
    "titleAr": "[مستوى أساسي] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - سؤال 54",
    "questionEn": "[Question 54] In the context of Egyptian STEM robotics and mechatronics regarding Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 54] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
    "correctAnswerAr": "تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
    "explanationEn": "Correct Principle: Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
    "explanationAr": "المبدأ العلمي الصحيح: تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_55",
    "titleEn": "[EASY] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Review 55",
    "titleAr": "[مستوى أساسي] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - سؤال 55",
    "questionEn": "[Question 55] In the context of Egyptian STEM robotics and mechatronics regarding Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 55] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors replace mechanical brushes with electronic commutation using Hall-effect sensors or back-EMF sensing to energize stator windings synchronously with rotor position.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تستبدل المحركات عديمة المسفرات (BLDC) الفرش الميكانيكية بالتبديل الإلكتروني باستخدام حساسات هول أو قياس القوة الدافعة الكهربية العكسية لتغذية ملفات العضو الثابت بالتزامن مع حركة العضو الدوار.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Brushless DC (BLDC) motors replace mechanical brushes with electronic commutation using Hall-effect sensors or back-EMF sensing to energize stator windings synchronously with rotor position.",
    "correctAnswerAr": "تستبدل المحركات عديمة المسفرات (BLDC) الفرش الميكانيكية بالتبديل الإلكتروني باستخدام حساسات هول أو قياس القوة الدافعة الكهربية العكسية لتغذية ملفات العضو الثابت بالتزامن مع حركة العضو الدوار.",
    "explanationEn": "Correct Principle: Brushless DC (BLDC) motors replace mechanical brushes with electronic commutation using Hall-effect sensors or back-EMF sensing to energize stator windings synchronously with rotor position.",
    "explanationAr": "المبدأ العلمي الصحيح: تستبدل المحركات عديمة المسفرات (BLDC) الفرش الميكانيكية بالتبديل الإلكتروني باستخدام حساسات هول أو قياس القوة الدافعة الكهربية العكسية لتغذية ملفات العضو الثابت بالتزامن مع حركة العضو الدوار.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_56",
    "titleEn": "[EASY] H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection - Review 56",
    "titleAr": "[مستوى أساسي] بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن - سؤال 56",
    "questionEn": "[Question 56] In the context of Egyptian STEM robotics and mechatronics regarding H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 56] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "An H-bridge motor driver employs 4 semiconductor switches (MOSFETs/IGBTs) to control DC motor rotational direction and speed via Pulse Width Modulation (PWM)."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تستخدم قنطرة H-Bridge أربعة مفاتيح أشباه موصلات (MOSFETs/IGBTs) للتحكم في اتجاه وسرعة دوران محركات التيار المستمر بواسطة تضمين عرض النبضة (PWM)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "An H-bridge motor driver employs 4 semiconductor switches (MOSFETs/IGBTs) to control DC motor rotational direction and speed via Pulse Width Modulation (PWM).",
    "correctAnswerAr": "تستخدم قنطرة H-Bridge أربعة مفاتيح أشباه موصلات (MOSFETs/IGBTs) للتحكم في اتجاه وسرعة دوران محركات التيار المستمر بواسطة تضمين عرض النبضة (PWM).",
    "explanationEn": "Correct Principle: An H-bridge motor driver employs 4 semiconductor switches (MOSFETs/IGBTs) to control DC motor rotational direction and speed via Pulse Width Modulation (PWM).",
    "explanationAr": "المبدأ العلمي الصحيح: تستخدم قنطرة H-Bridge أربعة مفاتيح أشباه موصلات (MOSFETs/IGBTs) للتحكم في اتجاه وسرعة دوران محركات التيار المستمر بواسطة تضمين عرض النبضة (PWM).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_57",
    "titleEn": "[EASY] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Review 57",
    "titleAr": "[مستوى أساسي] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - سؤال 57",
    "questionEn": "[Question 57] In the context of Egyptian STEM robotics and mechatronics regarding Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 57] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
    "correctAnswerAr": "يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
    "explanationEn": "Correct Principle: The Denavit-Hartenberg (DH) convention defines the spatial relationship between consecutive robot links using 4 kinematic parameters: link length ($a_i$), link twist ($\\alpha_i$), link offset ($d_i$), and joint angle ($\\theta_i$).",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد اصطلاح دينافيت-هارتنبرغ (DH) العلاقة الفراغية بين وصلات الروبوت المتتالية باستخدام ٤ معاملات كينماتيكية: طول الوصلة ($a_i$)، والتواء الوصلة ($\\alpha_i$)، وإزاحة الوصلة ($d_i$)، وزاوية المفصل ($\\theta_i$).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch1_easy_58",
    "titleEn": "[EASY] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Review 58",
    "titleAr": "[مستوى أساسي] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - سؤال 58",
    "questionEn": "[Question 58] In the context of Egyptian STEM robotics and mechatronics regarding Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 58] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
    "correctAnswerAr": "تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
    "explanationEn": "Correct Principle: Inverse kinematics calculates required joint variables ($\\theta_1, \\theta_2, \\dots, \\theta_n$) given a desired end-effector Cartesian pose $(x, y, z, \\text{roll}, \\text{pitch}, \\text{yaw})$.",
    "explanationAr": "المبدأ العلمي الصحيح: تحسب الحركيات العكسية متغيرات المفاصل المطلوبة ($\\theta_1, \\theta_2, \\dots, \\theta_n$) للوصول إلى الموضع والاتجاه الديكارتي المرغوب لنهاية الذراع.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  }
],
  medium: [
  {
    "id": "th_robotics_ch1_med_1",
    "titleEn": "[MEDIUM] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Analysis 1",
    "titleAr": "[مستوى متوسط] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - تحليل 1",
    "questionEn": "[Question 1] When analyzing hardware-software integration and operational control for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices, identify the correct engineering relationship:",
    "questionAr": "[السؤال 1] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
    "correctAnswerAr": "تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
    "explanationEn": "Engineering Analysis: The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_2",
    "titleEn": "[MEDIUM] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Analysis 2",
    "titleAr": "[مستوى متوسط] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - تحليل 2",
    "questionEn": "[Question 2] When analyzing hardware-software integration and operational control for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance, identify the correct engineering relationship:",
    "questionAr": "[السؤال 2] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities.",
    "correctAnswerAr": "تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية.",
    "explanationEn": "Engineering Analysis: Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities.",
    "explanationAr": "التحليل الهندسي المعتمد: تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_3",
    "titleEn": "[MEDIUM] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Analysis 3",
    "titleAr": "[مستوى متوسط] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - تحليل 3",
    "questionEn": "[Question 3] When analyzing hardware-software integration and operational control for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation, identify the correct engineering relationship:",
    "questionAr": "[السؤال 3] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
    "correctAnswerAr": "يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
    "explanationEn": "Engineering Analysis: Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
    "explanationAr": "التحليل الهندسي المعتمد: يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_4",
    "titleEn": "[MEDIUM] H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection - Analysis 4",
    "titleAr": "[مستوى متوسط] بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن - تحليل 4",
    "questionEn": "[Question 4] When analyzing hardware-software integration and operational control for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection, identify the correct engineering relationship:",
    "questionAr": "[السؤال 4] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Shoot-through occurs if high-side and low-side switches in the same half-bridge leg turn ON simultaneously, causing a dead short across the DC bus; gate drivers enforce hardware dead-time ($t_{dead} \\approx 100-500\\ ns$).",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "يحدث التوصيل المتزامن القاتل (Shoot-through) إذا فُتح المفتاحان العلوي والسفلي في نفس الساق معاً مسبباً دائرة قصر، لذا تفرض دوائر القيادة زمناً ميتاً ($t_{dead} \\approx 100-500\\ ns$).",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Shoot-through occurs if high-side and low-side switches in the same half-bridge leg turn ON simultaneously, causing a dead short across the DC bus; gate drivers enforce hardware dead-time ($t_{dead} \\approx 100-500\\ ns$).",
    "correctAnswerAr": "يحدث التوصيل المتزامن القاتل (Shoot-through) إذا فُتح المفتاحان العلوي والسفلي في نفس الساق معاً مسبباً دائرة قصر، لذا تفرض دوائر القيادة زمناً ميتاً ($t_{dead} \\approx 100-500\\ ns$).",
    "explanationEn": "Engineering Analysis: Shoot-through occurs if high-side and low-side switches in the same half-bridge leg turn ON simultaneously, causing a dead short across the DC bus; gate drivers enforce hardware dead-time ($t_{dead} \\approx 100-500\\ ns$).",
    "explanationAr": "التحليل الهندسي المعتمد: يحدث التوصيل المتزامن القاتل (Shoot-through) إذا فُتح المفتاحان العلوي والسفلي في نفس الساق معاً مسبباً دائرة قصر، لذا تفرض دوائر القيادة زمناً ميتاً ($t_{dead} \\approx 100-500\\ ns$).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_5",
    "titleEn": "[MEDIUM] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Analysis 5",
    "titleAr": "[مستوى متوسط] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - تحليل 5",
    "questionEn": "[Question 5] When analyzing hardware-software integration and operational control for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices, identify the correct engineering relationship:",
    "questionAr": "[السؤال 5] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
    "correctAnswerAr": "تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
    "explanationEn": "Engineering Analysis: The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_6",
    "titleEn": "[MEDIUM] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Analysis 6",
    "titleAr": "[مستوى متوسط] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - تحليل 6",
    "questionEn": "[Question 6] When analyzing hardware-software integration and operational control for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance, identify the correct engineering relationship:",
    "questionAr": "[السؤال 6] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities.",
    "correctAnswerAr": "تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية.",
    "explanationEn": "Engineering Analysis: Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities.",
    "explanationAr": "التحليل الهندسي المعتمد: تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_7",
    "titleEn": "[MEDIUM] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Analysis 7",
    "titleAr": "[مستوى متوسط] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - تحليل 7",
    "questionEn": "[Question 7] When analyzing hardware-software integration and operational control for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation, identify the correct engineering relationship:",
    "questionAr": "[السؤال 7] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
    "correctAnswerAr": "يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
    "explanationEn": "Engineering Analysis: Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
    "explanationAr": "التحليل الهندسي المعتمد: يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_8",
    "titleEn": "[MEDIUM] H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection - Analysis 8",
    "titleAr": "[مستوى متوسط] بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن - تحليل 8",
    "questionEn": "[Question 8] When analyzing hardware-software integration and operational control for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection, identify the correct engineering relationship:",
    "questionAr": "[السؤال 8] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Shoot-through occurs if high-side and low-side switches in the same half-bridge leg turn ON simultaneously, causing a dead short across the DC bus; gate drivers enforce hardware dead-time ($t_{dead} \\approx 100-500\\ ns$).",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "يحدث التوصيل المتزامن القاتل (Shoot-through) إذا فُتح المفتاحان العلوي والسفلي في نفس الساق معاً مسبباً دائرة قصر، لذا تفرض دوائر القيادة زمناً ميتاً ($t_{dead} \\approx 100-500\\ ns$).",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Shoot-through occurs if high-side and low-side switches in the same half-bridge leg turn ON simultaneously, causing a dead short across the DC bus; gate drivers enforce hardware dead-time ($t_{dead} \\approx 100-500\\ ns$).",
    "correctAnswerAr": "يحدث التوصيل المتزامن القاتل (Shoot-through) إذا فُتح المفتاحان العلوي والسفلي في نفس الساق معاً مسبباً دائرة قصر، لذا تفرض دوائر القيادة زمناً ميتاً ($t_{dead} \\approx 100-500\\ ns$).",
    "explanationEn": "Engineering Analysis: Shoot-through occurs if high-side and low-side switches in the same half-bridge leg turn ON simultaneously, causing a dead short across the DC bus; gate drivers enforce hardware dead-time ($t_{dead} \\approx 100-500\\ ns$).",
    "explanationAr": "التحليل الهندسي المعتمد: يحدث التوصيل المتزامن القاتل (Shoot-through) إذا فُتح المفتاحان العلوي والسفلي في نفس الساق معاً مسبباً دائرة قصر، لذا تفرض دوائر القيادة زمناً ميتاً ($t_{dead} \\approx 100-500\\ ns$).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_9",
    "titleEn": "[MEDIUM] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Analysis 9",
    "titleAr": "[مستوى متوسط] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - تحليل 9",
    "questionEn": "[Question 9] When analyzing hardware-software integration and operational control for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices, identify the correct engineering relationship:",
    "questionAr": "[السؤال 9] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
    "correctAnswerAr": "تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
    "explanationEn": "Engineering Analysis: The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_10",
    "titleEn": "[MEDIUM] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Analysis 10",
    "titleAr": "[مستوى متوسط] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - تحليل 10",
    "questionEn": "[Question 10] When analyzing hardware-software integration and operational control for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance, identify the correct engineering relationship:",
    "questionAr": "[السؤال 10] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities.",
    "correctAnswerAr": "تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية.",
    "explanationEn": "Engineering Analysis: Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities.",
    "explanationAr": "التحليل الهندسي المعتمد: تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_11",
    "titleEn": "[MEDIUM] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Analysis 11",
    "titleAr": "[مستوى متوسط] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - تحليل 11",
    "questionEn": "[Question 11] When analyzing hardware-software integration and operational control for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation, identify the correct engineering relationship:",
    "questionAr": "[السؤال 11] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
    "correctAnswerAr": "يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
    "explanationEn": "Engineering Analysis: Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
    "explanationAr": "التحليل الهندسي المعتمد: يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_12",
    "titleEn": "[MEDIUM] H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection - Analysis 12",
    "titleAr": "[مستوى متوسط] بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن - تحليل 12",
    "questionEn": "[Question 12] When analyzing hardware-software integration and operational control for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection, identify the correct engineering relationship:",
    "questionAr": "[السؤال 12] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Shoot-through occurs if high-side and low-side switches in the same half-bridge leg turn ON simultaneously, causing a dead short across the DC bus; gate drivers enforce hardware dead-time ($t_{dead} \\approx 100-500\\ ns$).",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "يحدث التوصيل المتزامن القاتل (Shoot-through) إذا فُتح المفتاحان العلوي والسفلي في نفس الساق معاً مسبباً دائرة قصر، لذا تفرض دوائر القيادة زمناً ميتاً ($t_{dead} \\approx 100-500\\ ns$).",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Shoot-through occurs if high-side and low-side switches in the same half-bridge leg turn ON simultaneously, causing a dead short across the DC bus; gate drivers enforce hardware dead-time ($t_{dead} \\approx 100-500\\ ns$).",
    "correctAnswerAr": "يحدث التوصيل المتزامن القاتل (Shoot-through) إذا فُتح المفتاحان العلوي والسفلي في نفس الساق معاً مسبباً دائرة قصر، لذا تفرض دوائر القيادة زمناً ميتاً ($t_{dead} \\approx 100-500\\ ns$).",
    "explanationEn": "Engineering Analysis: Shoot-through occurs if high-side and low-side switches in the same half-bridge leg turn ON simultaneously, causing a dead short across the DC bus; gate drivers enforce hardware dead-time ($t_{dead} \\approx 100-500\\ ns$).",
    "explanationAr": "التحليل الهندسي المعتمد: يحدث التوصيل المتزامن القاتل (Shoot-through) إذا فُتح المفتاحان العلوي والسفلي في نفس الساق معاً مسبباً دائرة قصر، لذا تفرض دوائر القيادة زمناً ميتاً ($t_{dead} \\approx 100-500\\ ns$).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_13",
    "titleEn": "[MEDIUM] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Analysis 13",
    "titleAr": "[مستوى متوسط] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - تحليل 13",
    "questionEn": "[Question 13] When analyzing hardware-software integration and operational control for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices, identify the correct engineering relationship:",
    "questionAr": "[السؤال 13] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
    "correctAnswerAr": "تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
    "explanationEn": "Engineering Analysis: The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_14",
    "titleEn": "[MEDIUM] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Analysis 14",
    "titleAr": "[مستوى متوسط] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - تحليل 14",
    "questionEn": "[Question 14] When analyzing hardware-software integration and operational control for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance, identify the correct engineering relationship:",
    "questionAr": "[السؤال 14] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities.",
    "correctAnswerAr": "تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية.",
    "explanationEn": "Engineering Analysis: Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities.",
    "explanationAr": "التحليل الهندسي المعتمد: تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_15",
    "titleEn": "[MEDIUM] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Analysis 15",
    "titleAr": "[مستوى متوسط] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - تحليل 15",
    "questionEn": "[Question 15] When analyzing hardware-software integration and operational control for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation, identify the correct engineering relationship:",
    "questionAr": "[السؤال 15] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
    "correctAnswerAr": "يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
    "explanationEn": "Engineering Analysis: Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
    "explanationAr": "التحليل الهندسي المعتمد: يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_16",
    "titleEn": "[MEDIUM] H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection - Analysis 16",
    "titleAr": "[مستوى متوسط] بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن - تحليل 16",
    "questionEn": "[Question 16] When analyzing hardware-software integration and operational control for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection, identify the correct engineering relationship:",
    "questionAr": "[السؤال 16] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Shoot-through occurs if high-side and low-side switches in the same half-bridge leg turn ON simultaneously, causing a dead short across the DC bus; gate drivers enforce hardware dead-time ($t_{dead} \\approx 100-500\\ ns$).",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "يحدث التوصيل المتزامن القاتل (Shoot-through) إذا فُتح المفتاحان العلوي والسفلي في نفس الساق معاً مسبباً دائرة قصر، لذا تفرض دوائر القيادة زمناً ميتاً ($t_{dead} \\approx 100-500\\ ns$).",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Shoot-through occurs if high-side and low-side switches in the same half-bridge leg turn ON simultaneously, causing a dead short across the DC bus; gate drivers enforce hardware dead-time ($t_{dead} \\approx 100-500\\ ns$).",
    "correctAnswerAr": "يحدث التوصيل المتزامن القاتل (Shoot-through) إذا فُتح المفتاحان العلوي والسفلي في نفس الساق معاً مسبباً دائرة قصر، لذا تفرض دوائر القيادة زمناً ميتاً ($t_{dead} \\approx 100-500\\ ns$).",
    "explanationEn": "Engineering Analysis: Shoot-through occurs if high-side and low-side switches in the same half-bridge leg turn ON simultaneously, causing a dead short across the DC bus; gate drivers enforce hardware dead-time ($t_{dead} \\approx 100-500\\ ns$).",
    "explanationAr": "التحليل الهندسي المعتمد: يحدث التوصيل المتزامن القاتل (Shoot-through) إذا فُتح المفتاحان العلوي والسفلي في نفس الساق معاً مسبباً دائرة قصر، لذا تفرض دوائر القيادة زمناً ميتاً ($t_{dead} \\approx 100-500\\ ns$).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_17",
    "titleEn": "[MEDIUM] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Analysis 17",
    "titleAr": "[مستوى متوسط] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - تحليل 17",
    "questionEn": "[Question 17] When analyzing hardware-software integration and operational control for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices, identify the correct engineering relationship:",
    "questionAr": "[السؤال 17] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
    "correctAnswerAr": "تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
    "explanationEn": "Engineering Analysis: The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_18",
    "titleEn": "[MEDIUM] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Analysis 18",
    "titleAr": "[مستوى متوسط] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - تحليل 18",
    "questionEn": "[Question 18] When analyzing hardware-software integration and operational control for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance, identify the correct engineering relationship:",
    "questionAr": "[السؤال 18] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities.",
    "correctAnswerAr": "تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية.",
    "explanationEn": "Engineering Analysis: Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities.",
    "explanationAr": "التحليل الهندسي المعتمد: تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_19",
    "titleEn": "[MEDIUM] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Analysis 19",
    "titleAr": "[مستوى متوسط] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - تحليل 19",
    "questionEn": "[Question 19] When analyzing hardware-software integration and operational control for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation, identify the correct engineering relationship:",
    "questionAr": "[السؤال 19] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
    "correctAnswerAr": "يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
    "explanationEn": "Engineering Analysis: Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
    "explanationAr": "التحليل الهندسي المعتمد: يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_20",
    "titleEn": "[MEDIUM] H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection - Analysis 20",
    "titleAr": "[مستوى متوسط] بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن - تحليل 20",
    "questionEn": "[Question 20] When analyzing hardware-software integration and operational control for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection, identify the correct engineering relationship:",
    "questionAr": "[السؤال 20] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Shoot-through occurs if high-side and low-side switches in the same half-bridge leg turn ON simultaneously, causing a dead short across the DC bus; gate drivers enforce hardware dead-time ($t_{dead} \\approx 100-500\\ ns$).",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "يحدث التوصيل المتزامن القاتل (Shoot-through) إذا فُتح المفتاحان العلوي والسفلي في نفس الساق معاً مسبباً دائرة قصر، لذا تفرض دوائر القيادة زمناً ميتاً ($t_{dead} \\approx 100-500\\ ns$).",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Shoot-through occurs if high-side and low-side switches in the same half-bridge leg turn ON simultaneously, causing a dead short across the DC bus; gate drivers enforce hardware dead-time ($t_{dead} \\approx 100-500\\ ns$).",
    "correctAnswerAr": "يحدث التوصيل المتزامن القاتل (Shoot-through) إذا فُتح المفتاحان العلوي والسفلي في نفس الساق معاً مسبباً دائرة قصر، لذا تفرض دوائر القيادة زمناً ميتاً ($t_{dead} \\approx 100-500\\ ns$).",
    "explanationEn": "Engineering Analysis: Shoot-through occurs if high-side and low-side switches in the same half-bridge leg turn ON simultaneously, causing a dead short across the DC bus; gate drivers enforce hardware dead-time ($t_{dead} \\approx 100-500\\ ns$).",
    "explanationAr": "التحليل الهندسي المعتمد: يحدث التوصيل المتزامن القاتل (Shoot-through) إذا فُتح المفتاحان العلوي والسفلي في نفس الساق معاً مسبباً دائرة قصر، لذا تفرض دوائر القيادة زمناً ميتاً ($t_{dead} \\approx 100-500\\ ns$).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_21",
    "titleEn": "[MEDIUM] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Analysis 21",
    "titleAr": "[مستوى متوسط] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - تحليل 21",
    "questionEn": "[Question 21] When analyzing hardware-software integration and operational control for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices, identify the correct engineering relationship:",
    "questionAr": "[السؤال 21] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
    "correctAnswerAr": "تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
    "explanationEn": "Engineering Analysis: The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_22",
    "titleEn": "[MEDIUM] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Analysis 22",
    "titleAr": "[مستوى متوسط] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - تحليل 22",
    "questionEn": "[Question 22] When analyzing hardware-software integration and operational control for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance, identify the correct engineering relationship:",
    "questionAr": "[السؤال 22] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities.",
    "correctAnswerAr": "تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية.",
    "explanationEn": "Engineering Analysis: Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities.",
    "explanationAr": "التحليل الهندسي المعتمد: تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_23",
    "titleEn": "[MEDIUM] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Analysis 23",
    "titleAr": "[مستوى متوسط] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - تحليل 23",
    "questionEn": "[Question 23] When analyzing hardware-software integration and operational control for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation, identify the correct engineering relationship:",
    "questionAr": "[السؤال 23] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
    "correctAnswerAr": "يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
    "explanationEn": "Engineering Analysis: Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
    "explanationAr": "التحليل الهندسي المعتمد: يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_24",
    "titleEn": "[MEDIUM] H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection - Analysis 24",
    "titleAr": "[مستوى متوسط] بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن - تحليل 24",
    "questionEn": "[Question 24] When analyzing hardware-software integration and operational control for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection, identify the correct engineering relationship:",
    "questionAr": "[السؤال 24] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Shoot-through occurs if high-side and low-side switches in the same half-bridge leg turn ON simultaneously, causing a dead short across the DC bus; gate drivers enforce hardware dead-time ($t_{dead} \\approx 100-500\\ ns$).",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "يحدث التوصيل المتزامن القاتل (Shoot-through) إذا فُتح المفتاحان العلوي والسفلي في نفس الساق معاً مسبباً دائرة قصر، لذا تفرض دوائر القيادة زمناً ميتاً ($t_{dead} \\approx 100-500\\ ns$).",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Shoot-through occurs if high-side and low-side switches in the same half-bridge leg turn ON simultaneously, causing a dead short across the DC bus; gate drivers enforce hardware dead-time ($t_{dead} \\approx 100-500\\ ns$).",
    "correctAnswerAr": "يحدث التوصيل المتزامن القاتل (Shoot-through) إذا فُتح المفتاحان العلوي والسفلي في نفس الساق معاً مسبباً دائرة قصر، لذا تفرض دوائر القيادة زمناً ميتاً ($t_{dead} \\approx 100-500\\ ns$).",
    "explanationEn": "Engineering Analysis: Shoot-through occurs if high-side and low-side switches in the same half-bridge leg turn ON simultaneously, causing a dead short across the DC bus; gate drivers enforce hardware dead-time ($t_{dead} \\approx 100-500\\ ns$).",
    "explanationAr": "التحليل الهندسي المعتمد: يحدث التوصيل المتزامن القاتل (Shoot-through) إذا فُتح المفتاحان العلوي والسفلي في نفس الساق معاً مسبباً دائرة قصر، لذا تفرض دوائر القيادة زمناً ميتاً ($t_{dead} \\approx 100-500\\ ns$).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_25",
    "titleEn": "[MEDIUM] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Analysis 25",
    "titleAr": "[مستوى متوسط] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - تحليل 25",
    "questionEn": "[Question 25] When analyzing hardware-software integration and operational control for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices, identify the correct engineering relationship:",
    "questionAr": "[السؤال 25] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
    "correctAnswerAr": "تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
    "explanationEn": "Engineering Analysis: The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_26",
    "titleEn": "[MEDIUM] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Analysis 26",
    "titleAr": "[مستوى متوسط] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - تحليل 26",
    "questionEn": "[Question 26] When analyzing hardware-software integration and operational control for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance, identify the correct engineering relationship:",
    "questionAr": "[السؤال 26] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities.",
    "correctAnswerAr": "تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية.",
    "explanationEn": "Engineering Analysis: Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities.",
    "explanationAr": "التحليل الهندسي المعتمد: تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_27",
    "titleEn": "[MEDIUM] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Analysis 27",
    "titleAr": "[مستوى متوسط] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - تحليل 27",
    "questionEn": "[Question 27] When analyzing hardware-software integration and operational control for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation, identify the correct engineering relationship:",
    "questionAr": "[السؤال 27] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
    "correctAnswerAr": "يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
    "explanationEn": "Engineering Analysis: Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
    "explanationAr": "التحليل الهندسي المعتمد: يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_28",
    "titleEn": "[MEDIUM] H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection - Analysis 28",
    "titleAr": "[مستوى متوسط] بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن - تحليل 28",
    "questionEn": "[Question 28] When analyzing hardware-software integration and operational control for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection, identify the correct engineering relationship:",
    "questionAr": "[السؤال 28] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Shoot-through occurs if high-side and low-side switches in the same half-bridge leg turn ON simultaneously, causing a dead short across the DC bus; gate drivers enforce hardware dead-time ($t_{dead} \\approx 100-500\\ ns$).",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "يحدث التوصيل المتزامن القاتل (Shoot-through) إذا فُتح المفتاحان العلوي والسفلي في نفس الساق معاً مسبباً دائرة قصر، لذا تفرض دوائر القيادة زمناً ميتاً ($t_{dead} \\approx 100-500\\ ns$).",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Shoot-through occurs if high-side and low-side switches in the same half-bridge leg turn ON simultaneously, causing a dead short across the DC bus; gate drivers enforce hardware dead-time ($t_{dead} \\approx 100-500\\ ns$).",
    "correctAnswerAr": "يحدث التوصيل المتزامن القاتل (Shoot-through) إذا فُتح المفتاحان العلوي والسفلي في نفس الساق معاً مسبباً دائرة قصر، لذا تفرض دوائر القيادة زمناً ميتاً ($t_{dead} \\approx 100-500\\ ns$).",
    "explanationEn": "Engineering Analysis: Shoot-through occurs if high-side and low-side switches in the same half-bridge leg turn ON simultaneously, causing a dead short across the DC bus; gate drivers enforce hardware dead-time ($t_{dead} \\approx 100-500\\ ns$).",
    "explanationAr": "التحليل الهندسي المعتمد: يحدث التوصيل المتزامن القاتل (Shoot-through) إذا فُتح المفتاحان العلوي والسفلي في نفس الساق معاً مسبباً دائرة قصر، لذا تفرض دوائر القيادة زمناً ميتاً ($t_{dead} \\approx 100-500\\ ns$).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_29",
    "titleEn": "[MEDIUM] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Analysis 29",
    "titleAr": "[مستوى متوسط] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - تحليل 29",
    "questionEn": "[Question 29] When analyzing hardware-software integration and operational control for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices, identify the correct engineering relationship:",
    "questionAr": "[السؤال 29] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
    "correctAnswerAr": "تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
    "explanationEn": "Engineering Analysis: The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_30",
    "titleEn": "[MEDIUM] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Analysis 30",
    "titleAr": "[مستوى متوسط] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - تحليل 30",
    "questionEn": "[Question 30] When analyzing hardware-software integration and operational control for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance, identify the correct engineering relationship:",
    "questionAr": "[السؤال 30] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities.",
    "correctAnswerAr": "تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية.",
    "explanationEn": "Engineering Analysis: Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities.",
    "explanationAr": "التحليل الهندسي المعتمد: تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_31",
    "titleEn": "[MEDIUM] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Analysis 31",
    "titleAr": "[مستوى متوسط] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - تحليل 31",
    "questionEn": "[Question 31] When analyzing hardware-software integration and operational control for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation, identify the correct engineering relationship:",
    "questionAr": "[السؤال 31] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
    "correctAnswerAr": "يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
    "explanationEn": "Engineering Analysis: Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
    "explanationAr": "التحليل الهندسي المعتمد: يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_32",
    "titleEn": "[MEDIUM] H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection - Analysis 32",
    "titleAr": "[مستوى متوسط] بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن - تحليل 32",
    "questionEn": "[Question 32] When analyzing hardware-software integration and operational control for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection, identify the correct engineering relationship:",
    "questionAr": "[السؤال 32] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Shoot-through occurs if high-side and low-side switches in the same half-bridge leg turn ON simultaneously, causing a dead short across the DC bus; gate drivers enforce hardware dead-time ($t_{dead} \\approx 100-500\\ ns$).",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "يحدث التوصيل المتزامن القاتل (Shoot-through) إذا فُتح المفتاحان العلوي والسفلي في نفس الساق معاً مسبباً دائرة قصر، لذا تفرض دوائر القيادة زمناً ميتاً ($t_{dead} \\approx 100-500\\ ns$).",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Shoot-through occurs if high-side and low-side switches in the same half-bridge leg turn ON simultaneously, causing a dead short across the DC bus; gate drivers enforce hardware dead-time ($t_{dead} \\approx 100-500\\ ns$).",
    "correctAnswerAr": "يحدث التوصيل المتزامن القاتل (Shoot-through) إذا فُتح المفتاحان العلوي والسفلي في نفس الساق معاً مسبباً دائرة قصر، لذا تفرض دوائر القيادة زمناً ميتاً ($t_{dead} \\approx 100-500\\ ns$).",
    "explanationEn": "Engineering Analysis: Shoot-through occurs if high-side and low-side switches in the same half-bridge leg turn ON simultaneously, causing a dead short across the DC bus; gate drivers enforce hardware dead-time ($t_{dead} \\approx 100-500\\ ns$).",
    "explanationAr": "التحليل الهندسي المعتمد: يحدث التوصيل المتزامن القاتل (Shoot-through) إذا فُتح المفتاحان العلوي والسفلي في نفس الساق معاً مسبباً دائرة قصر، لذا تفرض دوائر القيادة زمناً ميتاً ($t_{dead} \\approx 100-500\\ ns$).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_33",
    "titleEn": "[MEDIUM] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Analysis 33",
    "titleAr": "[مستوى متوسط] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - تحليل 33",
    "questionEn": "[Question 33] When analyzing hardware-software integration and operational control for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices, identify the correct engineering relationship:",
    "questionAr": "[السؤال 33] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
    "correctAnswerAr": "تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
    "explanationEn": "Engineering Analysis: The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_34",
    "titleEn": "[MEDIUM] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Analysis 34",
    "titleAr": "[مستوى متوسط] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - تحليل 34",
    "questionEn": "[Question 34] When analyzing hardware-software integration and operational control for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance, identify the correct engineering relationship:",
    "questionAr": "[السؤال 34] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities.",
    "correctAnswerAr": "تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية.",
    "explanationEn": "Engineering Analysis: Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities.",
    "explanationAr": "التحليل الهندسي المعتمد: تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_35",
    "titleEn": "[MEDIUM] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Analysis 35",
    "titleAr": "[مستوى متوسط] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - تحليل 35",
    "questionEn": "[Question 35] When analyzing hardware-software integration and operational control for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation, identify the correct engineering relationship:",
    "questionAr": "[السؤال 35] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
    "correctAnswerAr": "يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
    "explanationEn": "Engineering Analysis: Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
    "explanationAr": "التحليل الهندسي المعتمد: يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_36",
    "titleEn": "[MEDIUM] H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection - Analysis 36",
    "titleAr": "[مستوى متوسط] بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن - تحليل 36",
    "questionEn": "[Question 36] When analyzing hardware-software integration and operational control for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection, identify the correct engineering relationship:",
    "questionAr": "[السؤال 36] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Shoot-through occurs if high-side and low-side switches in the same half-bridge leg turn ON simultaneously, causing a dead short across the DC bus; gate drivers enforce hardware dead-time ($t_{dead} \\approx 100-500\\ ns$).",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "يحدث التوصيل المتزامن القاتل (Shoot-through) إذا فُتح المفتاحان العلوي والسفلي في نفس الساق معاً مسبباً دائرة قصر، لذا تفرض دوائر القيادة زمناً ميتاً ($t_{dead} \\approx 100-500\\ ns$).",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Shoot-through occurs if high-side and low-side switches in the same half-bridge leg turn ON simultaneously, causing a dead short across the DC bus; gate drivers enforce hardware dead-time ($t_{dead} \\approx 100-500\\ ns$).",
    "correctAnswerAr": "يحدث التوصيل المتزامن القاتل (Shoot-through) إذا فُتح المفتاحان العلوي والسفلي في نفس الساق معاً مسبباً دائرة قصر، لذا تفرض دوائر القيادة زمناً ميتاً ($t_{dead} \\approx 100-500\\ ns$).",
    "explanationEn": "Engineering Analysis: Shoot-through occurs if high-side and low-side switches in the same half-bridge leg turn ON simultaneously, causing a dead short across the DC bus; gate drivers enforce hardware dead-time ($t_{dead} \\approx 100-500\\ ns$).",
    "explanationAr": "التحليل الهندسي المعتمد: يحدث التوصيل المتزامن القاتل (Shoot-through) إذا فُتح المفتاحان العلوي والسفلي في نفس الساق معاً مسبباً دائرة قصر، لذا تفرض دوائر القيادة زمناً ميتاً ($t_{dead} \\approx 100-500\\ ns$).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_37",
    "titleEn": "[MEDIUM] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Analysis 37",
    "titleAr": "[مستوى متوسط] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - تحليل 37",
    "questionEn": "[Question 37] When analyzing hardware-software integration and operational control for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices, identify the correct engineering relationship:",
    "questionAr": "[السؤال 37] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
    "correctAnswerAr": "تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
    "explanationEn": "Engineering Analysis: The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_38",
    "titleEn": "[MEDIUM] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Analysis 38",
    "titleAr": "[مستوى متوسط] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - تحليل 38",
    "questionEn": "[Question 38] When analyzing hardware-software integration and operational control for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance, identify the correct engineering relationship:",
    "questionAr": "[السؤال 38] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities.",
    "correctAnswerAr": "تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية.",
    "explanationEn": "Engineering Analysis: Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities.",
    "explanationAr": "التحليل الهندسي المعتمد: تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_39",
    "titleEn": "[MEDIUM] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Analysis 39",
    "titleAr": "[مستوى متوسط] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - تحليل 39",
    "questionEn": "[Question 39] When analyzing hardware-software integration and operational control for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation, identify the correct engineering relationship:",
    "questionAr": "[السؤال 39] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
    "correctAnswerAr": "يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
    "explanationEn": "Engineering Analysis: Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
    "explanationAr": "التحليل الهندسي المعتمد: يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_40",
    "titleEn": "[MEDIUM] H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection - Analysis 40",
    "titleAr": "[مستوى متوسط] بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن - تحليل 40",
    "questionEn": "[Question 40] When analyzing hardware-software integration and operational control for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection, identify the correct engineering relationship:",
    "questionAr": "[السؤال 40] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Shoot-through occurs if high-side and low-side switches in the same half-bridge leg turn ON simultaneously, causing a dead short across the DC bus; gate drivers enforce hardware dead-time ($t_{dead} \\approx 100-500\\ ns$).",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "يحدث التوصيل المتزامن القاتل (Shoot-through) إذا فُتح المفتاحان العلوي والسفلي في نفس الساق معاً مسبباً دائرة قصر، لذا تفرض دوائر القيادة زمناً ميتاً ($t_{dead} \\approx 100-500\\ ns$).",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Shoot-through occurs if high-side and low-side switches in the same half-bridge leg turn ON simultaneously, causing a dead short across the DC bus; gate drivers enforce hardware dead-time ($t_{dead} \\approx 100-500\\ ns$).",
    "correctAnswerAr": "يحدث التوصيل المتزامن القاتل (Shoot-through) إذا فُتح المفتاحان العلوي والسفلي في نفس الساق معاً مسبباً دائرة قصر، لذا تفرض دوائر القيادة زمناً ميتاً ($t_{dead} \\approx 100-500\\ ns$).",
    "explanationEn": "Engineering Analysis: Shoot-through occurs if high-side and low-side switches in the same half-bridge leg turn ON simultaneously, causing a dead short across the DC bus; gate drivers enforce hardware dead-time ($t_{dead} \\approx 100-500\\ ns$).",
    "explanationAr": "التحليل الهندسي المعتمد: يحدث التوصيل المتزامن القاتل (Shoot-through) إذا فُتح المفتاحان العلوي والسفلي في نفس الساق معاً مسبباً دائرة قصر، لذا تفرض دوائر القيادة زمناً ميتاً ($t_{dead} \\approx 100-500\\ ns$).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_41",
    "titleEn": "[MEDIUM] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Analysis 41",
    "titleAr": "[مستوى متوسط] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - تحليل 41",
    "questionEn": "[Question 41] When analyzing hardware-software integration and operational control for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices, identify the correct engineering relationship:",
    "questionAr": "[السؤال 41] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
    "correctAnswerAr": "تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
    "explanationEn": "Engineering Analysis: The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_42",
    "titleEn": "[MEDIUM] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Analysis 42",
    "titleAr": "[مستوى متوسط] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - تحليل 42",
    "questionEn": "[Question 42] When analyzing hardware-software integration and operational control for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance, identify the correct engineering relationship:",
    "questionAr": "[السؤال 42] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities.",
    "correctAnswerAr": "تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية.",
    "explanationEn": "Engineering Analysis: Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities.",
    "explanationAr": "التحليل الهندسي المعتمد: تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_43",
    "titleEn": "[MEDIUM] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Analysis 43",
    "titleAr": "[مستوى متوسط] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - تحليل 43",
    "questionEn": "[Question 43] When analyzing hardware-software integration and operational control for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation, identify the correct engineering relationship:",
    "questionAr": "[السؤال 43] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
    "correctAnswerAr": "يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
    "explanationEn": "Engineering Analysis: Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
    "explanationAr": "التحليل الهندسي المعتمد: يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_44",
    "titleEn": "[MEDIUM] H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection - Analysis 44",
    "titleAr": "[مستوى متوسط] بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن - تحليل 44",
    "questionEn": "[Question 44] When analyzing hardware-software integration and operational control for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection, identify the correct engineering relationship:",
    "questionAr": "[السؤال 44] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Shoot-through occurs if high-side and low-side switches in the same half-bridge leg turn ON simultaneously, causing a dead short across the DC bus; gate drivers enforce hardware dead-time ($t_{dead} \\approx 100-500\\ ns$).",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "يحدث التوصيل المتزامن القاتل (Shoot-through) إذا فُتح المفتاحان العلوي والسفلي في نفس الساق معاً مسبباً دائرة قصر، لذا تفرض دوائر القيادة زمناً ميتاً ($t_{dead} \\approx 100-500\\ ns$).",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Shoot-through occurs if high-side and low-side switches in the same half-bridge leg turn ON simultaneously, causing a dead short across the DC bus; gate drivers enforce hardware dead-time ($t_{dead} \\approx 100-500\\ ns$).",
    "correctAnswerAr": "يحدث التوصيل المتزامن القاتل (Shoot-through) إذا فُتح المفتاحان العلوي والسفلي في نفس الساق معاً مسبباً دائرة قصر، لذا تفرض دوائر القيادة زمناً ميتاً ($t_{dead} \\approx 100-500\\ ns$).",
    "explanationEn": "Engineering Analysis: Shoot-through occurs if high-side and low-side switches in the same half-bridge leg turn ON simultaneously, causing a dead short across the DC bus; gate drivers enforce hardware dead-time ($t_{dead} \\approx 100-500\\ ns$).",
    "explanationAr": "التحليل الهندسي المعتمد: يحدث التوصيل المتزامن القاتل (Shoot-through) إذا فُتح المفتاحان العلوي والسفلي في نفس الساق معاً مسبباً دائرة قصر، لذا تفرض دوائر القيادة زمناً ميتاً ($t_{dead} \\approx 100-500\\ ns$).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_45",
    "titleEn": "[MEDIUM] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Analysis 45",
    "titleAr": "[مستوى متوسط] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - تحليل 45",
    "questionEn": "[Question 45] When analyzing hardware-software integration and operational control for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices, identify the correct engineering relationship:",
    "questionAr": "[السؤال 45] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
    "correctAnswerAr": "تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
    "explanationEn": "Engineering Analysis: The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_46",
    "titleEn": "[MEDIUM] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Analysis 46",
    "titleAr": "[مستوى متوسط] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - تحليل 46",
    "questionEn": "[Question 46] When analyzing hardware-software integration and operational control for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance, identify the correct engineering relationship:",
    "questionAr": "[السؤال 46] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities.",
    "correctAnswerAr": "تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية.",
    "explanationEn": "Engineering Analysis: Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities.",
    "explanationAr": "التحليل الهندسي المعتمد: تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_47",
    "titleEn": "[MEDIUM] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Analysis 47",
    "titleAr": "[مستوى متوسط] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - تحليل 47",
    "questionEn": "[Question 47] When analyzing hardware-software integration and operational control for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation, identify the correct engineering relationship:",
    "questionAr": "[السؤال 47] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
    "correctAnswerAr": "يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
    "explanationEn": "Engineering Analysis: Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
    "explanationAr": "التحليل الهندسي المعتمد: يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_48",
    "titleEn": "[MEDIUM] H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection - Analysis 48",
    "titleAr": "[مستوى متوسط] بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن - تحليل 48",
    "questionEn": "[Question 48] When analyzing hardware-software integration and operational control for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection, identify the correct engineering relationship:",
    "questionAr": "[السؤال 48] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Shoot-through occurs if high-side and low-side switches in the same half-bridge leg turn ON simultaneously, causing a dead short across the DC bus; gate drivers enforce hardware dead-time ($t_{dead} \\approx 100-500\\ ns$).",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "يحدث التوصيل المتزامن القاتل (Shoot-through) إذا فُتح المفتاحان العلوي والسفلي في نفس الساق معاً مسبباً دائرة قصر، لذا تفرض دوائر القيادة زمناً ميتاً ($t_{dead} \\approx 100-500\\ ns$).",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Shoot-through occurs if high-side and low-side switches in the same half-bridge leg turn ON simultaneously, causing a dead short across the DC bus; gate drivers enforce hardware dead-time ($t_{dead} \\approx 100-500\\ ns$).",
    "correctAnswerAr": "يحدث التوصيل المتزامن القاتل (Shoot-through) إذا فُتح المفتاحان العلوي والسفلي في نفس الساق معاً مسبباً دائرة قصر، لذا تفرض دوائر القيادة زمناً ميتاً ($t_{dead} \\approx 100-500\\ ns$).",
    "explanationEn": "Engineering Analysis: Shoot-through occurs if high-side and low-side switches in the same half-bridge leg turn ON simultaneously, causing a dead short across the DC bus; gate drivers enforce hardware dead-time ($t_{dead} \\approx 100-500\\ ns$).",
    "explanationAr": "التحليل الهندسي المعتمد: يحدث التوصيل المتزامن القاتل (Shoot-through) إذا فُتح المفتاحان العلوي والسفلي في نفس الساق معاً مسبباً دائرة قصر، لذا تفرض دوائر القيادة زمناً ميتاً ($t_{dead} \\approx 100-500\\ ns$).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_49",
    "titleEn": "[MEDIUM] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Analysis 49",
    "titleAr": "[مستوى متوسط] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - تحليل 49",
    "questionEn": "[Question 49] When analyzing hardware-software integration and operational control for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices, identify the correct engineering relationship:",
    "questionAr": "[السؤال 49] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
    "correctAnswerAr": "تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
    "explanationEn": "Engineering Analysis: The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_50",
    "titleEn": "[MEDIUM] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Analysis 50",
    "titleAr": "[مستوى متوسط] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - تحليل 50",
    "questionEn": "[Question 50] When analyzing hardware-software integration and operational control for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance, identify the correct engineering relationship:",
    "questionAr": "[السؤال 50] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities.",
    "correctAnswerAr": "تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية.",
    "explanationEn": "Engineering Analysis: Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities.",
    "explanationAr": "التحليل الهندسي المعتمد: تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_51",
    "titleEn": "[MEDIUM] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Analysis 51",
    "titleAr": "[مستوى متوسط] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - تحليل 51",
    "questionEn": "[Question 51] When analyzing hardware-software integration and operational control for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation, identify the correct engineering relationship:",
    "questionAr": "[السؤال 51] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
    "correctAnswerAr": "يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
    "explanationEn": "Engineering Analysis: Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
    "explanationAr": "التحليل الهندسي المعتمد: يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_52",
    "titleEn": "[MEDIUM] H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection - Analysis 52",
    "titleAr": "[مستوى متوسط] بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن - تحليل 52",
    "questionEn": "[Question 52] When analyzing hardware-software integration and operational control for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection, identify the correct engineering relationship:",
    "questionAr": "[السؤال 52] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Shoot-through occurs if high-side and low-side switches in the same half-bridge leg turn ON simultaneously, causing a dead short across the DC bus; gate drivers enforce hardware dead-time ($t_{dead} \\approx 100-500\\ ns$).",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "يحدث التوصيل المتزامن القاتل (Shoot-through) إذا فُتح المفتاحان العلوي والسفلي في نفس الساق معاً مسبباً دائرة قصر، لذا تفرض دوائر القيادة زمناً ميتاً ($t_{dead} \\approx 100-500\\ ns$).",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Shoot-through occurs if high-side and low-side switches in the same half-bridge leg turn ON simultaneously, causing a dead short across the DC bus; gate drivers enforce hardware dead-time ($t_{dead} \\approx 100-500\\ ns$).",
    "correctAnswerAr": "يحدث التوصيل المتزامن القاتل (Shoot-through) إذا فُتح المفتاحان العلوي والسفلي في نفس الساق معاً مسبباً دائرة قصر، لذا تفرض دوائر القيادة زمناً ميتاً ($t_{dead} \\approx 100-500\\ ns$).",
    "explanationEn": "Engineering Analysis: Shoot-through occurs if high-side and low-side switches in the same half-bridge leg turn ON simultaneously, causing a dead short across the DC bus; gate drivers enforce hardware dead-time ($t_{dead} \\approx 100-500\\ ns$).",
    "explanationAr": "التحليل الهندسي المعتمد: يحدث التوصيل المتزامن القاتل (Shoot-through) إذا فُتح المفتاحان العلوي والسفلي في نفس الساق معاً مسبباً دائرة قصر، لذا تفرض دوائر القيادة زمناً ميتاً ($t_{dead} \\approx 100-500\\ ns$).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_53",
    "titleEn": "[MEDIUM] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Analysis 53",
    "titleAr": "[مستوى متوسط] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - تحليل 53",
    "questionEn": "[Question 53] When analyzing hardware-software integration and operational control for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices, identify the correct engineering relationship:",
    "questionAr": "[السؤال 53] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
    "correctAnswerAr": "تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
    "explanationEn": "Engineering Analysis: The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_54",
    "titleEn": "[MEDIUM] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Analysis 54",
    "titleAr": "[مستوى متوسط] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - تحليل 54",
    "questionEn": "[Question 54] When analyzing hardware-software integration and operational control for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance, identify the correct engineering relationship:",
    "questionAr": "[السؤال 54] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities.",
    "correctAnswerAr": "تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية.",
    "explanationEn": "Engineering Analysis: Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities.",
    "explanationAr": "التحليل الهندسي المعتمد: تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_55",
    "titleEn": "[MEDIUM] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Analysis 55",
    "titleAr": "[مستوى متوسط] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - تحليل 55",
    "questionEn": "[Question 55] When analyzing hardware-software integration and operational control for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation, identify the correct engineering relationship:",
    "questionAr": "[السؤال 55] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
    "correctAnswerAr": "يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
    "explanationEn": "Engineering Analysis: Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
    "explanationAr": "التحليل الهندسي المعتمد: يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_56",
    "titleEn": "[MEDIUM] H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection - Analysis 56",
    "titleAr": "[مستوى متوسط] بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن - تحليل 56",
    "questionEn": "[Question 56] When analyzing hardware-software integration and operational control for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection, identify the correct engineering relationship:",
    "questionAr": "[السؤال 56] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Shoot-through occurs if high-side and low-side switches in the same half-bridge leg turn ON simultaneously, causing a dead short across the DC bus; gate drivers enforce hardware dead-time ($t_{dead} \\approx 100-500\\ ns$).",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "يحدث التوصيل المتزامن القاتل (Shoot-through) إذا فُتح المفتاحان العلوي والسفلي في نفس الساق معاً مسبباً دائرة قصر، لذا تفرض دوائر القيادة زمناً ميتاً ($t_{dead} \\approx 100-500\\ ns$).",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Shoot-through occurs if high-side and low-side switches in the same half-bridge leg turn ON simultaneously, causing a dead short across the DC bus; gate drivers enforce hardware dead-time ($t_{dead} \\approx 100-500\\ ns$).",
    "correctAnswerAr": "يحدث التوصيل المتزامن القاتل (Shoot-through) إذا فُتح المفتاحان العلوي والسفلي في نفس الساق معاً مسبباً دائرة قصر، لذا تفرض دوائر القيادة زمناً ميتاً ($t_{dead} \\approx 100-500\\ ns$).",
    "explanationEn": "Engineering Analysis: Shoot-through occurs if high-side and low-side switches in the same half-bridge leg turn ON simultaneously, causing a dead short across the DC bus; gate drivers enforce hardware dead-time ($t_{dead} \\approx 100-500\\ ns$).",
    "explanationAr": "التحليل الهندسي المعتمد: يحدث التوصيل المتزامن القاتل (Shoot-through) إذا فُتح المفتاحان العلوي والسفلي في نفس الساق معاً مسبباً دائرة قصر، لذا تفرض دوائر القيادة زمناً ميتاً ($t_{dead} \\approx 100-500\\ ns$).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_57",
    "titleEn": "[MEDIUM] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Analysis 57",
    "titleAr": "[مستوى متوسط] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - تحليل 57",
    "questionEn": "[Question 57] When analyzing hardware-software integration and operational control for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices, identify the correct engineering relationship:",
    "questionAr": "[السؤال 57] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
    "correctAnswerAr": "تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
    "explanationEn": "Engineering Analysis: The $4 \\times 4$ homogeneous transformation matrix $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ maps coordinates from link frame $i$ to frame $i-1$.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مصفوفة التحويل المتجانسة $4 \\times 4$ بالعلاقة $A_i = Rot(z, \\theta_i) \\cdot Trans(z, d_i) \\cdot Trans(x, a_i) \\cdot Rot(x, \\alpha_i)$ بتحويل الإحداثيات من نظام إحداثيات الوصلة $i$ إلى الوصلة $i-1$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_58",
    "titleEn": "[MEDIUM] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Analysis 58",
    "titleAr": "[مستوى متوسط] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - تحليل 58",
    "questionEn": "[Question 58] When analyzing hardware-software integration and operational control for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance, identify the correct engineering relationship:",
    "questionAr": "[السؤال 58] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities.",
    "correctAnswerAr": "تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية.",
    "explanationEn": "Engineering Analysis: Kinematic singularities occur when the manipulator Jacobian matrix loses full rank ($\\det(J) = 0$), causing the loss of one or more degrees of freedom and requiring infinite joint velocities.",
    "explanationAr": "التحليل الهندسي المعتمد: تحدث نقاط الانفراد الكينماتيكية عندما تفقد مصفوفة جاكوبيان رتبتها الكاملة ($\\det(J) = 0$)، مما يؤدي لفقدان درجة حرية أو أكثر ويتطلب سرعات مفاصل لا نهائية.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch1_med_59",
    "titleEn": "[MEDIUM] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Analysis 59",
    "titleAr": "[مستوى متوسط] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - تحليل 59",
    "questionEn": "[Question 59] When analyzing hardware-software integration and operational control for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation, identify the correct engineering relationship:",
    "questionAr": "[السؤال 59] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
    "correctAnswerAr": "يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
    "explanationEn": "Engineering Analysis: Six-step (trapezoidal) commutation energizes two stator phases at any instant (one high, one low, one floating), achieving high torque density with lower switching losses than sinusoidal drives.",
    "explanationAr": "التحليل الهندسي المعتمد: يغذي التبديل السداسي شبه المنحرف مرحلتين من ملفات العضو الثابت في أي لحظة (إحداهما موجبة والأخرى سالبة والثالثة عائمة)، محققاً كثافة عزم عالية مع فواقد مفاتيح منخفضة.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  }
],
  hots: [
  {
    "id": "th_robotics_ch1_hots_1",
    "titleEn": "[HOTS] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Advanced Synthesis 1",
    "titleAr": "[تفكير عليا] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - تركيب متقدم 1",
    "questionEn": "[Question 1 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices. Determine the mathematically validated result:",
    "questionAr": "[السؤال 1 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$."
    ],
    "optionsAr": [
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "correctAnswerAr": "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_2",
    "titleEn": "[HOTS] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Advanced Synthesis 2",
    "titleAr": "[تفكير عليا] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - تركيب متقدم 2",
    "questionEn": "[Question 2 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance. Determine the mathematically validated result:",
    "questionAr": "[السؤال 2 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only."
    ],
    "optionsAr": [
      "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "correctAnswerAr": "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationEn": "Detailed Quantitative Solution: In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_3",
    "titleEn": "[HOTS] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Advanced Synthesis 3",
    "titleAr": "[تفكير عليا] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - تركيب متقدم 3",
    "questionEn": "[Question 3 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation. Determine the mathematically validated result:",
    "questionAr": "[السؤال 3 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "correctAnswerAr": "محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_4",
    "titleEn": "[HOTS] H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection - Advanced Synthesis 4",
    "titleAr": "[تفكير عليا] بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن - تركيب متقدم 4",
    "questionEn": "[Question 4 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection. Determine the mathematically validated result:",
    "questionAr": "[السؤال 4 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices."
    ],
    "optionsAr": [
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
    "correctAnswerAr": "في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
    "explanationEn": "Detailed Quantitative Solution: In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_5",
    "titleEn": "[HOTS] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Advanced Synthesis 5",
    "titleAr": "[تفكير عليا] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - تركيب متقدم 5",
    "questionEn": "[Question 5 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices. Determine the mathematically validated result:",
    "questionAr": "[السؤال 5 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "correctAnswerAr": "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_6",
    "titleEn": "[HOTS] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Advanced Synthesis 6",
    "titleAr": "[تفكير عليا] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - تركيب متقدم 6",
    "questionEn": "[Question 6 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance. Determine the mathematically validated result:",
    "questionAr": "[السؤال 6 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "correctAnswerAr": "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationEn": "Detailed Quantitative Solution: In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_7",
    "titleEn": "[HOTS] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Advanced Synthesis 7",
    "titleAr": "[تفكير عليا] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - تركيب متقدم 7",
    "questionEn": "[Question 7 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation. Determine the mathematically validated result:",
    "questionAr": "[السؤال 7 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light."
    ],
    "optionsAr": [
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "correctAnswerAr": "محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_8",
    "titleEn": "[HOTS] H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection - Advanced Synthesis 8",
    "titleAr": "[تفكير عليا] بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن - تركيب متقدم 8",
    "questionEn": "[Question 8 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection. Determine the mathematically validated result:",
    "questionAr": "[السؤال 8 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages."
    ],
    "optionsAr": [
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
    "correctAnswerAr": "في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
    "explanationEn": "Detailed Quantitative Solution: In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_9",
    "titleEn": "[HOTS] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Advanced Synthesis 9",
    "titleAr": "[تفكير عليا] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - تركيب متقدم 9",
    "questionEn": "[Question 9 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices. Determine the mathematically validated result:",
    "questionAr": "[السؤال 9 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "correctAnswerAr": "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_10",
    "titleEn": "[HOTS] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Advanced Synthesis 10",
    "titleAr": "[تفكير عليا] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - تركيب متقدم 10",
    "questionEn": "[Question 10 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance. Determine the mathematically validated result:",
    "questionAr": "[السؤال 10 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "correctAnswerAr": "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationEn": "Detailed Quantitative Solution: In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_11",
    "titleEn": "[HOTS] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Advanced Synthesis 11",
    "titleAr": "[تفكير عليا] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - تركيب متقدم 11",
    "questionEn": "[Question 11 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation. Determine the mathematically validated result:",
    "questionAr": "[السؤال 11 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction."
    ],
    "optionsAr": [
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "correctAnswerAr": "محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_12",
    "titleEn": "[HOTS] H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection - Advanced Synthesis 12",
    "titleAr": "[تفكير عليا] بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن - تركيب متقدم 12",
    "questionEn": "[Question 12 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection. Determine the mathematically validated result:",
    "questionAr": "[السؤال 12 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
    "correctAnswerAr": "في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
    "explanationEn": "Detailed Quantitative Solution: In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_13",
    "titleEn": "[HOTS] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Advanced Synthesis 13",
    "titleAr": "[تفكير عليا] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - تركيب متقدم 13",
    "questionEn": "[Question 13 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices. Determine the mathematically validated result:",
    "questionAr": "[السؤال 13 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$."
    ],
    "optionsAr": [
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "correctAnswerAr": "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_14",
    "titleEn": "[HOTS] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Advanced Synthesis 14",
    "titleAr": "[تفكير عليا] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - تركيب متقدم 14",
    "questionEn": "[Question 14 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance. Determine the mathematically validated result:",
    "questionAr": "[السؤال 14 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends."
    ],
    "optionsAr": [
      "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "correctAnswerAr": "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationEn": "Detailed Quantitative Solution: In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_15",
    "titleEn": "[HOTS] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Advanced Synthesis 15",
    "titleAr": "[تفكير عليا] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - تركيب متقدم 15",
    "questionEn": "[Question 15 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation. Determine the mathematically validated result:",
    "questionAr": "[السؤال 15 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "correctAnswerAr": "محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_16",
    "titleEn": "[HOTS] H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection - Advanced Synthesis 16",
    "titleAr": "[تفكير عليا] بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن - تركيب متقدم 16",
    "questionEn": "[Question 16 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection. Determine the mathematically validated result:",
    "questionAr": "[السؤال 16 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion."
    ],
    "optionsAr": [
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
    "correctAnswerAr": "في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
    "explanationEn": "Detailed Quantitative Solution: In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_17",
    "titleEn": "[HOTS] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Advanced Synthesis 17",
    "titleAr": "[تفكير عليا] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - تركيب متقدم 17",
    "questionEn": "[Question 17 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices. Determine the mathematically validated result:",
    "questionAr": "[السؤال 17 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$."
    ],
    "optionsAr": [
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "correctAnswerAr": "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_18",
    "titleEn": "[HOTS] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Advanced Synthesis 18",
    "titleAr": "[تفكير عليا] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - تركيب متقدم 18",
    "questionEn": "[Question 18 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance. Determine the mathematically validated result:",
    "questionAr": "[السؤال 18 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "correctAnswerAr": "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationEn": "Detailed Quantitative Solution: In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_19",
    "titleEn": "[HOTS] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Advanced Synthesis 19",
    "titleAr": "[تفكير عليا] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - تركيب متقدم 19",
    "questionEn": "[Question 19 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation. Determine the mathematically validated result:",
    "questionAr": "[السؤال 19 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices."
    ],
    "optionsAr": [
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "correctAnswerAr": "محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_20",
    "titleEn": "[HOTS] H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection - Advanced Synthesis 20",
    "titleAr": "[تفكير عليا] بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن - تركيب متقدم 20",
    "questionEn": "[Question 20 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection. Determine the mathematically validated result:",
    "questionAr": "[السؤال 20 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
    "correctAnswerAr": "في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
    "explanationEn": "Detailed Quantitative Solution: In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_21",
    "titleEn": "[HOTS] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Advanced Synthesis 21",
    "titleAr": "[تفكير عليا] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - تركيب متقدم 21",
    "questionEn": "[Question 21 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices. Determine the mathematically validated result:",
    "questionAr": "[السؤال 21 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "correctAnswerAr": "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_22",
    "titleEn": "[HOTS] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Advanced Synthesis 22",
    "titleAr": "[تفكير عليا] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - تركيب متقدم 22",
    "questionEn": "[Question 22 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance. Determine the mathematically validated result:",
    "questionAr": "[السؤال 22 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light."
    ],
    "optionsAr": [
      "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "correctAnswerAr": "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationEn": "Detailed Quantitative Solution: In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_23",
    "titleEn": "[HOTS] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Advanced Synthesis 23",
    "titleAr": "[تفكير عليا] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - تركيب متقدم 23",
    "questionEn": "[Question 23 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation. Determine the mathematically validated result:",
    "questionAr": "[السؤال 23 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages."
    ],
    "optionsAr": [
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "correctAnswerAr": "محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_24",
    "titleEn": "[HOTS] H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection - Advanced Synthesis 24",
    "titleAr": "[تفكير عليا] بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن - تركيب متقدم 24",
    "questionEn": "[Question 24 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection. Determine the mathematically validated result:",
    "questionAr": "[السؤال 24 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
    "correctAnswerAr": "في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
    "explanationEn": "Detailed Quantitative Solution: In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_25",
    "titleEn": "[HOTS] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Advanced Synthesis 25",
    "titleAr": "[تفكير عليا] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - تركيب متقدم 25",
    "questionEn": "[Question 25 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices. Determine the mathematically validated result:",
    "questionAr": "[السؤال 25 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "correctAnswerAr": "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_26",
    "titleEn": "[HOTS] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Advanced Synthesis 26",
    "titleAr": "[تفكير عليا] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - تركيب متقدم 26",
    "questionEn": "[Question 26 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance. Determine the mathematically validated result:",
    "questionAr": "[السؤال 26 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction."
    ],
    "optionsAr": [
      "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "correctAnswerAr": "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationEn": "Detailed Quantitative Solution: In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_27",
    "titleEn": "[HOTS] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Advanced Synthesis 27",
    "titleAr": "[تفكير عليا] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - تركيب متقدم 27",
    "questionEn": "[Question 27 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation. Determine the mathematically validated result:",
    "questionAr": "[السؤال 27 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "correctAnswerAr": "محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_28",
    "titleEn": "[HOTS] H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection - Advanced Synthesis 28",
    "titleAr": "[تفكير عليا] بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن - تركيب متقدم 28",
    "questionEn": "[Question 28 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection. Determine the mathematically validated result:",
    "questionAr": "[السؤال 28 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting."
    ],
    "optionsAr": [
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
    "correctAnswerAr": "في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
    "explanationEn": "Detailed Quantitative Solution: In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_29",
    "titleEn": "[HOTS] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Advanced Synthesis 29",
    "titleAr": "[تفكير عليا] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - تركيب متقدم 29",
    "questionEn": "[Question 29 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices. Determine the mathematically validated result:",
    "questionAr": "[السؤال 29 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$."
    ],
    "optionsAr": [
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "correctAnswerAr": "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_30",
    "titleEn": "[HOTS] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Advanced Synthesis 30",
    "titleAr": "[تفكير عليا] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - تركيب متقدم 30",
    "questionEn": "[Question 30 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance. Determine the mathematically validated result:",
    "questionAr": "[السؤال 30 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "correctAnswerAr": "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationEn": "Detailed Quantitative Solution: In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_31",
    "titleEn": "[HOTS] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Advanced Synthesis 31",
    "titleAr": "[تفكير عليا] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - تركيب متقدم 31",
    "questionEn": "[Question 31 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation. Determine the mathematically validated result:",
    "questionAr": "[السؤال 31 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion."
    ],
    "optionsAr": [
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "correctAnswerAr": "محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_32",
    "titleEn": "[HOTS] H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection - Advanced Synthesis 32",
    "titleAr": "[تفكير عليا] بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن - تركيب متقدم 32",
    "questionEn": "[Question 32 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection. Determine the mathematically validated result:",
    "questionAr": "[السؤال 32 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only."
    ],
    "optionsAr": [
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
    "correctAnswerAr": "في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
    "explanationEn": "Detailed Quantitative Solution: In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_33",
    "titleEn": "[HOTS] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Advanced Synthesis 33",
    "titleAr": "[تفكير عليا] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - تركيب متقدم 33",
    "questionEn": "[Question 33 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices. Determine the mathematically validated result:",
    "questionAr": "[السؤال 33 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "correctAnswerAr": "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_34",
    "titleEn": "[HOTS] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Advanced Synthesis 34",
    "titleAr": "[تفكير عليا] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - تركيب متقدم 34",
    "questionEn": "[Question 34 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance. Determine the mathematically validated result:",
    "questionAr": "[السؤال 34 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices."
    ],
    "optionsAr": [
      "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "correctAnswerAr": "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationEn": "Detailed Quantitative Solution: In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_35",
    "titleEn": "[HOTS] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Advanced Synthesis 35",
    "titleAr": "[تفكير عليا] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - تركيب متقدم 35",
    "questionEn": "[Question 35 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation. Determine the mathematically validated result:",
    "questionAr": "[السؤال 35 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "correctAnswerAr": "محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_36",
    "titleEn": "[HOTS] H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection - Advanced Synthesis 36",
    "titleAr": "[تفكير عليا] بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن - تركيب متقدم 36",
    "questionEn": "[Question 36 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection. Determine the mathematically validated result:",
    "questionAr": "[السؤال 36 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
    "correctAnswerAr": "في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
    "explanationEn": "Detailed Quantitative Solution: In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_37",
    "titleEn": "[HOTS] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Advanced Synthesis 37",
    "titleAr": "[تفكير عليا] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - تركيب متقدم 37",
    "questionEn": "[Question 37 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices. Determine the mathematically validated result:",
    "questionAr": "[السؤال 37 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$."
    ],
    "optionsAr": [
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "correctAnswerAr": "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_38",
    "titleEn": "[HOTS] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Advanced Synthesis 38",
    "titleAr": "[تفكير عليا] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - تركيب متقدم 38",
    "questionEn": "[Question 38 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance. Determine the mathematically validated result:",
    "questionAr": "[السؤال 38 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages."
    ],
    "optionsAr": [
      "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "correctAnswerAr": "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationEn": "Detailed Quantitative Solution: In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_39",
    "titleEn": "[HOTS] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Advanced Synthesis 39",
    "titleAr": "[تفكير عليا] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - تركيب متقدم 39",
    "questionEn": "[Question 39 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation. Determine the mathematically validated result:",
    "questionAr": "[السؤال 39 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "correctAnswerAr": "محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_40",
    "titleEn": "[HOTS] H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection - Advanced Synthesis 40",
    "titleAr": "[تفكير عليا] بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن - تركيب متقدم 40",
    "questionEn": "[Question 40 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection. Determine the mathematically validated result:",
    "questionAr": "[السؤال 40 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
    "correctAnswerAr": "في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
    "explanationEn": "Detailed Quantitative Solution: In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_41",
    "titleEn": "[HOTS] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Advanced Synthesis 41",
    "titleAr": "[تفكير عليا] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - تركيب متقدم 41",
    "questionEn": "[Question 41 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices. Determine the mathematically validated result:",
    "questionAr": "[السؤال 41 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$."
    ],
    "optionsAr": [
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "correctAnswerAr": "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_42",
    "titleEn": "[HOTS] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Advanced Synthesis 42",
    "titleAr": "[تفكير عليا] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - تركيب متقدم 42",
    "questionEn": "[Question 42 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance. Determine the mathematically validated result:",
    "questionAr": "[السؤال 42 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "correctAnswerAr": "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationEn": "Detailed Quantitative Solution: In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_43",
    "titleEn": "[HOTS] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Advanced Synthesis 43",
    "titleAr": "[تفكير عليا] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - تركيب متقدم 43",
    "questionEn": "[Question 43 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation. Determine the mathematically validated result:",
    "questionAr": "[السؤال 43 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting."
    ],
    "optionsAr": [
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "correctAnswerAr": "محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_44",
    "titleEn": "[HOTS] H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection - Advanced Synthesis 44",
    "titleAr": "[تفكير عليا] بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن - تركيب متقدم 44",
    "questionEn": "[Question 44 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection. Determine the mathematically validated result:",
    "questionAr": "[السؤال 44 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends."
    ],
    "optionsAr": [
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
    "correctAnswerAr": "في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
    "explanationEn": "Detailed Quantitative Solution: In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_45",
    "titleEn": "[HOTS] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Advanced Synthesis 45",
    "titleAr": "[تفكير عليا] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - تركيب متقدم 45",
    "questionEn": "[Question 45 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices. Determine the mathematically validated result:",
    "questionAr": "[السؤال 45 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "correctAnswerAr": "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_46",
    "titleEn": "[HOTS] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Advanced Synthesis 46",
    "titleAr": "[تفكير عليا] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - تركيب متقدم 46",
    "questionEn": "[Question 46 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance. Determine the mathematically validated result:",
    "questionAr": "[السؤال 46 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion."
    ],
    "optionsAr": [
      "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "correctAnswerAr": "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationEn": "Detailed Quantitative Solution: In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_47",
    "titleEn": "[HOTS] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Advanced Synthesis 47",
    "titleAr": "[تفكير عليا] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - تركيب متقدم 47",
    "questionEn": "[Question 47 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation. Determine the mathematically validated result:",
    "questionAr": "[السؤال 47 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only."
    ],
    "optionsAr": [
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "correctAnswerAr": "محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_48",
    "titleEn": "[HOTS] H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection - Advanced Synthesis 48",
    "titleAr": "[تفكير عليا] بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن - تركيب متقدم 48",
    "questionEn": "[Question 48 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection. Determine the mathematically validated result:",
    "questionAr": "[السؤال 48 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
    "correctAnswerAr": "في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
    "explanationEn": "Detailed Quantitative Solution: In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_49",
    "titleEn": "[HOTS] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Advanced Synthesis 49",
    "titleAr": "[تفكير عليا] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - تركيب متقدم 49",
    "questionEn": "[Question 49 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices. Determine the mathematically validated result:",
    "questionAr": "[السؤال 49 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$."
    ],
    "optionsAr": [
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "correctAnswerAr": "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_50",
    "titleEn": "[HOTS] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Advanced Synthesis 50",
    "titleAr": "[تفكير عليا] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - تركيب متقدم 50",
    "questionEn": "[Question 50 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance. Determine the mathematically validated result:",
    "questionAr": "[السؤال 50 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "correctAnswerAr": "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationEn": "Detailed Quantitative Solution: In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_51",
    "titleEn": "[HOTS] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Advanced Synthesis 51",
    "titleAr": "[تفكير عليا] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - تركيب متقدم 51",
    "questionEn": "[Question 51 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation. Determine the mathematically validated result:",
    "questionAr": "[السؤال 51 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "correctAnswerAr": "محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_52",
    "titleEn": "[HOTS] H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection - Advanced Synthesis 52",
    "titleAr": "[تفكير عليا] بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن - تركيب متقدم 52",
    "questionEn": "[Question 52 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection. Determine the mathematically validated result:",
    "questionAr": "[السؤال 52 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light."
    ],
    "optionsAr": [
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
    "correctAnswerAr": "في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
    "explanationEn": "Detailed Quantitative Solution: In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_53",
    "titleEn": "[HOTS] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Advanced Synthesis 53",
    "titleAr": "[تفكير عليا] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - تركيب متقدم 53",
    "questionEn": "[Question 53 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices. Determine the mathematically validated result:",
    "questionAr": "[السؤال 53 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$."
    ],
    "optionsAr": [
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "correctAnswerAr": "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_54",
    "titleEn": "[HOTS] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Advanced Synthesis 54",
    "titleAr": "[تفكير عليا] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - تركيب متقدم 54",
    "questionEn": "[Question 54 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance. Determine the mathematically validated result:",
    "questionAr": "[السؤال 54 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "correctAnswerAr": "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationEn": "Detailed Quantitative Solution: In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_55",
    "titleEn": "[HOTS] Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation - Advanced Synthesis 55",
    "titleAr": "[تفكير عليا] أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني - تركيب متقدم 55",
    "questionEn": "[Question 55 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation. Determine the mathematically validated result:",
    "questionAr": "[السؤال 55 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "correctAnswerAr": "محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_56",
    "titleEn": "[HOTS] H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection - Advanced Synthesis 56",
    "titleAr": "[تفكير عليا] بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن - تركيب متقدم 56",
    "questionEn": "[Question 56 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection. Determine the mathematically validated result:",
    "questionAr": "[السؤال 56 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction."
    ],
    "optionsAr": [
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
    "correctAnswerAr": "في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
    "explanationEn": "Detailed Quantitative Solution: In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_57",
    "titleEn": "[HOTS] Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices - Advanced Synthesis 57",
    "titleAr": "[تفكير عليا] اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة - تركيب متقدم 57",
    "questionEn": "[Question 57 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices. Determine the mathematically validated result:",
    "questionAr": "[السؤال 57 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "correctAnswerAr": "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "explanationEn": "Detailed Quantitative Solution: For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_hots_58",
    "titleEn": "[HOTS] Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance - Advanced Synthesis 58",
    "titleAr": "[تفكير عليا] الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد - تركيب متقدم 58",
    "questionEn": "[Question 58 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance. Determine the mathematically validated result:",
    "questionAr": "[السؤال 58 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting."
    ],
    "optionsAr": [
      "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "correctAnswerAr": "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationEn": "Detailed Quantitative Solution: In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  }
]
};
