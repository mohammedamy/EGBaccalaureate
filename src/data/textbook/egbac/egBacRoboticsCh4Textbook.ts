import type { SolvedProblem } from '../../../types/curriculum';

export const egBacRoboticsCh4SolvedExamples: SolvedProblem[] = [
  {
    "id": "egbac_robotics_ch4_solved_1",
    "titleEn": "Solved Pedagogical Example 1: Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance",
    "titleAr": "مثال محلول نموذجي 1: التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق",
    "questionEn": "[Solved Example 1] Quantitative engineering analysis for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 1] تحليل هندسي وحسابي تطبيقي لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion."
    ],
    "optionsAr": [
      "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "correctAnswerAr": "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "explanationEn": "Pedagogical Solution: A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "explanationAr": "الحل النموذجي المعتمد: توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_solved_2",
    "titleEn": "Solved Pedagogical Example 2: Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF",
    "titleAr": "مثال محلول نموذجي 2: إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات",
    "questionEn": "[Solved Example 2] Quantitative engineering analysis for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 2] تحليل هندسي وحسابي تطبيقي لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only."
    ],
    "optionsAr": [
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "correctAnswerAr": "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "explanationEn": "Pedagogical Solution: For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "explanationAr": "الحل النموذجي المعتمد: لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_solved_3",
    "titleEn": "Solved Pedagogical Example 3: OPC UA Semantic Information Models & Industrial Cyber-Physical Systems",
    "titleAr": "مثال محلول نموذجي 3: نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية",
    "questionEn": "[Solved Example 3] Quantitative engineering analysis for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 3] تحليل هندسي وحسابي تطبيقي لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
    "correctAnswerAr": "تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
    "explanationEn": "Pedagogical Solution: Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
    "explanationAr": "الحل النموذجي المعتمد: تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_solved_4",
    "titleEn": "Solved Pedagogical Example 4: Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer",
    "titleAr": "مثال محلول نموذجي 4: محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع",
    "questionEn": "[Solved Example 4] Quantitative engineering analysis for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 4] تحليل هندسي وحسابي تطبيقي لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation."
    ],
    "optionsAr": [
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
    "correctAnswerAr": "تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
    "explanationEn": "Pedagogical Solution: Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
    "explanationAr": "الحل النموذجي المعتمد: تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_solved_5",
    "titleEn": "Solved Pedagogical Example 5: Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance",
    "titleAr": "مثال محلول نموذجي 5: التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق",
    "questionEn": "[Solved Example 5] Quantitative engineering analysis for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 5] تحليل هندسي وحسابي تطبيقي لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "correctAnswerAr": "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "explanationEn": "Pedagogical Solution: A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "explanationAr": "الحل النموذجي المعتمد: توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_solved_6",
    "titleEn": "Solved Pedagogical Example 6: Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF",
    "titleAr": "مثال محلول نموذجي 6: إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات",
    "questionEn": "[Solved Example 6] Quantitative engineering analysis for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 6] تحليل هندسي وحسابي تطبيقي لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "correctAnswerAr": "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "explanationEn": "Pedagogical Solution: For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "explanationAr": "الحل النموذجي المعتمد: لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_solved_7",
    "titleEn": "Solved Pedagogical Example 7: OPC UA Semantic Information Models & Industrial Cyber-Physical Systems",
    "titleAr": "مثال محلول نموذجي 7: نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية",
    "questionEn": "[Solved Example 7] Quantitative engineering analysis for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 7] تحليل هندسي وحسابي تطبيقي لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light."
    ],
    "optionsAr": [
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
    "correctAnswerAr": "تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
    "explanationEn": "Pedagogical Solution: Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
    "explanationAr": "الحل النموذجي المعتمد: تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_solved_8",
    "titleEn": "Solved Pedagogical Example 8: Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer",
    "titleAr": "مثال محلول نموذجي 8: محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع",
    "questionEn": "[Solved Example 8] Quantitative engineering analysis for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 8] تحليل هندسي وحسابي تطبيقي لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation."
    ],
    "optionsAr": [
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
    "correctAnswerAr": "تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
    "explanationEn": "Pedagogical Solution: Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
    "explanationAr": "الحل النموذجي المعتمد: تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_solved_9",
    "titleEn": "Solved Pedagogical Example 9: Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance",
    "titleAr": "مثال محلول نموذجي 9: التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق",
    "questionEn": "[Solved Example 9] Quantitative engineering analysis for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 9] تحليل هندسي وحسابي تطبيقي لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "correctAnswerAr": "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "explanationEn": "Pedagogical Solution: A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "explanationAr": "الحل النموذجي المعتمد: توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch4_solved_10",
    "titleEn": "Solved Pedagogical Example 10: Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF",
    "titleAr": "مثال محلول نموذجي 10: إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات",
    "questionEn": "[Solved Example 10] Quantitative engineering analysis for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 10] تحليل هندسي وحسابي تطبيقي لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "correctAnswerAr": "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "explanationEn": "Pedagogical Solution: For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "explanationAr": "الحل النموذجي المعتمد: لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  }
];

