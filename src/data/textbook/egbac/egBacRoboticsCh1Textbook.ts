import type { SolvedProblem } from '../../../types/curriculum';

export const egBacRoboticsCh1SolvedExamples: SolvedProblem[] = [
  {
    "id": "egbac_robotics_ch1_solved_1",
    "titleEn": "Solved Pedagogical Example 1: Lagrangian Dynamic Formulations & Inertia Matrix Derivations",
    "titleAr": "مثال محلول نموذجي 1: صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي",
    "questionEn": "[Solved Example 1] Quantitative engineering analysis for Lagrangian Dynamic Formulations & Inertia Matrix Derivations. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 1] تحليل هندسي وحسابي تطبيقي لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion."
    ],
    "optionsAr": [
      "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "correctAnswerAr": "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationEn": "Pedagogical Solution: For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationAr": "الحل النموذجي المعتمد: لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_solved_2",
    "titleEn": "Solved Pedagogical Example 2: Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms",
    "titleAr": "مثال محلول نموذجي 2: خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك",
    "questionEn": "[Solved Example 2] Quantitative engineering analysis for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 2] تحليل هندسي وحسابي تطبيقي لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only."
    ],
    "optionsAr": [
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "correctAnswerAr": "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "explanationEn": "Pedagogical Solution: In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "explanationAr": "الحل النموذجي المعتمد: في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_solved_3",
    "titleEn": "Solved Pedagogical Example 3: Operational Space Formulation & Manipulator Jacobian Force Duality",
    "titleAr": "مثال محلول نموذجي 3: صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان",
    "questionEn": "[Solved Example 3] Quantitative engineering analysis for Operational Space Formulation & Manipulator Jacobian Force Duality. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 3] تحليل هندسي وحسابي تطبيقي لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "correctAnswerAr": "إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "explanationEn": "Pedagogical Solution: If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "explanationAr": "الحل النموذجي المعتمد: إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Operational Space Formulation & Manipulator Jacobian Force Duality.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_solved_4",
    "titleEn": "Solved Pedagogical Example 4: Impedance Control & Physical Human-Robot Interaction (pHRI)",
    "titleAr": "مثال محلول نموذجي 4: التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت",
    "questionEn": "[Solved Example 4] Quantitative engineering analysis for Impedance Control & Physical Human-Robot Interaction (pHRI). Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 4] تحليل هندسي وحسابي تطبيقي لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds)."
    ],
    "optionsAr": [
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
    "correctAnswerAr": "تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
    "explanationEn": "Pedagogical Solution: Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
    "explanationAr": "الحل النموذجي المعتمد: تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Impedance Control & Physical Human-Robot Interaction (pHRI).",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_solved_5",
    "titleEn": "Solved Pedagogical Example 5: Lagrangian Dynamic Formulations & Inertia Matrix Derivations",
    "titleAr": "مثال محلول نموذجي 5: صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي",
    "questionEn": "[Solved Example 5] Quantitative engineering analysis for Lagrangian Dynamic Formulations & Inertia Matrix Derivations. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 5] تحليل هندسي وحسابي تطبيقي لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "correctAnswerAr": "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationEn": "Pedagogical Solution: For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationAr": "الحل النموذجي المعتمد: لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_solved_6",
    "titleEn": "Solved Pedagogical Example 6: Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms",
    "titleAr": "مثال محلول نموذجي 6: خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك",
    "questionEn": "[Solved Example 6] Quantitative engineering analysis for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 6] تحليل هندسي وحسابي تطبيقي لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "correctAnswerAr": "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "explanationEn": "Pedagogical Solution: In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "explanationAr": "الحل النموذجي المعتمد: في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_solved_7",
    "titleEn": "Solved Pedagogical Example 7: Operational Space Formulation & Manipulator Jacobian Force Duality",
    "titleAr": "مثال محلول نموذجي 7: صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان",
    "questionEn": "[Solved Example 7] Quantitative engineering analysis for Operational Space Formulation & Manipulator Jacobian Force Duality. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 7] تحليل هندسي وحسابي تطبيقي لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light."
    ],
    "optionsAr": [
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "correctAnswerAr": "إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "explanationEn": "Pedagogical Solution: If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "explanationAr": "الحل النموذجي المعتمد: إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Operational Space Formulation & Manipulator Jacobian Force Duality.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_solved_8",
    "titleEn": "Solved Pedagogical Example 8: Impedance Control & Physical Human-Robot Interaction (pHRI)",
    "titleAr": "مثال محلول نموذجي 8: التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت",
    "questionEn": "[Solved Example 8] Quantitative engineering analysis for Impedance Control & Physical Human-Robot Interaction (pHRI). Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 8] تحليل هندسي وحسابي تطبيقي لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds)."
    ],
    "optionsAr": [
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
    "correctAnswerAr": "تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
    "explanationEn": "Pedagogical Solution: Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
    "explanationAr": "الحل النموذجي المعتمد: تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Impedance Control & Physical Human-Robot Interaction (pHRI).",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_solved_9",
    "titleEn": "Solved Pedagogical Example 9: Lagrangian Dynamic Formulations & Inertia Matrix Derivations",
    "titleAr": "مثال محلول نموذجي 9: صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي",
    "questionEn": "[Solved Example 9] Quantitative engineering analysis for Lagrangian Dynamic Formulations & Inertia Matrix Derivations. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 9] تحليل هندسي وحسابي تطبيقي لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "correctAnswerAr": "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationEn": "Pedagogical Solution: For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationAr": "الحل النموذجي المعتمد: لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch1_solved_10",
    "titleEn": "Solved Pedagogical Example 10: Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms",
    "titleAr": "مثال محلول نموذجي 10: خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك",
    "questionEn": "[Solved Example 10] Quantitative engineering analysis for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 10] تحليل هندسي وحسابي تطبيقي لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "correctAnswerAr": "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "explanationEn": "Pedagogical Solution: In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "explanationAr": "الحل النموذجي المعتمد: في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  }
];

