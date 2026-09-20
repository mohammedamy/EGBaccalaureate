import type { QuestionBank } from '../../../types/curriculum';

export const egBacRoboticsCh1Databank: QuestionBank = {
  easy: [
  {
    "id": "egbac_robotics_ch1_easy_1",
    "titleEn": "[EASY] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Review 1",
    "titleAr": "[مستوى أساسي] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - سؤال 1",
    "questionEn": "[Question 1] In the context of Egyptian STEM robotics and mechatronics regarding Lagrangian Dynamic Formulations & Inertia Matrix Derivations, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 1] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "correctAnswerAr": "تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "explanationEn": "Correct Principle: Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "explanationAr": "المبدأ العلمي الصحيح: تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_2",
    "titleEn": "[EASY] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Review 2",
    "titleAr": "[مستوى أساسي] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - سؤال 2",
    "questionEn": "[Question 2] In the context of Egyptian STEM robotics and mechatronics regarding Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 2] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
    "correctAnswerAr": "يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
    "explanationEn": "Correct Principle: Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
    "explanationAr": "المبدأ العلمي الصحيح: يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_3",
    "titleEn": "[EASY] Operational Space Formulation & Manipulator Jacobian Force Duality - Review 3",
    "titleAr": "[مستوى أساسي] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - سؤال 3",
    "questionEn": "[Question 3] In the context of Egyptian STEM robotics and mechatronics regarding Operational Space Formulation & Manipulator Jacobian Force Duality, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 3] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "The manipulator Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to end-effector linear and angular velocities: $v = J(q) \\dot{q}$.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "تربط مصفوفة جاكوبيان للروبوت $J(q)$ بين سرعات المفاصل $\\dot{q}$ والسرعات الخطية والزاوية لنهاية الذراع: $v = J(q) \\dot{q}$.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The manipulator Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to end-effector linear and angular velocities: $v = J(q) \\dot{q}$.",
    "correctAnswerAr": "تربط مصفوفة جاكوبيان للروبوت $J(q)$ بين سرعات المفاصل $\\dot{q}$ والسرعات الخطية والزاوية لنهاية الذراع: $v = J(q) \\dot{q}$.",
    "explanationEn": "Correct Principle: The manipulator Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to end-effector linear and angular velocities: $v = J(q) \\dot{q}$.",
    "explanationAr": "المبدأ العلمي الصحيح: تربط مصفوفة جاكوبيان للروبوت $J(q)$ بين سرعات المفاصل $\\dot{q}$ والسرعات الخطية والزاوية لنهاية الذراع: $v = J(q) \\dot{q}$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_4",
    "titleEn": "[EASY] Impedance Control & Physical Human-Robot Interaction (pHRI) - Review 4",
    "titleAr": "[مستوى أساسي] التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت - سؤال 4",
    "questionEn": "[Question 4] In the context of Egyptian STEM robotics and mechatronics regarding Impedance Control & Physical Human-Robot Interaction (pHRI), which of the following scientific statements is valid?",
    "questionAr": "[السؤال 4] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Impedance control establishes a dynamic mass-spring-damper relationship between end-effector external contact forces and motion deviations: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يحدد التحكم بالممانعة علاقة ديناميكية (كتلة-نابض-مخمد) بين قوى التلامس الخارجية وانحراف الحركة: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Impedance control establishes a dynamic mass-spring-damper relationship between end-effector external contact forces and motion deviations: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "correctAnswerAr": "يحدد التحكم بالممانعة علاقة ديناميكية (كتلة-نابض-مخمد) بين قوى التلامس الخارجية وانحراف الحركة: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "explanationEn": "Correct Principle: Impedance control establishes a dynamic mass-spring-damper relationship between end-effector external contact forces and motion deviations: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد التحكم بالممانعة علاقة ديناميكية (كتلة-نابض-مخمد) بين قوى التلامس الخارجية وانحراف الحركة: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_5",
    "titleEn": "[EASY] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Review 5",
    "titleAr": "[مستوى أساسي] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - سؤال 5",
    "questionEn": "[Question 5] In the context of Egyptian STEM robotics and mechatronics regarding Lagrangian Dynamic Formulations & Inertia Matrix Derivations, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 5] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "correctAnswerAr": "تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "explanationEn": "Correct Principle: Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "explanationAr": "المبدأ العلمي الصحيح: تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_6",
    "titleEn": "[EASY] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Review 6",
    "titleAr": "[مستوى أساسي] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - سؤال 6",
    "questionEn": "[Question 6] In the context of Egyptian STEM robotics and mechatronics regarding Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 6] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
    "correctAnswerAr": "يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
    "explanationEn": "Correct Principle: Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
    "explanationAr": "المبدأ العلمي الصحيح: يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_7",
    "titleEn": "[EASY] Operational Space Formulation & Manipulator Jacobian Force Duality - Review 7",
    "titleAr": "[مستوى أساسي] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - سؤال 7",
    "questionEn": "[Question 7] In the context of Egyptian STEM robotics and mechatronics regarding Operational Space Formulation & Manipulator Jacobian Force Duality, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 7] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The manipulator Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to end-effector linear and angular velocities: $v = J(q) \\dot{q}$.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "تربط مصفوفة جاكوبيان للروبوت $J(q)$ بين سرعات المفاصل $\\dot{q}$ والسرعات الخطية والزاوية لنهاية الذراع: $v = J(q) \\dot{q}$.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The manipulator Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to end-effector linear and angular velocities: $v = J(q) \\dot{q}$.",
    "correctAnswerAr": "تربط مصفوفة جاكوبيان للروبوت $J(q)$ بين سرعات المفاصل $\\dot{q}$ والسرعات الخطية والزاوية لنهاية الذراع: $v = J(q) \\dot{q}$.",
    "explanationEn": "Correct Principle: The manipulator Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to end-effector linear and angular velocities: $v = J(q) \\dot{q}$.",
    "explanationAr": "المبدأ العلمي الصحيح: تربط مصفوفة جاكوبيان للروبوت $J(q)$ بين سرعات المفاصل $\\dot{q}$ والسرعات الخطية والزاوية لنهاية الذراع: $v = J(q) \\dot{q}$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_8",
    "titleEn": "[EASY] Impedance Control & Physical Human-Robot Interaction (pHRI) - Review 8",
    "titleAr": "[مستوى أساسي] التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت - سؤال 8",
    "questionEn": "[Question 8] In the context of Egyptian STEM robotics and mechatronics regarding Impedance Control & Physical Human-Robot Interaction (pHRI), which of the following scientific statements is valid?",
    "questionAr": "[السؤال 8] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "Impedance control establishes a dynamic mass-spring-damper relationship between end-effector external contact forces and motion deviations: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "يحدد التحكم بالممانعة علاقة ديناميكية (كتلة-نابض-مخمد) بين قوى التلامس الخارجية وانحراف الحركة: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Impedance control establishes a dynamic mass-spring-damper relationship between end-effector external contact forces and motion deviations: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "correctAnswerAr": "يحدد التحكم بالممانعة علاقة ديناميكية (كتلة-نابض-مخمد) بين قوى التلامس الخارجية وانحراف الحركة: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "explanationEn": "Correct Principle: Impedance control establishes a dynamic mass-spring-damper relationship between end-effector external contact forces and motion deviations: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد التحكم بالممانعة علاقة ديناميكية (كتلة-نابض-مخمد) بين قوى التلامس الخارجية وانحراف الحركة: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_9",
    "titleEn": "[EASY] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Review 9",
    "titleAr": "[مستوى أساسي] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - سؤال 9",
    "questionEn": "[Question 9] In the context of Egyptian STEM robotics and mechatronics regarding Lagrangian Dynamic Formulations & Inertia Matrix Derivations, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 9] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "correctAnswerAr": "تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "explanationEn": "Correct Principle: Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "explanationAr": "المبدأ العلمي الصحيح: تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_10",
    "titleEn": "[EASY] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Review 10",
    "titleAr": "[مستوى أساسي] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - سؤال 10",
    "questionEn": "[Question 10] In the context of Egyptian STEM robotics and mechatronics regarding Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 10] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
    "correctAnswerAr": "يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
    "explanationEn": "Correct Principle: Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
    "explanationAr": "المبدأ العلمي الصحيح: يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_11",
    "titleEn": "[EASY] Operational Space Formulation & Manipulator Jacobian Force Duality - Review 11",
    "titleAr": "[مستوى أساسي] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - سؤال 11",
    "questionEn": "[Question 11] In the context of Egyptian STEM robotics and mechatronics regarding Operational Space Formulation & Manipulator Jacobian Force Duality, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 11] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "The manipulator Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to end-effector linear and angular velocities: $v = J(q) \\dot{q}$.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تربط مصفوفة جاكوبيان للروبوت $J(q)$ بين سرعات المفاصل $\\dot{q}$ والسرعات الخطية والزاوية لنهاية الذراع: $v = J(q) \\dot{q}$.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The manipulator Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to end-effector linear and angular velocities: $v = J(q) \\dot{q}$.",
    "correctAnswerAr": "تربط مصفوفة جاكوبيان للروبوت $J(q)$ بين سرعات المفاصل $\\dot{q}$ والسرعات الخطية والزاوية لنهاية الذراع: $v = J(q) \\dot{q}$.",
    "explanationEn": "Correct Principle: The manipulator Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to end-effector linear and angular velocities: $v = J(q) \\dot{q}$.",
    "explanationAr": "المبدأ العلمي الصحيح: تربط مصفوفة جاكوبيان للروبوت $J(q)$ بين سرعات المفاصل $\\dot{q}$ والسرعات الخطية والزاوية لنهاية الذراع: $v = J(q) \\dot{q}$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_12",
    "titleEn": "[EASY] Impedance Control & Physical Human-Robot Interaction (pHRI) - Review 12",
    "titleAr": "[مستوى أساسي] التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت - سؤال 12",
    "questionEn": "[Question 12] In the context of Egyptian STEM robotics and mechatronics regarding Impedance Control & Physical Human-Robot Interaction (pHRI), which of the following scientific statements is valid?",
    "questionAr": "[السؤال 12] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "Impedance control establishes a dynamic mass-spring-damper relationship between end-effector external contact forces and motion deviations: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "يحدد التحكم بالممانعة علاقة ديناميكية (كتلة-نابض-مخمد) بين قوى التلامس الخارجية وانحراف الحركة: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Impedance control establishes a dynamic mass-spring-damper relationship between end-effector external contact forces and motion deviations: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "correctAnswerAr": "يحدد التحكم بالممانعة علاقة ديناميكية (كتلة-نابض-مخمد) بين قوى التلامس الخارجية وانحراف الحركة: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "explanationEn": "Correct Principle: Impedance control establishes a dynamic mass-spring-damper relationship between end-effector external contact forces and motion deviations: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد التحكم بالممانعة علاقة ديناميكية (كتلة-نابض-مخمد) بين قوى التلامس الخارجية وانحراف الحركة: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_13",
    "titleEn": "[EASY] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Review 13",
    "titleAr": "[مستوى أساسي] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - سؤال 13",
    "questionEn": "[Question 13] In the context of Egyptian STEM robotics and mechatronics regarding Lagrangian Dynamic Formulations & Inertia Matrix Derivations, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 13] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "correctAnswerAr": "تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "explanationEn": "Correct Principle: Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "explanationAr": "المبدأ العلمي الصحيح: تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_14",
    "titleEn": "[EASY] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Review 14",
    "titleAr": "[مستوى أساسي] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - سؤال 14",
    "questionEn": "[Question 14] In the context of Egyptian STEM robotics and mechatronics regarding Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 14] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
    "correctAnswerAr": "يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
    "explanationEn": "Correct Principle: Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
    "explanationAr": "المبدأ العلمي الصحيح: يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_15",
    "titleEn": "[EASY] Operational Space Formulation & Manipulator Jacobian Force Duality - Review 15",
    "titleAr": "[مستوى أساسي] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - سؤال 15",
    "questionEn": "[Question 15] In the context of Egyptian STEM robotics and mechatronics regarding Operational Space Formulation & Manipulator Jacobian Force Duality, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 15] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "The manipulator Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to end-effector linear and angular velocities: $v = J(q) \\dot{q}$.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تربط مصفوفة جاكوبيان للروبوت $J(q)$ بين سرعات المفاصل $\\dot{q}$ والسرعات الخطية والزاوية لنهاية الذراع: $v = J(q) \\dot{q}$.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The manipulator Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to end-effector linear and angular velocities: $v = J(q) \\dot{q}$.",
    "correctAnswerAr": "تربط مصفوفة جاكوبيان للروبوت $J(q)$ بين سرعات المفاصل $\\dot{q}$ والسرعات الخطية والزاوية لنهاية الذراع: $v = J(q) \\dot{q}$.",
    "explanationEn": "Correct Principle: The manipulator Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to end-effector linear and angular velocities: $v = J(q) \\dot{q}$.",
    "explanationAr": "المبدأ العلمي الصحيح: تربط مصفوفة جاكوبيان للروبوت $J(q)$ بين سرعات المفاصل $\\dot{q}$ والسرعات الخطية والزاوية لنهاية الذراع: $v = J(q) \\dot{q}$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_16",
    "titleEn": "[EASY] Impedance Control & Physical Human-Robot Interaction (pHRI) - Review 16",
    "titleAr": "[مستوى أساسي] التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت - سؤال 16",
    "questionEn": "[Question 16] In the context of Egyptian STEM robotics and mechatronics regarding Impedance Control & Physical Human-Robot Interaction (pHRI), which of the following scientific statements is valid?",
    "questionAr": "[السؤال 16] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Impedance control establishes a dynamic mass-spring-damper relationship between end-effector external contact forces and motion deviations: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "يحدد التحكم بالممانعة علاقة ديناميكية (كتلة-نابض-مخمد) بين قوى التلامس الخارجية وانحراف الحركة: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Impedance control establishes a dynamic mass-spring-damper relationship between end-effector external contact forces and motion deviations: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "correctAnswerAr": "يحدد التحكم بالممانعة علاقة ديناميكية (كتلة-نابض-مخمد) بين قوى التلامس الخارجية وانحراف الحركة: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "explanationEn": "Correct Principle: Impedance control establishes a dynamic mass-spring-damper relationship between end-effector external contact forces and motion deviations: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد التحكم بالممانعة علاقة ديناميكية (كتلة-نابض-مخمد) بين قوى التلامس الخارجية وانحراف الحركة: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_17",
    "titleEn": "[EASY] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Review 17",
    "titleAr": "[مستوى أساسي] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - سؤال 17",
    "questionEn": "[Question 17] In the context of Egyptian STEM robotics and mechatronics regarding Lagrangian Dynamic Formulations & Inertia Matrix Derivations, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 17] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "correctAnswerAr": "تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "explanationEn": "Correct Principle: Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "explanationAr": "المبدأ العلمي الصحيح: تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_18",
    "titleEn": "[EASY] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Review 18",
    "titleAr": "[مستوى أساسي] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - سؤال 18",
    "questionEn": "[Question 18] In the context of Egyptian STEM robotics and mechatronics regarding Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 18] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
    "correctAnswerAr": "يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
    "explanationEn": "Correct Principle: Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
    "explanationAr": "المبدأ العلمي الصحيح: يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_19",
    "titleEn": "[EASY] Operational Space Formulation & Manipulator Jacobian Force Duality - Review 19",
    "titleAr": "[مستوى أساسي] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - سؤال 19",
    "questionEn": "[Question 19] In the context of Egyptian STEM robotics and mechatronics regarding Operational Space Formulation & Manipulator Jacobian Force Duality, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 19] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "The manipulator Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to end-effector linear and angular velocities: $v = J(q) \\dot{q}$.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تربط مصفوفة جاكوبيان للروبوت $J(q)$ بين سرعات المفاصل $\\dot{q}$ والسرعات الخطية والزاوية لنهاية الذراع: $v = J(q) \\dot{q}$.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The manipulator Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to end-effector linear and angular velocities: $v = J(q) \\dot{q}$.",
    "correctAnswerAr": "تربط مصفوفة جاكوبيان للروبوت $J(q)$ بين سرعات المفاصل $\\dot{q}$ والسرعات الخطية والزاوية لنهاية الذراع: $v = J(q) \\dot{q}$.",
    "explanationEn": "Correct Principle: The manipulator Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to end-effector linear and angular velocities: $v = J(q) \\dot{q}$.",
    "explanationAr": "المبدأ العلمي الصحيح: تربط مصفوفة جاكوبيان للروبوت $J(q)$ بين سرعات المفاصل $\\dot{q}$ والسرعات الخطية والزاوية لنهاية الذراع: $v = J(q) \\dot{q}$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_20",
    "titleEn": "[EASY] Impedance Control & Physical Human-Robot Interaction (pHRI) - Review 20",
    "titleAr": "[مستوى أساسي] التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت - سؤال 20",
    "questionEn": "[Question 20] In the context of Egyptian STEM robotics and mechatronics regarding Impedance Control & Physical Human-Robot Interaction (pHRI), which of the following scientific statements is valid?",
    "questionAr": "[السؤال 20] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "Impedance control establishes a dynamic mass-spring-damper relationship between end-effector external contact forces and motion deviations: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "يحدد التحكم بالممانعة علاقة ديناميكية (كتلة-نابض-مخمد) بين قوى التلامس الخارجية وانحراف الحركة: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Impedance control establishes a dynamic mass-spring-damper relationship between end-effector external contact forces and motion deviations: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "correctAnswerAr": "يحدد التحكم بالممانعة علاقة ديناميكية (كتلة-نابض-مخمد) بين قوى التلامس الخارجية وانحراف الحركة: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "explanationEn": "Correct Principle: Impedance control establishes a dynamic mass-spring-damper relationship between end-effector external contact forces and motion deviations: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد التحكم بالممانعة علاقة ديناميكية (كتلة-نابض-مخمد) بين قوى التلامس الخارجية وانحراف الحركة: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_21",
    "titleEn": "[EASY] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Review 21",
    "titleAr": "[مستوى أساسي] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - سؤال 21",
    "questionEn": "[Question 21] In the context of Egyptian STEM robotics and mechatronics regarding Lagrangian Dynamic Formulations & Inertia Matrix Derivations, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 21] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "correctAnswerAr": "تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "explanationEn": "Correct Principle: Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "explanationAr": "المبدأ العلمي الصحيح: تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_22",
    "titleEn": "[EASY] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Review 22",
    "titleAr": "[مستوى أساسي] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - سؤال 22",
    "questionEn": "[Question 22] In the context of Egyptian STEM robotics and mechatronics regarding Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 22] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
    "correctAnswerAr": "يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
    "explanationEn": "Correct Principle: Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
    "explanationAr": "المبدأ العلمي الصحيح: يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_23",
    "titleEn": "[EASY] Operational Space Formulation & Manipulator Jacobian Force Duality - Review 23",
    "titleAr": "[مستوى أساسي] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - سؤال 23",
    "questionEn": "[Question 23] In the context of Egyptian STEM robotics and mechatronics regarding Operational Space Formulation & Manipulator Jacobian Force Duality, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 23] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "The manipulator Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to end-effector linear and angular velocities: $v = J(q) \\dot{q}$.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "تربط مصفوفة جاكوبيان للروبوت $J(q)$ بين سرعات المفاصل $\\dot{q}$ والسرعات الخطية والزاوية لنهاية الذراع: $v = J(q) \\dot{q}$.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The manipulator Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to end-effector linear and angular velocities: $v = J(q) \\dot{q}$.",
    "correctAnswerAr": "تربط مصفوفة جاكوبيان للروبوت $J(q)$ بين سرعات المفاصل $\\dot{q}$ والسرعات الخطية والزاوية لنهاية الذراع: $v = J(q) \\dot{q}$.",
    "explanationEn": "Correct Principle: The manipulator Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to end-effector linear and angular velocities: $v = J(q) \\dot{q}$.",
    "explanationAr": "المبدأ العلمي الصحيح: تربط مصفوفة جاكوبيان للروبوت $J(q)$ بين سرعات المفاصل $\\dot{q}$ والسرعات الخطية والزاوية لنهاية الذراع: $v = J(q) \\dot{q}$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_24",
    "titleEn": "[EASY] Impedance Control & Physical Human-Robot Interaction (pHRI) - Review 24",
    "titleAr": "[مستوى أساسي] التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت - سؤال 24",
    "questionEn": "[Question 24] In the context of Egyptian STEM robotics and mechatronics regarding Impedance Control & Physical Human-Robot Interaction (pHRI), which of the following scientific statements is valid?",
    "questionAr": "[السؤال 24] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Impedance control establishes a dynamic mass-spring-damper relationship between end-effector external contact forces and motion deviations: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يحدد التحكم بالممانعة علاقة ديناميكية (كتلة-نابض-مخمد) بين قوى التلامس الخارجية وانحراف الحركة: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Impedance control establishes a dynamic mass-spring-damper relationship between end-effector external contact forces and motion deviations: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "correctAnswerAr": "يحدد التحكم بالممانعة علاقة ديناميكية (كتلة-نابض-مخمد) بين قوى التلامس الخارجية وانحراف الحركة: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "explanationEn": "Correct Principle: Impedance control establishes a dynamic mass-spring-damper relationship between end-effector external contact forces and motion deviations: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد التحكم بالممانعة علاقة ديناميكية (كتلة-نابض-مخمد) بين قوى التلامس الخارجية وانحراف الحركة: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_25",
    "titleEn": "[EASY] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Review 25",
    "titleAr": "[مستوى أساسي] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - سؤال 25",
    "questionEn": "[Question 25] In the context of Egyptian STEM robotics and mechatronics regarding Lagrangian Dynamic Formulations & Inertia Matrix Derivations, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 25] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "correctAnswerAr": "تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "explanationEn": "Correct Principle: Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "explanationAr": "المبدأ العلمي الصحيح: تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_26",
    "titleEn": "[EASY] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Review 26",
    "titleAr": "[مستوى أساسي] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - سؤال 26",
    "questionEn": "[Question 26] In the context of Egyptian STEM robotics and mechatronics regarding Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 26] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
    "correctAnswerAr": "يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
    "explanationEn": "Correct Principle: Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
    "explanationAr": "المبدأ العلمي الصحيح: يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_27",
    "titleEn": "[EASY] Operational Space Formulation & Manipulator Jacobian Force Duality - Review 27",
    "titleAr": "[مستوى أساسي] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - سؤال 27",
    "questionEn": "[Question 27] In the context of Egyptian STEM robotics and mechatronics regarding Operational Space Formulation & Manipulator Jacobian Force Duality, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 27] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The manipulator Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to end-effector linear and angular velocities: $v = J(q) \\dot{q}$.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "تربط مصفوفة جاكوبيان للروبوت $J(q)$ بين سرعات المفاصل $\\dot{q}$ والسرعات الخطية والزاوية لنهاية الذراع: $v = J(q) \\dot{q}$.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The manipulator Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to end-effector linear and angular velocities: $v = J(q) \\dot{q}$.",
    "correctAnswerAr": "تربط مصفوفة جاكوبيان للروبوت $J(q)$ بين سرعات المفاصل $\\dot{q}$ والسرعات الخطية والزاوية لنهاية الذراع: $v = J(q) \\dot{q}$.",
    "explanationEn": "Correct Principle: The manipulator Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to end-effector linear and angular velocities: $v = J(q) \\dot{q}$.",
    "explanationAr": "المبدأ العلمي الصحيح: تربط مصفوفة جاكوبيان للروبوت $J(q)$ بين سرعات المفاصل $\\dot{q}$ والسرعات الخطية والزاوية لنهاية الذراع: $v = J(q) \\dot{q}$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_28",
    "titleEn": "[EASY] Impedance Control & Physical Human-Robot Interaction (pHRI) - Review 28",
    "titleAr": "[مستوى أساسي] التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت - سؤال 28",
    "questionEn": "[Question 28] In the context of Egyptian STEM robotics and mechatronics regarding Impedance Control & Physical Human-Robot Interaction (pHRI), which of the following scientific statements is valid?",
    "questionAr": "[السؤال 28] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "Impedance control establishes a dynamic mass-spring-damper relationship between end-effector external contact forces and motion deviations: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "يحدد التحكم بالممانعة علاقة ديناميكية (كتلة-نابض-مخمد) بين قوى التلامس الخارجية وانحراف الحركة: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Impedance control establishes a dynamic mass-spring-damper relationship between end-effector external contact forces and motion deviations: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "correctAnswerAr": "يحدد التحكم بالممانعة علاقة ديناميكية (كتلة-نابض-مخمد) بين قوى التلامس الخارجية وانحراف الحركة: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "explanationEn": "Correct Principle: Impedance control establishes a dynamic mass-spring-damper relationship between end-effector external contact forces and motion deviations: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد التحكم بالممانعة علاقة ديناميكية (كتلة-نابض-مخمد) بين قوى التلامس الخارجية وانحراف الحركة: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_29",
    "titleEn": "[EASY] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Review 29",
    "titleAr": "[مستوى أساسي] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - سؤال 29",
    "questionEn": "[Question 29] In the context of Egyptian STEM robotics and mechatronics regarding Lagrangian Dynamic Formulations & Inertia Matrix Derivations, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 29] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "correctAnswerAr": "تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "explanationEn": "Correct Principle: Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "explanationAr": "المبدأ العلمي الصحيح: تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_30",
    "titleEn": "[EASY] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Review 30",
    "titleAr": "[مستوى أساسي] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - سؤال 30",
    "questionEn": "[Question 30] In the context of Egyptian STEM robotics and mechatronics regarding Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 30] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
    "correctAnswerAr": "يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
    "explanationEn": "Correct Principle: Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
    "explanationAr": "المبدأ العلمي الصحيح: يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_31",
    "titleEn": "[EASY] Operational Space Formulation & Manipulator Jacobian Force Duality - Review 31",
    "titleAr": "[مستوى أساسي] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - سؤال 31",
    "questionEn": "[Question 31] In the context of Egyptian STEM robotics and mechatronics regarding Operational Space Formulation & Manipulator Jacobian Force Duality, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 31] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "The manipulator Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to end-effector linear and angular velocities: $v = J(q) \\dot{q}$.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تربط مصفوفة جاكوبيان للروبوت $J(q)$ بين سرعات المفاصل $\\dot{q}$ والسرعات الخطية والزاوية لنهاية الذراع: $v = J(q) \\dot{q}$.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The manipulator Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to end-effector linear and angular velocities: $v = J(q) \\dot{q}$.",
    "correctAnswerAr": "تربط مصفوفة جاكوبيان للروبوت $J(q)$ بين سرعات المفاصل $\\dot{q}$ والسرعات الخطية والزاوية لنهاية الذراع: $v = J(q) \\dot{q}$.",
    "explanationEn": "Correct Principle: The manipulator Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to end-effector linear and angular velocities: $v = J(q) \\dot{q}$.",
    "explanationAr": "المبدأ العلمي الصحيح: تربط مصفوفة جاكوبيان للروبوت $J(q)$ بين سرعات المفاصل $\\dot{q}$ والسرعات الخطية والزاوية لنهاية الذراع: $v = J(q) \\dot{q}$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_32",
    "titleEn": "[EASY] Impedance Control & Physical Human-Robot Interaction (pHRI) - Review 32",
    "titleAr": "[مستوى أساسي] التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت - سؤال 32",
    "questionEn": "[Question 32] In the context of Egyptian STEM robotics and mechatronics regarding Impedance Control & Physical Human-Robot Interaction (pHRI), which of the following scientific statements is valid?",
    "questionAr": "[السؤال 32] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "Impedance control establishes a dynamic mass-spring-damper relationship between end-effector external contact forces and motion deviations: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "يحدد التحكم بالممانعة علاقة ديناميكية (كتلة-نابض-مخمد) بين قوى التلامس الخارجية وانحراف الحركة: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Impedance control establishes a dynamic mass-spring-damper relationship between end-effector external contact forces and motion deviations: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "correctAnswerAr": "يحدد التحكم بالممانعة علاقة ديناميكية (كتلة-نابض-مخمد) بين قوى التلامس الخارجية وانحراف الحركة: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "explanationEn": "Correct Principle: Impedance control establishes a dynamic mass-spring-damper relationship between end-effector external contact forces and motion deviations: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد التحكم بالممانعة علاقة ديناميكية (كتلة-نابض-مخمد) بين قوى التلامس الخارجية وانحراف الحركة: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_33",
    "titleEn": "[EASY] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Review 33",
    "titleAr": "[مستوى أساسي] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - سؤال 33",
    "questionEn": "[Question 33] In the context of Egyptian STEM robotics and mechatronics regarding Lagrangian Dynamic Formulations & Inertia Matrix Derivations, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 33] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "correctAnswerAr": "تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "explanationEn": "Correct Principle: Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "explanationAr": "المبدأ العلمي الصحيح: تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_34",
    "titleEn": "[EASY] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Review 34",
    "titleAr": "[مستوى أساسي] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - سؤال 34",
    "questionEn": "[Question 34] In the context of Egyptian STEM robotics and mechatronics regarding Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 34] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
    "correctAnswerAr": "يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
    "explanationEn": "Correct Principle: Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
    "explanationAr": "المبدأ العلمي الصحيح: يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_35",
    "titleEn": "[EASY] Operational Space Formulation & Manipulator Jacobian Force Duality - Review 35",
    "titleAr": "[مستوى أساسي] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - سؤال 35",
    "questionEn": "[Question 35] In the context of Egyptian STEM robotics and mechatronics regarding Operational Space Formulation & Manipulator Jacobian Force Duality, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 35] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "The manipulator Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to end-effector linear and angular velocities: $v = J(q) \\dot{q}$.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تربط مصفوفة جاكوبيان للروبوت $J(q)$ بين سرعات المفاصل $\\dot{q}$ والسرعات الخطية والزاوية لنهاية الذراع: $v = J(q) \\dot{q}$.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The manipulator Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to end-effector linear and angular velocities: $v = J(q) \\dot{q}$.",
    "correctAnswerAr": "تربط مصفوفة جاكوبيان للروبوت $J(q)$ بين سرعات المفاصل $\\dot{q}$ والسرعات الخطية والزاوية لنهاية الذراع: $v = J(q) \\dot{q}$.",
    "explanationEn": "Correct Principle: The manipulator Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to end-effector linear and angular velocities: $v = J(q) \\dot{q}$.",
    "explanationAr": "المبدأ العلمي الصحيح: تربط مصفوفة جاكوبيان للروبوت $J(q)$ بين سرعات المفاصل $\\dot{q}$ والسرعات الخطية والزاوية لنهاية الذراع: $v = J(q) \\dot{q}$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_36",
    "titleEn": "[EASY] Impedance Control & Physical Human-Robot Interaction (pHRI) - Review 36",
    "titleAr": "[مستوى أساسي] التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت - سؤال 36",
    "questionEn": "[Question 36] In the context of Egyptian STEM robotics and mechatronics regarding Impedance Control & Physical Human-Robot Interaction (pHRI), which of the following scientific statements is valid?",
    "questionAr": "[السؤال 36] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Impedance control establishes a dynamic mass-spring-damper relationship between end-effector external contact forces and motion deviations: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "يحدد التحكم بالممانعة علاقة ديناميكية (كتلة-نابض-مخمد) بين قوى التلامس الخارجية وانحراف الحركة: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Impedance control establishes a dynamic mass-spring-damper relationship between end-effector external contact forces and motion deviations: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "correctAnswerAr": "يحدد التحكم بالممانعة علاقة ديناميكية (كتلة-نابض-مخمد) بين قوى التلامس الخارجية وانحراف الحركة: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "explanationEn": "Correct Principle: Impedance control establishes a dynamic mass-spring-damper relationship between end-effector external contact forces and motion deviations: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد التحكم بالممانعة علاقة ديناميكية (كتلة-نابض-مخمد) بين قوى التلامس الخارجية وانحراف الحركة: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_37",
    "titleEn": "[EASY] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Review 37",
    "titleAr": "[مستوى أساسي] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - سؤال 37",
    "questionEn": "[Question 37] In the context of Egyptian STEM robotics and mechatronics regarding Lagrangian Dynamic Formulations & Inertia Matrix Derivations, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 37] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "correctAnswerAr": "تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "explanationEn": "Correct Principle: Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "explanationAr": "المبدأ العلمي الصحيح: تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_38",
    "titleEn": "[EASY] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Review 38",
    "titleAr": "[مستوى أساسي] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - سؤال 38",
    "questionEn": "[Question 38] In the context of Egyptian STEM robotics and mechatronics regarding Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 38] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
    "correctAnswerAr": "يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
    "explanationEn": "Correct Principle: Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
    "explanationAr": "المبدأ العلمي الصحيح: يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_39",
    "titleEn": "[EASY] Operational Space Formulation & Manipulator Jacobian Force Duality - Review 39",
    "titleAr": "[مستوى أساسي] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - سؤال 39",
    "questionEn": "[Question 39] In the context of Egyptian STEM robotics and mechatronics regarding Operational Space Formulation & Manipulator Jacobian Force Duality, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 39] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "The manipulator Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to end-effector linear and angular velocities: $v = J(q) \\dot{q}$.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تربط مصفوفة جاكوبيان للروبوت $J(q)$ بين سرعات المفاصل $\\dot{q}$ والسرعات الخطية والزاوية لنهاية الذراع: $v = J(q) \\dot{q}$.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The manipulator Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to end-effector linear and angular velocities: $v = J(q) \\dot{q}$.",
    "correctAnswerAr": "تربط مصفوفة جاكوبيان للروبوت $J(q)$ بين سرعات المفاصل $\\dot{q}$ والسرعات الخطية والزاوية لنهاية الذراع: $v = J(q) \\dot{q}$.",
    "explanationEn": "Correct Principle: The manipulator Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to end-effector linear and angular velocities: $v = J(q) \\dot{q}$.",
    "explanationAr": "المبدأ العلمي الصحيح: تربط مصفوفة جاكوبيان للروبوت $J(q)$ بين سرعات المفاصل $\\dot{q}$ والسرعات الخطية والزاوية لنهاية الذراع: $v = J(q) \\dot{q}$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_40",
    "titleEn": "[EASY] Impedance Control & Physical Human-Robot Interaction (pHRI) - Review 40",
    "titleAr": "[مستوى أساسي] التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت - سؤال 40",
    "questionEn": "[Question 40] In the context of Egyptian STEM robotics and mechatronics regarding Impedance Control & Physical Human-Robot Interaction (pHRI), which of the following scientific statements is valid?",
    "questionAr": "[السؤال 40] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "Impedance control establishes a dynamic mass-spring-damper relationship between end-effector external contact forces and motion deviations: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "يحدد التحكم بالممانعة علاقة ديناميكية (كتلة-نابض-مخمد) بين قوى التلامس الخارجية وانحراف الحركة: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Impedance control establishes a dynamic mass-spring-damper relationship between end-effector external contact forces and motion deviations: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "correctAnswerAr": "يحدد التحكم بالممانعة علاقة ديناميكية (كتلة-نابض-مخمد) بين قوى التلامس الخارجية وانحراف الحركة: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "explanationEn": "Correct Principle: Impedance control establishes a dynamic mass-spring-damper relationship between end-effector external contact forces and motion deviations: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد التحكم بالممانعة علاقة ديناميكية (كتلة-نابض-مخمد) بين قوى التلامس الخارجية وانحراف الحركة: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_41",
    "titleEn": "[EASY] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Review 41",
    "titleAr": "[مستوى أساسي] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - سؤال 41",
    "questionEn": "[Question 41] In the context of Egyptian STEM robotics and mechatronics regarding Lagrangian Dynamic Formulations & Inertia Matrix Derivations, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 41] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "correctAnswerAr": "تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "explanationEn": "Correct Principle: Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "explanationAr": "المبدأ العلمي الصحيح: تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_42",
    "titleEn": "[EASY] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Review 42",
    "titleAr": "[مستوى أساسي] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - سؤال 42",
    "questionEn": "[Question 42] In the context of Egyptian STEM robotics and mechatronics regarding Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 42] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
    "correctAnswerAr": "يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
    "explanationEn": "Correct Principle: Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
    "explanationAr": "المبدأ العلمي الصحيح: يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_43",
    "titleEn": "[EASY] Operational Space Formulation & Manipulator Jacobian Force Duality - Review 43",
    "titleAr": "[مستوى أساسي] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - سؤال 43",
    "questionEn": "[Question 43] In the context of Egyptian STEM robotics and mechatronics regarding Operational Space Formulation & Manipulator Jacobian Force Duality, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 43] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "The manipulator Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to end-effector linear and angular velocities: $v = J(q) \\dot{q}$.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "تربط مصفوفة جاكوبيان للروبوت $J(q)$ بين سرعات المفاصل $\\dot{q}$ والسرعات الخطية والزاوية لنهاية الذراع: $v = J(q) \\dot{q}$.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The manipulator Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to end-effector linear and angular velocities: $v = J(q) \\dot{q}$.",
    "correctAnswerAr": "تربط مصفوفة جاكوبيان للروبوت $J(q)$ بين سرعات المفاصل $\\dot{q}$ والسرعات الخطية والزاوية لنهاية الذراع: $v = J(q) \\dot{q}$.",
    "explanationEn": "Correct Principle: The manipulator Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to end-effector linear and angular velocities: $v = J(q) \\dot{q}$.",
    "explanationAr": "المبدأ العلمي الصحيح: تربط مصفوفة جاكوبيان للروبوت $J(q)$ بين سرعات المفاصل $\\dot{q}$ والسرعات الخطية والزاوية لنهاية الذراع: $v = J(q) \\dot{q}$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_44",
    "titleEn": "[EASY] Impedance Control & Physical Human-Robot Interaction (pHRI) - Review 44",
    "titleAr": "[مستوى أساسي] التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت - سؤال 44",
    "questionEn": "[Question 44] In the context of Egyptian STEM robotics and mechatronics regarding Impedance Control & Physical Human-Robot Interaction (pHRI), which of the following scientific statements is valid?",
    "questionAr": "[السؤال 44] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Impedance control establishes a dynamic mass-spring-damper relationship between end-effector external contact forces and motion deviations: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يحدد التحكم بالممانعة علاقة ديناميكية (كتلة-نابض-مخمد) بين قوى التلامس الخارجية وانحراف الحركة: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Impedance control establishes a dynamic mass-spring-damper relationship between end-effector external contact forces and motion deviations: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "correctAnswerAr": "يحدد التحكم بالممانعة علاقة ديناميكية (كتلة-نابض-مخمد) بين قوى التلامس الخارجية وانحراف الحركة: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "explanationEn": "Correct Principle: Impedance control establishes a dynamic mass-spring-damper relationship between end-effector external contact forces and motion deviations: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد التحكم بالممانعة علاقة ديناميكية (كتلة-نابض-مخمد) بين قوى التلامس الخارجية وانحراف الحركة: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_45",
    "titleEn": "[EASY] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Review 45",
    "titleAr": "[مستوى أساسي] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - سؤال 45",
    "questionEn": "[Question 45] In the context of Egyptian STEM robotics and mechatronics regarding Lagrangian Dynamic Formulations & Inertia Matrix Derivations, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 45] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "correctAnswerAr": "تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "explanationEn": "Correct Principle: Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "explanationAr": "المبدأ العلمي الصحيح: تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_46",
    "titleEn": "[EASY] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Review 46",
    "titleAr": "[مستوى أساسي] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - سؤال 46",
    "questionEn": "[Question 46] In the context of Egyptian STEM robotics and mechatronics regarding Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 46] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
    "correctAnswerAr": "يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
    "explanationEn": "Correct Principle: Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
    "explanationAr": "المبدأ العلمي الصحيح: يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_47",
    "titleEn": "[EASY] Operational Space Formulation & Manipulator Jacobian Force Duality - Review 47",
    "titleAr": "[مستوى أساسي] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - سؤال 47",
    "questionEn": "[Question 47] In the context of Egyptian STEM robotics and mechatronics regarding Operational Space Formulation & Manipulator Jacobian Force Duality, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 47] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The manipulator Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to end-effector linear and angular velocities: $v = J(q) \\dot{q}$.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "تربط مصفوفة جاكوبيان للروبوت $J(q)$ بين سرعات المفاصل $\\dot{q}$ والسرعات الخطية والزاوية لنهاية الذراع: $v = J(q) \\dot{q}$.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The manipulator Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to end-effector linear and angular velocities: $v = J(q) \\dot{q}$.",
    "correctAnswerAr": "تربط مصفوفة جاكوبيان للروبوت $J(q)$ بين سرعات المفاصل $\\dot{q}$ والسرعات الخطية والزاوية لنهاية الذراع: $v = J(q) \\dot{q}$.",
    "explanationEn": "Correct Principle: The manipulator Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to end-effector linear and angular velocities: $v = J(q) \\dot{q}$.",
    "explanationAr": "المبدأ العلمي الصحيح: تربط مصفوفة جاكوبيان للروبوت $J(q)$ بين سرعات المفاصل $\\dot{q}$ والسرعات الخطية والزاوية لنهاية الذراع: $v = J(q) \\dot{q}$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_48",
    "titleEn": "[EASY] Impedance Control & Physical Human-Robot Interaction (pHRI) - Review 48",
    "titleAr": "[مستوى أساسي] التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت - سؤال 48",
    "questionEn": "[Question 48] In the context of Egyptian STEM robotics and mechatronics regarding Impedance Control & Physical Human-Robot Interaction (pHRI), which of the following scientific statements is valid?",
    "questionAr": "[السؤال 48] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "Impedance control establishes a dynamic mass-spring-damper relationship between end-effector external contact forces and motion deviations: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "يحدد التحكم بالممانعة علاقة ديناميكية (كتلة-نابض-مخمد) بين قوى التلامس الخارجية وانحراف الحركة: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Impedance control establishes a dynamic mass-spring-damper relationship between end-effector external contact forces and motion deviations: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "correctAnswerAr": "يحدد التحكم بالممانعة علاقة ديناميكية (كتلة-نابض-مخمد) بين قوى التلامس الخارجية وانحراف الحركة: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "explanationEn": "Correct Principle: Impedance control establishes a dynamic mass-spring-damper relationship between end-effector external contact forces and motion deviations: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد التحكم بالممانعة علاقة ديناميكية (كتلة-نابض-مخمد) بين قوى التلامس الخارجية وانحراف الحركة: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_49",
    "titleEn": "[EASY] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Review 49",
    "titleAr": "[مستوى أساسي] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - سؤال 49",
    "questionEn": "[Question 49] In the context of Egyptian STEM robotics and mechatronics regarding Lagrangian Dynamic Formulations & Inertia Matrix Derivations, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 49] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "correctAnswerAr": "تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "explanationEn": "Correct Principle: Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "explanationAr": "المبدأ العلمي الصحيح: تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_50",
    "titleEn": "[EASY] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Review 50",
    "titleAr": "[مستوى أساسي] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - سؤال 50",
    "questionEn": "[Question 50] In the context of Egyptian STEM robotics and mechatronics regarding Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 50] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
    "correctAnswerAr": "يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
    "explanationEn": "Correct Principle: Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
    "explanationAr": "المبدأ العلمي الصحيح: يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_51",
    "titleEn": "[EASY] Operational Space Formulation & Manipulator Jacobian Force Duality - Review 51",
    "titleAr": "[مستوى أساسي] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - سؤال 51",
    "questionEn": "[Question 51] In the context of Egyptian STEM robotics and mechatronics regarding Operational Space Formulation & Manipulator Jacobian Force Duality, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 51] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "The manipulator Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to end-effector linear and angular velocities: $v = J(q) \\dot{q}$.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تربط مصفوفة جاكوبيان للروبوت $J(q)$ بين سرعات المفاصل $\\dot{q}$ والسرعات الخطية والزاوية لنهاية الذراع: $v = J(q) \\dot{q}$.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The manipulator Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to end-effector linear and angular velocities: $v = J(q) \\dot{q}$.",
    "correctAnswerAr": "تربط مصفوفة جاكوبيان للروبوت $J(q)$ بين سرعات المفاصل $\\dot{q}$ والسرعات الخطية والزاوية لنهاية الذراع: $v = J(q) \\dot{q}$.",
    "explanationEn": "Correct Principle: The manipulator Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to end-effector linear and angular velocities: $v = J(q) \\dot{q}$.",
    "explanationAr": "المبدأ العلمي الصحيح: تربط مصفوفة جاكوبيان للروبوت $J(q)$ بين سرعات المفاصل $\\dot{q}$ والسرعات الخطية والزاوية لنهاية الذراع: $v = J(q) \\dot{q}$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_52",
    "titleEn": "[EASY] Impedance Control & Physical Human-Robot Interaction (pHRI) - Review 52",
    "titleAr": "[مستوى أساسي] التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت - سؤال 52",
    "questionEn": "[Question 52] In the context of Egyptian STEM robotics and mechatronics regarding Impedance Control & Physical Human-Robot Interaction (pHRI), which of the following scientific statements is valid?",
    "questionAr": "[السؤال 52] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "Impedance control establishes a dynamic mass-spring-damper relationship between end-effector external contact forces and motion deviations: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "يحدد التحكم بالممانعة علاقة ديناميكية (كتلة-نابض-مخمد) بين قوى التلامس الخارجية وانحراف الحركة: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Impedance control establishes a dynamic mass-spring-damper relationship between end-effector external contact forces and motion deviations: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "correctAnswerAr": "يحدد التحكم بالممانعة علاقة ديناميكية (كتلة-نابض-مخمد) بين قوى التلامس الخارجية وانحراف الحركة: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "explanationEn": "Correct Principle: Impedance control establishes a dynamic mass-spring-damper relationship between end-effector external contact forces and motion deviations: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد التحكم بالممانعة علاقة ديناميكية (كتلة-نابض-مخمد) بين قوى التلامس الخارجية وانحراف الحركة: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_53",
    "titleEn": "[EASY] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Review 53",
    "titleAr": "[مستوى أساسي] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - سؤال 53",
    "questionEn": "[Question 53] In the context of Egyptian STEM robotics and mechatronics regarding Lagrangian Dynamic Formulations & Inertia Matrix Derivations, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 53] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "correctAnswerAr": "تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "explanationEn": "Correct Principle: Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "explanationAr": "المبدأ العلمي الصحيح: تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_54",
    "titleEn": "[EASY] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Review 54",
    "titleAr": "[مستوى أساسي] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - سؤال 54",
    "questionEn": "[Question 54] In the context of Egyptian STEM robotics and mechatronics regarding Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 54] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
    "correctAnswerAr": "يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
    "explanationEn": "Correct Principle: Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
    "explanationAr": "المبدأ العلمي الصحيح: يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_55",
    "titleEn": "[EASY] Operational Space Formulation & Manipulator Jacobian Force Duality - Review 55",
    "titleAr": "[مستوى أساسي] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - سؤال 55",
    "questionEn": "[Question 55] In the context of Egyptian STEM robotics and mechatronics regarding Operational Space Formulation & Manipulator Jacobian Force Duality, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 55] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "The manipulator Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to end-effector linear and angular velocities: $v = J(q) \\dot{q}$.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تربط مصفوفة جاكوبيان للروبوت $J(q)$ بين سرعات المفاصل $\\dot{q}$ والسرعات الخطية والزاوية لنهاية الذراع: $v = J(q) \\dot{q}$.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The manipulator Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to end-effector linear and angular velocities: $v = J(q) \\dot{q}$.",
    "correctAnswerAr": "تربط مصفوفة جاكوبيان للروبوت $J(q)$ بين سرعات المفاصل $\\dot{q}$ والسرعات الخطية والزاوية لنهاية الذراع: $v = J(q) \\dot{q}$.",
    "explanationEn": "Correct Principle: The manipulator Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to end-effector linear and angular velocities: $v = J(q) \\dot{q}$.",
    "explanationAr": "المبدأ العلمي الصحيح: تربط مصفوفة جاكوبيان للروبوت $J(q)$ بين سرعات المفاصل $\\dot{q}$ والسرعات الخطية والزاوية لنهاية الذراع: $v = J(q) \\dot{q}$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_56",
    "titleEn": "[EASY] Impedance Control & Physical Human-Robot Interaction (pHRI) - Review 56",
    "titleAr": "[مستوى أساسي] التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت - سؤال 56",
    "questionEn": "[Question 56] In the context of Egyptian STEM robotics and mechatronics regarding Impedance Control & Physical Human-Robot Interaction (pHRI), which of the following scientific statements is valid?",
    "questionAr": "[السؤال 56] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Impedance control establishes a dynamic mass-spring-damper relationship between end-effector external contact forces and motion deviations: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "يحدد التحكم بالممانعة علاقة ديناميكية (كتلة-نابض-مخمد) بين قوى التلامس الخارجية وانحراف الحركة: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Impedance control establishes a dynamic mass-spring-damper relationship between end-effector external contact forces and motion deviations: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "correctAnswerAr": "يحدد التحكم بالممانعة علاقة ديناميكية (كتلة-نابض-مخمد) بين قوى التلامس الخارجية وانحراف الحركة: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "explanationEn": "Correct Principle: Impedance control establishes a dynamic mass-spring-damper relationship between end-effector external contact forces and motion deviations: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد التحكم بالممانعة علاقة ديناميكية (كتلة-نابض-مخمد) بين قوى التلامس الخارجية وانحراف الحركة: $M_d (\\ddot{x} - \\ddot{x}_d) + B_d (\\dot{x} - \\dot{x}_d) + K_d (x - x_d) = F_{ext}$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_57",
    "titleEn": "[EASY] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Review 57",
    "titleAr": "[مستوى أساسي] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - سؤال 57",
    "questionEn": "[Question 57] In the context of Egyptian STEM robotics and mechatronics regarding Lagrangian Dynamic Formulations & Inertia Matrix Derivations, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 57] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "correctAnswerAr": "تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "explanationEn": "Correct Principle: Robot manipulator dynamics relate joint torques $\\tau$ to joint accelerations $\\ddot{q}$ through the standard equation of motion: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "explanationAr": "المبدأ العلمي الصحيح: تربط معادلات ديناميكا الروبوت بين عزم المفاصل $\\tau$ وتسارعاتها $\\ddot{q}$ من خلال معادلة الحركة القياسية: $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + g(q) = \\tau$.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch1_easy_58",
    "titleEn": "[EASY] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Review 58",
    "titleAr": "[مستوى أساسي] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - سؤال 58",
    "questionEn": "[Question 58] In the context of Egyptian STEM robotics and mechatronics regarding Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 58] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
    "correctAnswerAr": "يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
    "explanationEn": "Correct Principle: Field-Oriented Control (FOC) decouples 3-phase stator currents into torque-producing ($I_q$) and flux-producing ($I_d$) orthogonal components in a rotating d-q reference frame.",
    "explanationAr": "المبدأ العلمي الصحيح: يفصل التحكم الموجه بالفيض (FOC) تيارات المحرك ثلاثية الطور إلى مركبة عزم ($I_q$) ومركبة فيض مغناطيسي ($I_d$) متعامدتين في إطار مرجعي دوار d-q.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  }
],
  medium: [
  {
    "id": "egbac_robotics_ch1_med_1",
    "titleEn": "[MEDIUM] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Analysis 1",
    "titleAr": "[مستوى متوسط] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - تحليل 1",
    "questionEn": "[Question 1] When analyzing hardware-software integration and operational control for Lagrangian Dynamic Formulations & Inertia Matrix Derivations, identify the correct engineering relationship:",
    "questionAr": "[السؤال 1] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
    "correctAnswerAr": "تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
    "explanationEn": "Engineering Analysis: The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
    "explanationAr": "التحليل الهندسي المعتمد: تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_2",
    "titleEn": "[MEDIUM] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Analysis 2",
    "titleAr": "[مستوى متوسط] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - تحليل 2",
    "questionEn": "[Question 2] When analyzing hardware-software integration and operational control for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms, identify the correct engineering relationship:",
    "questionAr": "[السؤال 2] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$.",
    "correctAnswerAr": "يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$.",
    "explanationEn": "Engineering Analysis: The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$.",
    "explanationAr": "التحليل الهندسي المعتمد: يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_3",
    "titleEn": "[MEDIUM] Operational Space Formulation & Manipulator Jacobian Force Duality - Analysis 3",
    "titleAr": "[مستوى متوسط] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - تحليل 3",
    "questionEn": "[Question 3] When analyzing hardware-software integration and operational control for Operational Space Formulation & Manipulator Jacobian Force Duality, identify the correct engineering relationship:",
    "questionAr": "[السؤال 3] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
    "correctAnswerAr": "وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
    "explanationEn": "Engineering Analysis: By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
    "explanationAr": "التحليل الهندسي المعتمد: وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_4",
    "titleEn": "[MEDIUM] Impedance Control & Physical Human-Robot Interaction (pHRI) - Analysis 4",
    "titleAr": "[مستوى متوسط] التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت - تحليل 4",
    "questionEn": "[Question 4] When analyzing hardware-software integration and operational control for Impedance Control & Physical Human-Robot Interaction (pHRI), identify the correct engineering relationship:",
    "questionAr": "[السؤال 4] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Variable impedance control enables collaborative robots to behave compliantly during unexpected collisions while maintaining stiff tracking along free trajectory paths.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "يتيح التحكم بالممانعة المتغيرة للروبوتات التعاونية التصرف بمرونة عالية عند حدوث تصادم غير متوقع، مع الحفاظ على صلابة تتبع المسار في الهواء الطلق.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Variable impedance control enables collaborative robots to behave compliantly during unexpected collisions while maintaining stiff tracking along free trajectory paths.",
    "correctAnswerAr": "يتيح التحكم بالممانعة المتغيرة للروبوتات التعاونية التصرف بمرونة عالية عند حدوث تصادم غير متوقع، مع الحفاظ على صلابة تتبع المسار في الهواء الطلق.",
    "explanationEn": "Engineering Analysis: Variable impedance control enables collaborative robots to behave compliantly during unexpected collisions while maintaining stiff tracking along free trajectory paths.",
    "explanationAr": "التحليل الهندسي المعتمد: يتيح التحكم بالممانعة المتغيرة للروبوتات التعاونية التصرف بمرونة عالية عند حدوث تصادم غير متوقع، مع الحفاظ على صلابة تتبع المسار في الهواء الطلق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_5",
    "titleEn": "[MEDIUM] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Analysis 5",
    "titleAr": "[مستوى متوسط] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - تحليل 5",
    "questionEn": "[Question 5] When analyzing hardware-software integration and operational control for Lagrangian Dynamic Formulations & Inertia Matrix Derivations, identify the correct engineering relationship:",
    "questionAr": "[السؤال 5] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
    "correctAnswerAr": "تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
    "explanationEn": "Engineering Analysis: The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
    "explanationAr": "التحليل الهندسي المعتمد: تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_6",
    "titleEn": "[MEDIUM] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Analysis 6",
    "titleAr": "[مستوى متوسط] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - تحليل 6",
    "questionEn": "[Question 6] When analyzing hardware-software integration and operational control for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms, identify the correct engineering relationship:",
    "questionAr": "[السؤال 6] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$.",
    "correctAnswerAr": "يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$.",
    "explanationEn": "Engineering Analysis: The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$.",
    "explanationAr": "التحليل الهندسي المعتمد: يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_7",
    "titleEn": "[MEDIUM] Operational Space Formulation & Manipulator Jacobian Force Duality - Analysis 7",
    "titleAr": "[مستوى متوسط] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - تحليل 7",
    "questionEn": "[Question 7] When analyzing hardware-software integration and operational control for Operational Space Formulation & Manipulator Jacobian Force Duality, identify the correct engineering relationship:",
    "questionAr": "[السؤال 7] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
    "correctAnswerAr": "وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
    "explanationEn": "Engineering Analysis: By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
    "explanationAr": "التحليل الهندسي المعتمد: وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_8",
    "titleEn": "[MEDIUM] Impedance Control & Physical Human-Robot Interaction (pHRI) - Analysis 8",
    "titleAr": "[مستوى متوسط] التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت - تحليل 8",
    "questionEn": "[Question 8] When analyzing hardware-software integration and operational control for Impedance Control & Physical Human-Robot Interaction (pHRI), identify the correct engineering relationship:",
    "questionAr": "[السؤال 8] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Variable impedance control enables collaborative robots to behave compliantly during unexpected collisions while maintaining stiff tracking along free trajectory paths.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "يتيح التحكم بالممانعة المتغيرة للروبوتات التعاونية التصرف بمرونة عالية عند حدوث تصادم غير متوقع، مع الحفاظ على صلابة تتبع المسار في الهواء الطلق.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Variable impedance control enables collaborative robots to behave compliantly during unexpected collisions while maintaining stiff tracking along free trajectory paths.",
    "correctAnswerAr": "يتيح التحكم بالممانعة المتغيرة للروبوتات التعاونية التصرف بمرونة عالية عند حدوث تصادم غير متوقع، مع الحفاظ على صلابة تتبع المسار في الهواء الطلق.",
    "explanationEn": "Engineering Analysis: Variable impedance control enables collaborative robots to behave compliantly during unexpected collisions while maintaining stiff tracking along free trajectory paths.",
    "explanationAr": "التحليل الهندسي المعتمد: يتيح التحكم بالممانعة المتغيرة للروبوتات التعاونية التصرف بمرونة عالية عند حدوث تصادم غير متوقع، مع الحفاظ على صلابة تتبع المسار في الهواء الطلق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_9",
    "titleEn": "[MEDIUM] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Analysis 9",
    "titleAr": "[مستوى متوسط] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - تحليل 9",
    "questionEn": "[Question 9] When analyzing hardware-software integration and operational control for Lagrangian Dynamic Formulations & Inertia Matrix Derivations, identify the correct engineering relationship:",
    "questionAr": "[السؤال 9] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
    "correctAnswerAr": "تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
    "explanationEn": "Engineering Analysis: The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
    "explanationAr": "التحليل الهندسي المعتمد: تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_10",
    "titleEn": "[MEDIUM] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Analysis 10",
    "titleAr": "[مستوى متوسط] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - تحليل 10",
    "questionEn": "[Question 10] When analyzing hardware-software integration and operational control for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms, identify the correct engineering relationship:",
    "questionAr": "[السؤال 10] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$.",
    "correctAnswerAr": "يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$.",
    "explanationEn": "Engineering Analysis: The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$.",
    "explanationAr": "التحليل الهندسي المعتمد: يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_11",
    "titleEn": "[MEDIUM] Operational Space Formulation & Manipulator Jacobian Force Duality - Analysis 11",
    "titleAr": "[مستوى متوسط] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - تحليل 11",
    "questionEn": "[Question 11] When analyzing hardware-software integration and operational control for Operational Space Formulation & Manipulator Jacobian Force Duality, identify the correct engineering relationship:",
    "questionAr": "[السؤال 11] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
    "correctAnswerAr": "وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
    "explanationEn": "Engineering Analysis: By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
    "explanationAr": "التحليل الهندسي المعتمد: وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_12",
    "titleEn": "[MEDIUM] Impedance Control & Physical Human-Robot Interaction (pHRI) - Analysis 12",
    "titleAr": "[مستوى متوسط] التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت - تحليل 12",
    "questionEn": "[Question 12] When analyzing hardware-software integration and operational control for Impedance Control & Physical Human-Robot Interaction (pHRI), identify the correct engineering relationship:",
    "questionAr": "[السؤال 12] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Variable impedance control enables collaborative robots to behave compliantly during unexpected collisions while maintaining stiff tracking along free trajectory paths.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "يتيح التحكم بالممانعة المتغيرة للروبوتات التعاونية التصرف بمرونة عالية عند حدوث تصادم غير متوقع، مع الحفاظ على صلابة تتبع المسار في الهواء الطلق.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Variable impedance control enables collaborative robots to behave compliantly during unexpected collisions while maintaining stiff tracking along free trajectory paths.",
    "correctAnswerAr": "يتيح التحكم بالممانعة المتغيرة للروبوتات التعاونية التصرف بمرونة عالية عند حدوث تصادم غير متوقع، مع الحفاظ على صلابة تتبع المسار في الهواء الطلق.",
    "explanationEn": "Engineering Analysis: Variable impedance control enables collaborative robots to behave compliantly during unexpected collisions while maintaining stiff tracking along free trajectory paths.",
    "explanationAr": "التحليل الهندسي المعتمد: يتيح التحكم بالممانعة المتغيرة للروبوتات التعاونية التصرف بمرونة عالية عند حدوث تصادم غير متوقع، مع الحفاظ على صلابة تتبع المسار في الهواء الطلق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_13",
    "titleEn": "[MEDIUM] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Analysis 13",
    "titleAr": "[مستوى متوسط] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - تحليل 13",
    "questionEn": "[Question 13] When analyzing hardware-software integration and operational control for Lagrangian Dynamic Formulations & Inertia Matrix Derivations, identify the correct engineering relationship:",
    "questionAr": "[السؤال 13] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
    "correctAnswerAr": "تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
    "explanationEn": "Engineering Analysis: The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
    "explanationAr": "التحليل الهندسي المعتمد: تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_14",
    "titleEn": "[MEDIUM] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Analysis 14",
    "titleAr": "[مستوى متوسط] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - تحليل 14",
    "questionEn": "[Question 14] When analyzing hardware-software integration and operational control for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms, identify the correct engineering relationship:",
    "questionAr": "[السؤال 14] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$.",
    "correctAnswerAr": "يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$.",
    "explanationEn": "Engineering Analysis: The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$.",
    "explanationAr": "التحليل الهندسي المعتمد: يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_15",
    "titleEn": "[MEDIUM] Operational Space Formulation & Manipulator Jacobian Force Duality - Analysis 15",
    "titleAr": "[مستوى متوسط] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - تحليل 15",
    "questionEn": "[Question 15] When analyzing hardware-software integration and operational control for Operational Space Formulation & Manipulator Jacobian Force Duality, identify the correct engineering relationship:",
    "questionAr": "[السؤال 15] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
    "correctAnswerAr": "وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
    "explanationEn": "Engineering Analysis: By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
    "explanationAr": "التحليل الهندسي المعتمد: وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_16",
    "titleEn": "[MEDIUM] Impedance Control & Physical Human-Robot Interaction (pHRI) - Analysis 16",
    "titleAr": "[مستوى متوسط] التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت - تحليل 16",
    "questionEn": "[Question 16] When analyzing hardware-software integration and operational control for Impedance Control & Physical Human-Robot Interaction (pHRI), identify the correct engineering relationship:",
    "questionAr": "[السؤال 16] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Variable impedance control enables collaborative robots to behave compliantly during unexpected collisions while maintaining stiff tracking along free trajectory paths.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "يتيح التحكم بالممانعة المتغيرة للروبوتات التعاونية التصرف بمرونة عالية عند حدوث تصادم غير متوقع، مع الحفاظ على صلابة تتبع المسار في الهواء الطلق.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Variable impedance control enables collaborative robots to behave compliantly during unexpected collisions while maintaining stiff tracking along free trajectory paths.",
    "correctAnswerAr": "يتيح التحكم بالممانعة المتغيرة للروبوتات التعاونية التصرف بمرونة عالية عند حدوث تصادم غير متوقع، مع الحفاظ على صلابة تتبع المسار في الهواء الطلق.",
    "explanationEn": "Engineering Analysis: Variable impedance control enables collaborative robots to behave compliantly during unexpected collisions while maintaining stiff tracking along free trajectory paths.",
    "explanationAr": "التحليل الهندسي المعتمد: يتيح التحكم بالممانعة المتغيرة للروبوتات التعاونية التصرف بمرونة عالية عند حدوث تصادم غير متوقع، مع الحفاظ على صلابة تتبع المسار في الهواء الطلق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_17",
    "titleEn": "[MEDIUM] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Analysis 17",
    "titleAr": "[مستوى متوسط] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - تحليل 17",
    "questionEn": "[Question 17] When analyzing hardware-software integration and operational control for Lagrangian Dynamic Formulations & Inertia Matrix Derivations, identify the correct engineering relationship:",
    "questionAr": "[السؤال 17] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
    "correctAnswerAr": "تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
    "explanationEn": "Engineering Analysis: The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
    "explanationAr": "التحليل الهندسي المعتمد: تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_18",
    "titleEn": "[MEDIUM] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Analysis 18",
    "titleAr": "[مستوى متوسط] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - تحليل 18",
    "questionEn": "[Question 18] When analyzing hardware-software integration and operational control for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms, identify the correct engineering relationship:",
    "questionAr": "[السؤال 18] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$.",
    "correctAnswerAr": "يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$.",
    "explanationEn": "Engineering Analysis: The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$.",
    "explanationAr": "التحليل الهندسي المعتمد: يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_19",
    "titleEn": "[MEDIUM] Operational Space Formulation & Manipulator Jacobian Force Duality - Analysis 19",
    "titleAr": "[مستوى متوسط] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - تحليل 19",
    "questionEn": "[Question 19] When analyzing hardware-software integration and operational control for Operational Space Formulation & Manipulator Jacobian Force Duality, identify the correct engineering relationship:",
    "questionAr": "[السؤال 19] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
    "correctAnswerAr": "وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
    "explanationEn": "Engineering Analysis: By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
    "explanationAr": "التحليل الهندسي المعتمد: وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_20",
    "titleEn": "[MEDIUM] Impedance Control & Physical Human-Robot Interaction (pHRI) - Analysis 20",
    "titleAr": "[مستوى متوسط] التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت - تحليل 20",
    "questionEn": "[Question 20] When analyzing hardware-software integration and operational control for Impedance Control & Physical Human-Robot Interaction (pHRI), identify the correct engineering relationship:",
    "questionAr": "[السؤال 20] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Variable impedance control enables collaborative robots to behave compliantly during unexpected collisions while maintaining stiff tracking along free trajectory paths.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "يتيح التحكم بالممانعة المتغيرة للروبوتات التعاونية التصرف بمرونة عالية عند حدوث تصادم غير متوقع، مع الحفاظ على صلابة تتبع المسار في الهواء الطلق.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Variable impedance control enables collaborative robots to behave compliantly during unexpected collisions while maintaining stiff tracking along free trajectory paths.",
    "correctAnswerAr": "يتيح التحكم بالممانعة المتغيرة للروبوتات التعاونية التصرف بمرونة عالية عند حدوث تصادم غير متوقع، مع الحفاظ على صلابة تتبع المسار في الهواء الطلق.",
    "explanationEn": "Engineering Analysis: Variable impedance control enables collaborative robots to behave compliantly during unexpected collisions while maintaining stiff tracking along free trajectory paths.",
    "explanationAr": "التحليل الهندسي المعتمد: يتيح التحكم بالممانعة المتغيرة للروبوتات التعاونية التصرف بمرونة عالية عند حدوث تصادم غير متوقع، مع الحفاظ على صلابة تتبع المسار في الهواء الطلق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_21",
    "titleEn": "[MEDIUM] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Analysis 21",
    "titleAr": "[مستوى متوسط] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - تحليل 21",
    "questionEn": "[Question 21] When analyzing hardware-software integration and operational control for Lagrangian Dynamic Formulations & Inertia Matrix Derivations, identify the correct engineering relationship:",
    "questionAr": "[السؤال 21] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
    "correctAnswerAr": "تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
    "explanationEn": "Engineering Analysis: The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
    "explanationAr": "التحليل الهندسي المعتمد: تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_22",
    "titleEn": "[MEDIUM] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Analysis 22",
    "titleAr": "[مستوى متوسط] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - تحليل 22",
    "questionEn": "[Question 22] When analyzing hardware-software integration and operational control for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms, identify the correct engineering relationship:",
    "questionAr": "[السؤال 22] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$.",
    "correctAnswerAr": "يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$.",
    "explanationEn": "Engineering Analysis: The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$.",
    "explanationAr": "التحليل الهندسي المعتمد: يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_23",
    "titleEn": "[MEDIUM] Operational Space Formulation & Manipulator Jacobian Force Duality - Analysis 23",
    "titleAr": "[مستوى متوسط] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - تحليل 23",
    "questionEn": "[Question 23] When analyzing hardware-software integration and operational control for Operational Space Formulation & Manipulator Jacobian Force Duality, identify the correct engineering relationship:",
    "questionAr": "[السؤال 23] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
    "correctAnswerAr": "وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
    "explanationEn": "Engineering Analysis: By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
    "explanationAr": "التحليل الهندسي المعتمد: وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_24",
    "titleEn": "[MEDIUM] Impedance Control & Physical Human-Robot Interaction (pHRI) - Analysis 24",
    "titleAr": "[مستوى متوسط] التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت - تحليل 24",
    "questionEn": "[Question 24] When analyzing hardware-software integration and operational control for Impedance Control & Physical Human-Robot Interaction (pHRI), identify the correct engineering relationship:",
    "questionAr": "[السؤال 24] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Variable impedance control enables collaborative robots to behave compliantly during unexpected collisions while maintaining stiff tracking along free trajectory paths.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "يتيح التحكم بالممانعة المتغيرة للروبوتات التعاونية التصرف بمرونة عالية عند حدوث تصادم غير متوقع، مع الحفاظ على صلابة تتبع المسار في الهواء الطلق.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Variable impedance control enables collaborative robots to behave compliantly during unexpected collisions while maintaining stiff tracking along free trajectory paths.",
    "correctAnswerAr": "يتيح التحكم بالممانعة المتغيرة للروبوتات التعاونية التصرف بمرونة عالية عند حدوث تصادم غير متوقع، مع الحفاظ على صلابة تتبع المسار في الهواء الطلق.",
    "explanationEn": "Engineering Analysis: Variable impedance control enables collaborative robots to behave compliantly during unexpected collisions while maintaining stiff tracking along free trajectory paths.",
    "explanationAr": "التحليل الهندسي المعتمد: يتيح التحكم بالممانعة المتغيرة للروبوتات التعاونية التصرف بمرونة عالية عند حدوث تصادم غير متوقع، مع الحفاظ على صلابة تتبع المسار في الهواء الطلق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_25",
    "titleEn": "[MEDIUM] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Analysis 25",
    "titleAr": "[مستوى متوسط] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - تحليل 25",
    "questionEn": "[Question 25] When analyzing hardware-software integration and operational control for Lagrangian Dynamic Formulations & Inertia Matrix Derivations, identify the correct engineering relationship:",
    "questionAr": "[السؤال 25] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
    "correctAnswerAr": "تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
    "explanationEn": "Engineering Analysis: The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
    "explanationAr": "التحليل الهندسي المعتمد: تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_26",
    "titleEn": "[MEDIUM] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Analysis 26",
    "titleAr": "[مستوى متوسط] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - تحليل 26",
    "questionEn": "[Question 26] When analyzing hardware-software integration and operational control for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms, identify the correct engineering relationship:",
    "questionAr": "[السؤال 26] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$.",
    "correctAnswerAr": "يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$.",
    "explanationEn": "Engineering Analysis: The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$.",
    "explanationAr": "التحليل الهندسي المعتمد: يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_27",
    "titleEn": "[MEDIUM] Operational Space Formulation & Manipulator Jacobian Force Duality - Analysis 27",
    "titleAr": "[مستوى متوسط] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - تحليل 27",
    "questionEn": "[Question 27] When analyzing hardware-software integration and operational control for Operational Space Formulation & Manipulator Jacobian Force Duality, identify the correct engineering relationship:",
    "questionAr": "[السؤال 27] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
    "correctAnswerAr": "وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
    "explanationEn": "Engineering Analysis: By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
    "explanationAr": "التحليل الهندسي المعتمد: وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_28",
    "titleEn": "[MEDIUM] Impedance Control & Physical Human-Robot Interaction (pHRI) - Analysis 28",
    "titleAr": "[مستوى متوسط] التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت - تحليل 28",
    "questionEn": "[Question 28] When analyzing hardware-software integration and operational control for Impedance Control & Physical Human-Robot Interaction (pHRI), identify the correct engineering relationship:",
    "questionAr": "[السؤال 28] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Variable impedance control enables collaborative robots to behave compliantly during unexpected collisions while maintaining stiff tracking along free trajectory paths.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "يتيح التحكم بالممانعة المتغيرة للروبوتات التعاونية التصرف بمرونة عالية عند حدوث تصادم غير متوقع، مع الحفاظ على صلابة تتبع المسار في الهواء الطلق.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Variable impedance control enables collaborative robots to behave compliantly during unexpected collisions while maintaining stiff tracking along free trajectory paths.",
    "correctAnswerAr": "يتيح التحكم بالممانعة المتغيرة للروبوتات التعاونية التصرف بمرونة عالية عند حدوث تصادم غير متوقع، مع الحفاظ على صلابة تتبع المسار في الهواء الطلق.",
    "explanationEn": "Engineering Analysis: Variable impedance control enables collaborative robots to behave compliantly during unexpected collisions while maintaining stiff tracking along free trajectory paths.",
    "explanationAr": "التحليل الهندسي المعتمد: يتيح التحكم بالممانعة المتغيرة للروبوتات التعاونية التصرف بمرونة عالية عند حدوث تصادم غير متوقع، مع الحفاظ على صلابة تتبع المسار في الهواء الطلق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_29",
    "titleEn": "[MEDIUM] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Analysis 29",
    "titleAr": "[مستوى متوسط] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - تحليل 29",
    "questionEn": "[Question 29] When analyzing hardware-software integration and operational control for Lagrangian Dynamic Formulations & Inertia Matrix Derivations, identify the correct engineering relationship:",
    "questionAr": "[السؤال 29] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
    "correctAnswerAr": "تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
    "explanationEn": "Engineering Analysis: The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
    "explanationAr": "التحليل الهندسي المعتمد: تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_30",
    "titleEn": "[MEDIUM] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Analysis 30",
    "titleAr": "[مستوى متوسط] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - تحليل 30",
    "questionEn": "[Question 30] When analyzing hardware-software integration and operational control for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms, identify the correct engineering relationship:",
    "questionAr": "[السؤال 30] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$.",
    "correctAnswerAr": "يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$.",
    "explanationEn": "Engineering Analysis: The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$.",
    "explanationAr": "التحليل الهندسي المعتمد: يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_31",
    "titleEn": "[MEDIUM] Operational Space Formulation & Manipulator Jacobian Force Duality - Analysis 31",
    "titleAr": "[مستوى متوسط] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - تحليل 31",
    "questionEn": "[Question 31] When analyzing hardware-software integration and operational control for Operational Space Formulation & Manipulator Jacobian Force Duality, identify the correct engineering relationship:",
    "questionAr": "[السؤال 31] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
    "correctAnswerAr": "وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
    "explanationEn": "Engineering Analysis: By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
    "explanationAr": "التحليل الهندسي المعتمد: وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_32",
    "titleEn": "[MEDIUM] Impedance Control & Physical Human-Robot Interaction (pHRI) - Analysis 32",
    "titleAr": "[مستوى متوسط] التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت - تحليل 32",
    "questionEn": "[Question 32] When analyzing hardware-software integration and operational control for Impedance Control & Physical Human-Robot Interaction (pHRI), identify the correct engineering relationship:",
    "questionAr": "[السؤال 32] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Variable impedance control enables collaborative robots to behave compliantly during unexpected collisions while maintaining stiff tracking along free trajectory paths.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "يتيح التحكم بالممانعة المتغيرة للروبوتات التعاونية التصرف بمرونة عالية عند حدوث تصادم غير متوقع، مع الحفاظ على صلابة تتبع المسار في الهواء الطلق.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Variable impedance control enables collaborative robots to behave compliantly during unexpected collisions while maintaining stiff tracking along free trajectory paths.",
    "correctAnswerAr": "يتيح التحكم بالممانعة المتغيرة للروبوتات التعاونية التصرف بمرونة عالية عند حدوث تصادم غير متوقع، مع الحفاظ على صلابة تتبع المسار في الهواء الطلق.",
    "explanationEn": "Engineering Analysis: Variable impedance control enables collaborative robots to behave compliantly during unexpected collisions while maintaining stiff tracking along free trajectory paths.",
    "explanationAr": "التحليل الهندسي المعتمد: يتيح التحكم بالممانعة المتغيرة للروبوتات التعاونية التصرف بمرونة عالية عند حدوث تصادم غير متوقع، مع الحفاظ على صلابة تتبع المسار في الهواء الطلق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_33",
    "titleEn": "[MEDIUM] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Analysis 33",
    "titleAr": "[مستوى متوسط] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - تحليل 33",
    "questionEn": "[Question 33] When analyzing hardware-software integration and operational control for Lagrangian Dynamic Formulations & Inertia Matrix Derivations, identify the correct engineering relationship:",
    "questionAr": "[السؤال 33] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
    "correctAnswerAr": "تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
    "explanationEn": "Engineering Analysis: The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
    "explanationAr": "التحليل الهندسي المعتمد: تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_34",
    "titleEn": "[MEDIUM] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Analysis 34",
    "titleAr": "[مستوى متوسط] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - تحليل 34",
    "questionEn": "[Question 34] When analyzing hardware-software integration and operational control for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms, identify the correct engineering relationship:",
    "questionAr": "[السؤال 34] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$.",
    "correctAnswerAr": "يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$.",
    "explanationEn": "Engineering Analysis: The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$.",
    "explanationAr": "التحليل الهندسي المعتمد: يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_35",
    "titleEn": "[MEDIUM] Operational Space Formulation & Manipulator Jacobian Force Duality - Analysis 35",
    "titleAr": "[مستوى متوسط] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - تحليل 35",
    "questionEn": "[Question 35] When analyzing hardware-software integration and operational control for Operational Space Formulation & Manipulator Jacobian Force Duality, identify the correct engineering relationship:",
    "questionAr": "[السؤال 35] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
    "correctAnswerAr": "وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
    "explanationEn": "Engineering Analysis: By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
    "explanationAr": "التحليل الهندسي المعتمد: وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_36",
    "titleEn": "[MEDIUM] Impedance Control & Physical Human-Robot Interaction (pHRI) - Analysis 36",
    "titleAr": "[مستوى متوسط] التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت - تحليل 36",
    "questionEn": "[Question 36] When analyzing hardware-software integration and operational control for Impedance Control & Physical Human-Robot Interaction (pHRI), identify the correct engineering relationship:",
    "questionAr": "[السؤال 36] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Variable impedance control enables collaborative robots to behave compliantly during unexpected collisions while maintaining stiff tracking along free trajectory paths.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "يتيح التحكم بالممانعة المتغيرة للروبوتات التعاونية التصرف بمرونة عالية عند حدوث تصادم غير متوقع، مع الحفاظ على صلابة تتبع المسار في الهواء الطلق.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Variable impedance control enables collaborative robots to behave compliantly during unexpected collisions while maintaining stiff tracking along free trajectory paths.",
    "correctAnswerAr": "يتيح التحكم بالممانعة المتغيرة للروبوتات التعاونية التصرف بمرونة عالية عند حدوث تصادم غير متوقع، مع الحفاظ على صلابة تتبع المسار في الهواء الطلق.",
    "explanationEn": "Engineering Analysis: Variable impedance control enables collaborative robots to behave compliantly during unexpected collisions while maintaining stiff tracking along free trajectory paths.",
    "explanationAr": "التحليل الهندسي المعتمد: يتيح التحكم بالممانعة المتغيرة للروبوتات التعاونية التصرف بمرونة عالية عند حدوث تصادم غير متوقع، مع الحفاظ على صلابة تتبع المسار في الهواء الطلق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_37",
    "titleEn": "[MEDIUM] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Analysis 37",
    "titleAr": "[مستوى متوسط] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - تحليل 37",
    "questionEn": "[Question 37] When analyzing hardware-software integration and operational control for Lagrangian Dynamic Formulations & Inertia Matrix Derivations, identify the correct engineering relationship:",
    "questionAr": "[السؤال 37] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
    "correctAnswerAr": "تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
    "explanationEn": "Engineering Analysis: The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
    "explanationAr": "التحليل الهندسي المعتمد: تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_38",
    "titleEn": "[MEDIUM] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Analysis 38",
    "titleAr": "[مستوى متوسط] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - تحليل 38",
    "questionEn": "[Question 38] When analyzing hardware-software integration and operational control for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms, identify the correct engineering relationship:",
    "questionAr": "[السؤال 38] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$.",
    "correctAnswerAr": "يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$.",
    "explanationEn": "Engineering Analysis: The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$.",
    "explanationAr": "التحليل الهندسي المعتمد: يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_39",
    "titleEn": "[MEDIUM] Operational Space Formulation & Manipulator Jacobian Force Duality - Analysis 39",
    "titleAr": "[مستوى متوسط] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - تحليل 39",
    "questionEn": "[Question 39] When analyzing hardware-software integration and operational control for Operational Space Formulation & Manipulator Jacobian Force Duality, identify the correct engineering relationship:",
    "questionAr": "[السؤال 39] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
    "correctAnswerAr": "وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
    "explanationEn": "Engineering Analysis: By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
    "explanationAr": "التحليل الهندسي المعتمد: وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_40",
    "titleEn": "[MEDIUM] Impedance Control & Physical Human-Robot Interaction (pHRI) - Analysis 40",
    "titleAr": "[مستوى متوسط] التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت - تحليل 40",
    "questionEn": "[Question 40] When analyzing hardware-software integration and operational control for Impedance Control & Physical Human-Robot Interaction (pHRI), identify the correct engineering relationship:",
    "questionAr": "[السؤال 40] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Variable impedance control enables collaborative robots to behave compliantly during unexpected collisions while maintaining stiff tracking along free trajectory paths.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "يتيح التحكم بالممانعة المتغيرة للروبوتات التعاونية التصرف بمرونة عالية عند حدوث تصادم غير متوقع، مع الحفاظ على صلابة تتبع المسار في الهواء الطلق.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Variable impedance control enables collaborative robots to behave compliantly during unexpected collisions while maintaining stiff tracking along free trajectory paths.",
    "correctAnswerAr": "يتيح التحكم بالممانعة المتغيرة للروبوتات التعاونية التصرف بمرونة عالية عند حدوث تصادم غير متوقع، مع الحفاظ على صلابة تتبع المسار في الهواء الطلق.",
    "explanationEn": "Engineering Analysis: Variable impedance control enables collaborative robots to behave compliantly during unexpected collisions while maintaining stiff tracking along free trajectory paths.",
    "explanationAr": "التحليل الهندسي المعتمد: يتيح التحكم بالممانعة المتغيرة للروبوتات التعاونية التصرف بمرونة عالية عند حدوث تصادم غير متوقع، مع الحفاظ على صلابة تتبع المسار في الهواء الطلق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_41",
    "titleEn": "[MEDIUM] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Analysis 41",
    "titleAr": "[مستوى متوسط] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - تحليل 41",
    "questionEn": "[Question 41] When analyzing hardware-software integration and operational control for Lagrangian Dynamic Formulations & Inertia Matrix Derivations, identify the correct engineering relationship:",
    "questionAr": "[السؤال 41] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
    "correctAnswerAr": "تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
    "explanationEn": "Engineering Analysis: The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
    "explanationAr": "التحليل الهندسي المعتمد: تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_42",
    "titleEn": "[MEDIUM] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Analysis 42",
    "titleAr": "[مستوى متوسط] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - تحليل 42",
    "questionEn": "[Question 42] When analyzing hardware-software integration and operational control for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms, identify the correct engineering relationship:",
    "questionAr": "[السؤال 42] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$.",
    "correctAnswerAr": "يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$.",
    "explanationEn": "Engineering Analysis: The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$.",
    "explanationAr": "التحليل الهندسي المعتمد: يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_43",
    "titleEn": "[MEDIUM] Operational Space Formulation & Manipulator Jacobian Force Duality - Analysis 43",
    "titleAr": "[مستوى متوسط] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - تحليل 43",
    "questionEn": "[Question 43] When analyzing hardware-software integration and operational control for Operational Space Formulation & Manipulator Jacobian Force Duality, identify the correct engineering relationship:",
    "questionAr": "[السؤال 43] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
    "correctAnswerAr": "وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
    "explanationEn": "Engineering Analysis: By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
    "explanationAr": "التحليل الهندسي المعتمد: وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_44",
    "titleEn": "[MEDIUM] Impedance Control & Physical Human-Robot Interaction (pHRI) - Analysis 44",
    "titleAr": "[مستوى متوسط] التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت - تحليل 44",
    "questionEn": "[Question 44] When analyzing hardware-software integration and operational control for Impedance Control & Physical Human-Robot Interaction (pHRI), identify the correct engineering relationship:",
    "questionAr": "[السؤال 44] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Variable impedance control enables collaborative robots to behave compliantly during unexpected collisions while maintaining stiff tracking along free trajectory paths.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "يتيح التحكم بالممانعة المتغيرة للروبوتات التعاونية التصرف بمرونة عالية عند حدوث تصادم غير متوقع، مع الحفاظ على صلابة تتبع المسار في الهواء الطلق.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Variable impedance control enables collaborative robots to behave compliantly during unexpected collisions while maintaining stiff tracking along free trajectory paths.",
    "correctAnswerAr": "يتيح التحكم بالممانعة المتغيرة للروبوتات التعاونية التصرف بمرونة عالية عند حدوث تصادم غير متوقع، مع الحفاظ على صلابة تتبع المسار في الهواء الطلق.",
    "explanationEn": "Engineering Analysis: Variable impedance control enables collaborative robots to behave compliantly during unexpected collisions while maintaining stiff tracking along free trajectory paths.",
    "explanationAr": "التحليل الهندسي المعتمد: يتيح التحكم بالممانعة المتغيرة للروبوتات التعاونية التصرف بمرونة عالية عند حدوث تصادم غير متوقع، مع الحفاظ على صلابة تتبع المسار في الهواء الطلق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_45",
    "titleEn": "[MEDIUM] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Analysis 45",
    "titleAr": "[مستوى متوسط] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - تحليل 45",
    "questionEn": "[Question 45] When analyzing hardware-software integration and operational control for Lagrangian Dynamic Formulations & Inertia Matrix Derivations, identify the correct engineering relationship:",
    "questionAr": "[السؤال 45] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
    "correctAnswerAr": "تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
    "explanationEn": "Engineering Analysis: The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
    "explanationAr": "التحليل الهندسي المعتمد: تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_46",
    "titleEn": "[MEDIUM] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Analysis 46",
    "titleAr": "[مستوى متوسط] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - تحليل 46",
    "questionEn": "[Question 46] When analyzing hardware-software integration and operational control for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms, identify the correct engineering relationship:",
    "questionAr": "[السؤال 46] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$.",
    "correctAnswerAr": "يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$.",
    "explanationEn": "Engineering Analysis: The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$.",
    "explanationAr": "التحليل الهندسي المعتمد: يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_47",
    "titleEn": "[MEDIUM] Operational Space Formulation & Manipulator Jacobian Force Duality - Analysis 47",
    "titleAr": "[مستوى متوسط] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - تحليل 47",
    "questionEn": "[Question 47] When analyzing hardware-software integration and operational control for Operational Space Formulation & Manipulator Jacobian Force Duality, identify the correct engineering relationship:",
    "questionAr": "[السؤال 47] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
    "correctAnswerAr": "وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
    "explanationEn": "Engineering Analysis: By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
    "explanationAr": "التحليل الهندسي المعتمد: وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_48",
    "titleEn": "[MEDIUM] Impedance Control & Physical Human-Robot Interaction (pHRI) - Analysis 48",
    "titleAr": "[مستوى متوسط] التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت - تحليل 48",
    "questionEn": "[Question 48] When analyzing hardware-software integration and operational control for Impedance Control & Physical Human-Robot Interaction (pHRI), identify the correct engineering relationship:",
    "questionAr": "[السؤال 48] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Variable impedance control enables collaborative robots to behave compliantly during unexpected collisions while maintaining stiff tracking along free trajectory paths.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "يتيح التحكم بالممانعة المتغيرة للروبوتات التعاونية التصرف بمرونة عالية عند حدوث تصادم غير متوقع، مع الحفاظ على صلابة تتبع المسار في الهواء الطلق.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Variable impedance control enables collaborative robots to behave compliantly during unexpected collisions while maintaining stiff tracking along free trajectory paths.",
    "correctAnswerAr": "يتيح التحكم بالممانعة المتغيرة للروبوتات التعاونية التصرف بمرونة عالية عند حدوث تصادم غير متوقع، مع الحفاظ على صلابة تتبع المسار في الهواء الطلق.",
    "explanationEn": "Engineering Analysis: Variable impedance control enables collaborative robots to behave compliantly during unexpected collisions while maintaining stiff tracking along free trajectory paths.",
    "explanationAr": "التحليل الهندسي المعتمد: يتيح التحكم بالممانعة المتغيرة للروبوتات التعاونية التصرف بمرونة عالية عند حدوث تصادم غير متوقع، مع الحفاظ على صلابة تتبع المسار في الهواء الطلق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_49",
    "titleEn": "[MEDIUM] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Analysis 49",
    "titleAr": "[مستوى متوسط] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - تحليل 49",
    "questionEn": "[Question 49] When analyzing hardware-software integration and operational control for Lagrangian Dynamic Formulations & Inertia Matrix Derivations, identify the correct engineering relationship:",
    "questionAr": "[السؤال 49] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
    "correctAnswerAr": "تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
    "explanationEn": "Engineering Analysis: The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
    "explanationAr": "التحليل الهندسي المعتمد: تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_50",
    "titleEn": "[MEDIUM] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Analysis 50",
    "titleAr": "[مستوى متوسط] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - تحليل 50",
    "questionEn": "[Question 50] When analyzing hardware-software integration and operational control for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms, identify the correct engineering relationship:",
    "questionAr": "[السؤال 50] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$.",
    "correctAnswerAr": "يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$.",
    "explanationEn": "Engineering Analysis: The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$.",
    "explanationAr": "التحليل الهندسي المعتمد: يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_51",
    "titleEn": "[MEDIUM] Operational Space Formulation & Manipulator Jacobian Force Duality - Analysis 51",
    "titleAr": "[مستوى متوسط] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - تحليل 51",
    "questionEn": "[Question 51] When analyzing hardware-software integration and operational control for Operational Space Formulation & Manipulator Jacobian Force Duality, identify the correct engineering relationship:",
    "questionAr": "[السؤال 51] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
    "correctAnswerAr": "وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
    "explanationEn": "Engineering Analysis: By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
    "explanationAr": "التحليل الهندسي المعتمد: وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_52",
    "titleEn": "[MEDIUM] Impedance Control & Physical Human-Robot Interaction (pHRI) - Analysis 52",
    "titleAr": "[مستوى متوسط] التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت - تحليل 52",
    "questionEn": "[Question 52] When analyzing hardware-software integration and operational control for Impedance Control & Physical Human-Robot Interaction (pHRI), identify the correct engineering relationship:",
    "questionAr": "[السؤال 52] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Variable impedance control enables collaborative robots to behave compliantly during unexpected collisions while maintaining stiff tracking along free trajectory paths.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "يتيح التحكم بالممانعة المتغيرة للروبوتات التعاونية التصرف بمرونة عالية عند حدوث تصادم غير متوقع، مع الحفاظ على صلابة تتبع المسار في الهواء الطلق.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Variable impedance control enables collaborative robots to behave compliantly during unexpected collisions while maintaining stiff tracking along free trajectory paths.",
    "correctAnswerAr": "يتيح التحكم بالممانعة المتغيرة للروبوتات التعاونية التصرف بمرونة عالية عند حدوث تصادم غير متوقع، مع الحفاظ على صلابة تتبع المسار في الهواء الطلق.",
    "explanationEn": "Engineering Analysis: Variable impedance control enables collaborative robots to behave compliantly during unexpected collisions while maintaining stiff tracking along free trajectory paths.",
    "explanationAr": "التحليل الهندسي المعتمد: يتيح التحكم بالممانعة المتغيرة للروبوتات التعاونية التصرف بمرونة عالية عند حدوث تصادم غير متوقع، مع الحفاظ على صلابة تتبع المسار في الهواء الطلق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_53",
    "titleEn": "[MEDIUM] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Analysis 53",
    "titleAr": "[مستوى متوسط] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - تحليل 53",
    "questionEn": "[Question 53] When analyzing hardware-software integration and operational control for Lagrangian Dynamic Formulations & Inertia Matrix Derivations, identify the correct engineering relationship:",
    "questionAr": "[السؤال 53] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
    "correctAnswerAr": "تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
    "explanationEn": "Engineering Analysis: The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
    "explanationAr": "التحليل الهندسي المعتمد: تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_54",
    "titleEn": "[MEDIUM] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Analysis 54",
    "titleAr": "[مستوى متوسط] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - تحليل 54",
    "questionEn": "[Question 54] When analyzing hardware-software integration and operational control for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms, identify the correct engineering relationship:",
    "questionAr": "[السؤال 54] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$.",
    "correctAnswerAr": "يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$.",
    "explanationEn": "Engineering Analysis: The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$.",
    "explanationAr": "التحليل الهندسي المعتمد: يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_55",
    "titleEn": "[MEDIUM] Operational Space Formulation & Manipulator Jacobian Force Duality - Analysis 55",
    "titleAr": "[مستوى متوسط] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - تحليل 55",
    "questionEn": "[Question 55] When analyzing hardware-software integration and operational control for Operational Space Formulation & Manipulator Jacobian Force Duality, identify the correct engineering relationship:",
    "questionAr": "[السؤال 55] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
    "correctAnswerAr": "وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
    "explanationEn": "Engineering Analysis: By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
    "explanationAr": "التحليل الهندسي المعتمد: وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_56",
    "titleEn": "[MEDIUM] Impedance Control & Physical Human-Robot Interaction (pHRI) - Analysis 56",
    "titleAr": "[مستوى متوسط] التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت - تحليل 56",
    "questionEn": "[Question 56] When analyzing hardware-software integration and operational control for Impedance Control & Physical Human-Robot Interaction (pHRI), identify the correct engineering relationship:",
    "questionAr": "[السؤال 56] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Variable impedance control enables collaborative robots to behave compliantly during unexpected collisions while maintaining stiff tracking along free trajectory paths.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "يتيح التحكم بالممانعة المتغيرة للروبوتات التعاونية التصرف بمرونة عالية عند حدوث تصادم غير متوقع، مع الحفاظ على صلابة تتبع المسار في الهواء الطلق.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Variable impedance control enables collaborative robots to behave compliantly during unexpected collisions while maintaining stiff tracking along free trajectory paths.",
    "correctAnswerAr": "يتيح التحكم بالممانعة المتغيرة للروبوتات التعاونية التصرف بمرونة عالية عند حدوث تصادم غير متوقع، مع الحفاظ على صلابة تتبع المسار في الهواء الطلق.",
    "explanationEn": "Engineering Analysis: Variable impedance control enables collaborative robots to behave compliantly during unexpected collisions while maintaining stiff tracking along free trajectory paths.",
    "explanationAr": "التحليل الهندسي المعتمد: يتيح التحكم بالممانعة المتغيرة للروبوتات التعاونية التصرف بمرونة عالية عند حدوث تصادم غير متوقع، مع الحفاظ على صلابة تتبع المسار في الهواء الطلق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_57",
    "titleEn": "[MEDIUM] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Analysis 57",
    "titleAr": "[مستوى متوسط] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - تحليل 57",
    "questionEn": "[Question 57] When analyzing hardware-software integration and operational control for Lagrangian Dynamic Formulations & Inertia Matrix Derivations, identify the correct engineering relationship:",
    "questionAr": "[السؤال 57] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
    "correctAnswerAr": "تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
    "explanationEn": "Engineering Analysis: The inertia matrix $M(q)$ is symmetric and positive-definite ($M(q) = M(q)^T > 0$), representing kinetic energy $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$ across all links.",
    "explanationAr": "التحليل الهندسي المعتمد: تتميز مصفوفة القصور الذاتي $M(q)$ بأنها متماثلة وموجبة قطعية ($M(q) = M(q)^T > 0$)، معبرة عن طاقة الحركة الكلية للروبوت $K = \\frac{1}{2}\\dot{q}^T M(q) \\dot{q}$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_58",
    "titleEn": "[MEDIUM] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Analysis 58",
    "titleAr": "[مستوى متوسط] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - تحليل 58",
    "questionEn": "[Question 58] When analyzing hardware-software integration and operational control for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms, identify the correct engineering relationship:",
    "questionAr": "[السؤال 58] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$.",
    "correctAnswerAr": "يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$.",
    "explanationEn": "Engineering Analysis: The Clarke transform projects 3-phase stationary coordinates ($a, b, c$) onto stationary 2-phase coordinates ($\\alpha, \\beta$), and the Park transform rotates them into the rotor flux frame ($d, q$) via electrical angle $\\theta_e$.",
    "explanationAr": "التحليل الهندسي المعتمد: يحول تحويل كلارك التيارات ثلاثية الطور ($a, b, c$) إلى نظام ثنائي ثابت ($\\alpha, \\beta$)، ثم يدورها تحويل بارك إلى إطار الفيض الدوار ($d, q$) بزاوية العضو الدوار الكهربائية $\\theta_e$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch1_med_59",
    "titleEn": "[MEDIUM] Operational Space Formulation & Manipulator Jacobian Force Duality - Analysis 59",
    "titleAr": "[مستوى متوسط] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - تحليل 59",
    "questionEn": "[Question 59] When analyzing hardware-software integration and operational control for Operational Space Formulation & Manipulator Jacobian Force Duality, identify the correct engineering relationship:",
    "questionAr": "[السؤال 59] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
    "correctAnswerAr": "وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
    "explanationEn": "Engineering Analysis: By virtual work principles, the transpose of the Jacobian maps end-effector external forces and moments $F$ into equivalent joint torques: $\\tau = J^T(q) F$.",
    "explanationAr": "التحليل الهندسي المعتمد: وفق مبدأ الشغل الافتراضي، تحول منقولة مصفوفة جاكوبيان $J^T(q)$ القوى وعزوم الدوران الخارجية $F$ المؤثرة على نهاية الذراع إلى عزوم مفاصل مكافئة: $\\tau = J^T(q) F$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  }
],
  hots: [
  {
    "id": "egbac_robotics_ch1_hots_1",
    "titleEn": "[HOTS] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Advanced Synthesis 1",
    "titleAr": "[تفكير عليا] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - تركيب متقدم 1",
    "questionEn": "[Question 1 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Lagrangian Dynamic Formulations & Inertia Matrix Derivations. Determine the mathematically validated result:",
    "questionAr": "[السؤال 1 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$."
    ],
    "optionsAr": [
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "correctAnswerAr": "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_2",
    "titleEn": "[HOTS] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Advanced Synthesis 2",
    "titleAr": "[تفكير عليا] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - تركيب متقدم 2",
    "questionEn": "[Question 2 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms. Determine the mathematically validated result:",
    "questionAr": "[السؤال 2 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only."
    ],
    "optionsAr": [
      "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "correctAnswerAr": "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "explanationEn": "Detailed Quantitative Solution: In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_3",
    "titleEn": "[HOTS] Operational Space Formulation & Manipulator Jacobian Force Duality - Advanced Synthesis 3",
    "titleAr": "[تفكير عليا] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - تركيب متقدم 3",
    "questionEn": "[Question 3 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Operational Space Formulation & Manipulator Jacobian Force Duality. Determine the mathematically validated result:",
    "questionAr": "[السؤال 3 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "correctAnswerAr": "إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_4",
    "titleEn": "[HOTS] Impedance Control & Physical Human-Robot Interaction (pHRI) - Advanced Synthesis 4",
    "titleAr": "[تفكير عليا] التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت - تركيب متقدم 4",
    "questionEn": "[Question 4 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Impedance Control & Physical Human-Robot Interaction (pHRI). Determine the mathematically validated result:",
    "questionAr": "[السؤال 4 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices."
    ],
    "optionsAr": [
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
    "correctAnswerAr": "تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
    "explanationEn": "Detailed Quantitative Solution: Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_5",
    "titleEn": "[HOTS] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Advanced Synthesis 5",
    "titleAr": "[تفكير عليا] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - تركيب متقدم 5",
    "questionEn": "[Question 5 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Lagrangian Dynamic Formulations & Inertia Matrix Derivations. Determine the mathematically validated result:",
    "questionAr": "[السؤال 5 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "correctAnswerAr": "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_6",
    "titleEn": "[HOTS] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Advanced Synthesis 6",
    "titleAr": "[تفكير عليا] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - تركيب متقدم 6",
    "questionEn": "[Question 6 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms. Determine the mathematically validated result:",
    "questionAr": "[السؤال 6 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "correctAnswerAr": "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "explanationEn": "Detailed Quantitative Solution: In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_7",
    "titleEn": "[HOTS] Operational Space Formulation & Manipulator Jacobian Force Duality - Advanced Synthesis 7",
    "titleAr": "[تفكير عليا] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - تركيب متقدم 7",
    "questionEn": "[Question 7 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Operational Space Formulation & Manipulator Jacobian Force Duality. Determine the mathematically validated result:",
    "questionAr": "[السؤال 7 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light."
    ],
    "optionsAr": [
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "correctAnswerAr": "إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_8",
    "titleEn": "[HOTS] Impedance Control & Physical Human-Robot Interaction (pHRI) - Advanced Synthesis 8",
    "titleAr": "[تفكير عليا] التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت - تركيب متقدم 8",
    "questionEn": "[Question 8 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Impedance Control & Physical Human-Robot Interaction (pHRI). Determine the mathematically validated result:",
    "questionAr": "[السؤال 8 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages."
    ],
    "optionsAr": [
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
    "correctAnswerAr": "تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
    "explanationEn": "Detailed Quantitative Solution: Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_9",
    "titleEn": "[HOTS] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Advanced Synthesis 9",
    "titleAr": "[تفكير عليا] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - تركيب متقدم 9",
    "questionEn": "[Question 9 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Lagrangian Dynamic Formulations & Inertia Matrix Derivations. Determine the mathematically validated result:",
    "questionAr": "[السؤال 9 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "correctAnswerAr": "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_10",
    "titleEn": "[HOTS] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Advanced Synthesis 10",
    "titleAr": "[تفكير عليا] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - تركيب متقدم 10",
    "questionEn": "[Question 10 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms. Determine the mathematically validated result:",
    "questionAr": "[السؤال 10 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "correctAnswerAr": "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "explanationEn": "Detailed Quantitative Solution: In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_11",
    "titleEn": "[HOTS] Operational Space Formulation & Manipulator Jacobian Force Duality - Advanced Synthesis 11",
    "titleAr": "[تفكير عليا] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - تركيب متقدم 11",
    "questionEn": "[Question 11 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Operational Space Formulation & Manipulator Jacobian Force Duality. Determine the mathematically validated result:",
    "questionAr": "[السؤال 11 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction."
    ],
    "optionsAr": [
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "correctAnswerAr": "إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_12",
    "titleEn": "[HOTS] Impedance Control & Physical Human-Robot Interaction (pHRI) - Advanced Synthesis 12",
    "titleAr": "[تفكير عليا] التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت - تركيب متقدم 12",
    "questionEn": "[Question 12 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Impedance Control & Physical Human-Robot Interaction (pHRI). Determine the mathematically validated result:",
    "questionAr": "[السؤال 12 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
    "correctAnswerAr": "تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
    "explanationEn": "Detailed Quantitative Solution: Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_13",
    "titleEn": "[HOTS] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Advanced Synthesis 13",
    "titleAr": "[تفكير عليا] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - تركيب متقدم 13",
    "questionEn": "[Question 13 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Lagrangian Dynamic Formulations & Inertia Matrix Derivations. Determine the mathematically validated result:",
    "questionAr": "[السؤال 13 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$."
    ],
    "optionsAr": [
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "correctAnswerAr": "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_14",
    "titleEn": "[HOTS] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Advanced Synthesis 14",
    "titleAr": "[تفكير عليا] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - تركيب متقدم 14",
    "questionEn": "[Question 14 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms. Determine the mathematically validated result:",
    "questionAr": "[السؤال 14 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends."
    ],
    "optionsAr": [
      "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "correctAnswerAr": "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "explanationEn": "Detailed Quantitative Solution: In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_15",
    "titleEn": "[HOTS] Operational Space Formulation & Manipulator Jacobian Force Duality - Advanced Synthesis 15",
    "titleAr": "[تفكير عليا] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - تركيب متقدم 15",
    "questionEn": "[Question 15 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Operational Space Formulation & Manipulator Jacobian Force Duality. Determine the mathematically validated result:",
    "questionAr": "[السؤال 15 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "correctAnswerAr": "إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_16",
    "titleEn": "[HOTS] Impedance Control & Physical Human-Robot Interaction (pHRI) - Advanced Synthesis 16",
    "titleAr": "[تفكير عليا] التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت - تركيب متقدم 16",
    "questionEn": "[Question 16 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Impedance Control & Physical Human-Robot Interaction (pHRI). Determine the mathematically validated result:",
    "questionAr": "[السؤال 16 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion."
    ],
    "optionsAr": [
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
    "correctAnswerAr": "تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
    "explanationEn": "Detailed Quantitative Solution: Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_17",
    "titleEn": "[HOTS] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Advanced Synthesis 17",
    "titleAr": "[تفكير عليا] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - تركيب متقدم 17",
    "questionEn": "[Question 17 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Lagrangian Dynamic Formulations & Inertia Matrix Derivations. Determine the mathematically validated result:",
    "questionAr": "[السؤال 17 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$."
    ],
    "optionsAr": [
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "correctAnswerAr": "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_18",
    "titleEn": "[HOTS] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Advanced Synthesis 18",
    "titleAr": "[تفكير عليا] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - تركيب متقدم 18",
    "questionEn": "[Question 18 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms. Determine the mathematically validated result:",
    "questionAr": "[السؤال 18 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "correctAnswerAr": "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "explanationEn": "Detailed Quantitative Solution: In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_19",
    "titleEn": "[HOTS] Operational Space Formulation & Manipulator Jacobian Force Duality - Advanced Synthesis 19",
    "titleAr": "[تفكير عليا] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - تركيب متقدم 19",
    "questionEn": "[Question 19 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Operational Space Formulation & Manipulator Jacobian Force Duality. Determine the mathematically validated result:",
    "questionAr": "[السؤال 19 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices."
    ],
    "optionsAr": [
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "correctAnswerAr": "إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_20",
    "titleEn": "[HOTS] Impedance Control & Physical Human-Robot Interaction (pHRI) - Advanced Synthesis 20",
    "titleAr": "[تفكير عليا] التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت - تركيب متقدم 20",
    "questionEn": "[Question 20 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Impedance Control & Physical Human-Robot Interaction (pHRI). Determine the mathematically validated result:",
    "questionAr": "[السؤال 20 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
    "correctAnswerAr": "تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
    "explanationEn": "Detailed Quantitative Solution: Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_21",
    "titleEn": "[HOTS] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Advanced Synthesis 21",
    "titleAr": "[تفكير عليا] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - تركيب متقدم 21",
    "questionEn": "[Question 21 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Lagrangian Dynamic Formulations & Inertia Matrix Derivations. Determine the mathematically validated result:",
    "questionAr": "[السؤال 21 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "correctAnswerAr": "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_22",
    "titleEn": "[HOTS] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Advanced Synthesis 22",
    "titleAr": "[تفكير عليا] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - تركيب متقدم 22",
    "questionEn": "[Question 22 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms. Determine the mathematically validated result:",
    "questionAr": "[السؤال 22 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light."
    ],
    "optionsAr": [
      "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "correctAnswerAr": "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "explanationEn": "Detailed Quantitative Solution: In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_23",
    "titleEn": "[HOTS] Operational Space Formulation & Manipulator Jacobian Force Duality - Advanced Synthesis 23",
    "titleAr": "[تفكير عليا] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - تركيب متقدم 23",
    "questionEn": "[Question 23 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Operational Space Formulation & Manipulator Jacobian Force Duality. Determine the mathematically validated result:",
    "questionAr": "[السؤال 23 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages."
    ],
    "optionsAr": [
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "correctAnswerAr": "إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_24",
    "titleEn": "[HOTS] Impedance Control & Physical Human-Robot Interaction (pHRI) - Advanced Synthesis 24",
    "titleAr": "[تفكير عليا] التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت - تركيب متقدم 24",
    "questionEn": "[Question 24 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Impedance Control & Physical Human-Robot Interaction (pHRI). Determine the mathematically validated result:",
    "questionAr": "[السؤال 24 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
    "correctAnswerAr": "تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
    "explanationEn": "Detailed Quantitative Solution: Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_25",
    "titleEn": "[HOTS] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Advanced Synthesis 25",
    "titleAr": "[تفكير عليا] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - تركيب متقدم 25",
    "questionEn": "[Question 25 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Lagrangian Dynamic Formulations & Inertia Matrix Derivations. Determine the mathematically validated result:",
    "questionAr": "[السؤال 25 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "correctAnswerAr": "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_26",
    "titleEn": "[HOTS] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Advanced Synthesis 26",
    "titleAr": "[تفكير عليا] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - تركيب متقدم 26",
    "questionEn": "[Question 26 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms. Determine the mathematically validated result:",
    "questionAr": "[السؤال 26 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction."
    ],
    "optionsAr": [
      "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "correctAnswerAr": "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "explanationEn": "Detailed Quantitative Solution: In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_27",
    "titleEn": "[HOTS] Operational Space Formulation & Manipulator Jacobian Force Duality - Advanced Synthesis 27",
    "titleAr": "[تفكير عليا] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - تركيب متقدم 27",
    "questionEn": "[Question 27 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Operational Space Formulation & Manipulator Jacobian Force Duality. Determine the mathematically validated result:",
    "questionAr": "[السؤال 27 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "correctAnswerAr": "إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_28",
    "titleEn": "[HOTS] Impedance Control & Physical Human-Robot Interaction (pHRI) - Advanced Synthesis 28",
    "titleAr": "[تفكير عليا] التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت - تركيب متقدم 28",
    "questionEn": "[Question 28 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Impedance Control & Physical Human-Robot Interaction (pHRI). Determine the mathematically validated result:",
    "questionAr": "[السؤال 28 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting."
    ],
    "optionsAr": [
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
    "correctAnswerAr": "تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
    "explanationEn": "Detailed Quantitative Solution: Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_29",
    "titleEn": "[HOTS] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Advanced Synthesis 29",
    "titleAr": "[تفكير عليا] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - تركيب متقدم 29",
    "questionEn": "[Question 29 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Lagrangian Dynamic Formulations & Inertia Matrix Derivations. Determine the mathematically validated result:",
    "questionAr": "[السؤال 29 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$."
    ],
    "optionsAr": [
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "correctAnswerAr": "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_30",
    "titleEn": "[HOTS] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Advanced Synthesis 30",
    "titleAr": "[تفكير عليا] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - تركيب متقدم 30",
    "questionEn": "[Question 30 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms. Determine the mathematically validated result:",
    "questionAr": "[السؤال 30 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "correctAnswerAr": "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "explanationEn": "Detailed Quantitative Solution: In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_31",
    "titleEn": "[HOTS] Operational Space Formulation & Manipulator Jacobian Force Duality - Advanced Synthesis 31",
    "titleAr": "[تفكير عليا] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - تركيب متقدم 31",
    "questionEn": "[Question 31 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Operational Space Formulation & Manipulator Jacobian Force Duality. Determine the mathematically validated result:",
    "questionAr": "[السؤال 31 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion."
    ],
    "optionsAr": [
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "correctAnswerAr": "إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_32",
    "titleEn": "[HOTS] Impedance Control & Physical Human-Robot Interaction (pHRI) - Advanced Synthesis 32",
    "titleAr": "[تفكير عليا] التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت - تركيب متقدم 32",
    "questionEn": "[Question 32 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Impedance Control & Physical Human-Robot Interaction (pHRI). Determine the mathematically validated result:",
    "questionAr": "[السؤال 32 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only."
    ],
    "optionsAr": [
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
    "correctAnswerAr": "تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
    "explanationEn": "Detailed Quantitative Solution: Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_33",
    "titleEn": "[HOTS] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Advanced Synthesis 33",
    "titleAr": "[تفكير عليا] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - تركيب متقدم 33",
    "questionEn": "[Question 33 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Lagrangian Dynamic Formulations & Inertia Matrix Derivations. Determine the mathematically validated result:",
    "questionAr": "[السؤال 33 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "correctAnswerAr": "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_34",
    "titleEn": "[HOTS] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Advanced Synthesis 34",
    "titleAr": "[تفكير عليا] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - تركيب متقدم 34",
    "questionEn": "[Question 34 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms. Determine the mathematically validated result:",
    "questionAr": "[السؤال 34 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices."
    ],
    "optionsAr": [
      "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "correctAnswerAr": "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "explanationEn": "Detailed Quantitative Solution: In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_35",
    "titleEn": "[HOTS] Operational Space Formulation & Manipulator Jacobian Force Duality - Advanced Synthesis 35",
    "titleAr": "[تفكير عليا] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - تركيب متقدم 35",
    "questionEn": "[Question 35 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Operational Space Formulation & Manipulator Jacobian Force Duality. Determine the mathematically validated result:",
    "questionAr": "[السؤال 35 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "correctAnswerAr": "إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_36",
    "titleEn": "[HOTS] Impedance Control & Physical Human-Robot Interaction (pHRI) - Advanced Synthesis 36",
    "titleAr": "[تفكير عليا] التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت - تركيب متقدم 36",
    "questionEn": "[Question 36 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Impedance Control & Physical Human-Robot Interaction (pHRI). Determine the mathematically validated result:",
    "questionAr": "[السؤال 36 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
    "correctAnswerAr": "تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
    "explanationEn": "Detailed Quantitative Solution: Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_37",
    "titleEn": "[HOTS] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Advanced Synthesis 37",
    "titleAr": "[تفكير عليا] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - تركيب متقدم 37",
    "questionEn": "[Question 37 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Lagrangian Dynamic Formulations & Inertia Matrix Derivations. Determine the mathematically validated result:",
    "questionAr": "[السؤال 37 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$."
    ],
    "optionsAr": [
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "correctAnswerAr": "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_38",
    "titleEn": "[HOTS] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Advanced Synthesis 38",
    "titleAr": "[تفكير عليا] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - تركيب متقدم 38",
    "questionEn": "[Question 38 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms. Determine the mathematically validated result:",
    "questionAr": "[السؤال 38 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages."
    ],
    "optionsAr": [
      "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "correctAnswerAr": "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "explanationEn": "Detailed Quantitative Solution: In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_39",
    "titleEn": "[HOTS] Operational Space Formulation & Manipulator Jacobian Force Duality - Advanced Synthesis 39",
    "titleAr": "[تفكير عليا] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - تركيب متقدم 39",
    "questionEn": "[Question 39 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Operational Space Formulation & Manipulator Jacobian Force Duality. Determine the mathematically validated result:",
    "questionAr": "[السؤال 39 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "correctAnswerAr": "إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_40",
    "titleEn": "[HOTS] Impedance Control & Physical Human-Robot Interaction (pHRI) - Advanced Synthesis 40",
    "titleAr": "[تفكير عليا] التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت - تركيب متقدم 40",
    "questionEn": "[Question 40 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Impedance Control & Physical Human-Robot Interaction (pHRI). Determine the mathematically validated result:",
    "questionAr": "[السؤال 40 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
    "correctAnswerAr": "تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
    "explanationEn": "Detailed Quantitative Solution: Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_41",
    "titleEn": "[HOTS] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Advanced Synthesis 41",
    "titleAr": "[تفكير عليا] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - تركيب متقدم 41",
    "questionEn": "[Question 41 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Lagrangian Dynamic Formulations & Inertia Matrix Derivations. Determine the mathematically validated result:",
    "questionAr": "[السؤال 41 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$."
    ],
    "optionsAr": [
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "correctAnswerAr": "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_42",
    "titleEn": "[HOTS] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Advanced Synthesis 42",
    "titleAr": "[تفكير عليا] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - تركيب متقدم 42",
    "questionEn": "[Question 42 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms. Determine the mathematically validated result:",
    "questionAr": "[السؤال 42 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "correctAnswerAr": "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "explanationEn": "Detailed Quantitative Solution: In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_43",
    "titleEn": "[HOTS] Operational Space Formulation & Manipulator Jacobian Force Duality - Advanced Synthesis 43",
    "titleAr": "[تفكير عليا] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - تركيب متقدم 43",
    "questionEn": "[Question 43 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Operational Space Formulation & Manipulator Jacobian Force Duality. Determine the mathematically validated result:",
    "questionAr": "[السؤال 43 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting."
    ],
    "optionsAr": [
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "correctAnswerAr": "إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_44",
    "titleEn": "[HOTS] Impedance Control & Physical Human-Robot Interaction (pHRI) - Advanced Synthesis 44",
    "titleAr": "[تفكير عليا] التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت - تركيب متقدم 44",
    "questionEn": "[Question 44 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Impedance Control & Physical Human-Robot Interaction (pHRI). Determine the mathematically validated result:",
    "questionAr": "[السؤال 44 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends."
    ],
    "optionsAr": [
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
    "correctAnswerAr": "تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
    "explanationEn": "Detailed Quantitative Solution: Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_45",
    "titleEn": "[HOTS] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Advanced Synthesis 45",
    "titleAr": "[تفكير عليا] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - تركيب متقدم 45",
    "questionEn": "[Question 45 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Lagrangian Dynamic Formulations & Inertia Matrix Derivations. Determine the mathematically validated result:",
    "questionAr": "[السؤال 45 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "correctAnswerAr": "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_46",
    "titleEn": "[HOTS] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Advanced Synthesis 46",
    "titleAr": "[تفكير عليا] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - تركيب متقدم 46",
    "questionEn": "[Question 46 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms. Determine the mathematically validated result:",
    "questionAr": "[السؤال 46 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion."
    ],
    "optionsAr": [
      "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "correctAnswerAr": "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "explanationEn": "Detailed Quantitative Solution: In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_47",
    "titleEn": "[HOTS] Operational Space Formulation & Manipulator Jacobian Force Duality - Advanced Synthesis 47",
    "titleAr": "[تفكير عليا] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - تركيب متقدم 47",
    "questionEn": "[Question 47 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Operational Space Formulation & Manipulator Jacobian Force Duality. Determine the mathematically validated result:",
    "questionAr": "[السؤال 47 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only."
    ],
    "optionsAr": [
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "correctAnswerAr": "إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_48",
    "titleEn": "[HOTS] Impedance Control & Physical Human-Robot Interaction (pHRI) - Advanced Synthesis 48",
    "titleAr": "[تفكير عليا] التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت - تركيب متقدم 48",
    "questionEn": "[Question 48 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Impedance Control & Physical Human-Robot Interaction (pHRI). Determine the mathematically validated result:",
    "questionAr": "[السؤال 48 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
    "correctAnswerAr": "تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
    "explanationEn": "Detailed Quantitative Solution: Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_49",
    "titleEn": "[HOTS] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Advanced Synthesis 49",
    "titleAr": "[تفكير عليا] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - تركيب متقدم 49",
    "questionEn": "[Question 49 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Lagrangian Dynamic Formulations & Inertia Matrix Derivations. Determine the mathematically validated result:",
    "questionAr": "[السؤال 49 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$."
    ],
    "optionsAr": [
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "correctAnswerAr": "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_50",
    "titleEn": "[HOTS] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Advanced Synthesis 50",
    "titleAr": "[تفكير عليا] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - تركيب متقدم 50",
    "questionEn": "[Question 50 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms. Determine the mathematically validated result:",
    "questionAr": "[السؤال 50 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "correctAnswerAr": "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "explanationEn": "Detailed Quantitative Solution: In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_51",
    "titleEn": "[HOTS] Operational Space Formulation & Manipulator Jacobian Force Duality - Advanced Synthesis 51",
    "titleAr": "[تفكير عليا] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - تركيب متقدم 51",
    "questionEn": "[Question 51 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Operational Space Formulation & Manipulator Jacobian Force Duality. Determine the mathematically validated result:",
    "questionAr": "[السؤال 51 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "correctAnswerAr": "إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_52",
    "titleEn": "[HOTS] Impedance Control & Physical Human-Robot Interaction (pHRI) - Advanced Synthesis 52",
    "titleAr": "[تفكير عليا] التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت - تركيب متقدم 52",
    "questionEn": "[Question 52 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Impedance Control & Physical Human-Robot Interaction (pHRI). Determine the mathematically validated result:",
    "questionAr": "[السؤال 52 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light."
    ],
    "optionsAr": [
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
    "correctAnswerAr": "تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
    "explanationEn": "Detailed Quantitative Solution: Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_53",
    "titleEn": "[HOTS] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Advanced Synthesis 53",
    "titleAr": "[تفكير عليا] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - تركيب متقدم 53",
    "questionEn": "[Question 53 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Lagrangian Dynamic Formulations & Inertia Matrix Derivations. Determine the mathematically validated result:",
    "questionAr": "[السؤال 53 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$."
    ],
    "optionsAr": [
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "correctAnswerAr": "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_54",
    "titleEn": "[HOTS] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Advanced Synthesis 54",
    "titleAr": "[تفكير عليا] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - تركيب متقدم 54",
    "questionEn": "[Question 54 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms. Determine the mathematically validated result:",
    "questionAr": "[السؤال 54 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "correctAnswerAr": "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "explanationEn": "Detailed Quantitative Solution: In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_55",
    "titleEn": "[HOTS] Operational Space Formulation & Manipulator Jacobian Force Duality - Advanced Synthesis 55",
    "titleAr": "[تفكير عليا] صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان - تركيب متقدم 55",
    "questionEn": "[Question 55 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Operational Space Formulation & Manipulator Jacobian Force Duality. Determine the mathematically validated result:",
    "questionAr": "[السؤال 55 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "correctAnswerAr": "إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_56",
    "titleEn": "[HOTS] Impedance Control & Physical Human-Robot Interaction (pHRI) - Advanced Synthesis 56",
    "titleAr": "[تفكير عليا] التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت - تركيب متقدم 56",
    "questionEn": "[Question 56 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Impedance Control & Physical Human-Robot Interaction (pHRI). Determine the mathematically validated result:",
    "questionAr": "[السؤال 56 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction."
    ],
    "optionsAr": [
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
    "correctAnswerAr": "تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
    "explanationEn": "Detailed Quantitative Solution: Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_57",
    "titleEn": "[HOTS] Lagrangian Dynamic Formulations & Inertia Matrix Derivations - Advanced Synthesis 57",
    "titleAr": "[تفكير عليا] صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي - تركيب متقدم 57",
    "questionEn": "[Question 57 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Lagrangian Dynamic Formulations & Inertia Matrix Derivations. Determine the mathematically validated result:",
    "questionAr": "[السؤال 57 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "correctAnswerAr": "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationEn": "Detailed Quantitative Solution: For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_hots_58",
    "titleEn": "[HOTS] Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms - Advanced Synthesis 58",
    "titleAr": "[تفكير عليا] خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك - تركيب متقدم 58",
    "questionEn": "[Question 58 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms. Determine the mathematically validated result:",
    "questionAr": "[السؤال 58 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting."
    ],
    "optionsAr": [
      "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "correctAnswerAr": "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "explanationEn": "Detailed Quantitative Solution: In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  }
]
};