export const egBacRoboticsCh4ExerciseProblems: SolvedProblem[] = [
  {
    "id": "egbac_robotics_ch4_exercise_1",
    "titleEn": "Practice Exercise 1: Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance",
    "titleAr": "تمرين تطبيقي 1: التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق",
    "questionEn": "[Practice Exercise 1] Mechatronics Case Study on Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 1] دراسة حالة ميكاترونكس لـ التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages."
    ],
    "optionsAr": [
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "correctAnswerAr": "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "explanationEn": "Independent Verification: A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "explanationAr": "التحقق المستقل: توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (C) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
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
    "id": "egbac_robotics_ch4_exercise_2",
    "titleEn": "Practice Exercise 2: Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF",
    "titleAr": "تمرين تطبيقي 2: إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات",
    "questionEn": "[Practice Exercise 2] Mechatronics Case Study on Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 2] دراسة حالة ميكاترونكس لـ إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions."
    ],
    "optionsAr": [
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "correctAnswerAr": "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "explanationEn": "Independent Verification: For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "explanationAr": "التحقق المستقل: لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (D) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
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
    "id": "egbac_robotics_ch4_exercise_3",
    "titleEn": "Practice Exercise 3: OPC UA Semantic Information Models & Industrial Cyber-Physical Systems",
    "titleAr": "تمرين تطبيقي 3: نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية",
    "questionEn": "[Practice Exercise 3] Mechatronics Case Study on OPC UA Semantic Information Models & Industrial Cyber-Physical Systems. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 3] دراسة حالة ميكاترونكس لـ نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
    "correctAnswerAr": "تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
    "explanationEn": "Independent Verification: Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
    "explanationAr": "التحقق المستقل: تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (A) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
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
    "id": "egbac_robotics_ch4_exercise_4",
    "titleEn": "Practice Exercise 4: Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer",
    "titleAr": "تمرين تطبيقي 4: محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع",
    "questionEn": "[Practice Exercise 4] Mechatronics Case Study on Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 4] دراسة حالة ميكاترونكس لـ محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only."
    ],
    "optionsAr": [
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
    "correctAnswerAr": "تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
    "explanationEn": "Independent Verification: Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
    "explanationAr": "التحقق المستقل: تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (B) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
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
    "id": "egbac_robotics_ch4_exercise_5",
    "titleEn": "Practice Exercise 5: Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance",
    "titleAr": "تمرين تطبيقي 5: التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق",
    "questionEn": "[Practice Exercise 5] Mechatronics Case Study on Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 5] دراسة حالة ميكاترونكس لـ التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "correctAnswerAr": "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "explanationEn": "Independent Verification: A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "explanationAr": "التحقق المستقل: توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (C) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
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
    "id": "egbac_robotics_ch4_exercise_6",
    "titleEn": "Practice Exercise 6: Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF",
    "titleAr": "تمرين تطبيقي 6: إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات",
    "questionEn": "[Practice Exercise 6] Mechatronics Case Study on Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 6] دراسة حالة ميكاترونكس لـ إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "correctAnswerAr": "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "explanationEn": "Independent Verification: For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "explanationAr": "التحقق المستقل: لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (D) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
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
    "id": "egbac_robotics_ch4_exercise_7",
    "titleEn": "Practice Exercise 7: OPC UA Semantic Information Models & Industrial Cyber-Physical Systems",
    "titleAr": "تمرين تطبيقي 7: نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية",
    "questionEn": "[Practice Exercise 7] Mechatronics Case Study on OPC UA Semantic Information Models & Industrial Cyber-Physical Systems. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 7] دراسة حالة ميكاترونكس لـ نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction."
    ],
    "optionsAr": [
      "تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
    "correctAnswerAr": "تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
    "explanationEn": "Independent Verification: Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
    "explanationAr": "التحقق المستقل: تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (A) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
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
    "id": "egbac_robotics_ch4_exercise_8",
    "titleEn": "Practice Exercise 8: Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer",
    "titleAr": "تمرين تطبيقي 8: محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع",
    "questionEn": "[Practice Exercise 8] Mechatronics Case Study on Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 8] دراسة حالة ميكاترونكس لـ محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices."
    ],
    "optionsAr": [
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
    "correctAnswerAr": "تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
    "explanationEn": "Independent Verification: Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
    "explanationAr": "التحقق المستقل: تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (B) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
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
    "id": "egbac_robotics_ch4_exercise_9",
    "titleEn": "Practice Exercise 9: Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance",
    "titleAr": "تمرين تطبيقي 9: التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق",
    "questionEn": "[Practice Exercise 9] Mechatronics Case Study on Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 9] دراسة حالة ميكاترونكس لـ التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "correctAnswerAr": "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "explanationEn": "Independent Verification: A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "explanationAr": "التحقق المستقل: توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (C) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
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
    "id": "egbac_robotics_ch4_exercise_10",
    "titleEn": "Practice Exercise 10: Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF",
    "titleAr": "تمرين تطبيقي 10: إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات",
    "questionEn": "[Practice Exercise 10] Mechatronics Case Study on Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 10] دراسة حالة ميكاترونكس لـ إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "correctAnswerAr": "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "explanationEn": "Independent Verification: For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "explanationAr": "التحقق المستقل: لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (D) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
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
    "id": "egbac_robotics_ch4_exercise_11",
    "titleEn": "Practice Exercise 11: OPC UA Semantic Information Models & Industrial Cyber-Physical Systems",
    "titleAr": "تمرين تطبيقي 11: نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية",
    "questionEn": "[Practice Exercise 11] Mechatronics Case Study on OPC UA Semantic Information Models & Industrial Cyber-Physical Systems. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 11] دراسة حالة ميكاترونكس لـ نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting."
    ],
    "optionsAr": [
      "تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
    "correctAnswerAr": "تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
    "explanationEn": "Independent Verification: Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
    "explanationAr": "التحقق المستقل: تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (A) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
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
    "id": "egbac_robotics_ch4_exercise_12",
    "titleEn": "Practice Exercise 12: Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer",
    "titleAr": "تمرين تطبيقي 12: محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع",
    "questionEn": "[Practice Exercise 12] Mechatronics Case Study on Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 12] دراسة حالة ميكاترونكس لـ محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
    "correctAnswerAr": "تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
    "explanationEn": "Independent Verification: Domain Randomization in Sim-to-Real policy transfer perturbs friction coefficients ($\\mu \\in [0.4, 0.9]$), link masses ($\\pm 15\\%$), and sensor latency ($10-30\\ ms$) during physics simulation, ensuring trained policies transfer to physical robots without degradation.",
    "explanationAr": "التحقق المستقل: تغير تقنية العشوائية المكانية (Domain Randomization) في محاكاة التوأم الرقمي معاملات الاحتكاك وكتل الوصلات وزمن استجابة الحساسات، لضمان عمل خوارزميات التحكم على الروبوت الحقيقي بكفاءة تامة.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Digital Twin Simulation: Gazebo Ignition, URDF/SDF & Sim-to-Real Transfer.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (B) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة محاكاة التوأم الرقمي: برمجيات Gazebo Ignition ونماذج URDF ونقل السياسات للواقع.",
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
    "id": "egbac_robotics_ch4_exercise_13",
    "titleEn": "Practice Exercise 13: Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance",
    "titleAr": "تمرين تطبيقي 13: التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق",
    "questionEn": "[Practice Exercise 13] Mechatronics Case Study on Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 13] دراسة حالة ميكاترونكس لـ التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends."
    ],
    "optionsAr": [
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "correctAnswerAr": "توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "explanationEn": "Independent Verification: A quadratic MPC objective function $J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$ balances state tracking accuracy (matrix $Q$) against control actuator effort (matrix $R$).",
    "explanationAr": "التحقق المستقل: توازن دالة الهدف التربيعية لـ MPC بين دقة تتبع مسار الروبوت (مصفوفة $Q$) والجهد المبذول من المحركات (مصفوفة $R$) لتوفير حركة سلسة واستهلاك طاقة أمثل.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Model Predictive Control (MPC) Trajectory Tracking & Obstacle Avoidance.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (C) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة التحكم التنبؤي بالنموذج (MPC) لتتبع المسار وتفادي العوائق.",
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
    "id": "egbac_robotics_ch4_exercise_14",
    "titleEn": "Practice Exercise 14: Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF",
    "titleAr": "تمرين تطبيقي 14: إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات",
    "questionEn": "[Practice Exercise 14] Mechatronics Case Study on Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 14] دراسة حالة ميكاترونكس لـ إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions."
    ],
    "optionsAr": [
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "correctAnswerAr": "لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "explanationEn": "Independent Verification: For a fleet of 50 AMRs in a dynamic warehouse, adding dynamic time-window reservations to grid vertices guarantees deadlock-free fleet dispatching with zero physical collisions.",
    "explanationAr": "التحقق المستقل: لأسطول من ٥٠ روبوت AMR في مستودع ديناميكي، تضمن حجز النوافذ الزمنية في نقاط الشبكة انسياب الحركة دون أي تجمد مروري وتفادياً تاماً للتصادم.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Multi-Agent Fleet Management, Conflict-Based Search (CBS) & MAPF.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (D) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة إدارة أساطيل الروبوتات المتعددة والبحث القائم على النزاع (CBS) وتخطيط المسارات.",
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
    "id": "egbac_robotics_ch4_exercise_15",
    "titleEn": "Practice Exercise 15: OPC UA Semantic Information Models & Industrial Cyber-Physical Systems",
    "titleAr": "تمرين تطبيقي 15: نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية",
    "questionEn": "[Practice Exercise 15] Mechatronics Case Study on OPC UA Semantic Information Models & Industrial Cyber-Physical Systems. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 15] دراسة حالة ميكاترونكس لـ نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
    "correctAnswerAr": "تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
    "explanationEn": "Independent Verification: Built-in security profiles enforce X.509 certificate authentication, 256-bit SHA-2 digital signatures, and AES-256 encryption across TCP transport channels, protecting industrial robots from cyber attacks.",
    "explanationAr": "التحقق المستقل: تفرض مواصفات أمان OPC UA التحقق بشهادات X.509 وتوقيعات SHA-2 وتشفير AES-256 عبر قنوات TCP، حامية الروبوتات الصناعية من الهجمات السيبرانية.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for OPC UA Semantic Information Models & Industrial Cyber-Physical Systems.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (A) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة نماذج معلومات OPC UA الدلالية والأنظمة السيبرفيزيائية الصناعية.",
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
