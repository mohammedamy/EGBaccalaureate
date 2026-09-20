import type { SolvedProblem } from '../../../types/curriculum';

export const egBacRoboticsCh2SolvedExamples: SolvedProblem[] = [
  {
    "id": "egbac_robotics_ch2_solved_1",
    "titleEn": "Solved Pedagogical Example 1: Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates",
    "titleAr": "مثال محلول نموذجي 1: تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير",
    "questionEn": "[Solved Example 1] Quantitative engineering analysis for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 1] تحليل هندسي وحسابي تطبيقي لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion."
    ],
    "optionsAr": [
      "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "correctAnswerAr": "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "explanationEn": "Pedagogical Solution: For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "explanationAr": "الحل النموذجي المعتمد: لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_solved_2",
    "titleEn": "Solved Pedagogical Example 2: 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering",
    "titleAr": "مثال محلول نموذجي 2: معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط",
    "questionEn": "[Solved Example 2] Quantitative engineering analysis for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 2] تحليل هندسي وحسابي تطبيقي لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only."
    ],
    "optionsAr": [
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "correctAnswerAr": "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "explanationEn": "Pedagogical Solution: RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "explanationAr": "الحل النموذجي المعتمد: تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_solved_3",
    "titleEn": "Solved Pedagogical Example 3: Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization",
    "titleAr": "مثال محلول نموذجي 3: قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني",
    "questionEn": "[Solved Example 3] Quantitative engineering analysis for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 3] تحليل هندسي وحسابي تطبيقي لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
    "correctAnswerAr": "يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
    "explanationEn": "Pedagogical Solution: Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
    "explanationAr": "الحل النموذجي المعتمد: يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_solved_4",
    "titleEn": "Solved Pedagogical Example 4: 6D Object Pose Estimation & Deep Learning Robotic Grasping",
    "titleAr": "مثال محلول نموذجي 4: تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق",
    "questionEn": "[Solved Example 4] Quantitative engineering analysis for 6D Object Pose Estimation & Deep Learning Robotic Grasping. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 4] تحليل هندسي وحسابي تطبيقي لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$."
    ],
    "optionsAr": [
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
    "correctAnswerAr": "لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
    "explanationEn": "Pedagogical Solution: For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
    "explanationAr": "الحل النموذجي المعتمد: لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_solved_5",
    "titleEn": "Solved Pedagogical Example 5: Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates",
    "titleAr": "مثال محلول نموذجي 5: تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير",
    "questionEn": "[Solved Example 5] Quantitative engineering analysis for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 5] تحليل هندسي وحسابي تطبيقي لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "correctAnswerAr": "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "explanationEn": "Pedagogical Solution: For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "explanationAr": "الحل النموذجي المعتمد: لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_solved_6",
    "titleEn": "Solved Pedagogical Example 6: 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering",
    "titleAr": "مثال محلول نموذجي 6: معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط",
    "questionEn": "[Solved Example 6] Quantitative engineering analysis for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 6] تحليل هندسي وحسابي تطبيقي لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "correctAnswerAr": "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "explanationEn": "Pedagogical Solution: RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "explanationAr": "الحل النموذجي المعتمد: تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_solved_7",
    "titleEn": "Solved Pedagogical Example 7: Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization",
    "titleAr": "مثال محلول نموذجي 7: قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني",
    "questionEn": "[Solved Example 7] Quantitative engineering analysis for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 7] تحليل هندسي وحسابي تطبيقي لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light."
    ],
    "optionsAr": [
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
    "correctAnswerAr": "يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
    "explanationEn": "Pedagogical Solution: Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
    "explanationAr": "الحل النموذجي المعتمد: يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_solved_8",
    "titleEn": "Solved Pedagogical Example 8: 6D Object Pose Estimation & Deep Learning Robotic Grasping",
    "titleAr": "مثال محلول نموذجي 8: تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق",
    "questionEn": "[Solved Example 8] Quantitative engineering analysis for 6D Object Pose Estimation & Deep Learning Robotic Grasping. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 8] تحليل هندسي وحسابي تطبيقي لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$."
    ],
    "optionsAr": [
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
    "correctAnswerAr": "لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
    "explanationEn": "Pedagogical Solution: For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
    "explanationAr": "الحل النموذجي المعتمد: لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_solved_9",
    "titleEn": "Solved Pedagogical Example 9: Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates",
    "titleAr": "مثال محلول نموذجي 9: تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير",
    "questionEn": "[Solved Example 9] Quantitative engineering analysis for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 9] تحليل هندسي وحسابي تطبيقي لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "correctAnswerAr": "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "explanationEn": "Pedagogical Solution: For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "explanationAr": "الحل النموذجي المعتمد: لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch2_solved_10",
    "titleEn": "Solved Pedagogical Example 10: 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering",
    "titleAr": "مثال محلول نموذجي 10: معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط",
    "questionEn": "[Solved Example 10] Quantitative engineering analysis for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 10] تحليل هندسي وحسابي تطبيقي لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "correctAnswerAr": "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "explanationEn": "Pedagogical Solution: RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "explanationAr": "الحل النموذجي المعتمد: تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  }
];

