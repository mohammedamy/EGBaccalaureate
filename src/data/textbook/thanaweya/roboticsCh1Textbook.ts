import type { SolvedProblem } from '../../../types/curriculum';

export const roboticsCh1SolvedExamples: SolvedProblem[] = [
  {
    "id": "th_robotics_ch1_solved_1",
    "titleEn": "Solved Pedagogical Example 1: Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices",
    "titleAr": "مثال محلول نموذجي 1: اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة",
    "questionEn": "[Solved Example 1] Quantitative engineering analysis for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 1] تحليل هندسي وحسابي تطبيقي لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion."
    ],
    "optionsAr": [
      "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "correctAnswerAr": "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "explanationEn": "Pedagogical Solution: For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "explanationAr": "الحل النموذجي المعتمد: لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_solved_2",
    "titleEn": "Solved Pedagogical Example 2: Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance",
    "titleAr": "مثال محلول نموذجي 2: الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد",
    "questionEn": "[Solved Example 2] Quantitative engineering analysis for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 2] تحليل هندسي وحسابي تطبيقي لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only."
    ],
    "optionsAr": [
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "correctAnswerAr": "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationEn": "Pedagogical Solution: In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationAr": "الحل النموذجي المعتمد: في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_solved_3",
    "titleEn": "Solved Pedagogical Example 3: Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation",
    "titleAr": "مثال محلول نموذجي 3: أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني",
    "questionEn": "[Solved Example 3] Quantitative engineering analysis for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 3] تحليل هندسي وحسابي تطبيقي لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "correctAnswerAr": "محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "explanationEn": "Pedagogical Solution: A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "explanationAr": "الحل النموذجي المعتمد: محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_solved_4",
    "titleEn": "Solved Pedagogical Example 4: H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection",
    "titleAr": "مثال محلول نموذجي 4: بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن",
    "questionEn": "[Solved Example 4] Quantitative engineering analysis for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 4] تحليل هندسي وحسابي تطبيقي لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$."
    ],
    "optionsAr": [
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
    "correctAnswerAr": "في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
    "explanationEn": "Pedagogical Solution: In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
    "explanationAr": "الحل النموذجي المعتمد: في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_solved_5",
    "titleEn": "Solved Pedagogical Example 5: Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices",
    "titleAr": "مثال محلول نموذجي 5: اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة",
    "questionEn": "[Solved Example 5] Quantitative engineering analysis for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 5] تحليل هندسي وحسابي تطبيقي لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "correctAnswerAr": "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "explanationEn": "Pedagogical Solution: For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "explanationAr": "الحل النموذجي المعتمد: لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_solved_6",
    "titleEn": "Solved Pedagogical Example 6: Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance",
    "titleAr": "مثال محلول نموذجي 6: الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد",
    "questionEn": "[Solved Example 6] Quantitative engineering analysis for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 6] تحليل هندسي وحسابي تطبيقي لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "correctAnswerAr": "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationEn": "Pedagogical Solution: In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationAr": "الحل النموذجي المعتمد: في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_solved_7",
    "titleEn": "Solved Pedagogical Example 7: Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation",
    "titleAr": "مثال محلول نموذجي 7: أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني",
    "questionEn": "[Solved Example 7] Quantitative engineering analysis for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 7] تحليل هندسي وحسابي تطبيقي لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light."
    ],
    "optionsAr": [
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "correctAnswerAr": "محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "explanationEn": "Pedagogical Solution: A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "explanationAr": "الحل النموذجي المعتمد: محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_solved_8",
    "titleEn": "Solved Pedagogical Example 8: H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection",
    "titleAr": "مثال محلول نموذجي 8: بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن",
    "questionEn": "[Solved Example 8] Quantitative engineering analysis for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 8] تحليل هندسي وحسابي تطبيقي لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$."
    ],
    "optionsAr": [
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
    "correctAnswerAr": "في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
    "explanationEn": "Pedagogical Solution: In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
    "explanationAr": "الحل النموذجي المعتمد: في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_solved_9",
    "titleEn": "Solved Pedagogical Example 9: Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices",
    "titleAr": "مثال محلول نموذجي 9: اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة",
    "questionEn": "[Solved Example 9] Quantitative engineering analysis for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 9] تحليل هندسي وحسابي تطبيقي لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "correctAnswerAr": "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "explanationEn": "Pedagogical Solution: For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "explanationAr": "الحل النموذجي المعتمد: لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch1_solved_10",
    "titleEn": "Solved Pedagogical Example 10: Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance",
    "titleAr": "مثال محلول نموذجي 10: الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد",
    "questionEn": "[Solved Example 10] Quantitative engineering analysis for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 10] تحليل هندسي وحسابي تطبيقي لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "correctAnswerAr": "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationEn": "Pedagogical Solution: In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationAr": "الحل النموذجي المعتمد: في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  }
];

