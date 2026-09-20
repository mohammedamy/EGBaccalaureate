import type { SolvedProblem } from '../../../types/curriculum';

export const egBacRoboticsCh3SolvedExamples: SolvedProblem[] = [
  {
    "id": "egbac_robotics_ch3_solved_1",
    "titleEn": "Solved Pedagogical Example 1: Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability",
    "titleAr": "مثال محلول نموذجي 1: قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF)",
    "questionEn": "[Solved Example 1] Quantitative engineering analysis for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 1] تحليل هندسي وحسابي تطبيقي لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF). احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion."
    ],
    "optionsAr": [
      "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "correctAnswerAr": "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "explanationEn": "Pedagogical Solution: For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "explanationAr": "الحل النموذجي المعتمد: لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_solved_2",
    "titleEn": "Solved Pedagogical Example 2: Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles",
    "titleAr": "مثال محلول نموذجي 2: شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen",
    "questionEn": "[Solved Example 2] Quantitative engineering analysis for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 2] تحليل هندسي وحسابي تطبيقي لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only."
    ],
    "optionsAr": [
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "correctAnswerAr": "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "explanationEn": "Pedagogical Solution: In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "explanationAr": "الحل النموذجي المعتمد: في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_solved_3",
    "titleEn": "Solved Pedagogical Example 3: Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration",
    "titleAr": "مثال محلول نموذجي 3: معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة",
    "questionEn": "[Solved Example 3] Quantitative engineering analysis for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 3] تحليل هندسي وحسابي تطبيقي لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
    "correctAnswerAr": "عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
    "explanationEn": "Pedagogical Solution: A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
    "explanationAr": "الحل النموذجي المعتمد: عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_solved_4",
    "titleEn": "Solved Pedagogical Example 4: Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers",
    "titleAr": "مثال محلول نموذجي 4: مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA",
    "questionEn": "[Solved Example 4] Quantitative engineering analysis for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 4] تحليل هندسي وحسابي تطبيقي لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$."
    ],
    "optionsAr": [
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
    "correctAnswerAr": "وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
    "explanationEn": "Pedagogical Solution: Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
    "explanationAr": "الحل النموذجي المعتمد: وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_solved_5",
    "titleEn": "Solved Pedagogical Example 5: Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability",
    "titleAr": "مثال محلول نموذجي 5: قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF)",
    "questionEn": "[Solved Example 5] Quantitative engineering analysis for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 5] تحليل هندسي وحسابي تطبيقي لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF). احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "correctAnswerAr": "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "explanationEn": "Pedagogical Solution: For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "explanationAr": "الحل النموذجي المعتمد: لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_solved_6",
    "titleEn": "Solved Pedagogical Example 6: Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles",
    "titleAr": "مثال محلول نموذجي 6: شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen",
    "questionEn": "[Solved Example 6] Quantitative engineering analysis for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 6] تحليل هندسي وحسابي تطبيقي لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "correctAnswerAr": "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "explanationEn": "Pedagogical Solution: In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "explanationAr": "الحل النموذجي المعتمد: في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_solved_7",
    "titleEn": "Solved Pedagogical Example 7: Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration",
    "titleAr": "مثال محلول نموذجي 7: معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة",
    "questionEn": "[Solved Example 7] Quantitative engineering analysis for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 7] تحليل هندسي وحسابي تطبيقي لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light."
    ],
    "optionsAr": [
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
    "correctAnswerAr": "عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
    "explanationEn": "Pedagogical Solution: A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
    "explanationAr": "الحل النموذجي المعتمد: عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_solved_8",
    "titleEn": "Solved Pedagogical Example 8: Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers",
    "titleAr": "مثال محلول نموذجي 8: مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA",
    "questionEn": "[Solved Example 8] Quantitative engineering analysis for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 8] تحليل هندسي وحسابي تطبيقي لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$."
    ],
    "optionsAr": [
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
    "correctAnswerAr": "وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
    "explanationEn": "Pedagogical Solution: Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
    "explanationAr": "الحل النموذجي المعتمد: وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_solved_9",
    "titleEn": "Solved Pedagogical Example 9: Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability",
    "titleAr": "مثال محلول نموذجي 9: قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF)",
    "questionEn": "[Solved Example 9] Quantitative engineering analysis for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 9] تحليل هندسي وحسابي تطبيقي لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF). احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "correctAnswerAr": "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "explanationEn": "Pedagogical Solution: For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "explanationAr": "الحل النموذجي المعتمد: لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_solved_10",
    "titleEn": "Solved Pedagogical Example 10: Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles",
    "titleAr": "مثال محلول نموذجي 10: شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen",
    "questionEn": "[Solved Example 10] Quantitative engineering analysis for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 10] تحليل هندسي وحسابي تطبيقي لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "correctAnswerAr": "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "explanationEn": "Pedagogical Solution: In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "explanationAr": "الحل النموذجي المعتمد: في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  }
];

