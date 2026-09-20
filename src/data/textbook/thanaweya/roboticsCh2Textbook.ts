import type { SolvedProblem } from '../../../types/curriculum';

export const roboticsCh2SolvedExamples: SolvedProblem[] = [
  {
    "id": "th_robotics_ch2_solved_1",
    "titleEn": "Solved Pedagogical Example 1: Inertial Measurement Units (IMU) & Complementary Filter Fusion",
    "titleAr": "مثال محلول نموذجي 1: وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي",
    "questionEn": "[Solved Example 1] Quantitative engineering analysis for Inertial Measurement Units (IMU) & Complementary Filter Fusion. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 1] تحليل هندسي وحسابي تطبيقي لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion."
    ],
    "optionsAr": [
      "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "correctAnswerAr": "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "explanationEn": "Pedagogical Solution: With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "explanationAr": "الحل النموذجي المعتمد: بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_solved_2",
    "titleEn": "Solved Pedagogical Example 2: Optical Quadrature Encoders, X4 Decoding & Wheel Odometry",
    "titleAr": "مثال محلول نموذجي 2: المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات",
    "questionEn": "[Solved Example 2] Quantitative engineering analysis for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 2] تحليل هندسي وحسابي تطبيقي لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only."
    ],
    "optionsAr": [
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "correctAnswerAr": "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "explanationEn": "Pedagogical Solution: A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "explanationAr": "الحل النموذجي المعتمد: روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_solved_3",
    "titleEn": "Solved Pedagogical Example 3: Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution",
    "titleAr": "مثال محلول نموذجي 3: مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى",
    "questionEn": "[Solved Example 3] Quantitative engineering analysis for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 3] تحليل هندسي وحسابي تطبيقي لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
    "correctAnswerAr": "إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
    "explanationEn": "Pedagogical Solution: If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
    "explanationAr": "الحل النموذجي المعتمد: إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_solved_4",
    "titleEn": "Solved Pedagogical Example 4: OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform",
    "titleAr": "مثال محلول نموذجي 4: استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف",
    "questionEn": "[Solved Example 4] Quantitative engineering analysis for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 4] تحليل هندسي وحسابي تطبيقي لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$."
    ],
    "optionsAr": [
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
    "correctAnswerAr": "في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
    "explanationEn": "Pedagogical Solution: In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
    "explanationAr": "الحل النموذجي المعتمد: في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_solved_5",
    "titleEn": "Solved Pedagogical Example 5: Inertial Measurement Units (IMU) & Complementary Filter Fusion",
    "titleAr": "مثال محلول نموذجي 5: وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي",
    "questionEn": "[Solved Example 5] Quantitative engineering analysis for Inertial Measurement Units (IMU) & Complementary Filter Fusion. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 5] تحليل هندسي وحسابي تطبيقي لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "correctAnswerAr": "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "explanationEn": "Pedagogical Solution: With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "explanationAr": "الحل النموذجي المعتمد: بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_solved_6",
    "titleEn": "Solved Pedagogical Example 6: Optical Quadrature Encoders, X4 Decoding & Wheel Odometry",
    "titleAr": "مثال محلول نموذجي 6: المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات",
    "questionEn": "[Solved Example 6] Quantitative engineering analysis for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 6] تحليل هندسي وحسابي تطبيقي لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "correctAnswerAr": "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "explanationEn": "Pedagogical Solution: A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "explanationAr": "الحل النموذجي المعتمد: روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_solved_7",
    "titleEn": "Solved Pedagogical Example 7: Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution",
    "titleAr": "مثال محلول نموذجي 7: مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى",
    "questionEn": "[Solved Example 7] Quantitative engineering analysis for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 7] تحليل هندسي وحسابي تطبيقي لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light."
    ],
    "optionsAr": [
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
    "correctAnswerAr": "إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
    "explanationEn": "Pedagogical Solution: If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
    "explanationAr": "الحل النموذجي المعتمد: إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_solved_8",
    "titleEn": "Solved Pedagogical Example 8: OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform",
    "titleAr": "مثال محلول نموذجي 8: استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف",
    "questionEn": "[Solved Example 8] Quantitative engineering analysis for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 8] تحليل هندسي وحسابي تطبيقي لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$."
    ],
    "optionsAr": [
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
    "correctAnswerAr": "في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
    "explanationEn": "Pedagogical Solution: In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
    "explanationAr": "الحل النموذجي المعتمد: في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_solved_9",
    "titleEn": "Solved Pedagogical Example 9: Inertial Measurement Units (IMU) & Complementary Filter Fusion",
    "titleAr": "مثال محلول نموذجي 9: وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي",
    "questionEn": "[Solved Example 9] Quantitative engineering analysis for Inertial Measurement Units (IMU) & Complementary Filter Fusion. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 9] تحليل هندسي وحسابي تطبيقي لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "correctAnswerAr": "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "explanationEn": "Pedagogical Solution: With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "explanationAr": "الحل النموذجي المعتمد: بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch2_solved_10",
    "titleEn": "Solved Pedagogical Example 10: Optical Quadrature Encoders, X4 Decoding & Wheel Odometry",
    "titleAr": "مثال محلول نموذجي 10: المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات",
    "questionEn": "[Solved Example 10] Quantitative engineering analysis for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 10] تحليل هندسي وحسابي تطبيقي لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "correctAnswerAr": "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "explanationEn": "Pedagogical Solution: A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "explanationAr": "الحل النموذجي المعتمد: روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  }
];