export const roboticsCh1ExerciseProblems: SolvedProblem[] = [
  {
    "id": "th_robotics_ch1_exercise_1",
    "titleEn": "Practice Exercise 1: Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices",
    "titleAr": "تمرين تطبيقي 1: اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة",
    "questionEn": "[Practice Exercise 1] Mechatronics Case Study on Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 1] دراسة حالة ميكاترونكس لـ اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages."
    ],
    "optionsAr": [
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "correctAnswerAr": "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "explanationEn": "Independent Verification: For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "explanationAr": "التحقق المستقل: لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (C) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
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
    "id": "th_robotics_ch1_exercise_2",
    "titleEn": "Practice Exercise 2: Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance",
    "titleAr": "تمرين تطبيقي 2: الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد",
    "questionEn": "[Practice Exercise 2] Mechatronics Case Study on Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 2] دراسة حالة ميكاترونكس لـ الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$."
    ],
    "optionsAr": [
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "correctAnswerAr": "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationEn": "Independent Verification: In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationAr": "التحقق المستقل: في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (D) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
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
    "id": "th_robotics_ch1_exercise_3",
    "titleEn": "Practice Exercise 3: Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation",
    "titleAr": "تمرين تطبيقي 3: أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني",
    "questionEn": "[Practice Exercise 3] Mechatronics Case Study on Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 3] دراسة حالة ميكاترونكس لـ أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "correctAnswerAr": "محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "explanationEn": "Independent Verification: A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "explanationAr": "التحقق المستقل: محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (A) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
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
    "id": "th_robotics_ch1_exercise_4",
    "titleEn": "Practice Exercise 4: H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection",
    "titleAr": "تمرين تطبيقي 4: بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن",
    "questionEn": "[Practice Exercise 4] Mechatronics Case Study on H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 4] دراسة حالة ميكاترونكس لـ بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only."
    ],
    "optionsAr": [
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
    "correctAnswerAr": "في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
    "explanationEn": "Independent Verification: In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
    "explanationAr": "التحقق المستقل: في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (B) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
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
    "id": "th_robotics_ch1_exercise_5",
    "titleEn": "Practice Exercise 5: Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices",
    "titleAr": "تمرين تطبيقي 5: اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة",
    "questionEn": "[Practice Exercise 5] Mechatronics Case Study on Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 5] دراسة حالة ميكاترونكس لـ اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "correctAnswerAr": "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "explanationEn": "Independent Verification: For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "explanationAr": "التحقق المستقل: لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (C) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
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
    "id": "th_robotics_ch1_exercise_6",
    "titleEn": "Practice Exercise 6: Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance",
    "titleAr": "تمرين تطبيقي 6: الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد",
    "questionEn": "[Practice Exercise 6] Mechatronics Case Study on Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 6] دراسة حالة ميكاترونكس لـ الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "correctAnswerAr": "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationEn": "Independent Verification: In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationAr": "التحقق المستقل: في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (D) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
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
    "id": "th_robotics_ch1_exercise_7",
    "titleEn": "Practice Exercise 7: Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation",
    "titleAr": "تمرين تطبيقي 7: أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني",
    "questionEn": "[Practice Exercise 7] Mechatronics Case Study on Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 7] دراسة حالة ميكاترونكس لـ أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction."
    ],
    "optionsAr": [
      "محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "correctAnswerAr": "محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "explanationEn": "Independent Verification: A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "explanationAr": "التحقق المستقل: محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (A) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
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
    "id": "th_robotics_ch1_exercise_8",
    "titleEn": "Practice Exercise 8: H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection",
    "titleAr": "تمرين تطبيقي 8: بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن",
    "questionEn": "[Practice Exercise 8] Mechatronics Case Study on H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 8] دراسة حالة ميكاترونكس لـ بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices."
    ],
    "optionsAr": [
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
    "correctAnswerAr": "في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
    "explanationEn": "Independent Verification: In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
    "explanationAr": "التحقق المستقل: في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (B) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
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
    "id": "th_robotics_ch1_exercise_9",
    "titleEn": "Practice Exercise 9: Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices",
    "titleAr": "تمرين تطبيقي 9: اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة",
    "questionEn": "[Practice Exercise 9] Mechatronics Case Study on Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 9] دراسة حالة ميكاترونكس لـ اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "correctAnswerAr": "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "explanationEn": "Independent Verification: For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "explanationAr": "التحقق المستقل: لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (C) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
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
    "id": "th_robotics_ch1_exercise_10",
    "titleEn": "Practice Exercise 10: Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance",
    "titleAr": "تمرين تطبيقي 10: الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد",
    "questionEn": "[Practice Exercise 10] Mechatronics Case Study on Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 10] دراسة حالة ميكاترونكس لـ الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "correctAnswerAr": "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationEn": "Independent Verification: In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationAr": "التحقق المستقل: في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (D) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
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
    "id": "th_robotics_ch1_exercise_11",
    "titleEn": "Practice Exercise 11: Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation",
    "titleAr": "تمرين تطبيقي 11: أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني",
    "questionEn": "[Practice Exercise 11] Mechatronics Case Study on Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 11] دراسة حالة ميكاترونكس لـ أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting."
    ],
    "optionsAr": [
      "محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "correctAnswerAr": "محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "explanationEn": "Independent Verification: A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "explanationAr": "التحقق المستقل: محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (A) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
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
    "id": "th_robotics_ch1_exercise_12",
    "titleEn": "Practice Exercise 12: H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection",
    "titleAr": "تمرين تطبيقي 12: بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن",
    "questionEn": "[Practice Exercise 12] Mechatronics Case Study on H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 12] دراسة حالة ميكاترونكس لـ بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
    "correctAnswerAr": "في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
    "explanationEn": "Independent Verification: In a 24 V H-bridge operating at $f_{PWM} = 20\\ kHz$ ($T = 50\\ \\mu s$) with duty cycle $D = 75\\%$, the average motor armature voltage applied across the winding is: $V_{avg} = D \\times V_{dc} = 0.75 \\times 24 = 18.0\\ V$.",
    "explanationAr": "التحقق المستقل: في قنطرة H-Bridge بجهد ٢٤ فولت وتردد $f_{PWM} = 20\\ kHz$ (زمن دوري $50\\ \\mu s$) بنسبة تشغيل $D = 75\\%$، يبلغ متوسط الجهد المطبق على ملفات المحرك: $V_{avg} = 0.75 \\times 24 = 18.0\\ V$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for H-Bridge Inverter Topologies, Gate Drivers & Shoot-Through Protection.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (B) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة بنية قنطرة H-Bridge ودوائر قيادة البوابات وحماية التوصيل المتزامن.",
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
    "id": "th_robotics_ch1_exercise_13",
    "titleEn": "Practice Exercise 13: Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices",
    "titleAr": "تمرين تطبيقي 13: اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة",
    "questionEn": "[Practice Exercise 13] Mechatronics Case Study on Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 13] دراسة حالة ميكاترونكس لـ اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends."
    ],
    "optionsAr": [
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "correctAnswerAr": "لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "explanationEn": "Independent Verification: For a planar 2-DOF robotic arm with link lengths $L_1 = 0.5\\ m$ and $L_2 = 0.4\\ m$ at joint angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$, end-effector position is: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.433 + 0.104 = 0.537\\ m$.",
    "explanationAr": "التحقق المستقل: لذراع روبوتية مستوية بوصلتين $L_1 = 0.5\\ m$ و$L_2 = 0.4\\ m$ عند زاويتي $\\theta_1 = 30^\\circ$ و$\\theta_2 = 45^\\circ$، يبلغ إحداثي نقطة النهاية: $x = L_1\\cos\\theta_1 + L_2\\cos(\\theta_1 + \\theta_2) = 0.5\\cos(30^\\circ) + 0.4\\cos(75^\\circ) \\approx 0.537\\ m$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Denavit-Hartenberg (DH) Convention & Homogeneous Transformation Matrices.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (C) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة اصطلاح دينافيت-هارتنبرغ (DH) ومصفوفات التحويل المتجانسة.",
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
    "id": "th_robotics_ch1_exercise_14",
    "titleEn": "Practice Exercise 14: Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance",
    "titleAr": "تمرين تطبيقي 14: الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد",
    "questionEn": "[Practice Exercise 14] Mechatronics Case Study on Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 14] دراسة حالة ميكاترونكس لـ الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$."
    ],
    "optionsAr": [
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "correctAnswerAr": "في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationEn": "Independent Verification: In a 2-link planar arm, the elbow singularity occurs when $\\sin(\\theta_2) = 0$ (arm fully extended $\\theta_2 = 0^\\circ$ or folded $\\theta_2 = 180^\\circ$), where Jacobian determinant $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "explanationAr": "التحقق المستقل: في ذراع مستوية بوصلتين، يحدث انفراد المرفق عندما تكون $\\sin(\\theta_2) = 0$ (الذراع مفرودة تماماً عند $\\theta_2 = 0^\\circ$ أو منطبقة عند $\\theta_2 = 180^\\circ$)، حيث محدد جاكوبيان $\\det(J) = L_1 L_2 \\sin(\\theta_2) = 0$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Inverse Kinematics (IK), Analytical Solutions & Singularity Avoidance.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (D) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة الحركيات العكسية (IK) والحلول التحليلية وتجنب نقاط الانفراد.",
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
    "id": "th_robotics_ch1_exercise_15",
    "titleEn": "Practice Exercise 15: Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation",
    "titleAr": "تمرين تطبيقي 15: أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني",
    "questionEn": "[Practice Exercise 15] Mechatronics Case Study on Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 15] دراسة حالة ميكاترونكس لـ أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "correctAnswerAr": "محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "explanationEn": "Independent Verification: A BLDC motor with torque constant $K_t = 0.08\\ N\\cdot m/A$ and back-EMF constant $K_v = 120\\ RPM/V$ draws armature current $I = 15\\ A$ under full load, generating electromagnetic torque: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "explanationAr": "التحقق المستقل: محرك BLDC بثابت عزم $K_t = 0.08\\ N\\cdot m/A$ وثابت سرعة $K_v = 120\\ RPM/V$ يسحب تياراً $I = 15\\ A$ تحت الحمل الأقصى، مولداً عزماً كهرومغناطيسياً: $\\tau = K_t \\times I = 0.08 \\times 15 = 1.20\\ N\\cdot m$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Brushless DC (BLDC) Motor Fundamentals & Electronic Commutation.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (A) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة أسس المحركات عديمة المسفرات (BLDC) والتبديل الإلكتروني.",
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