export const egBacRoboticsCh3ExerciseProblems: SolvedProblem[] = [
  {
    "id": "egbac_robotics_ch3_exercise_1",
    "titleEn": "Practice Exercise 1: Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability",
    "titleAr": "تمرين تطبيقي 1: قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF)",
    "questionEn": "[Practice Exercise 1] Mechatronics Case Study on Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 1] دراسة حالة ميكاترونكس لـ قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF). احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages."
    ],
    "optionsAr": [
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "correctAnswerAr": "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "explanationEn": "Independent Verification: For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "explanationAr": "التحقق المستقل: لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (C) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
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
    "id": "egbac_robotics_ch3_exercise_2",
    "titleEn": "Practice Exercise 2: Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles",
    "titleAr": "تمرين تطبيقي 2: شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen",
    "questionEn": "[Practice Exercise 2] Mechatronics Case Study on Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 2] دراسة حالة ميكاترونكس لـ شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled."
    ],
    "optionsAr": [
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "correctAnswerAr": "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "explanationEn": "Independent Verification: In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "explanationAr": "التحقق المستقل: في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (D) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
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
    "id": "egbac_robotics_ch3_exercise_3",
    "titleEn": "Practice Exercise 3: Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration",
    "titleAr": "تمرين تطبيقي 3: معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة",
    "questionEn": "[Practice Exercise 3] Mechatronics Case Study on Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 3] دراسة حالة ميكاترونكس لـ معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
    "correctAnswerAr": "عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
    "explanationEn": "Independent Verification: A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
    "explanationAr": "التحقق المستقل: عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (A) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
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
    "id": "egbac_robotics_ch3_exercise_4",
    "titleEn": "Practice Exercise 4: Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers",
    "titleAr": "تمرين تطبيقي 4: مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA",
    "questionEn": "[Practice Exercise 4] Mechatronics Case Study on Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 4] دراسة حالة ميكاترونكس لـ مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only."
    ],
    "optionsAr": [
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
    "correctAnswerAr": "وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
    "explanationEn": "Independent Verification: Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
    "explanationAr": "التحقق المستقل: وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (B) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
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
    "id": "egbac_robotics_ch3_exercise_5",
    "titleEn": "Practice Exercise 5: Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability",
    "titleAr": "تمرين تطبيقي 5: قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF)",
    "questionEn": "[Practice Exercise 5] Mechatronics Case Study on Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 5] دراسة حالة ميكاترونكس لـ قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF). احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "correctAnswerAr": "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "explanationEn": "Independent Verification: For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "explanationAr": "التحقق المستقل: لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (C) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
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
    "id": "egbac_robotics_ch3_exercise_6",
    "titleEn": "Practice Exercise 6: Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles",
    "titleAr": "تمرين تطبيقي 6: شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen",
    "questionEn": "[Practice Exercise 6] Mechatronics Case Study on Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 6] دراسة حالة ميكاترونكس لـ شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "correctAnswerAr": "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "explanationEn": "Independent Verification: In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "explanationAr": "التحقق المستقل: في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (D) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
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
    "id": "egbac_robotics_ch3_exercise_7",
    "titleEn": "Practice Exercise 7: Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration",
    "titleAr": "تمرين تطبيقي 7: معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة",
    "questionEn": "[Practice Exercise 7] Mechatronics Case Study on Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 7] دراسة حالة ميكاترونكس لـ معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction."
    ],
    "optionsAr": [
      "عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
    "correctAnswerAr": "عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
    "explanationEn": "Independent Verification: A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
    "explanationAr": "التحقق المستقل: عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (A) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
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
    "id": "egbac_robotics_ch3_exercise_8",
    "titleEn": "Practice Exercise 8: Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers",
    "titleAr": "تمرين تطبيقي 8: مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA",
    "questionEn": "[Practice Exercise 8] Mechatronics Case Study on Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 8] دراسة حالة ميكاترونكس لـ مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices."
    ],
    "optionsAr": [
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
    "correctAnswerAr": "وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
    "explanationEn": "Independent Verification: Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
    "explanationAr": "التحقق المستقل: وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (B) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
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
    "id": "egbac_robotics_ch3_exercise_9",
    "titleEn": "Practice Exercise 9: Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability",
    "titleAr": "تمرين تطبيقي 9: قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF)",
    "questionEn": "[Practice Exercise 9] Mechatronics Case Study on Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 9] دراسة حالة ميكاترونكس لـ قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF). احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "correctAnswerAr": "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "explanationEn": "Independent Verification: For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "explanationAr": "التحقق المستقل: لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (C) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
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
    "id": "egbac_robotics_ch3_exercise_10",
    "titleEn": "Practice Exercise 10: Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles",
    "titleAr": "تمرين تطبيقي 10: شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen",
    "questionEn": "[Practice Exercise 10] Mechatronics Case Study on Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 10] دراسة حالة ميكاترونكس لـ شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "correctAnswerAr": "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "explanationEn": "Independent Verification: In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "explanationAr": "التحقق المستقل: في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (D) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
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
    "id": "egbac_robotics_ch3_exercise_11",
    "titleEn": "Practice Exercise 11: Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration",
    "titleAr": "تمرين تطبيقي 11: معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة",
    "questionEn": "[Practice Exercise 11] Mechatronics Case Study on Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 11] دراسة حالة ميكاترونكس لـ معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting."
    ],
    "optionsAr": [
      "عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
    "correctAnswerAr": "عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
    "explanationEn": "Independent Verification: A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
    "explanationAr": "التحقق المستقل: عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (A) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
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
    "id": "egbac_robotics_ch3_exercise_12",
    "titleEn": "Practice Exercise 12: Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers",
    "titleAr": "تمرين تطبيقي 12: مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA",
    "questionEn": "[Practice Exercise 12] Mechatronics Case Study on Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 12] دراسة حالة ميكاترونكس لـ مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
    "correctAnswerAr": "وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
    "explanationEn": "Independent Verification: Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
    "explanationAr": "التحقق المستقل: وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (B) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
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
    "id": "egbac_robotics_ch3_exercise_13",
    "titleEn": "Practice Exercise 13: Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability",
    "titleAr": "تمرين تطبيقي 13: قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF)",
    "questionEn": "[Practice Exercise 13] Mechatronics Case Study on Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 13] دراسة حالة ميكاترونكس لـ قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF). احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends."
    ],
    "optionsAr": [
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "correctAnswerAr": "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "explanationEn": "Independent Verification: For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "explanationAr": "التحقق المستقل: لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (C) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
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
    "id": "egbac_robotics_ch3_exercise_14",
    "titleEn": "Practice Exercise 14: Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles",
    "titleAr": "تمرين تطبيقي 14: شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen",
    "questionEn": "[Practice Exercise 14] Mechatronics Case Study on Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 14] دراسة حالة ميكاترونكس لـ شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled."
    ],
    "optionsAr": [
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "correctAnswerAr": "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "explanationEn": "Independent Verification: In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "explanationAr": "التحقق المستقل: في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (D) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
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
    "id": "egbac_robotics_ch3_exercise_15",
    "titleEn": "Practice Exercise 15: Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration",
    "titleAr": "تمرين تطبيقي 15: معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة",
    "questionEn": "[Practice Exercise 15] Mechatronics Case Study on Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 15] دراسة حالة ميكاترونكس لـ معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
    "correctAnswerAr": "عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
    "explanationEn": "Independent Verification: A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
    "explanationAr": "التحقق المستقل: عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (A) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
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