export const roboticsCh2ExerciseProblems: SolvedProblem[] = [
  {
    "id": "th_robotics_ch2_exercise_1",
    "titleEn": "Practice Exercise 1: Inertial Measurement Units (IMU) & Complementary Filter Fusion",
    "titleAr": "تمرين تطبيقي 1: وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي",
    "questionEn": "[Practice Exercise 1] Mechatronics Case Study on Inertial Measurement Units (IMU) & Complementary Filter Fusion. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 1] دراسة حالة ميكاترونكس لـ وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages."
    ],
    "optionsAr": [
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "correctAnswerAr": "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "explanationEn": "Independent Verification: With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "explanationAr": "التحقق المستقل: بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (C) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
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
    "id": "th_robotics_ch2_exercise_2",
    "titleEn": "Practice Exercise 2: Optical Quadrature Encoders, X4 Decoding & Wheel Odometry",
    "titleAr": "تمرين تطبيقي 2: المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات",
    "questionEn": "[Practice Exercise 2] Mechatronics Case Study on Optical Quadrature Encoders, X4 Decoding & Wheel Odometry. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 2] دراسة حالة ميكاترونكس لـ المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$."
    ],
    "optionsAr": [
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "correctAnswerAr": "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "explanationEn": "Independent Verification: A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "explanationAr": "التحقق المستقل: روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (D) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
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
    "id": "th_robotics_ch2_exercise_3",
    "titleEn": "Practice Exercise 3: Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution",
    "titleAr": "تمرين تطبيقي 3: مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى",
    "questionEn": "[Practice Exercise 3] Mechatronics Case Study on Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 3] دراسة حالة ميكاترونكس لـ مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
    "correctAnswerAr": "إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
    "explanationEn": "Independent Verification: If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
    "explanationAr": "التحقق المستقل: إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (A) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
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
    "id": "th_robotics_ch2_exercise_4",
    "titleEn": "Practice Exercise 4: OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform",
    "titleAr": "تمرين تطبيقي 4: استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف",
    "questionEn": "[Practice Exercise 4] Mechatronics Case Study on OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 4] دراسة حالة ميكاترونكس لـ استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only."
    ],
    "optionsAr": [
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
    "correctAnswerAr": "في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
    "explanationEn": "Independent Verification: In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
    "explanationAr": "التحقق المستقل: في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (B) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
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
    "id": "th_robotics_ch2_exercise_5",
    "titleEn": "Practice Exercise 5: Inertial Measurement Units (IMU) & Complementary Filter Fusion",
    "titleAr": "تمرين تطبيقي 5: وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي",
    "questionEn": "[Practice Exercise 5] Mechatronics Case Study on Inertial Measurement Units (IMU) & Complementary Filter Fusion. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 5] دراسة حالة ميكاترونكس لـ وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "correctAnswerAr": "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "explanationEn": "Independent Verification: With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "explanationAr": "التحقق المستقل: بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (C) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
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
    "id": "th_robotics_ch2_exercise_6",
    "titleEn": "Practice Exercise 6: Optical Quadrature Encoders, X4 Decoding & Wheel Odometry",
    "titleAr": "تمرين تطبيقي 6: المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات",
    "questionEn": "[Practice Exercise 6] Mechatronics Case Study on Optical Quadrature Encoders, X4 Decoding & Wheel Odometry. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 6] دراسة حالة ميكاترونكس لـ المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "correctAnswerAr": "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "explanationEn": "Independent Verification: A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "explanationAr": "التحقق المستقل: روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (D) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
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
    "id": "th_robotics_ch2_exercise_7",
    "titleEn": "Practice Exercise 7: Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution",
    "titleAr": "تمرين تطبيقي 7: مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى",
    "questionEn": "[Practice Exercise 7] Mechatronics Case Study on Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 7] دراسة حالة ميكاترونكس لـ مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction."
    ],
    "optionsAr": [
      "إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
    "correctAnswerAr": "إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
    "explanationEn": "Independent Verification: If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
    "explanationAr": "التحقق المستقل: إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (A) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
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
    "id": "th_robotics_ch2_exercise_8",
    "titleEn": "Practice Exercise 8: OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform",
    "titleAr": "تمرين تطبيقي 8: استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف",
    "questionEn": "[Practice Exercise 8] Mechatronics Case Study on OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 8] دراسة حالة ميكاترونكس لـ استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices."
    ],
    "optionsAr": [
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
    "correctAnswerAr": "في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
    "explanationEn": "Independent Verification: In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
    "explanationAr": "التحقق المستقل: في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (B) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
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
    "id": "th_robotics_ch2_exercise_9",
    "titleEn": "Practice Exercise 9: Inertial Measurement Units (IMU) & Complementary Filter Fusion",
    "titleAr": "تمرين تطبيقي 9: وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي",
    "questionEn": "[Practice Exercise 9] Mechatronics Case Study on Inertial Measurement Units (IMU) & Complementary Filter Fusion. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 9] دراسة حالة ميكاترونكس لـ وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "correctAnswerAr": "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "explanationEn": "Independent Verification: With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "explanationAr": "التحقق المستقل: بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (C) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
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
    "id": "th_robotics_ch2_exercise_10",
    "titleEn": "Practice Exercise 10: Optical Quadrature Encoders, X4 Decoding & Wheel Odometry",
    "titleAr": "تمرين تطبيقي 10: المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات",
    "questionEn": "[Practice Exercise 10] Mechatronics Case Study on Optical Quadrature Encoders, X4 Decoding & Wheel Odometry. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 10] دراسة حالة ميكاترونكس لـ المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "correctAnswerAr": "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "explanationEn": "Independent Verification: A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "explanationAr": "التحقق المستقل: روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (D) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
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
    "id": "th_robotics_ch2_exercise_11",
    "titleEn": "Practice Exercise 11: Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution",
    "titleAr": "تمرين تطبيقي 11: مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى",
    "questionEn": "[Practice Exercise 11] Mechatronics Case Study on Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 11] دراسة حالة ميكاترونكس لـ مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting."
    ],
    "optionsAr": [
      "إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
    "correctAnswerAr": "إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
    "explanationEn": "Independent Verification: If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
    "explanationAr": "التحقق المستقل: إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (A) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
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
    "id": "th_robotics_ch2_exercise_12",
    "titleEn": "Practice Exercise 12: OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform",
    "titleAr": "تمرين تطبيقي 12: استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف",
    "questionEn": "[Practice Exercise 12] Mechatronics Case Study on OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 12] دراسة حالة ميكاترونكس لـ استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
    "correctAnswerAr": "في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
    "explanationEn": "Independent Verification: In Hough line transform parameterized by $r = x\\cos\\theta + y\\sin\\theta$, a detected pixel at $(x=10, y=0)$ voting at angle $\\theta = 0^\\circ$ accumulates into the accumulator bin at perpendicular distance $r = 10\\cos(0^\\circ) + 0 = 10.0\\ pixels$.",
    "explanationAr": "التحقق المستقل: في تحويل هوف لاكتشاف الخطوط بالعلاقة $r = x\\cos\\theta + y\\sin\\theta$، فإن بكسلاً عند الإحداثيات $(10, 0)$ يصوت عند زاوية $\\theta = 0^\\circ$ بقيمة نصف قطر عمودي $r = 10.0\\ pixels$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for OpenCV Feature Extraction: Gaussian Blur, Canny Edge & Hough Transform.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (B) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة استخراج معالم الصور بـ OpenCV: ترشيح غاوس وكشف حواف كاني وتحويل هوف.",
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
    "id": "th_robotics_ch2_exercise_13",
    "titleEn": "Practice Exercise 13: Inertial Measurement Units (IMU) & Complementary Filter Fusion",
    "titleAr": "تمرين تطبيقي 13: وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي",
    "questionEn": "[Practice Exercise 13] Mechatronics Case Study on Inertial Measurement Units (IMU) & Complementary Filter Fusion. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 13] دراسة حالة ميكاترونكس لـ وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends."
    ],
    "optionsAr": [
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "correctAnswerAr": "بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "explanationEn": "Independent Verification: With weighting coefficient $\\alpha = 0.98$, previous angle $\\theta = 20.0^\\circ$, gyro rate $\\omega = 5.0^\\circ/s$, sample time $\\Delta t = 0.01\\ s$, and accelerometer angle $\\theta_{acc} = 20.8^\\circ$: $\\theta_{new} = 0.98(20.0 + 5.0 \\times 0.01) + 0.02(20.8) = 0.98(20.05) + 0.416 = 19.649 + 0.416 = 20.065^\\circ$.",
    "explanationAr": "التحقق المستقل: بمعامل ترجيح $\\alpha = 0.98$ وزاوية سابقة $20.0^\\circ$ وسرعة زاوية $5.0^\\circ/s$ وزمن عينة $0.01\\ s$ وزاوية تسارع $20.8^\\circ$، تصبح الزاوية المحدثة: $\\theta_{new} = 20.065^\\circ$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Inertial Measurement Units (IMU) & Complementary Filter Fusion.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (C) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة وحدات قياس القصور الذاتي (IMU) ودمج الإشارات بالمرشح التكاملي.",
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
    "id": "th_robotics_ch2_exercise_14",
    "titleEn": "Practice Exercise 14: Optical Quadrature Encoders, X4 Decoding & Wheel Odometry",
    "titleAr": "تمرين تطبيقي 14: المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات",
    "questionEn": "[Practice Exercise 14] Mechatronics Case Study on Optical Quadrature Encoders, X4 Decoding & Wheel Odometry. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 14] دراسة حالة ميكاترونكس لـ المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$."
    ],
    "optionsAr": [
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "correctAnswerAr": "روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "explanationEn": "Independent Verification: A mobile robot with wheel diameter $D = 0.15\\ m$ ($R = 0.075\\ m$) and encoder with $4N = 2,000\\ CPR$ traveling forward records $10,000$ counts. Distance traveled is: $s = \\frac{10,000}{2,000} \\times (\\pi \\times 0.15) = 5 \\times 0.47124 = 2.356\\ m$.",
    "explanationAr": "التحقق المستقل: روبوت متنقل بقطر عجلة $D = 0.15\\ m$ ومُشفر دقة $2,000\\ CPR$ سجل ١٠,٠٠٠ نبضة. المسافة المقطوعة هي: $s = 5 \\times (\\pi \\times 0.15) = 2.356\\ m$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Optical Quadrature Encoders, X4 Decoding & Wheel Odometry.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (D) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة المشفرات البصرية التربيعية وفك التشفير الرباعي X4 وحساب مسار العجلات.",
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
    "id": "th_robotics_ch2_exercise_15",
    "titleEn": "Practice Exercise 15: Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution",
    "titleAr": "تمرين تطبيقي 15: مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى",
    "questionEn": "[Practice Exercise 15] Mechatronics Case Study on Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 15] دراسة حالة ميكاترونكس لـ مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
    "correctAnswerAr": "إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
    "explanationEn": "Independent Verification: If a LiDAR receiver detects an echo pulse after round-trip time $\\Delta t = 40.0\\ ns$ ($40 \\times 10^{-9}\\ s$), obstacle distance is: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = \\frac{12}{2} = 6.0\\ m$.",
    "explanationAr": "التحقق المستقل: إذا التقط مستقبل الليزر نبضة منعكسة بعد زمن ذهاب وعودة $\\Delta t = 40.0\\ ns$، فإن مسافة العائق هي: $d = \\frac{3 \\times 10^8 \\times 40 \\times 10^{-9}}{2} = 6.0\\ m$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Time-of-Flight (ToF) 2D LiDAR Principles & Range Resolution.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (A) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة مبادئ رادار الليزر ثنائي الأبعاد (LiDAR) بزمن الطيران ودقة المدى.",
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