export const egBacRoboticsCh2ExerciseProblems: SolvedProblem[] = [
  {
    "id": "egbac_robotics_ch2_exercise_1",
    "titleEn": "Practice Exercise 1: Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates",
    "titleAr": "تمرين تطبيقي 1: تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير",
    "questionEn": "[Practice Exercise 1] Mechatronics Case Study on Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 1] دراسة حالة ميكاترونكس لـ تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages."
    ],
    "optionsAr": [
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "correctAnswerAr": "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "explanationEn": "Independent Verification: For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "explanationAr": "التحقق المستقل: لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (C) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
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
    "id": "egbac_robotics_ch2_exercise_2",
    "titleEn": "Practice Exercise 2: 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering",
    "titleAr": "تمرين تطبيقي 2: معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط",
    "questionEn": "[Practice Exercise 2] Mechatronics Case Study on 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 2] دراسة حالة ميكاترونكس لـ معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces."
    ],
    "optionsAr": [
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "correctAnswerAr": "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "explanationEn": "Independent Verification: RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "explanationAr": "التحقق المستقل: تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (D) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
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
    "id": "egbac_robotics_ch2_exercise_3",
    "titleEn": "Practice Exercise 3: Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization",
    "titleAr": "تمرين تطبيقي 3: قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني",
    "questionEn": "[Practice Exercise 3] Mechatronics Case Study on Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 3] دراسة حالة ميكاترونكس لـ قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
    "correctAnswerAr": "يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
    "explanationEn": "Independent Verification: Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
    "explanationAr": "التحقق المستقل: يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (A) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
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
    "id": "egbac_robotics_ch2_exercise_4",
    "titleEn": "Practice Exercise 4: 6D Object Pose Estimation & Deep Learning Robotic Grasping",
    "titleAr": "تمرين تطبيقي 4: تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق",
    "questionEn": "[Practice Exercise 4] Mechatronics Case Study on 6D Object Pose Estimation & Deep Learning Robotic Grasping. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 4] دراسة حالة ميكاترونكس لـ تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only."
    ],
    "optionsAr": [
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
    "correctAnswerAr": "لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
    "explanationEn": "Independent Verification: For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
    "explanationAr": "التحقق المستقل: لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (B) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
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
    "id": "egbac_robotics_ch2_exercise_5",
    "titleEn": "Practice Exercise 5: Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates",
    "titleAr": "تمرين تطبيقي 5: تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير",
    "questionEn": "[Practice Exercise 5] Mechatronics Case Study on Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 5] دراسة حالة ميكاترونكس لـ تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "correctAnswerAr": "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "explanationEn": "Independent Verification: For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "explanationAr": "التحقق المستقل: لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (C) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
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
    "id": "egbac_robotics_ch2_exercise_6",
    "titleEn": "Practice Exercise 6: 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering",
    "titleAr": "تمرين تطبيقي 6: معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط",
    "questionEn": "[Practice Exercise 6] Mechatronics Case Study on 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 6] دراسة حالة ميكاترونكس لـ معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "correctAnswerAr": "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "explanationEn": "Independent Verification: RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "explanationAr": "التحقق المستقل: تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (D) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
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
    "id": "egbac_robotics_ch2_exercise_7",
    "titleEn": "Practice Exercise 7: Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization",
    "titleAr": "تمرين تطبيقي 7: قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني",
    "questionEn": "[Practice Exercise 7] Mechatronics Case Study on Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 7] دراسة حالة ميكاترونكس لـ قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction."
    ],
    "optionsAr": [
      "يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
    "correctAnswerAr": "يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
    "explanationEn": "Independent Verification: Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
    "explanationAr": "التحقق المستقل: يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (A) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
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
    "id": "egbac_robotics_ch2_exercise_8",
    "titleEn": "Practice Exercise 8: 6D Object Pose Estimation & Deep Learning Robotic Grasping",
    "titleAr": "تمرين تطبيقي 8: تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق",
    "questionEn": "[Practice Exercise 8] Mechatronics Case Study on 6D Object Pose Estimation & Deep Learning Robotic Grasping. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 8] دراسة حالة ميكاترونكس لـ تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices."
    ],
    "optionsAr": [
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
    "correctAnswerAr": "لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
    "explanationEn": "Independent Verification: For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
    "explanationAr": "التحقق المستقل: لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (B) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
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
    "id": "egbac_robotics_ch2_exercise_9",
    "titleEn": "Practice Exercise 9: Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates",
    "titleAr": "تمرين تطبيقي 9: تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير",
    "questionEn": "[Practice Exercise 9] Mechatronics Case Study on Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 9] دراسة حالة ميكاترونكس لـ تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "correctAnswerAr": "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "explanationEn": "Independent Verification: For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "explanationAr": "التحقق المستقل: لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (C) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
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
    "id": "egbac_robotics_ch2_exercise_10",
    "titleEn": "Practice Exercise 10: 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering",
    "titleAr": "تمرين تطبيقي 10: معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط",
    "questionEn": "[Practice Exercise 10] Mechatronics Case Study on 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 10] دراسة حالة ميكاترونكس لـ معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "correctAnswerAr": "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "explanationEn": "Independent Verification: RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "explanationAr": "التحقق المستقل: تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (D) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
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
    "id": "egbac_robotics_ch2_exercise_11",
    "titleEn": "Practice Exercise 11: Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization",
    "titleAr": "تمرين تطبيقي 11: قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني",
    "questionEn": "[Practice Exercise 11] Mechatronics Case Study on Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 11] دراسة حالة ميكاترونكس لـ قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting."
    ],
    "optionsAr": [
      "يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
    "correctAnswerAr": "يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
    "explanationEn": "Independent Verification: Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
    "explanationAr": "التحقق المستقل: يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (A) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
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
    "id": "egbac_robotics_ch2_exercise_12",
    "titleEn": "Practice Exercise 12: 6D Object Pose Estimation & Deep Learning Robotic Grasping",
    "titleAr": "تمرين تطبيقي 12: تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق",
    "questionEn": "[Practice Exercise 12] Mechatronics Case Study on 6D Object Pose Estimation & Deep Learning Robotic Grasping. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 12] دراسة حالة ميكاترونكس لـ تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
    "correctAnswerAr": "لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
    "explanationEn": "Independent Verification: For antipodal parallel-jaw grippers, grasp synthesis evaluates force closure metrics: friction cone coefficient $\\mu = 0.5$ requires normal grasping force $F_n \\ge \\frac{F_t}{\\mu} = \\frac{10\\ N}{0.5} = 20\\ N$ to prevent slippage under tangential load $F_t = 10\\ N$.",
    "explanationAr": "التحقق المستقل: لمقابض الفكين المتوازيين، يتطلب تحقق انغلاق القوة معامل احتكاك $\\mu = 0.5$ وقوة إطباق عمودية $F_n \\ge \\frac{10}{0.5} = 20\\ N$ لمنع انزلاق حمل مماس مقداره ١٠ نيوتن.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for 6D Object Pose Estimation & Deep Learning Robotic Grasping.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (B) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة تقدير موضع وتوجيه الأجسام بست درجات حرية والتقاط الروبوت بالتعلم العميق.",
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
    "id": "egbac_robotics_ch2_exercise_13",
    "titleEn": "Practice Exercise 13: Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates",
    "titleAr": "تمرين تطبيقي 13: تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير",
    "questionEn": "[Practice Exercise 13] Mechatronics Case Study on Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 13] دراسة حالة ميكاترونكس لـ تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends."
    ],
    "optionsAr": [
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "correctAnswerAr": "لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "explanationEn": "Independent Verification: For a scalar state with prior variance $P = 4.0$, observation sensitivity $H = 1.0$, and sensor measurement noise variance $R = 1.0$, the optimal Kalman gain is: $K = \\frac{4.0 \\times 1.0}{1.0 \\times 4.0 \\times 1.0 + 1.0} = \\frac{4.0}{5.0} = 0.80$.",
    "explanationAr": "التحقق المستقل: لحالة قياسية بتغاير سابق $P = 4.0$ وحساسية قياس $H = 1.0$ وضوضاء حساس $R = 1.0$، يبلغ كسب كالمان الأمثل: $K = \\frac{4.0}{5.0} = 0.80$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Discrete Extended Kalman Filter (EKF) State Estimation & Covariance Updates.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (C) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة تقدير الحالة بمرشح كالمان الممتد (EKF) وتحديثات مصفوفة التغاير.",
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
    "id": "egbac_robotics_ch2_exercise_14",
    "titleEn": "Practice Exercise 14: 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering",
    "titleAr": "تمرين تطبيقي 14: معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط",
    "questionEn": "[Practice Exercise 14] Mechatronics Case Study on 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 14] دراسة حالة ميكاترونكس لـ معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces."
    ],
    "optionsAr": [
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "correctAnswerAr": "تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "explanationEn": "Independent Verification: RANSAC plane segmentation samples 3 random non-collinear points, fits plane equation $ax + by + cz + d = 0$, and counts inliers within distance threshold $\\epsilon = 0.03\\ m$, identifying floor and wall surfaces.",
    "explanationAr": "التحقق المستقل: تأخذ خوارزمية RANSAC ثلاث نقاط عشوائية وتلائم معادلة المستوى $ax + by + cz + d = 0$ وتعد النقاط المنتمية ضمن مسافة $\\epsilon = 0.03\\ m$ لتمييز الأرضيات والجدران.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for 3D Point Cloud Processing: Voxel Downsampling, RANSAC & Clustering.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (D) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة معالجة السحب النقطية ثلاثية الأبعاد: تقليص الحجم بالحجيمات وRANSAC وعناقيد النقاط.",
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
    "id": "egbac_robotics_ch2_exercise_15",
    "titleEn": "Practice Exercise 15: Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization",
    "titleAr": "تمرين تطبيقي 15: قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني",
    "questionEn": "[Practice Exercise 15] Mechatronics Case Study on Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 15] دراسة حالة ميكاترونكس لـ قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
    "correctAnswerAr": "يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
    "explanationEn": "Independent Verification: Bundle adjustment simultaneously minimizes reprojection errors $\\sum ||z_{ij} - h(x_i, l_j)||^2_{\\Sigma}$ of 3D landmarks $l_j$ observed across camera poses $x_i$ using Levenberg-Marquardt non-linear least squares.",
    "explanationAr": "التحقق المستقل: يقلل ضبط حزم الأشعة (Bundle Adjustment) خطأ إعادة الإسقاط لجميع المعالم ثلاثية الأبعاد $l_j$ المرصودة عبر مواضع الكاميرا $x_i$ بحل المربعات الصغرى غير الخطية.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Visual-Inertial Odometry (VIO) & Bundle Adjustment Optimization.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (A) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة قياس المسافات البصري العطالي (VIO) وضبط حزم الأشعة التحسيني.",
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