export const egBacRoboticsCh1ExerciseProblems: SolvedProblem[] = [
  {
    "id": "egbac_robotics_ch1_exercise_1",
    "titleEn": "Practice Exercise 1: Lagrangian Dynamic Formulations & Inertia Matrix Derivations",
    "titleAr": "تمرين تطبيقي 1: صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي",
    "questionEn": "[Practice Exercise 1] Mechatronics Case Study on Lagrangian Dynamic Formulations & Inertia Matrix Derivations. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 1] دراسة حالة ميكاترونكس لـ صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages."
    ],
    "optionsAr": [
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "correctAnswerAr": "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationEn": "Independent Verification: For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationAr": "التحقق المستقل: لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (C) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "الخطوة ٢: استبعاد البدائل التي تخالف قوانين بقاء الطاقة أو حدود التوقيت الحتمي.",
      "الخطوة ٣: الاستقرار على البديل (ج) كإجابة نهائية صحيحة."
    ],
    "hintEn": "Apply the foundational formula established in the chapter lecture notes.",
    "hintAr": "طبق المعادلة الأساسية المشروحة في المذكرة النظرية للدرس.",
    "teacherTipEn": "Double check matrix dimensions and coordinate frames before finalizing answer.",
    "teacherTipAr": "تأكد من أبعاد المصفوفات وتطابق المحاور الإحداثية قبل اختيار الإجابة النهائية.",
    "difficulty": "medium",
    "bloomLevel": "Applying"
  },
  {
    "id": "egbac_robotics_ch1_exercise_2",
    "titleEn": "Practice Exercise 2: Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms",
    "titleAr": "تمرين تطبيقي 2: خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك",
    "questionEn": "[Practice Exercise 2] Mechatronics Case Study on Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 2] دراسة حالة ميكاترونكس لـ خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage)."
    ],
    "optionsAr": [
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "correctAnswerAr": "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "explanationEn": "Independent Verification: In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "explanationAr": "التحقق المستقل: في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (D) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "الخطوة ٢: استبعاد البدائل التي تخالف قوانين بقاء الطاقة أو حدود التوقيت الحتمي.",
      "الخطوة ٣: الاستقرار على البديل (د) كإجابة نهائية صحيحة."
    ],
    "hintEn": "Apply the foundational formula established in the chapter lecture notes.",
    "hintAr": "طبق المعادلة الأساسية المشروحة في المذكرة النظرية للدرس.",
    "teacherTipEn": "Double check matrix dimensions and coordinate frames before finalizing answer.",
    "teacherTipAr": "تأكد من أبعاد المصفوفات وتطابق المحاور الإحداثية قبل اختيار الإجابة النهائية.",
    "difficulty": "medium",
    "bloomLevel": "Applying"
  },
  {
    "id": "egbac_robotics_ch1_exercise_3",
    "titleEn": "Practice Exercise 3: Operational Space Formulation & Manipulator Jacobian Force Duality",
    "titleAr": "تمرين تطبيقي 3: صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان",
    "questionEn": "[Practice Exercise 3] Mechatronics Case Study on Operational Space Formulation & Manipulator Jacobian Force Duality. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 3] دراسة حالة ميكاترونكس لـ صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "correctAnswerAr": "إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "explanationEn": "Independent Verification: If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "explanationAr": "التحقق المستقل: إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (A) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "الخطوة ٢: استبعاد البدائل التي تخالف قوانين بقاء الطاقة أو حدود التوقيت الحتمي.",
      "الخطوة ٣: الاستقرار على البديل (أ) كإجابة نهائية صحيحة."
    ],
    "hintEn": "Apply the foundational formula established in the chapter lecture notes.",
    "hintAr": "طبق المعادلة الأساسية المشروحة في المذكرة النظرية للدرس.",
    "teacherTipEn": "Double check matrix dimensions and coordinate frames before finalizing answer.",
    "teacherTipAr": "تأكد من أبعاد المصفوفات وتطابق المحاور الإحداثية قبل اختيار الإجابة النهائية.",
    "difficulty": "medium",
    "bloomLevel": "Applying"
  },
  {
    "id": "egbac_robotics_ch1_exercise_4",
    "titleEn": "Practice Exercise 4: Impedance Control & Physical Human-Robot Interaction (pHRI)",
    "titleAr": "تمرين تطبيقي 4: التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت",
    "questionEn": "[Practice Exercise 4] Mechatronics Case Study on Impedance Control & Physical Human-Robot Interaction (pHRI). Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 4] دراسة حالة ميكاترونكس لـ التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only."
    ],
    "optionsAr": [
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
    "correctAnswerAr": "تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
    "explanationEn": "Independent Verification: Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
    "explanationAr": "التحقق المستقل: تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (B) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "الخطوة ٢: استبعاد البدائل التي تخالف قوانين بقاء الطاقة أو حدود التوقيت الحتمي.",
      "الخطوة ٣: الاستقرار على البديل (ب) كإجابة نهائية صحيحة."
    ],
    "hintEn": "Apply the foundational formula established in the chapter lecture notes.",
    "hintAr": "طبق المعادلة الأساسية المشروحة في المذكرة النظرية للدرس.",
    "teacherTipEn": "Double check matrix dimensions and coordinate frames before finalizing answer.",
    "teacherTipAr": "تأكد من أبعاد المصفوفات وتطابق المحاور الإحداثية قبل اختيار الإجابة النهائية.",
    "difficulty": "medium",
    "bloomLevel": "Applying"
  },
  {
    "id": "egbac_robotics_ch1_exercise_5",
    "titleEn": "Practice Exercise 5: Lagrangian Dynamic Formulations & Inertia Matrix Derivations",
    "titleAr": "تمرين تطبيقي 5: صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي",
    "questionEn": "[Practice Exercise 5] Mechatronics Case Study on Lagrangian Dynamic Formulations & Inertia Matrix Derivations. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 5] دراسة حالة ميكاترونكس لـ صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "correctAnswerAr": "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationEn": "Independent Verification: For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationAr": "التحقق المستقل: لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (C) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "الخطوة ٢: استبعاد البدائل التي تخالف قوانين بقاء الطاقة أو حدود التوقيت الحتمي.",
      "الخطوة ٣: الاستقرار على البديل (ج) كإجابة نهائية صحيحة."
    ],
    "hintEn": "Apply the foundational formula established in the chapter lecture notes.",
    "hintAr": "طبق المعادلة الأساسية المشروحة في المذكرة النظرية للدرس.",
    "teacherTipEn": "Double check matrix dimensions and coordinate frames before finalizing answer.",
    "teacherTipAr": "تأكد من أبعاد المصفوفات وتطابق المحاور الإحداثية قبل اختيار الإجابة النهائية.",
    "difficulty": "medium",
    "bloomLevel": "Applying"
  },
  {
    "id": "egbac_robotics_ch1_exercise_6",
    "titleEn": "Practice Exercise 6: Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms",
    "titleAr": "تمرين تطبيقي 6: خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك",
    "questionEn": "[Practice Exercise 6] Mechatronics Case Study on Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 6] دراسة حالة ميكاترونكس لـ خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage)."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "correctAnswerAr": "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "explanationEn": "Independent Verification: In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "explanationAr": "التحقق المستقل: في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (D) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "الخطوة ٢: استبعاد البدائل التي تخالف قوانين بقاء الطاقة أو حدود التوقيت الحتمي.",
      "الخطوة ٣: الاستقرار على البديل (د) كإجابة نهائية صحيحة."
    ],
    "hintEn": "Apply the foundational formula established in the chapter lecture notes.",
    "hintAr": "طبق المعادلة الأساسية المشروحة في المذكرة النظرية للدرس.",
    "teacherTipEn": "Double check matrix dimensions and coordinate frames before finalizing answer.",
    "teacherTipAr": "تأكد من أبعاد المصفوفات وتطابق المحاور الإحداثية قبل اختيار الإجابة النهائية.",
    "difficulty": "medium",
    "bloomLevel": "Applying"
  },
  {
    "id": "egbac_robotics_ch1_exercise_7",
    "titleEn": "Practice Exercise 7: Operational Space Formulation & Manipulator Jacobian Force Duality",
    "titleAr": "تمرين تطبيقي 7: صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان",
    "questionEn": "[Practice Exercise 7] Mechatronics Case Study on Operational Space Formulation & Manipulator Jacobian Force Duality. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 7] دراسة حالة ميكاترونكس لـ صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction."
    ],
    "optionsAr": [
      "إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "correctAnswerAr": "إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "explanationEn": "Independent Verification: If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "explanationAr": "التحقق المستقل: إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (A) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "الخطوة ٢: استبعاد البدائل التي تخالف قوانين بقاء الطاقة أو حدود التوقيت الحتمي.",
      "الخطوة ٣: الاستقرار على البديل (أ) كإجابة نهائية صحيحة."
    ],
    "hintEn": "Apply the foundational formula established in the chapter lecture notes.",
    "hintAr": "طبق المعادلة الأساسية المشروحة في المذكرة النظرية للدرس.",
    "teacherTipEn": "Double check matrix dimensions and coordinate frames before finalizing answer.",
    "teacherTipAr": "تأكد من أبعاد المصفوفات وتطابق المحاور الإحداثية قبل اختيار الإجابة النهائية.",
    "difficulty": "medium",
    "bloomLevel": "Applying"
  },
  {
    "id": "egbac_robotics_ch1_exercise_8",
    "titleEn": "Practice Exercise 8: Impedance Control & Physical Human-Robot Interaction (pHRI)",
    "titleAr": "تمرين تطبيقي 8: التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت",
    "questionEn": "[Practice Exercise 8] Mechatronics Case Study on Impedance Control & Physical Human-Robot Interaction (pHRI). Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 8] دراسة حالة ميكاترونكس لـ التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices."
    ],
    "optionsAr": [
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
    "correctAnswerAr": "تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
    "explanationEn": "Independent Verification: Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
    "explanationAr": "التحقق المستقل: تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (B) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "الخطوة ٢: استبعاد البدائل التي تخالف قوانين بقاء الطاقة أو حدود التوقيت الحتمي.",
      "الخطوة ٣: الاستقرار على البديل (ب) كإجابة نهائية صحيحة."
    ],
    "hintEn": "Apply the foundational formula established in the chapter lecture notes.",
    "hintAr": "طبق المعادلة الأساسية المشروحة في المذكرة النظرية للدرس.",
    "teacherTipEn": "Double check matrix dimensions and coordinate frames before finalizing answer.",
    "teacherTipAr": "تأكد من أبعاد المصفوفات وتطابق المحاور الإحداثية قبل اختيار الإجابة النهائية.",
    "difficulty": "medium",
    "bloomLevel": "Applying"
  },
  {
    "id": "egbac_robotics_ch1_exercise_9",
    "titleEn": "Practice Exercise 9: Lagrangian Dynamic Formulations & Inertia Matrix Derivations",
    "titleAr": "تمرين تطبيقي 9: صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي",
    "questionEn": "[Practice Exercise 9] Mechatronics Case Study on Lagrangian Dynamic Formulations & Inertia Matrix Derivations. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 9] دراسة حالة ميكاترونكس لـ صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "correctAnswerAr": "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationEn": "Independent Verification: For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationAr": "التحقق المستقل: لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (C) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "الخطوة ٢: استبعاد البدائل التي تخالف قوانين بقاء الطاقة أو حدود التوقيت الحتمي.",
      "الخطوة ٣: الاستقرار على البديل (ج) كإجابة نهائية صحيحة."
    ],
    "hintEn": "Apply the foundational formula established in the chapter lecture notes.",
    "hintAr": "طبق المعادلة الأساسية المشروحة في المذكرة النظرية للدرس.",
    "teacherTipEn": "Double check matrix dimensions and coordinate frames before finalizing answer.",
    "teacherTipAr": "تأكد من أبعاد المصفوفات وتطابق المحاور الإحداثية قبل اختيار الإجابة النهائية.",
    "difficulty": "medium",
    "bloomLevel": "Applying"
  },
  {
    "id": "egbac_robotics_ch1_exercise_10",
    "titleEn": "Practice Exercise 10: Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms",
    "titleAr": "تمرين تطبيقي 10: خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك",
    "questionEn": "[Practice Exercise 10] Mechatronics Case Study on Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 10] دراسة حالة ميكاترونكس لـ خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage)."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "correctAnswerAr": "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "explanationEn": "Independent Verification: In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "explanationAr": "التحقق المستقل: في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (D) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "الخطوة ٢: استبعاد البدائل التي تخالف قوانين بقاء الطاقة أو حدود التوقيت الحتمي.",
      "الخطوة ٣: الاستقرار على البديل (د) كإجابة نهائية صحيحة."
    ],
    "hintEn": "Apply the foundational formula established in the chapter lecture notes.",
    "hintAr": "طبق المعادلة الأساسية المشروحة في المذكرة النظرية للدرس.",
    "teacherTipEn": "Double check matrix dimensions and coordinate frames before finalizing answer.",
    "teacherTipAr": "تأكد من أبعاد المصفوفات وتطابق المحاور الإحداثية قبل اختيار الإجابة النهائية.",
    "difficulty": "medium",
    "bloomLevel": "Applying"
  },
  {
    "id": "egbac_robotics_ch1_exercise_11",
    "titleEn": "Practice Exercise 11: Operational Space Formulation & Manipulator Jacobian Force Duality",
    "titleAr": "تمرين تطبيقي 11: صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان",
    "questionEn": "[Practice Exercise 11] Mechatronics Case Study on Operational Space Formulation & Manipulator Jacobian Force Duality. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 11] دراسة حالة ميكاترونكس لـ صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting."
    ],
    "optionsAr": [
      "إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "correctAnswerAr": "إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "explanationEn": "Independent Verification: If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "explanationAr": "التحقق المستقل: إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (A) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "الخطوة ٢: استبعاد البدائل التي تخالف قوانين بقاء الطاقة أو حدود التوقيت الحتمي.",
      "الخطوة ٣: الاستقرار على البديل (أ) كإجابة نهائية صحيحة."
    ],
    "hintEn": "Apply the foundational formula established in the chapter lecture notes.",
    "hintAr": "طبق المعادلة الأساسية المشروحة في المذكرة النظرية للدرس.",
    "teacherTipEn": "Double check matrix dimensions and coordinate frames before finalizing answer.",
    "teacherTipAr": "تأكد من أبعاد المصفوفات وتطابق المحاور الإحداثية قبل اختيار الإجابة النهائية.",
    "difficulty": "medium",
    "bloomLevel": "Applying"
  },
  {
    "id": "egbac_robotics_ch1_exercise_12",
    "titleEn": "Practice Exercise 12: Impedance Control & Physical Human-Robot Interaction (pHRI)",
    "titleAr": "تمرين تطبيقي 12: التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت",
    "questionEn": "[Practice Exercise 12] Mechatronics Case Study on Impedance Control & Physical Human-Robot Interaction (pHRI). Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 12] دراسة حالة ميكاترونكس لـ التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
    "correctAnswerAr": "تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
    "explanationEn": "Independent Verification: Under static contact with stiffness $K_d = 500\\ N/m$ and commanded position offset $\\Delta x = 0.015\\ m$ ($15\\ mm$), the interaction contact force is: $F_{ext} = K_d \\Delta x = 500 \\times 0.015 = 7.5\\ N$ (well below human pain thresholds).",
    "explanationAr": "التحقق المستقل: تحت التلامس الساكن بصلابة افتراضية $K_d = 500\\ N/m$ وإزاحة موضع $\\Delta x = 15\\ mm$، تكون قوة التفاعل الناتجة: $F_{ext} = 500 \\times 0.015 = 7.5\\ N$ (وهي دون عتبة الألم البشري).",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Impedance Control & Physical Human-Robot Interaction (pHRI).",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (B) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة التحكم بالممانعة الميكانيكية والتفاعل الفيزيائي الآمن بين الإنسان والروبوت.",
      "الخطوة ٢: استبعاد البدائل التي تخالف قوانين بقاء الطاقة أو حدود التوقيت الحتمي.",
      "الخطوة ٣: الاستقرار على البديل (ب) كإجابة نهائية صحيحة."
    ],
    "hintEn": "Apply the foundational formula established in the chapter lecture notes.",
    "hintAr": "طبق المعادلة الأساسية المشروحة في المذكرة النظرية للدرس.",
    "teacherTipEn": "Double check matrix dimensions and coordinate frames before finalizing answer.",
    "teacherTipAr": "تأكد من أبعاد المصفوفات وتطابق المحاور الإحداثية قبل اختيار الإجابة النهائية.",
    "difficulty": "medium",
    "bloomLevel": "Applying"
  },
  {
    "id": "egbac_robotics_ch1_exercise_13",
    "titleEn": "Practice Exercise 13: Lagrangian Dynamic Formulations & Inertia Matrix Derivations",
    "titleAr": "تمرين تطبيقي 13: صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي",
    "questionEn": "[Practice Exercise 13] Mechatronics Case Study on Lagrangian Dynamic Formulations & Inertia Matrix Derivations. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 13] دراسة حالة ميكاترونكس لـ صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends."
    ],
    "optionsAr": [
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "correctAnswerAr": "لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationEn": "Independent Verification: For a single link of mass $m = 2\\ kg$ and length $L = 0.6\\ m$ rotating about one end ($I = \\frac{1}{3} m L^2 = \\frac{1}{3} \\times 2 \\times 0.36 = 0.24\\ kg\\cdot m^2$), the gravity torque at horizontal position $\\theta = 0^\\circ$ is: $\\tau_g = m g \\frac{L}{2} \\cos(0^\\circ) = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "explanationAr": "التحقق المستقل: لوصلة أحادية بكتلة $2\\ kg$ وطول $0.6\\ m$ تدور حول طرفها ($I = 0.24\\ kg\\cdot m^2$)، يبلغ عزم الجاذبية في الوضع الأفقي ($\\theta = 0^\\circ$): $\\tau_g = 2 \\times 9.81 \\times 0.30 = 5.886\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Lagrangian Dynamic Formulations & Inertia Matrix Derivations.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (C) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة صياغة لاغرانج لديناميكا الروبوت واستنتاج مصفوفة القصور الذاتي.",
      "الخطوة ٢: استبعاد البدائل التي تخالف قوانين بقاء الطاقة أو حدود التوقيت الحتمي.",
      "الخطوة ٣: الاستقرار على البديل (ج) كإجابة نهائية صحيحة."
    ],
    "hintEn": "Apply the foundational formula established in the chapter lecture notes.",
    "hintAr": "طبق المعادلة الأساسية المشروحة في المذكرة النظرية للدرس.",
    "teacherTipEn": "Double check matrix dimensions and coordinate frames before finalizing answer.",
    "teacherTipAr": "تأكد من أبعاد المصفوفات وتطابق المحاور الإحداثية قبل اختيار الإجابة النهائية.",
    "difficulty": "medium",
    "bloomLevel": "Applying"
  },
  {
    "id": "egbac_robotics_ch1_exercise_14",
    "titleEn": "Practice Exercise 14: Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms",
    "titleAr": "تمرين تطبيقي 14: خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك",
    "questionEn": "[Practice Exercise 14] Mechatronics Case Study on Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 14] دراسة حالة ميكاترونكس لـ خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage)."
    ],
    "optionsAr": [
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "correctAnswerAr": "في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "explanationEn": "Independent Verification: In a surface permanent magnet synchronous motor (SPMSM) where rotor reluctance is symmetric, setting target flux current $I_d^* = 0$ maximizes torque-per-ampere efficiency: $\\tau = \\frac{3}{2} p \\lambda_m I_q$ (where $p$ is pole pairs and $\\lambda_m$ is permanent magnet flux linkage).",
    "explanationAr": "التحقق المستقل: في المحركات التزامنية ذات المغناطيس السطحي، فإن ضبط تيار الفيض $I_d^* = 0$ يعظم كفاءة العزم لكل أمبير وفق العلاقة: $\\tau = \\frac{3}{2} p \\lambda_m I_q$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Field-Oriented Control (FOC) Vector Algorithms: Clarke & Park Transforms.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (D) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة خوارزميات التحكم الموجه بالفيض (FOC): تحويلات كلارك وبارك.",
      "الخطوة ٢: استبعاد البدائل التي تخالف قوانين بقاء الطاقة أو حدود التوقيت الحتمي.",
      "الخطوة ٣: الاستقرار على البديل (د) كإجابة نهائية صحيحة."
    ],
    "hintEn": "Apply the foundational formula established in the chapter lecture notes.",
    "hintAr": "طبق المعادلة الأساسية المشروحة في المذكرة النظرية للدرس.",
    "teacherTipEn": "Double check matrix dimensions and coordinate frames before finalizing answer.",
    "teacherTipAr": "تأكد من أبعاد المصفوفات وتطابق المحاور الإحداثية قبل اختيار الإجابة النهائية.",
    "difficulty": "medium",
    "bloomLevel": "Applying"
  },
  {
    "id": "egbac_robotics_ch1_exercise_15",
    "titleEn": "Practice Exercise 15: Operational Space Formulation & Manipulator Jacobian Force Duality",
    "titleAr": "تمرين تطبيقي 15: صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان",
    "questionEn": "[Practice Exercise 15] Mechatronics Case Study on Operational Space Formulation & Manipulator Jacobian Force Duality. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 15] دراسة حالة ميكاترونكس لـ صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "correctAnswerAr": "إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "explanationEn": "Independent Verification: If an end-effector exerts horizontal force $F_x = 20\\ N$ ($F = [20, 0]^T$) with Jacobian $J = [[-0.3, -0.1], [0.4, 0.2]]$, the required joint torques are: $\\tau = J^T F = [-0.3 \\times 20, -0.1 \\times 20]^T = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "explanationAr": "التحقق المستقل: إذا أثرت نهاية الذراع بقوة أفقية $F_x = 20\\ N$ وكانت مصفوفة جاكوبيان $J = [[-0.3, -0.1], [0.4, 0.2]]$، فإن عزوم المفاصل المطلوبة هي: $\\tau = [-6.0, -2.0]^T\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Operational Space Formulation & Manipulator Jacobian Force Duality.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (A) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة صياغة الفضاء العملياتي وازدواجية القوة والسرعة بمصفوفة جاكوبيان.",
      "الخطوة ٢: استبعاد البدائل التي تخالف قوانين بقاء الطاقة أو حدود التوقيت الحتمي.",
      "الخطوة ٣: الاستقرار على البديل (أ) كإجابة نهائية صحيحة."
    ],
    "hintEn": "Apply the foundational formula established in the chapter lecture notes.",
    "hintAr": "طبق المعادلة الأساسية المشروحة في المذكرة النظرية للدرس.",
    "teacherTipEn": "Double check matrix dimensions and coordinate frames before finalizing answer.",
    "teacherTipAr": "تأكد من أبعاد المصفوفات وتطابق المحاور الإحداثية قبل اختيار الإجابة النهائية.",
    "difficulty": "medium",
    "bloomLevel": "Applying"
  }
];
