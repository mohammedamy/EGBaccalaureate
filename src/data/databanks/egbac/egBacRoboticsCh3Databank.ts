import type { QuestionBank } from '../../../types/curriculum';

export const egBacRoboticsCh3Databank: QuestionBank = {
  easy: [
  {
    "id": "egbac_robotics_ch3_easy_1",
    "titleEn": "[EASY] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Review 1",
    "titleAr": "[مستوى أساسي] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - سؤال 1",
    "questionEn": "[Question 1] In the context of Egyptian STEM robotics and mechatronics regarding Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 1] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF)، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
    "correctAnswerAr": "يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
    "explanationEn": "Correct Principle: Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_2",
    "titleEn": "[EASY] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Review 2",
    "titleAr": "[مستوى أساسي] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - سؤال 2",
    "questionEn": "[Question 2] In the context of Egyptian STEM robotics and mechatronics regarding Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 2] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
    "correctAnswerAr": "يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
    "explanationEn": "Correct Principle: EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
    "explanationAr": "المبدأ العلمي الصحيح: يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_3",
    "titleEn": "[EASY] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Review 3",
    "titleAr": "[مستوى أساسي] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - سؤال 3",
    "questionEn": "[Question 3] In the context of Egyptian STEM robotics and mechatronics regarding Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 3] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Micro-ROS brings ROS2 to resource-constrained microcontrollers, allowing MCUs with tens of kilobytes of RAM to act as native first-class ROS2 computational graph nodes.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "ينقل نظام Micro-ROS إمكانيات ROS2 إلى المتحكمات الدقيقة محدودة الموارد، مما يتيح لمتحكمات بذاكرة كيلوبايتات العمل كعقد أصلية في مخطط ROS2.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Micro-ROS brings ROS2 to resource-constrained microcontrollers, allowing MCUs with tens of kilobytes of RAM to act as native first-class ROS2 computational graph nodes.",
    "correctAnswerAr": "ينقل نظام Micro-ROS إمكانيات ROS2 إلى المتحكمات الدقيقة محدودة الموارد، مما يتيح لمتحكمات بذاكرة كيلوبايتات العمل كعقد أصلية في مخطط ROS2.",
    "explanationEn": "Correct Principle: Micro-ROS brings ROS2 to resource-constrained microcontrollers, allowing MCUs with tens of kilobytes of RAM to act as native first-class ROS2 computational graph nodes.",
    "explanationAr": "المبدأ العلمي الصحيح: ينقل نظام Micro-ROS إمكانيات ROS2 إلى المتحكمات الدقيقة محدودة الموارد، مما يتيح لمتحكمات بذاكرة كيلوبايتات العمل كعقد أصلية في مخطط ROS2.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_4",
    "titleEn": "[EASY] Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers - Review 4",
    "titleAr": "[مستوى أساسي] مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA - سؤال 4",
    "questionEn": "[Question 4] In the context of Egyptian STEM robotics and mechatronics regarding Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 4] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Direct Memory Access (DMA) hardware controllers offload data transfers between communication peripherals (SPI/UART/ADC) and SRAM directly, consuming 0% CPU core cycles."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "تفرغ وحدات التحكم في الوصول المباشر للذاكرة (DMA) عمليات نقل البيانات بين المنافذ المحيطية وذاكرة SRAM مباشرة، دون استهلاك أي نبضة من المعالج المركزي."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Direct Memory Access (DMA) hardware controllers offload data transfers between communication peripherals (SPI/UART/ADC) and SRAM directly, consuming 0% CPU core cycles.",
    "correctAnswerAr": "تفرغ وحدات التحكم في الوصول المباشر للذاكرة (DMA) عمليات نقل البيانات بين المنافذ المحيطية وذاكرة SRAM مباشرة، دون استهلاك أي نبضة من المعالج المركزي.",
    "explanationEn": "Correct Principle: Direct Memory Access (DMA) hardware controllers offload data transfers between communication peripherals (SPI/UART/ADC) and SRAM directly, consuming 0% CPU core cycles.",
    "explanationAr": "المبدأ العلمي الصحيح: تفرغ وحدات التحكم في الوصول المباشر للذاكرة (DMA) عمليات نقل البيانات بين المنافذ المحيطية وذاكرة SRAM مباشرة، دون استهلاك أي نبضة من المعالج المركزي.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_5",
    "titleEn": "[EASY] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Review 5",
    "titleAr": "[مستوى أساسي] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - سؤال 5",
    "questionEn": "[Question 5] In the context of Egyptian STEM robotics and mechatronics regarding Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 5] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF)، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
    "correctAnswerAr": "يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
    "explanationEn": "Correct Principle: Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_6",
    "titleEn": "[EASY] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Review 6",
    "titleAr": "[مستوى أساسي] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - سؤال 6",
    "questionEn": "[Question 6] In the context of Egyptian STEM robotics and mechatronics regarding Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 6] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
    "correctAnswerAr": "يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
    "explanationEn": "Correct Principle: EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
    "explanationAr": "المبدأ العلمي الصحيح: يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_7",
    "titleEn": "[EASY] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Review 7",
    "titleAr": "[مستوى أساسي] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - سؤال 7",
    "questionEn": "[Question 7] In the context of Egyptian STEM robotics and mechatronics regarding Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 7] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "Micro-ROS brings ROS2 to resource-constrained microcontrollers, allowing MCUs with tens of kilobytes of RAM to act as native first-class ROS2 computational graph nodes.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "ينقل نظام Micro-ROS إمكانيات ROS2 إلى المتحكمات الدقيقة محدودة الموارد، مما يتيح لمتحكمات بذاكرة كيلوبايتات العمل كعقد أصلية في مخطط ROS2.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Micro-ROS brings ROS2 to resource-constrained microcontrollers, allowing MCUs with tens of kilobytes of RAM to act as native first-class ROS2 computational graph nodes.",
    "correctAnswerAr": "ينقل نظام Micro-ROS إمكانيات ROS2 إلى المتحكمات الدقيقة محدودة الموارد، مما يتيح لمتحكمات بذاكرة كيلوبايتات العمل كعقد أصلية في مخطط ROS2.",
    "explanationEn": "Correct Principle: Micro-ROS brings ROS2 to resource-constrained microcontrollers, allowing MCUs with tens of kilobytes of RAM to act as native first-class ROS2 computational graph nodes.",
    "explanationAr": "المبدأ العلمي الصحيح: ينقل نظام Micro-ROS إمكانيات ROS2 إلى المتحكمات الدقيقة محدودة الموارد، مما يتيح لمتحكمات بذاكرة كيلوبايتات العمل كعقد أصلية في مخطط ROS2.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_8",
    "titleEn": "[EASY] Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers - Review 8",
    "titleAr": "[مستوى أساسي] مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA - سؤال 8",
    "questionEn": "[Question 8] In the context of Egyptian STEM robotics and mechatronics regarding Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 8] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "Direct Memory Access (DMA) hardware controllers offload data transfers between communication peripherals (SPI/UART/ADC) and SRAM directly, consuming 0% CPU core cycles."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تفرغ وحدات التحكم في الوصول المباشر للذاكرة (DMA) عمليات نقل البيانات بين المنافذ المحيطية وذاكرة SRAM مباشرة، دون استهلاك أي نبضة من المعالج المركزي."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Direct Memory Access (DMA) hardware controllers offload data transfers between communication peripherals (SPI/UART/ADC) and SRAM directly, consuming 0% CPU core cycles.",
    "correctAnswerAr": "تفرغ وحدات التحكم في الوصول المباشر للذاكرة (DMA) عمليات نقل البيانات بين المنافذ المحيطية وذاكرة SRAM مباشرة، دون استهلاك أي نبضة من المعالج المركزي.",
    "explanationEn": "Correct Principle: Direct Memory Access (DMA) hardware controllers offload data transfers between communication peripherals (SPI/UART/ADC) and SRAM directly, consuming 0% CPU core cycles.",
    "explanationAr": "المبدأ العلمي الصحيح: تفرغ وحدات التحكم في الوصول المباشر للذاكرة (DMA) عمليات نقل البيانات بين المنافذ المحيطية وذاكرة SRAM مباشرة، دون استهلاك أي نبضة من المعالج المركزي.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_9",
    "titleEn": "[EASY] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Review 9",
    "titleAr": "[مستوى أساسي] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - سؤال 9",
    "questionEn": "[Question 9] In the context of Egyptian STEM robotics and mechatronics regarding Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 9] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF)، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
    "correctAnswerAr": "يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
    "explanationEn": "Correct Principle: Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_10",
    "titleEn": "[EASY] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Review 10",
    "titleAr": "[مستوى أساسي] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - سؤال 10",
    "questionEn": "[Question 10] In the context of Egyptian STEM robotics and mechatronics regarding Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 10] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
    "correctAnswerAr": "يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
    "explanationEn": "Correct Principle: EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
    "explanationAr": "المبدأ العلمي الصحيح: يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_11",
    "titleEn": "[EASY] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Review 11",
    "titleAr": "[مستوى أساسي] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - سؤال 11",
    "questionEn": "[Question 11] In the context of Egyptian STEM robotics and mechatronics regarding Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 11] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Micro-ROS brings ROS2 to resource-constrained microcontrollers, allowing MCUs with tens of kilobytes of RAM to act as native first-class ROS2 computational graph nodes.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "ينقل نظام Micro-ROS إمكانيات ROS2 إلى المتحكمات الدقيقة محدودة الموارد، مما يتيح لمتحكمات بذاكرة كيلوبايتات العمل كعقد أصلية في مخطط ROS2.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Micro-ROS brings ROS2 to resource-constrained microcontrollers, allowing MCUs with tens of kilobytes of RAM to act as native first-class ROS2 computational graph nodes.",
    "correctAnswerAr": "ينقل نظام Micro-ROS إمكانيات ROS2 إلى المتحكمات الدقيقة محدودة الموارد، مما يتيح لمتحكمات بذاكرة كيلوبايتات العمل كعقد أصلية في مخطط ROS2.",
    "explanationEn": "Correct Principle: Micro-ROS brings ROS2 to resource-constrained microcontrollers, allowing MCUs with tens of kilobytes of RAM to act as native first-class ROS2 computational graph nodes.",
    "explanationAr": "المبدأ العلمي الصحيح: ينقل نظام Micro-ROS إمكانيات ROS2 إلى المتحكمات الدقيقة محدودة الموارد، مما يتيح لمتحكمات بذاكرة كيلوبايتات العمل كعقد أصلية في مخطط ROS2.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_12",
    "titleEn": "[EASY] Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers - Review 12",
    "titleAr": "[مستوى أساسي] مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA - سؤال 12",
    "questionEn": "[Question 12] In the context of Egyptian STEM robotics and mechatronics regarding Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 12] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "Direct Memory Access (DMA) hardware controllers offload data transfers between communication peripherals (SPI/UART/ADC) and SRAM directly, consuming 0% CPU core cycles."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "تفرغ وحدات التحكم في الوصول المباشر للذاكرة (DMA) عمليات نقل البيانات بين المنافذ المحيطية وذاكرة SRAM مباشرة، دون استهلاك أي نبضة من المعالج المركزي."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Direct Memory Access (DMA) hardware controllers offload data transfers between communication peripherals (SPI/UART/ADC) and SRAM directly, consuming 0% CPU core cycles.",
    "correctAnswerAr": "تفرغ وحدات التحكم في الوصول المباشر للذاكرة (DMA) عمليات نقل البيانات بين المنافذ المحيطية وذاكرة SRAM مباشرة، دون استهلاك أي نبضة من المعالج المركزي.",
    "explanationEn": "Correct Principle: Direct Memory Access (DMA) hardware controllers offload data transfers between communication peripherals (SPI/UART/ADC) and SRAM directly, consuming 0% CPU core cycles.",
    "explanationAr": "المبدأ العلمي الصحيح: تفرغ وحدات التحكم في الوصول المباشر للذاكرة (DMA) عمليات نقل البيانات بين المنافذ المحيطية وذاكرة SRAM مباشرة، دون استهلاك أي نبضة من المعالج المركزي.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_13",
    "titleEn": "[EASY] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Review 13",
    "titleAr": "[مستوى أساسي] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - سؤال 13",
    "questionEn": "[Question 13] In the context of Egyptian STEM robotics and mechatronics regarding Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 13] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF)، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
    "correctAnswerAr": "يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
    "explanationEn": "Correct Principle: Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_14",
    "titleEn": "[EASY] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Review 14",
    "titleAr": "[مستوى أساسي] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - سؤال 14",
    "questionEn": "[Question 14] In the context of Egyptian STEM robotics and mechatronics regarding Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 14] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
    "correctAnswerAr": "يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
    "explanationEn": "Correct Principle: EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
    "explanationAr": "المبدأ العلمي الصحيح: يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_15",
    "titleEn": "[EASY] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Review 15",
    "titleAr": "[مستوى أساسي] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - سؤال 15",
    "questionEn": "[Question 15] In the context of Egyptian STEM robotics and mechatronics regarding Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 15] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Micro-ROS brings ROS2 to resource-constrained microcontrollers, allowing MCUs with tens of kilobytes of RAM to act as native first-class ROS2 computational graph nodes.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "ينقل نظام Micro-ROS إمكانيات ROS2 إلى المتحكمات الدقيقة محدودة الموارد، مما يتيح لمتحكمات بذاكرة كيلوبايتات العمل كعقد أصلية في مخطط ROS2.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Micro-ROS brings ROS2 to resource-constrained microcontrollers, allowing MCUs with tens of kilobytes of RAM to act as native first-class ROS2 computational graph nodes.",
    "correctAnswerAr": "ينقل نظام Micro-ROS إمكانيات ROS2 إلى المتحكمات الدقيقة محدودة الموارد، مما يتيح لمتحكمات بذاكرة كيلوبايتات العمل كعقد أصلية في مخطط ROS2.",
    "explanationEn": "Correct Principle: Micro-ROS brings ROS2 to resource-constrained microcontrollers, allowing MCUs with tens of kilobytes of RAM to act as native first-class ROS2 computational graph nodes.",
    "explanationAr": "المبدأ العلمي الصحيح: ينقل نظام Micro-ROS إمكانيات ROS2 إلى المتحكمات الدقيقة محدودة الموارد، مما يتيح لمتحكمات بذاكرة كيلوبايتات العمل كعقد أصلية في مخطط ROS2.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_16",
    "titleEn": "[EASY] Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers - Review 16",
    "titleAr": "[مستوى أساسي] مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA - سؤال 16",
    "questionEn": "[Question 16] In the context of Egyptian STEM robotics and mechatronics regarding Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 16] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Direct Memory Access (DMA) hardware controllers offload data transfers between communication peripherals (SPI/UART/ADC) and SRAM directly, consuming 0% CPU core cycles."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تفرغ وحدات التحكم في الوصول المباشر للذاكرة (DMA) عمليات نقل البيانات بين المنافذ المحيطية وذاكرة SRAM مباشرة، دون استهلاك أي نبضة من المعالج المركزي."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Direct Memory Access (DMA) hardware controllers offload data transfers between communication peripherals (SPI/UART/ADC) and SRAM directly, consuming 0% CPU core cycles.",
    "correctAnswerAr": "تفرغ وحدات التحكم في الوصول المباشر للذاكرة (DMA) عمليات نقل البيانات بين المنافذ المحيطية وذاكرة SRAM مباشرة، دون استهلاك أي نبضة من المعالج المركزي.",
    "explanationEn": "Correct Principle: Direct Memory Access (DMA) hardware controllers offload data transfers between communication peripherals (SPI/UART/ADC) and SRAM directly, consuming 0% CPU core cycles.",
    "explanationAr": "المبدأ العلمي الصحيح: تفرغ وحدات التحكم في الوصول المباشر للذاكرة (DMA) عمليات نقل البيانات بين المنافذ المحيطية وذاكرة SRAM مباشرة، دون استهلاك أي نبضة من المعالج المركزي.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_17",
    "titleEn": "[EASY] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Review 17",
    "titleAr": "[مستوى أساسي] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - سؤال 17",
    "questionEn": "[Question 17] In the context of Egyptian STEM robotics and mechatronics regarding Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 17] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF)، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
    "correctAnswerAr": "يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
    "explanationEn": "Correct Principle: Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_18",
    "titleEn": "[EASY] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Review 18",
    "titleAr": "[مستوى أساسي] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - سؤال 18",
    "questionEn": "[Question 18] In the context of Egyptian STEM robotics and mechatronics regarding Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 18] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
    "correctAnswerAr": "يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
    "explanationEn": "Correct Principle: EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
    "explanationAr": "المبدأ العلمي الصحيح: يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_19",
    "titleEn": "[EASY] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Review 19",
    "titleAr": "[مستوى أساسي] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - سؤال 19",
    "questionEn": "[Question 19] In the context of Egyptian STEM robotics and mechatronics regarding Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 19] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Micro-ROS brings ROS2 to resource-constrained microcontrollers, allowing MCUs with tens of kilobytes of RAM to act as native first-class ROS2 computational graph nodes.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "ينقل نظام Micro-ROS إمكانيات ROS2 إلى المتحكمات الدقيقة محدودة الموارد، مما يتيح لمتحكمات بذاكرة كيلوبايتات العمل كعقد أصلية في مخطط ROS2.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Micro-ROS brings ROS2 to resource-constrained microcontrollers, allowing MCUs with tens of kilobytes of RAM to act as native first-class ROS2 computational graph nodes.",
    "correctAnswerAr": "ينقل نظام Micro-ROS إمكانيات ROS2 إلى المتحكمات الدقيقة محدودة الموارد، مما يتيح لمتحكمات بذاكرة كيلوبايتات العمل كعقد أصلية في مخطط ROS2.",
    "explanationEn": "Correct Principle: Micro-ROS brings ROS2 to resource-constrained microcontrollers, allowing MCUs with tens of kilobytes of RAM to act as native first-class ROS2 computational graph nodes.",
    "explanationAr": "المبدأ العلمي الصحيح: ينقل نظام Micro-ROS إمكانيات ROS2 إلى المتحكمات الدقيقة محدودة الموارد، مما يتيح لمتحكمات بذاكرة كيلوبايتات العمل كعقد أصلية في مخطط ROS2.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_20",
    "titleEn": "[EASY] Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers - Review 20",
    "titleAr": "[مستوى أساسي] مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA - سؤال 20",
    "questionEn": "[Question 20] In the context of Egyptian STEM robotics and mechatronics regarding Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 20] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "Direct Memory Access (DMA) hardware controllers offload data transfers between communication peripherals (SPI/UART/ADC) and SRAM directly, consuming 0% CPU core cycles."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تفرغ وحدات التحكم في الوصول المباشر للذاكرة (DMA) عمليات نقل البيانات بين المنافذ المحيطية وذاكرة SRAM مباشرة، دون استهلاك أي نبضة من المعالج المركزي."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Direct Memory Access (DMA) hardware controllers offload data transfers between communication peripherals (SPI/UART/ADC) and SRAM directly, consuming 0% CPU core cycles.",
    "correctAnswerAr": "تفرغ وحدات التحكم في الوصول المباشر للذاكرة (DMA) عمليات نقل البيانات بين المنافذ المحيطية وذاكرة SRAM مباشرة، دون استهلاك أي نبضة من المعالج المركزي.",
    "explanationEn": "Correct Principle: Direct Memory Access (DMA) hardware controllers offload data transfers between communication peripherals (SPI/UART/ADC) and SRAM directly, consuming 0% CPU core cycles.",
    "explanationAr": "المبدأ العلمي الصحيح: تفرغ وحدات التحكم في الوصول المباشر للذاكرة (DMA) عمليات نقل البيانات بين المنافذ المحيطية وذاكرة SRAM مباشرة، دون استهلاك أي نبضة من المعالج المركزي.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_21",
    "titleEn": "[EASY] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Review 21",
    "titleAr": "[مستوى أساسي] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - سؤال 21",
    "questionEn": "[Question 21] In the context of Egyptian STEM robotics and mechatronics regarding Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 21] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF)، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
    "correctAnswerAr": "يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
    "explanationEn": "Correct Principle: Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_22",
    "titleEn": "[EASY] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Review 22",
    "titleAr": "[مستوى أساسي] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - سؤال 22",
    "questionEn": "[Question 22] In the context of Egyptian STEM robotics and mechatronics regarding Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 22] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
    "correctAnswerAr": "يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
    "explanationEn": "Correct Principle: EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
    "explanationAr": "المبدأ العلمي الصحيح: يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_23",
    "titleEn": "[EASY] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Review 23",
    "titleAr": "[مستوى أساسي] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - سؤال 23",
    "questionEn": "[Question 23] In the context of Egyptian STEM robotics and mechatronics regarding Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 23] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Micro-ROS brings ROS2 to resource-constrained microcontrollers, allowing MCUs with tens of kilobytes of RAM to act as native first-class ROS2 computational graph nodes.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "ينقل نظام Micro-ROS إمكانيات ROS2 إلى المتحكمات الدقيقة محدودة الموارد، مما يتيح لمتحكمات بذاكرة كيلوبايتات العمل كعقد أصلية في مخطط ROS2.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Micro-ROS brings ROS2 to resource-constrained microcontrollers, allowing MCUs with tens of kilobytes of RAM to act as native first-class ROS2 computational graph nodes.",
    "correctAnswerAr": "ينقل نظام Micro-ROS إمكانيات ROS2 إلى المتحكمات الدقيقة محدودة الموارد، مما يتيح لمتحكمات بذاكرة كيلوبايتات العمل كعقد أصلية في مخطط ROS2.",
    "explanationEn": "Correct Principle: Micro-ROS brings ROS2 to resource-constrained microcontrollers, allowing MCUs with tens of kilobytes of RAM to act as native first-class ROS2 computational graph nodes.",
    "explanationAr": "المبدأ العلمي الصحيح: ينقل نظام Micro-ROS إمكانيات ROS2 إلى المتحكمات الدقيقة محدودة الموارد، مما يتيح لمتحكمات بذاكرة كيلوبايتات العمل كعقد أصلية في مخطط ROS2.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_24",
    "titleEn": "[EASY] Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers - Review 24",
    "titleAr": "[مستوى أساسي] مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA - سؤال 24",
    "questionEn": "[Question 24] In the context of Egyptian STEM robotics and mechatronics regarding Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 24] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Direct Memory Access (DMA) hardware controllers offload data transfers between communication peripherals (SPI/UART/ADC) and SRAM directly, consuming 0% CPU core cycles."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "تفرغ وحدات التحكم في الوصول المباشر للذاكرة (DMA) عمليات نقل البيانات بين المنافذ المحيطية وذاكرة SRAM مباشرة، دون استهلاك أي نبضة من المعالج المركزي."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Direct Memory Access (DMA) hardware controllers offload data transfers between communication peripherals (SPI/UART/ADC) and SRAM directly, consuming 0% CPU core cycles.",
    "correctAnswerAr": "تفرغ وحدات التحكم في الوصول المباشر للذاكرة (DMA) عمليات نقل البيانات بين المنافذ المحيطية وذاكرة SRAM مباشرة، دون استهلاك أي نبضة من المعالج المركزي.",
    "explanationEn": "Correct Principle: Direct Memory Access (DMA) hardware controllers offload data transfers between communication peripherals (SPI/UART/ADC) and SRAM directly, consuming 0% CPU core cycles.",
    "explanationAr": "المبدأ العلمي الصحيح: تفرغ وحدات التحكم في الوصول المباشر للذاكرة (DMA) عمليات نقل البيانات بين المنافذ المحيطية وذاكرة SRAM مباشرة، دون استهلاك أي نبضة من المعالج المركزي.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_25",
    "titleEn": "[EASY] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Review 25",
    "titleAr": "[مستوى أساسي] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - سؤال 25",
    "questionEn": "[Question 25] In the context of Egyptian STEM robotics and mechatronics regarding Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 25] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF)، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
    "correctAnswerAr": "يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
    "explanationEn": "Correct Principle: Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_26",
    "titleEn": "[EASY] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Review 26",
    "titleAr": "[مستوى أساسي] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - سؤال 26",
    "questionEn": "[Question 26] In the context of Egyptian STEM robotics and mechatronics regarding Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 26] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
    "correctAnswerAr": "يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
    "explanationEn": "Correct Principle: EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
    "explanationAr": "المبدأ العلمي الصحيح: يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_27",
    "titleEn": "[EASY] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Review 27",
    "titleAr": "[مستوى أساسي] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - سؤال 27",
    "questionEn": "[Question 27] In the context of Egyptian STEM robotics and mechatronics regarding Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 27] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "Micro-ROS brings ROS2 to resource-constrained microcontrollers, allowing MCUs with tens of kilobytes of RAM to act as native first-class ROS2 computational graph nodes.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "ينقل نظام Micro-ROS إمكانيات ROS2 إلى المتحكمات الدقيقة محدودة الموارد، مما يتيح لمتحكمات بذاكرة كيلوبايتات العمل كعقد أصلية في مخطط ROS2.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Micro-ROS brings ROS2 to resource-constrained microcontrollers, allowing MCUs with tens of kilobytes of RAM to act as native first-class ROS2 computational graph nodes.",
    "correctAnswerAr": "ينقل نظام Micro-ROS إمكانيات ROS2 إلى المتحكمات الدقيقة محدودة الموارد، مما يتيح لمتحكمات بذاكرة كيلوبايتات العمل كعقد أصلية في مخطط ROS2.",
    "explanationEn": "Correct Principle: Micro-ROS brings ROS2 to resource-constrained microcontrollers, allowing MCUs with tens of kilobytes of RAM to act as native first-class ROS2 computational graph nodes.",
    "explanationAr": "المبدأ العلمي الصحيح: ينقل نظام Micro-ROS إمكانيات ROS2 إلى المتحكمات الدقيقة محدودة الموارد، مما يتيح لمتحكمات بذاكرة كيلوبايتات العمل كعقد أصلية في مخطط ROS2.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_28",
    "titleEn": "[EASY] Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers - Review 28",
    "titleAr": "[مستوى أساسي] مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA - سؤال 28",
    "questionEn": "[Question 28] In the context of Egyptian STEM robotics and mechatronics regarding Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 28] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "Direct Memory Access (DMA) hardware controllers offload data transfers between communication peripherals (SPI/UART/ADC) and SRAM directly, consuming 0% CPU core cycles."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تفرغ وحدات التحكم في الوصول المباشر للذاكرة (DMA) عمليات نقل البيانات بين المنافذ المحيطية وذاكرة SRAM مباشرة، دون استهلاك أي نبضة من المعالج المركزي."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Direct Memory Access (DMA) hardware controllers offload data transfers between communication peripherals (SPI/UART/ADC) and SRAM directly, consuming 0% CPU core cycles.",
    "correctAnswerAr": "تفرغ وحدات التحكم في الوصول المباشر للذاكرة (DMA) عمليات نقل البيانات بين المنافذ المحيطية وذاكرة SRAM مباشرة، دون استهلاك أي نبضة من المعالج المركزي.",
    "explanationEn": "Correct Principle: Direct Memory Access (DMA) hardware controllers offload data transfers between communication peripherals (SPI/UART/ADC) and SRAM directly, consuming 0% CPU core cycles.",
    "explanationAr": "المبدأ العلمي الصحيح: تفرغ وحدات التحكم في الوصول المباشر للذاكرة (DMA) عمليات نقل البيانات بين المنافذ المحيطية وذاكرة SRAM مباشرة، دون استهلاك أي نبضة من المعالج المركزي.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_29",
    "titleEn": "[EASY] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Review 29",
    "titleAr": "[مستوى أساسي] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - سؤال 29",
    "questionEn": "[Question 29] In the context of Egyptian STEM robotics and mechatronics regarding Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 29] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF)، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
    "correctAnswerAr": "يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
    "explanationEn": "Correct Principle: Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_30",
    "titleEn": "[EASY] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Review 30",
    "titleAr": "[مستوى أساسي] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - سؤال 30",
    "questionEn": "[Question 30] In the context of Egyptian STEM robotics and mechatronics regarding Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 30] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
    "correctAnswerAr": "يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
    "explanationEn": "Correct Principle: EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
    "explanationAr": "المبدأ العلمي الصحيح: يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_31",
    "titleEn": "[EASY] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Review 31",
    "titleAr": "[مستوى أساسي] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - سؤال 31",
    "questionEn": "[Question 31] In the context of Egyptian STEM robotics and mechatronics regarding Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 31] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Micro-ROS brings ROS2 to resource-constrained microcontrollers, allowing MCUs with tens of kilobytes of RAM to act as native first-class ROS2 computational graph nodes.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "ينقل نظام Micro-ROS إمكانيات ROS2 إلى المتحكمات الدقيقة محدودة الموارد، مما يتيح لمتحكمات بذاكرة كيلوبايتات العمل كعقد أصلية في مخطط ROS2.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Micro-ROS brings ROS2 to resource-constrained microcontrollers, allowing MCUs with tens of kilobytes of RAM to act as native first-class ROS2 computational graph nodes.",
    "correctAnswerAr": "ينقل نظام Micro-ROS إمكانيات ROS2 إلى المتحكمات الدقيقة محدودة الموارد، مما يتيح لمتحكمات بذاكرة كيلوبايتات العمل كعقد أصلية في مخطط ROS2.",
    "explanationEn": "Correct Principle: Micro-ROS brings ROS2 to resource-constrained microcontrollers, allowing MCUs with tens of kilobytes of RAM to act as native first-class ROS2 computational graph nodes.",
    "explanationAr": "المبدأ العلمي الصحيح: ينقل نظام Micro-ROS إمكانيات ROS2 إلى المتحكمات الدقيقة محدودة الموارد، مما يتيح لمتحكمات بذاكرة كيلوبايتات العمل كعقد أصلية في مخطط ROS2.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_32",
    "titleEn": "[EASY] Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers - Review 32",
    "titleAr": "[مستوى أساسي] مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA - سؤال 32",
    "questionEn": "[Question 32] In the context of Egyptian STEM robotics and mechatronics regarding Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 32] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "Direct Memory Access (DMA) hardware controllers offload data transfers between communication peripherals (SPI/UART/ADC) and SRAM directly, consuming 0% CPU core cycles."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "تفرغ وحدات التحكم في الوصول المباشر للذاكرة (DMA) عمليات نقل البيانات بين المنافذ المحيطية وذاكرة SRAM مباشرة، دون استهلاك أي نبضة من المعالج المركزي."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Direct Memory Access (DMA) hardware controllers offload data transfers between communication peripherals (SPI/UART/ADC) and SRAM directly, consuming 0% CPU core cycles.",
    "correctAnswerAr": "تفرغ وحدات التحكم في الوصول المباشر للذاكرة (DMA) عمليات نقل البيانات بين المنافذ المحيطية وذاكرة SRAM مباشرة، دون استهلاك أي نبضة من المعالج المركزي.",
    "explanationEn": "Correct Principle: Direct Memory Access (DMA) hardware controllers offload data transfers between communication peripherals (SPI/UART/ADC) and SRAM directly, consuming 0% CPU core cycles.",
    "explanationAr": "المبدأ العلمي الصحيح: تفرغ وحدات التحكم في الوصول المباشر للذاكرة (DMA) عمليات نقل البيانات بين المنافذ المحيطية وذاكرة SRAM مباشرة، دون استهلاك أي نبضة من المعالج المركزي.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_33",
    "titleEn": "[EASY] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Review 33",
    "titleAr": "[مستوى أساسي] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - سؤال 33",
    "questionEn": "[Question 33] In the context of Egyptian STEM robotics and mechatronics regarding Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 33] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF)، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
    "correctAnswerAr": "يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
    "explanationEn": "Correct Principle: Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_34",
    "titleEn": "[EASY] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Review 34",
    "titleAr": "[مستوى أساسي] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - سؤال 34",
    "questionEn": "[Question 34] In the context of Egyptian STEM robotics and mechatronics regarding Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 34] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
    "correctAnswerAr": "يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
    "explanationEn": "Correct Principle: EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
    "explanationAr": "المبدأ العلمي الصحيح: يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_35",
    "titleEn": "[EASY] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Review 35",
    "titleAr": "[مستوى أساسي] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - سؤال 35",
    "questionEn": "[Question 35] In the context of Egyptian STEM robotics and mechatronics regarding Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 35] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Micro-ROS brings ROS2 to resource-constrained microcontrollers, allowing MCUs with tens of kilobytes of RAM to act as native first-class ROS2 computational graph nodes.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "ينقل نظام Micro-ROS إمكانيات ROS2 إلى المتحكمات الدقيقة محدودة الموارد، مما يتيح لمتحكمات بذاكرة كيلوبايتات العمل كعقد أصلية في مخطط ROS2.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Micro-ROS brings ROS2 to resource-constrained microcontrollers, allowing MCUs with tens of kilobytes of RAM to act as native first-class ROS2 computational graph nodes.",
    "correctAnswerAr": "ينقل نظام Micro-ROS إمكانيات ROS2 إلى المتحكمات الدقيقة محدودة الموارد، مما يتيح لمتحكمات بذاكرة كيلوبايتات العمل كعقد أصلية في مخطط ROS2.",
    "explanationEn": "Correct Principle: Micro-ROS brings ROS2 to resource-constrained microcontrollers, allowing MCUs with tens of kilobytes of RAM to act as native first-class ROS2 computational graph nodes.",
    "explanationAr": "المبدأ العلمي الصحيح: ينقل نظام Micro-ROS إمكانيات ROS2 إلى المتحكمات الدقيقة محدودة الموارد، مما يتيح لمتحكمات بذاكرة كيلوبايتات العمل كعقد أصلية في مخطط ROS2.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_36",
    "titleEn": "[EASY] Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers - Review 36",
    "titleAr": "[مستوى أساسي] مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA - سؤال 36",
    "questionEn": "[Question 36] In the context of Egyptian STEM robotics and mechatronics regarding Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 36] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Direct Memory Access (DMA) hardware controllers offload data transfers between communication peripherals (SPI/UART/ADC) and SRAM directly, consuming 0% CPU core cycles."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تفرغ وحدات التحكم في الوصول المباشر للذاكرة (DMA) عمليات نقل البيانات بين المنافذ المحيطية وذاكرة SRAM مباشرة، دون استهلاك أي نبضة من المعالج المركزي."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Direct Memory Access (DMA) hardware controllers offload data transfers between communication peripherals (SPI/UART/ADC) and SRAM directly, consuming 0% CPU core cycles.",
    "correctAnswerAr": "تفرغ وحدات التحكم في الوصول المباشر للذاكرة (DMA) عمليات نقل البيانات بين المنافذ المحيطية وذاكرة SRAM مباشرة، دون استهلاك أي نبضة من المعالج المركزي.",
    "explanationEn": "Correct Principle: Direct Memory Access (DMA) hardware controllers offload data transfers between communication peripherals (SPI/UART/ADC) and SRAM directly, consuming 0% CPU core cycles.",
    "explanationAr": "المبدأ العلمي الصحيح: تفرغ وحدات التحكم في الوصول المباشر للذاكرة (DMA) عمليات نقل البيانات بين المنافذ المحيطية وذاكرة SRAM مباشرة، دون استهلاك أي نبضة من المعالج المركزي.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_37",
    "titleEn": "[EASY] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Review 37",
    "titleAr": "[مستوى أساسي] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - سؤال 37",
    "questionEn": "[Question 37] In the context of Egyptian STEM robotics and mechatronics regarding Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 37] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF)، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
    "correctAnswerAr": "يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
    "explanationEn": "Correct Principle: Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_38",
    "titleEn": "[EASY] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Review 38",
    "titleAr": "[مستوى أساسي] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - سؤال 38",
    "questionEn": "[Question 38] In the context of Egyptian STEM robotics and mechatronics regarding Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 38] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
    "correctAnswerAr": "يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
    "explanationEn": "Correct Principle: EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
    "explanationAr": "المبدأ العلمي الصحيح: يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_39",
    "titleEn": "[EASY] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Review 39",
    "titleAr": "[مستوى أساسي] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - سؤال 39",
    "questionEn": "[Question 39] In the context of Egyptian STEM robotics and mechatronics regarding Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 39] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Micro-ROS brings ROS2 to resource-constrained microcontrollers, allowing MCUs with tens of kilobytes of RAM to act as native first-class ROS2 computational graph nodes.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "ينقل نظام Micro-ROS إمكانيات ROS2 إلى المتحكمات الدقيقة محدودة الموارد، مما يتيح لمتحكمات بذاكرة كيلوبايتات العمل كعقد أصلية في مخطط ROS2.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Micro-ROS brings ROS2 to resource-constrained microcontrollers, allowing MCUs with tens of kilobytes of RAM to act as native first-class ROS2 computational graph nodes.",
    "correctAnswerAr": "ينقل نظام Micro-ROS إمكانيات ROS2 إلى المتحكمات الدقيقة محدودة الموارد، مما يتيح لمتحكمات بذاكرة كيلوبايتات العمل كعقد أصلية في مخطط ROS2.",
    "explanationEn": "Correct Principle: Micro-ROS brings ROS2 to resource-constrained microcontrollers, allowing MCUs with tens of kilobytes of RAM to act as native first-class ROS2 computational graph nodes.",
    "explanationAr": "المبدأ العلمي الصحيح: ينقل نظام Micro-ROS إمكانيات ROS2 إلى المتحكمات الدقيقة محدودة الموارد، مما يتيح لمتحكمات بذاكرة كيلوبايتات العمل كعقد أصلية في مخطط ROS2.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_40",
    "titleEn": "[EASY] Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers - Review 40",
    "titleAr": "[مستوى أساسي] مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA - سؤال 40",
    "questionEn": "[Question 40] In the context of Egyptian STEM robotics and mechatronics regarding Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 40] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "Direct Memory Access (DMA) hardware controllers offload data transfers between communication peripherals (SPI/UART/ADC) and SRAM directly, consuming 0% CPU core cycles."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تفرغ وحدات التحكم في الوصول المباشر للذاكرة (DMA) عمليات نقل البيانات بين المنافذ المحيطية وذاكرة SRAM مباشرة، دون استهلاك أي نبضة من المعالج المركزي."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Direct Memory Access (DMA) hardware controllers offload data transfers between communication peripherals (SPI/UART/ADC) and SRAM directly, consuming 0% CPU core cycles.",
    "correctAnswerAr": "تفرغ وحدات التحكم في الوصول المباشر للذاكرة (DMA) عمليات نقل البيانات بين المنافذ المحيطية وذاكرة SRAM مباشرة، دون استهلاك أي نبضة من المعالج المركزي.",
    "explanationEn": "Correct Principle: Direct Memory Access (DMA) hardware controllers offload data transfers between communication peripherals (SPI/UART/ADC) and SRAM directly, consuming 0% CPU core cycles.",
    "explanationAr": "المبدأ العلمي الصحيح: تفرغ وحدات التحكم في الوصول المباشر للذاكرة (DMA) عمليات نقل البيانات بين المنافذ المحيطية وذاكرة SRAM مباشرة، دون استهلاك أي نبضة من المعالج المركزي.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_41",
    "titleEn": "[EASY] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Review 41",
    "titleAr": "[مستوى أساسي] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - سؤال 41",
    "questionEn": "[Question 41] In the context of Egyptian STEM robotics and mechatronics regarding Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 41] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF)، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
    "correctAnswerAr": "يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
    "explanationEn": "Correct Principle: Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_42",
    "titleEn": "[EASY] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Review 42",
    "titleAr": "[مستوى أساسي] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - سؤال 42",
    "questionEn": "[Question 42] In the context of Egyptian STEM robotics and mechatronics regarding Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 42] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
    "correctAnswerAr": "يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
    "explanationEn": "Correct Principle: EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
    "explanationAr": "المبدأ العلمي الصحيح: يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_43",
    "titleEn": "[EASY] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Review 43",
    "titleAr": "[مستوى أساسي] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - سؤال 43",
    "questionEn": "[Question 43] In the context of Egyptian STEM robotics and mechatronics regarding Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 43] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Micro-ROS brings ROS2 to resource-constrained microcontrollers, allowing MCUs with tens of kilobytes of RAM to act as native first-class ROS2 computational graph nodes.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "ينقل نظام Micro-ROS إمكانيات ROS2 إلى المتحكمات الدقيقة محدودة الموارد، مما يتيح لمتحكمات بذاكرة كيلوبايتات العمل كعقد أصلية في مخطط ROS2.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Micro-ROS brings ROS2 to resource-constrained microcontrollers, allowing MCUs with tens of kilobytes of RAM to act as native first-class ROS2 computational graph nodes.",
    "correctAnswerAr": "ينقل نظام Micro-ROS إمكانيات ROS2 إلى المتحكمات الدقيقة محدودة الموارد، مما يتيح لمتحكمات بذاكرة كيلوبايتات العمل كعقد أصلية في مخطط ROS2.",
    "explanationEn": "Correct Principle: Micro-ROS brings ROS2 to resource-constrained microcontrollers, allowing MCUs with tens of kilobytes of RAM to act as native first-class ROS2 computational graph nodes.",
    "explanationAr": "المبدأ العلمي الصحيح: ينقل نظام Micro-ROS إمكانيات ROS2 إلى المتحكمات الدقيقة محدودة الموارد، مما يتيح لمتحكمات بذاكرة كيلوبايتات العمل كعقد أصلية في مخطط ROS2.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_44",
    "titleEn": "[EASY] Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers - Review 44",
    "titleAr": "[مستوى أساسي] مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA - سؤال 44",
    "questionEn": "[Question 44] In the context of Egyptian STEM robotics and mechatronics regarding Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 44] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Direct Memory Access (DMA) hardware controllers offload data transfers between communication peripherals (SPI/UART/ADC) and SRAM directly, consuming 0% CPU core cycles."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "تفرغ وحدات التحكم في الوصول المباشر للذاكرة (DMA) عمليات نقل البيانات بين المنافذ المحيطية وذاكرة SRAM مباشرة، دون استهلاك أي نبضة من المعالج المركزي."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Direct Memory Access (DMA) hardware controllers offload data transfers between communication peripherals (SPI/UART/ADC) and SRAM directly, consuming 0% CPU core cycles.",
    "correctAnswerAr": "تفرغ وحدات التحكم في الوصول المباشر للذاكرة (DMA) عمليات نقل البيانات بين المنافذ المحيطية وذاكرة SRAM مباشرة، دون استهلاك أي نبضة من المعالج المركزي.",
    "explanationEn": "Correct Principle: Direct Memory Access (DMA) hardware controllers offload data transfers between communication peripherals (SPI/UART/ADC) and SRAM directly, consuming 0% CPU core cycles.",
    "explanationAr": "المبدأ العلمي الصحيح: تفرغ وحدات التحكم في الوصول المباشر للذاكرة (DMA) عمليات نقل البيانات بين المنافذ المحيطية وذاكرة SRAM مباشرة، دون استهلاك أي نبضة من المعالج المركزي.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_45",
    "titleEn": "[EASY] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Review 45",
    "titleAr": "[مستوى أساسي] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - سؤال 45",
    "questionEn": "[Question 45] In the context of Egyptian STEM robotics and mechatronics regarding Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 45] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF)، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
    "correctAnswerAr": "يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
    "explanationEn": "Correct Principle: Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_46",
    "titleEn": "[EASY] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Review 46",
    "titleAr": "[مستوى أساسي] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - سؤال 46",
    "questionEn": "[Question 46] In the context of Egyptian STEM robotics and mechatronics regarding Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 46] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
    "correctAnswerAr": "يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
    "explanationEn": "Correct Principle: EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
    "explanationAr": "المبدأ العلمي الصحيح: يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_47",
    "titleEn": "[EASY] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Review 47",
    "titleAr": "[مستوى أساسي] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - سؤال 47",
    "questionEn": "[Question 47] In the context of Egyptian STEM robotics and mechatronics regarding Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 47] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "Micro-ROS brings ROS2 to resource-constrained microcontrollers, allowing MCUs with tens of kilobytes of RAM to act as native first-class ROS2 computational graph nodes.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "ينقل نظام Micro-ROS إمكانيات ROS2 إلى المتحكمات الدقيقة محدودة الموارد، مما يتيح لمتحكمات بذاكرة كيلوبايتات العمل كعقد أصلية في مخطط ROS2.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Micro-ROS brings ROS2 to resource-constrained microcontrollers, allowing MCUs with tens of kilobytes of RAM to act as native first-class ROS2 computational graph nodes.",
    "correctAnswerAr": "ينقل نظام Micro-ROS إمكانيات ROS2 إلى المتحكمات الدقيقة محدودة الموارد، مما يتيح لمتحكمات بذاكرة كيلوبايتات العمل كعقد أصلية في مخطط ROS2.",
    "explanationEn": "Correct Principle: Micro-ROS brings ROS2 to resource-constrained microcontrollers, allowing MCUs with tens of kilobytes of RAM to act as native first-class ROS2 computational graph nodes.",
    "explanationAr": "المبدأ العلمي الصحيح: ينقل نظام Micro-ROS إمكانيات ROS2 إلى المتحكمات الدقيقة محدودة الموارد، مما يتيح لمتحكمات بذاكرة كيلوبايتات العمل كعقد أصلية في مخطط ROS2.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_48",
    "titleEn": "[EASY] Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers - Review 48",
    "titleAr": "[مستوى أساسي] مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA - سؤال 48",
    "questionEn": "[Question 48] In the context of Egyptian STEM robotics and mechatronics regarding Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 48] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "Direct Memory Access (DMA) hardware controllers offload data transfers between communication peripherals (SPI/UART/ADC) and SRAM directly, consuming 0% CPU core cycles."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تفرغ وحدات التحكم في الوصول المباشر للذاكرة (DMA) عمليات نقل البيانات بين المنافذ المحيطية وذاكرة SRAM مباشرة، دون استهلاك أي نبضة من المعالج المركزي."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Direct Memory Access (DMA) hardware controllers offload data transfers between communication peripherals (SPI/UART/ADC) and SRAM directly, consuming 0% CPU core cycles.",
    "correctAnswerAr": "تفرغ وحدات التحكم في الوصول المباشر للذاكرة (DMA) عمليات نقل البيانات بين المنافذ المحيطية وذاكرة SRAM مباشرة، دون استهلاك أي نبضة من المعالج المركزي.",
    "explanationEn": "Correct Principle: Direct Memory Access (DMA) hardware controllers offload data transfers between communication peripherals (SPI/UART/ADC) and SRAM directly, consuming 0% CPU core cycles.",
    "explanationAr": "المبدأ العلمي الصحيح: تفرغ وحدات التحكم في الوصول المباشر للذاكرة (DMA) عمليات نقل البيانات بين المنافذ المحيطية وذاكرة SRAM مباشرة، دون استهلاك أي نبضة من المعالج المركزي.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_49",
    "titleEn": "[EASY] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Review 49",
    "titleAr": "[مستوى أساسي] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - سؤال 49",
    "questionEn": "[Question 49] In the context of Egyptian STEM robotics and mechatronics regarding Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 49] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF)، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
    "correctAnswerAr": "يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
    "explanationEn": "Correct Principle: Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_50",
    "titleEn": "[EASY] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Review 50",
    "titleAr": "[مستوى أساسي] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - سؤال 50",
    "questionEn": "[Question 50] In the context of Egyptian STEM robotics and mechatronics regarding Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 50] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
    "correctAnswerAr": "يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
    "explanationEn": "Correct Principle: EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
    "explanationAr": "المبدأ العلمي الصحيح: يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_51",
    "titleEn": "[EASY] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Review 51",
    "titleAr": "[مستوى أساسي] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - سؤال 51",
    "questionEn": "[Question 51] In the context of Egyptian STEM robotics and mechatronics regarding Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 51] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Micro-ROS brings ROS2 to resource-constrained microcontrollers, allowing MCUs with tens of kilobytes of RAM to act as native first-class ROS2 computational graph nodes.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "ينقل نظام Micro-ROS إمكانيات ROS2 إلى المتحكمات الدقيقة محدودة الموارد، مما يتيح لمتحكمات بذاكرة كيلوبايتات العمل كعقد أصلية في مخطط ROS2.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Micro-ROS brings ROS2 to resource-constrained microcontrollers, allowing MCUs with tens of kilobytes of RAM to act as native first-class ROS2 computational graph nodes.",
    "correctAnswerAr": "ينقل نظام Micro-ROS إمكانيات ROS2 إلى المتحكمات الدقيقة محدودة الموارد، مما يتيح لمتحكمات بذاكرة كيلوبايتات العمل كعقد أصلية في مخطط ROS2.",
    "explanationEn": "Correct Principle: Micro-ROS brings ROS2 to resource-constrained microcontrollers, allowing MCUs with tens of kilobytes of RAM to act as native first-class ROS2 computational graph nodes.",
    "explanationAr": "المبدأ العلمي الصحيح: ينقل نظام Micro-ROS إمكانيات ROS2 إلى المتحكمات الدقيقة محدودة الموارد، مما يتيح لمتحكمات بذاكرة كيلوبايتات العمل كعقد أصلية في مخطط ROS2.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_52",
    "titleEn": "[EASY] Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers - Review 52",
    "titleAr": "[مستوى أساسي] مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA - سؤال 52",
    "questionEn": "[Question 52] In the context of Egyptian STEM robotics and mechatronics regarding Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 52] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "Direct Memory Access (DMA) hardware controllers offload data transfers between communication peripherals (SPI/UART/ADC) and SRAM directly, consuming 0% CPU core cycles."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "تفرغ وحدات التحكم في الوصول المباشر للذاكرة (DMA) عمليات نقل البيانات بين المنافذ المحيطية وذاكرة SRAM مباشرة، دون استهلاك أي نبضة من المعالج المركزي."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Direct Memory Access (DMA) hardware controllers offload data transfers between communication peripherals (SPI/UART/ADC) and SRAM directly, consuming 0% CPU core cycles.",
    "correctAnswerAr": "تفرغ وحدات التحكم في الوصول المباشر للذاكرة (DMA) عمليات نقل البيانات بين المنافذ المحيطية وذاكرة SRAM مباشرة، دون استهلاك أي نبضة من المعالج المركزي.",
    "explanationEn": "Correct Principle: Direct Memory Access (DMA) hardware controllers offload data transfers between communication peripherals (SPI/UART/ADC) and SRAM directly, consuming 0% CPU core cycles.",
    "explanationAr": "المبدأ العلمي الصحيح: تفرغ وحدات التحكم في الوصول المباشر للذاكرة (DMA) عمليات نقل البيانات بين المنافذ المحيطية وذاكرة SRAM مباشرة، دون استهلاك أي نبضة من المعالج المركزي.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_53",
    "titleEn": "[EASY] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Review 53",
    "titleAr": "[مستوى أساسي] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - سؤال 53",
    "questionEn": "[Question 53] In the context of Egyptian STEM robotics and mechatronics regarding Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 53] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF)، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
    "correctAnswerAr": "يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
    "explanationEn": "Correct Principle: Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_54",
    "titleEn": "[EASY] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Review 54",
    "titleAr": "[مستوى أساسي] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - سؤال 54",
    "questionEn": "[Question 54] In the context of Egyptian STEM robotics and mechatronics regarding Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 54] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
    "correctAnswerAr": "يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
    "explanationEn": "Correct Principle: EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
    "explanationAr": "المبدأ العلمي الصحيح: يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_55",
    "titleEn": "[EASY] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Review 55",
    "titleAr": "[مستوى أساسي] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - سؤال 55",
    "questionEn": "[Question 55] In the context of Egyptian STEM robotics and mechatronics regarding Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 55] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Micro-ROS brings ROS2 to resource-constrained microcontrollers, allowing MCUs with tens of kilobytes of RAM to act as native first-class ROS2 computational graph nodes.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "ينقل نظام Micro-ROS إمكانيات ROS2 إلى المتحكمات الدقيقة محدودة الموارد، مما يتيح لمتحكمات بذاكرة كيلوبايتات العمل كعقد أصلية في مخطط ROS2.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Micro-ROS brings ROS2 to resource-constrained microcontrollers, allowing MCUs with tens of kilobytes of RAM to act as native first-class ROS2 computational graph nodes.",
    "correctAnswerAr": "ينقل نظام Micro-ROS إمكانيات ROS2 إلى المتحكمات الدقيقة محدودة الموارد، مما يتيح لمتحكمات بذاكرة كيلوبايتات العمل كعقد أصلية في مخطط ROS2.",
    "explanationEn": "Correct Principle: Micro-ROS brings ROS2 to resource-constrained microcontrollers, allowing MCUs with tens of kilobytes of RAM to act as native first-class ROS2 computational graph nodes.",
    "explanationAr": "المبدأ العلمي الصحيح: ينقل نظام Micro-ROS إمكانيات ROS2 إلى المتحكمات الدقيقة محدودة الموارد، مما يتيح لمتحكمات بذاكرة كيلوبايتات العمل كعقد أصلية في مخطط ROS2.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_56",
    "titleEn": "[EASY] Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers - Review 56",
    "titleAr": "[مستوى أساسي] مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA - سؤال 56",
    "questionEn": "[Question 56] In the context of Egyptian STEM robotics and mechatronics regarding Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 56] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Direct Memory Access (DMA) hardware controllers offload data transfers between communication peripherals (SPI/UART/ADC) and SRAM directly, consuming 0% CPU core cycles."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تفرغ وحدات التحكم في الوصول المباشر للذاكرة (DMA) عمليات نقل البيانات بين المنافذ المحيطية وذاكرة SRAM مباشرة، دون استهلاك أي نبضة من المعالج المركزي."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Direct Memory Access (DMA) hardware controllers offload data transfers between communication peripherals (SPI/UART/ADC) and SRAM directly, consuming 0% CPU core cycles.",
    "correctAnswerAr": "تفرغ وحدات التحكم في الوصول المباشر للذاكرة (DMA) عمليات نقل البيانات بين المنافذ المحيطية وذاكرة SRAM مباشرة، دون استهلاك أي نبضة من المعالج المركزي.",
    "explanationEn": "Correct Principle: Direct Memory Access (DMA) hardware controllers offload data transfers between communication peripherals (SPI/UART/ADC) and SRAM directly, consuming 0% CPU core cycles.",
    "explanationAr": "المبدأ العلمي الصحيح: تفرغ وحدات التحكم في الوصول المباشر للذاكرة (DMA) عمليات نقل البيانات بين المنافذ المحيطية وذاكرة SRAM مباشرة، دون استهلاك أي نبضة من المعالج المركزي.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_57",
    "titleEn": "[EASY] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Review 57",
    "titleAr": "[مستوى أساسي] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - سؤال 57",
    "questionEn": "[Question 57] In the context of Egyptian STEM robotics and mechatronics regarding Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 57] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF)، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
    "correctAnswerAr": "يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
    "explanationEn": "Correct Principle: Real-time schedulability analysis evaluates whether a set of periodic tasks can meet all hard temporal deadlines without deadline misses under worst-case execution times (WCET).",
    "explanationAr": "المبدأ العلمي الصحيح: يحدد تحليل قابلية الجدولة الفورية ما إذا كانت المهام الدورية ستفي بجميع مواعيدها النهائية الصارمة دون أي تأخير تحت أسوأ أزمنة تنفيذ محتملة (WCET).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "egbac_robotics_ch3_easy_58",
    "titleEn": "[EASY] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Review 58",
    "titleAr": "[مستوى أساسي] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - سؤال 58",
    "questionEn": "[Question 58] In the context of Egyptian STEM robotics and mechatronics regarding Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 58] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
    "correctAnswerAr": "يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
    "explanationEn": "Correct Principle: EtherCAT (Ethernet for Control Automation Technology) achieves microsecond-level synchronization by processing Ethernet frames on-the-fly through specialized slave ASIC controllers.",
    "explanationAr": "المبدأ العلمي الصحيح: يحقق بروتوكول EtherCAT تزامناً فائق الدقة على مستوى الميكروثانية بمعالجة إطارات الإيثرنت أثناء مرورها السريع عبر وحدات تحكم فرعية متخصصة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  }
],
  medium: [
  {
    "id": "egbac_robotics_ch3_med_1",
    "titleEn": "[MEDIUM] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Analysis 1",
    "titleAr": "[مستوى متوسط] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - تحليل 1",
    "questionEn": "[Question 1] When analyzing hardware-software integration and operational control for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability, identify the correct engineering relationship:",
    "questionAr": "[السؤال 1] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF)، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "correctAnswerAr": "تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "explanationEn": "Engineering Analysis: Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "explanationAr": "التحليل الهندسي المعتمد: تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_2",
    "titleEn": "[MEDIUM] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Analysis 2",
    "titleAr": "[مستوى متوسط] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - تحليل 2",
    "questionEn": "[Question 2] When analyzing hardware-software integration and operational control for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles, identify the correct engineering relationship:",
    "questionAr": "[السؤال 2] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data)."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data).",
    "correctAnswerAr": "يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية).",
    "explanationEn": "Engineering Analysis: CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data).",
    "explanationAr": "التحليل الهندسي المعتمد: يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_3",
    "titleEn": "[MEDIUM] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Analysis 3",
    "titleAr": "[مستوى متوسط] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - تحليل 3",
    "questionEn": "[Question 3] When analyzing hardware-software integration and operational control for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration, identify the correct engineering relationship:",
    "questionAr": "[السؤال 3] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
    "correctAnswerAr": "تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
    "explanationEn": "Engineering Analysis: The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
    "explanationAr": "التحليل الهندسي المعتمد: تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_4",
    "titleEn": "[MEDIUM] Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers - Analysis 4",
    "titleAr": "[مستوى متوسط] مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA - تحليل 4",
    "questionEn": "[Question 4] When analyzing hardware-software integration and operational control for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers, identify the correct engineering relationship:",
    "questionAr": "[السؤال 4] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Independent Watchdog Timers (IWDG) clocked by dedicated internal low-speed RC oscillators trigger a system reset if software fails to refresh the counter before timeout, preventing infinite lockups.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقوم مؤقتات المراقبة المستقلة (IWDG) ذات المذبذب المنفصل بإعادة تشغيل النظام فوراً إذا فشل البرنامج في تغذية المؤقت قبل نفاد الوقت، مانعة تجمد الروبوت.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Independent Watchdog Timers (IWDG) clocked by dedicated internal low-speed RC oscillators trigger a system reset if software fails to refresh the counter before timeout, preventing infinite lockups.",
    "correctAnswerAr": "تقوم مؤقتات المراقبة المستقلة (IWDG) ذات المذبذب المنفصل بإعادة تشغيل النظام فوراً إذا فشل البرنامج في تغذية المؤقت قبل نفاد الوقت، مانعة تجمد الروبوت.",
    "explanationEn": "Engineering Analysis: Independent Watchdog Timers (IWDG) clocked by dedicated internal low-speed RC oscillators trigger a system reset if software fails to refresh the counter before timeout, preventing infinite lockups.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مؤقتات المراقبة المستقلة (IWDG) ذات المذبذب المنفصل بإعادة تشغيل النظام فوراً إذا فشل البرنامج في تغذية المؤقت قبل نفاد الوقت، مانعة تجمد الروبوت.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_5",
    "titleEn": "[MEDIUM] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Analysis 5",
    "titleAr": "[مستوى متوسط] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - تحليل 5",
    "questionEn": "[Question 5] When analyzing hardware-software integration and operational control for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability, identify the correct engineering relationship:",
    "questionAr": "[السؤال 5] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF)، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "correctAnswerAr": "تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "explanationEn": "Engineering Analysis: Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "explanationAr": "التحليل الهندسي المعتمد: تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_6",
    "titleEn": "[MEDIUM] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Analysis 6",
    "titleAr": "[مستوى متوسط] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - تحليل 6",
    "questionEn": "[Question 6] When analyzing hardware-software integration and operational control for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles, identify the correct engineering relationship:",
    "questionAr": "[السؤال 6] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data)."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data).",
    "correctAnswerAr": "يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية).",
    "explanationEn": "Engineering Analysis: CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data).",
    "explanationAr": "التحليل الهندسي المعتمد: يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_7",
    "titleEn": "[MEDIUM] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Analysis 7",
    "titleAr": "[مستوى متوسط] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - تحليل 7",
    "questionEn": "[Question 7] When analyzing hardware-software integration and operational control for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration, identify the correct engineering relationship:",
    "questionAr": "[السؤال 7] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
    "correctAnswerAr": "تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
    "explanationEn": "Engineering Analysis: The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
    "explanationAr": "التحليل الهندسي المعتمد: تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_8",
    "titleEn": "[MEDIUM] Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers - Analysis 8",
    "titleAr": "[مستوى متوسط] مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA - تحليل 8",
    "questionEn": "[Question 8] When analyzing hardware-software integration and operational control for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers, identify the correct engineering relationship:",
    "questionAr": "[السؤال 8] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Independent Watchdog Timers (IWDG) clocked by dedicated internal low-speed RC oscillators trigger a system reset if software fails to refresh the counter before timeout, preventing infinite lockups.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "تقوم مؤقتات المراقبة المستقلة (IWDG) ذات المذبذب المنفصل بإعادة تشغيل النظام فوراً إذا فشل البرنامج في تغذية المؤقت قبل نفاد الوقت، مانعة تجمد الروبوت.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Independent Watchdog Timers (IWDG) clocked by dedicated internal low-speed RC oscillators trigger a system reset if software fails to refresh the counter before timeout, preventing infinite lockups.",
    "correctAnswerAr": "تقوم مؤقتات المراقبة المستقلة (IWDG) ذات المذبذب المنفصل بإعادة تشغيل النظام فوراً إذا فشل البرنامج في تغذية المؤقت قبل نفاد الوقت، مانعة تجمد الروبوت.",
    "explanationEn": "Engineering Analysis: Independent Watchdog Timers (IWDG) clocked by dedicated internal low-speed RC oscillators trigger a system reset if software fails to refresh the counter before timeout, preventing infinite lockups.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مؤقتات المراقبة المستقلة (IWDG) ذات المذبذب المنفصل بإعادة تشغيل النظام فوراً إذا فشل البرنامج في تغذية المؤقت قبل نفاد الوقت، مانعة تجمد الروبوت.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_9",
    "titleEn": "[MEDIUM] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Analysis 9",
    "titleAr": "[مستوى متوسط] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - تحليل 9",
    "questionEn": "[Question 9] When analyzing hardware-software integration and operational control for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability, identify the correct engineering relationship:",
    "questionAr": "[السؤال 9] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF)، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "correctAnswerAr": "تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "explanationEn": "Engineering Analysis: Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "explanationAr": "التحليل الهندسي المعتمد: تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_10",
    "titleEn": "[MEDIUM] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Analysis 10",
    "titleAr": "[مستوى متوسط] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - تحليل 10",
    "questionEn": "[Question 10] When analyzing hardware-software integration and operational control for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles, identify the correct engineering relationship:",
    "questionAr": "[السؤال 10] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data)."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data).",
    "correctAnswerAr": "يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية).",
    "explanationEn": "Engineering Analysis: CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data).",
    "explanationAr": "التحليل الهندسي المعتمد: يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_11",
    "titleEn": "[MEDIUM] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Analysis 11",
    "titleAr": "[مستوى متوسط] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - تحليل 11",
    "questionEn": "[Question 11] When analyzing hardware-software integration and operational control for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration, identify the correct engineering relationship:",
    "questionAr": "[السؤال 11] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
    "correctAnswerAr": "تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
    "explanationEn": "Engineering Analysis: The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
    "explanationAr": "التحليل الهندسي المعتمد: تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_12",
    "titleEn": "[MEDIUM] Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers - Analysis 12",
    "titleAr": "[مستوى متوسط] مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA - تحليل 12",
    "questionEn": "[Question 12] When analyzing hardware-software integration and operational control for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers, identify the correct engineering relationship:",
    "questionAr": "[السؤال 12] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Independent Watchdog Timers (IWDG) clocked by dedicated internal low-speed RC oscillators trigger a system reset if software fails to refresh the counter before timeout, preventing infinite lockups.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "تقوم مؤقتات المراقبة المستقلة (IWDG) ذات المذبذب المنفصل بإعادة تشغيل النظام فوراً إذا فشل البرنامج في تغذية المؤقت قبل نفاد الوقت، مانعة تجمد الروبوت.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Independent Watchdog Timers (IWDG) clocked by dedicated internal low-speed RC oscillators trigger a system reset if software fails to refresh the counter before timeout, preventing infinite lockups.",
    "correctAnswerAr": "تقوم مؤقتات المراقبة المستقلة (IWDG) ذات المذبذب المنفصل بإعادة تشغيل النظام فوراً إذا فشل البرنامج في تغذية المؤقت قبل نفاد الوقت، مانعة تجمد الروبوت.",
    "explanationEn": "Engineering Analysis: Independent Watchdog Timers (IWDG) clocked by dedicated internal low-speed RC oscillators trigger a system reset if software fails to refresh the counter before timeout, preventing infinite lockups.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مؤقتات المراقبة المستقلة (IWDG) ذات المذبذب المنفصل بإعادة تشغيل النظام فوراً إذا فشل البرنامج في تغذية المؤقت قبل نفاد الوقت، مانعة تجمد الروبوت.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_13",
    "titleEn": "[MEDIUM] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Analysis 13",
    "titleAr": "[مستوى متوسط] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - تحليل 13",
    "questionEn": "[Question 13] When analyzing hardware-software integration and operational control for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability, identify the correct engineering relationship:",
    "questionAr": "[السؤال 13] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF)، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "correctAnswerAr": "تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "explanationEn": "Engineering Analysis: Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "explanationAr": "التحليل الهندسي المعتمد: تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_14",
    "titleEn": "[MEDIUM] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Analysis 14",
    "titleAr": "[مستوى متوسط] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - تحليل 14",
    "questionEn": "[Question 14] When analyzing hardware-software integration and operational control for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles, identify the correct engineering relationship:",
    "questionAr": "[السؤال 14] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data)."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data).",
    "correctAnswerAr": "يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية).",
    "explanationEn": "Engineering Analysis: CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data).",
    "explanationAr": "التحليل الهندسي المعتمد: يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_15",
    "titleEn": "[MEDIUM] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Analysis 15",
    "titleAr": "[مستوى متوسط] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - تحليل 15",
    "questionEn": "[Question 15] When analyzing hardware-software integration and operational control for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration, identify the correct engineering relationship:",
    "questionAr": "[السؤال 15] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
    "correctAnswerAr": "تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
    "explanationEn": "Engineering Analysis: The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
    "explanationAr": "التحليل الهندسي المعتمد: تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_16",
    "titleEn": "[MEDIUM] Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers - Analysis 16",
    "titleAr": "[مستوى متوسط] مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA - تحليل 16",
    "questionEn": "[Question 16] When analyzing hardware-software integration and operational control for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers, identify the correct engineering relationship:",
    "questionAr": "[السؤال 16] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Independent Watchdog Timers (IWDG) clocked by dedicated internal low-speed RC oscillators trigger a system reset if software fails to refresh the counter before timeout, preventing infinite lockups.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقوم مؤقتات المراقبة المستقلة (IWDG) ذات المذبذب المنفصل بإعادة تشغيل النظام فوراً إذا فشل البرنامج في تغذية المؤقت قبل نفاد الوقت، مانعة تجمد الروبوت.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Independent Watchdog Timers (IWDG) clocked by dedicated internal low-speed RC oscillators trigger a system reset if software fails to refresh the counter before timeout, preventing infinite lockups.",
    "correctAnswerAr": "تقوم مؤقتات المراقبة المستقلة (IWDG) ذات المذبذب المنفصل بإعادة تشغيل النظام فوراً إذا فشل البرنامج في تغذية المؤقت قبل نفاد الوقت، مانعة تجمد الروبوت.",
    "explanationEn": "Engineering Analysis: Independent Watchdog Timers (IWDG) clocked by dedicated internal low-speed RC oscillators trigger a system reset if software fails to refresh the counter before timeout, preventing infinite lockups.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مؤقتات المراقبة المستقلة (IWDG) ذات المذبذب المنفصل بإعادة تشغيل النظام فوراً إذا فشل البرنامج في تغذية المؤقت قبل نفاد الوقت، مانعة تجمد الروبوت.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_17",
    "titleEn": "[MEDIUM] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Analysis 17",
    "titleAr": "[مستوى متوسط] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - تحليل 17",
    "questionEn": "[Question 17] When analyzing hardware-software integration and operational control for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability, identify the correct engineering relationship:",
    "questionAr": "[السؤال 17] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF)، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "correctAnswerAr": "تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "explanationEn": "Engineering Analysis: Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "explanationAr": "التحليل الهندسي المعتمد: تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_18",
    "titleEn": "[MEDIUM] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Analysis 18",
    "titleAr": "[مستوى متوسط] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - تحليل 18",
    "questionEn": "[Question 18] When analyzing hardware-software integration and operational control for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles, identify the correct engineering relationship:",
    "questionAr": "[السؤال 18] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data)."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data).",
    "correctAnswerAr": "يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية).",
    "explanationEn": "Engineering Analysis: CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data).",
    "explanationAr": "التحليل الهندسي المعتمد: يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_19",
    "titleEn": "[MEDIUM] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Analysis 19",
    "titleAr": "[مستوى متوسط] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - تحليل 19",
    "questionEn": "[Question 19] When analyzing hardware-software integration and operational control for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration, identify the correct engineering relationship:",
    "questionAr": "[السؤال 19] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
    "correctAnswerAr": "تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
    "explanationEn": "Engineering Analysis: The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
    "explanationAr": "التحليل الهندسي المعتمد: تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_20",
    "titleEn": "[MEDIUM] Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers - Analysis 20",
    "titleAr": "[مستوى متوسط] مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA - تحليل 20",
    "questionEn": "[Question 20] When analyzing hardware-software integration and operational control for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers, identify the correct engineering relationship:",
    "questionAr": "[السؤال 20] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Independent Watchdog Timers (IWDG) clocked by dedicated internal low-speed RC oscillators trigger a system reset if software fails to refresh the counter before timeout, preventing infinite lockups.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "تقوم مؤقتات المراقبة المستقلة (IWDG) ذات المذبذب المنفصل بإعادة تشغيل النظام فوراً إذا فشل البرنامج في تغذية المؤقت قبل نفاد الوقت، مانعة تجمد الروبوت.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Independent Watchdog Timers (IWDG) clocked by dedicated internal low-speed RC oscillators trigger a system reset if software fails to refresh the counter before timeout, preventing infinite lockups.",
    "correctAnswerAr": "تقوم مؤقتات المراقبة المستقلة (IWDG) ذات المذبذب المنفصل بإعادة تشغيل النظام فوراً إذا فشل البرنامج في تغذية المؤقت قبل نفاد الوقت، مانعة تجمد الروبوت.",
    "explanationEn": "Engineering Analysis: Independent Watchdog Timers (IWDG) clocked by dedicated internal low-speed RC oscillators trigger a system reset if software fails to refresh the counter before timeout, preventing infinite lockups.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مؤقتات المراقبة المستقلة (IWDG) ذات المذبذب المنفصل بإعادة تشغيل النظام فوراً إذا فشل البرنامج في تغذية المؤقت قبل نفاد الوقت، مانعة تجمد الروبوت.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_21",
    "titleEn": "[MEDIUM] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Analysis 21",
    "titleAr": "[مستوى متوسط] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - تحليل 21",
    "questionEn": "[Question 21] When analyzing hardware-software integration and operational control for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability, identify the correct engineering relationship:",
    "questionAr": "[السؤال 21] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF)، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "correctAnswerAr": "تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "explanationEn": "Engineering Analysis: Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "explanationAr": "التحليل الهندسي المعتمد: تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_22",
    "titleEn": "[MEDIUM] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Analysis 22",
    "titleAr": "[مستوى متوسط] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - تحليل 22",
    "questionEn": "[Question 22] When analyzing hardware-software integration and operational control for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles, identify the correct engineering relationship:",
    "questionAr": "[السؤال 22] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data)."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data).",
    "correctAnswerAr": "يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية).",
    "explanationEn": "Engineering Analysis: CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data).",
    "explanationAr": "التحليل الهندسي المعتمد: يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_23",
    "titleEn": "[MEDIUM] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Analysis 23",
    "titleAr": "[مستوى متوسط] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - تحليل 23",
    "questionEn": "[Question 23] When analyzing hardware-software integration and operational control for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration, identify the correct engineering relationship:",
    "questionAr": "[السؤال 23] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
    "correctAnswerAr": "تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
    "explanationEn": "Engineering Analysis: The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
    "explanationAr": "التحليل الهندسي المعتمد: تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_24",
    "titleEn": "[MEDIUM] Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers - Analysis 24",
    "titleAr": "[مستوى متوسط] مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA - تحليل 24",
    "questionEn": "[Question 24] When analyzing hardware-software integration and operational control for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers, identify the correct engineering relationship:",
    "questionAr": "[السؤال 24] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Independent Watchdog Timers (IWDG) clocked by dedicated internal low-speed RC oscillators trigger a system reset if software fails to refresh the counter before timeout, preventing infinite lockups.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "تقوم مؤقتات المراقبة المستقلة (IWDG) ذات المذبذب المنفصل بإعادة تشغيل النظام فوراً إذا فشل البرنامج في تغذية المؤقت قبل نفاد الوقت، مانعة تجمد الروبوت.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Independent Watchdog Timers (IWDG) clocked by dedicated internal low-speed RC oscillators trigger a system reset if software fails to refresh the counter before timeout, preventing infinite lockups.",
    "correctAnswerAr": "تقوم مؤقتات المراقبة المستقلة (IWDG) ذات المذبذب المنفصل بإعادة تشغيل النظام فوراً إذا فشل البرنامج في تغذية المؤقت قبل نفاد الوقت، مانعة تجمد الروبوت.",
    "explanationEn": "Engineering Analysis: Independent Watchdog Timers (IWDG) clocked by dedicated internal low-speed RC oscillators trigger a system reset if software fails to refresh the counter before timeout, preventing infinite lockups.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مؤقتات المراقبة المستقلة (IWDG) ذات المذبذب المنفصل بإعادة تشغيل النظام فوراً إذا فشل البرنامج في تغذية المؤقت قبل نفاد الوقت، مانعة تجمد الروبوت.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_25",
    "titleEn": "[MEDIUM] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Analysis 25",
    "titleAr": "[مستوى متوسط] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - تحليل 25",
    "questionEn": "[Question 25] When analyzing hardware-software integration and operational control for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability, identify the correct engineering relationship:",
    "questionAr": "[السؤال 25] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF)، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "correctAnswerAr": "تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "explanationEn": "Engineering Analysis: Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "explanationAr": "التحليل الهندسي المعتمد: تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_26",
    "titleEn": "[MEDIUM] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Analysis 26",
    "titleAr": "[مستوى متوسط] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - تحليل 26",
    "questionEn": "[Question 26] When analyzing hardware-software integration and operational control for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles, identify the correct engineering relationship:",
    "questionAr": "[السؤال 26] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data)."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data).",
    "correctAnswerAr": "يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية).",
    "explanationEn": "Engineering Analysis: CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data).",
    "explanationAr": "التحليل الهندسي المعتمد: يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_27",
    "titleEn": "[MEDIUM] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Analysis 27",
    "titleAr": "[مستوى متوسط] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - تحليل 27",
    "questionEn": "[Question 27] When analyzing hardware-software integration and operational control for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration, identify the correct engineering relationship:",
    "questionAr": "[السؤال 27] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
    "correctAnswerAr": "تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
    "explanationEn": "Engineering Analysis: The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
    "explanationAr": "التحليل الهندسي المعتمد: تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_28",
    "titleEn": "[MEDIUM] Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers - Analysis 28",
    "titleAr": "[مستوى متوسط] مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA - تحليل 28",
    "questionEn": "[Question 28] When analyzing hardware-software integration and operational control for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers, identify the correct engineering relationship:",
    "questionAr": "[السؤال 28] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Independent Watchdog Timers (IWDG) clocked by dedicated internal low-speed RC oscillators trigger a system reset if software fails to refresh the counter before timeout, preventing infinite lockups.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقوم مؤقتات المراقبة المستقلة (IWDG) ذات المذبذب المنفصل بإعادة تشغيل النظام فوراً إذا فشل البرنامج في تغذية المؤقت قبل نفاد الوقت، مانعة تجمد الروبوت.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Independent Watchdog Timers (IWDG) clocked by dedicated internal low-speed RC oscillators trigger a system reset if software fails to refresh the counter before timeout, preventing infinite lockups.",
    "correctAnswerAr": "تقوم مؤقتات المراقبة المستقلة (IWDG) ذات المذبذب المنفصل بإعادة تشغيل النظام فوراً إذا فشل البرنامج في تغذية المؤقت قبل نفاد الوقت، مانعة تجمد الروبوت.",
    "explanationEn": "Engineering Analysis: Independent Watchdog Timers (IWDG) clocked by dedicated internal low-speed RC oscillators trigger a system reset if software fails to refresh the counter before timeout, preventing infinite lockups.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مؤقتات المراقبة المستقلة (IWDG) ذات المذبذب المنفصل بإعادة تشغيل النظام فوراً إذا فشل البرنامج في تغذية المؤقت قبل نفاد الوقت، مانعة تجمد الروبوت.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_29",
    "titleEn": "[MEDIUM] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Analysis 29",
    "titleAr": "[مستوى متوسط] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - تحليل 29",
    "questionEn": "[Question 29] When analyzing hardware-software integration and operational control for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability, identify the correct engineering relationship:",
    "questionAr": "[السؤال 29] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF)، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "correctAnswerAr": "تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "explanationEn": "Engineering Analysis: Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "explanationAr": "التحليل الهندسي المعتمد: تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_30",
    "titleEn": "[MEDIUM] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Analysis 30",
    "titleAr": "[مستوى متوسط] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - تحليل 30",
    "questionEn": "[Question 30] When analyzing hardware-software integration and operational control for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles, identify the correct engineering relationship:",
    "questionAr": "[السؤال 30] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data)."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data).",
    "correctAnswerAr": "يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية).",
    "explanationEn": "Engineering Analysis: CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data).",
    "explanationAr": "التحليل الهندسي المعتمد: يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_31",
    "titleEn": "[MEDIUM] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Analysis 31",
    "titleAr": "[مستوى متوسط] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - تحليل 31",
    "questionEn": "[Question 31] When analyzing hardware-software integration and operational control for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration, identify the correct engineering relationship:",
    "questionAr": "[السؤال 31] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
    "correctAnswerAr": "تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
    "explanationEn": "Engineering Analysis: The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
    "explanationAr": "التحليل الهندسي المعتمد: تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_32",
    "titleEn": "[MEDIUM] Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers - Analysis 32",
    "titleAr": "[مستوى متوسط] مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA - تحليل 32",
    "questionEn": "[Question 32] When analyzing hardware-software integration and operational control for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers, identify the correct engineering relationship:",
    "questionAr": "[السؤال 32] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Independent Watchdog Timers (IWDG) clocked by dedicated internal low-speed RC oscillators trigger a system reset if software fails to refresh the counter before timeout, preventing infinite lockups.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "تقوم مؤقتات المراقبة المستقلة (IWDG) ذات المذبذب المنفصل بإعادة تشغيل النظام فوراً إذا فشل البرنامج في تغذية المؤقت قبل نفاد الوقت، مانعة تجمد الروبوت.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Independent Watchdog Timers (IWDG) clocked by dedicated internal low-speed RC oscillators trigger a system reset if software fails to refresh the counter before timeout, preventing infinite lockups.",
    "correctAnswerAr": "تقوم مؤقتات المراقبة المستقلة (IWDG) ذات المذبذب المنفصل بإعادة تشغيل النظام فوراً إذا فشل البرنامج في تغذية المؤقت قبل نفاد الوقت، مانعة تجمد الروبوت.",
    "explanationEn": "Engineering Analysis: Independent Watchdog Timers (IWDG) clocked by dedicated internal low-speed RC oscillators trigger a system reset if software fails to refresh the counter before timeout, preventing infinite lockups.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مؤقتات المراقبة المستقلة (IWDG) ذات المذبذب المنفصل بإعادة تشغيل النظام فوراً إذا فشل البرنامج في تغذية المؤقت قبل نفاد الوقت، مانعة تجمد الروبوت.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_33",
    "titleEn": "[MEDIUM] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Analysis 33",
    "titleAr": "[مستوى متوسط] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - تحليل 33",
    "questionEn": "[Question 33] When analyzing hardware-software integration and operational control for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability, identify the correct engineering relationship:",
    "questionAr": "[السؤال 33] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF)، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "correctAnswerAr": "تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "explanationEn": "Engineering Analysis: Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "explanationAr": "التحليل الهندسي المعتمد: تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_34",
    "titleEn": "[MEDIUM] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Analysis 34",
    "titleAr": "[مستوى متوسط] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - تحليل 34",
    "questionEn": "[Question 34] When analyzing hardware-software integration and operational control for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles, identify the correct engineering relationship:",
    "questionAr": "[السؤال 34] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data)."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data).",
    "correctAnswerAr": "يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية).",
    "explanationEn": "Engineering Analysis: CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data).",
    "explanationAr": "التحليل الهندسي المعتمد: يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_35",
    "titleEn": "[MEDIUM] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Analysis 35",
    "titleAr": "[مستوى متوسط] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - تحليل 35",
    "questionEn": "[Question 35] When analyzing hardware-software integration and operational control for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration, identify the correct engineering relationship:",
    "questionAr": "[السؤال 35] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
    "correctAnswerAr": "تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
    "explanationEn": "Engineering Analysis: The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
    "explanationAr": "التحليل الهندسي المعتمد: تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_36",
    "titleEn": "[MEDIUM] Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers - Analysis 36",
    "titleAr": "[مستوى متوسط] مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA - تحليل 36",
    "questionEn": "[Question 36] When analyzing hardware-software integration and operational control for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers, identify the correct engineering relationship:",
    "questionAr": "[السؤال 36] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Independent Watchdog Timers (IWDG) clocked by dedicated internal low-speed RC oscillators trigger a system reset if software fails to refresh the counter before timeout, preventing infinite lockups.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "تقوم مؤقتات المراقبة المستقلة (IWDG) ذات المذبذب المنفصل بإعادة تشغيل النظام فوراً إذا فشل البرنامج في تغذية المؤقت قبل نفاد الوقت، مانعة تجمد الروبوت.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Independent Watchdog Timers (IWDG) clocked by dedicated internal low-speed RC oscillators trigger a system reset if software fails to refresh the counter before timeout, preventing infinite lockups.",
    "correctAnswerAr": "تقوم مؤقتات المراقبة المستقلة (IWDG) ذات المذبذب المنفصل بإعادة تشغيل النظام فوراً إذا فشل البرنامج في تغذية المؤقت قبل نفاد الوقت، مانعة تجمد الروبوت.",
    "explanationEn": "Engineering Analysis: Independent Watchdog Timers (IWDG) clocked by dedicated internal low-speed RC oscillators trigger a system reset if software fails to refresh the counter before timeout, preventing infinite lockups.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مؤقتات المراقبة المستقلة (IWDG) ذات المذبذب المنفصل بإعادة تشغيل النظام فوراً إذا فشل البرنامج في تغذية المؤقت قبل نفاد الوقت، مانعة تجمد الروبوت.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_37",
    "titleEn": "[MEDIUM] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Analysis 37",
    "titleAr": "[مستوى متوسط] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - تحليل 37",
    "questionEn": "[Question 37] When analyzing hardware-software integration and operational control for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability, identify the correct engineering relationship:",
    "questionAr": "[السؤال 37] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF)، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "correctAnswerAr": "تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "explanationEn": "Engineering Analysis: Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "explanationAr": "التحليل الهندسي المعتمد: تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_38",
    "titleEn": "[MEDIUM] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Analysis 38",
    "titleAr": "[مستوى متوسط] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - تحليل 38",
    "questionEn": "[Question 38] When analyzing hardware-software integration and operational control for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles, identify the correct engineering relationship:",
    "questionAr": "[السؤال 38] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data)."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data).",
    "correctAnswerAr": "يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية).",
    "explanationEn": "Engineering Analysis: CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data).",
    "explanationAr": "التحليل الهندسي المعتمد: يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_39",
    "titleEn": "[MEDIUM] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Analysis 39",
    "titleAr": "[مستوى متوسط] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - تحليل 39",
    "questionEn": "[Question 39] When analyzing hardware-software integration and operational control for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration, identify the correct engineering relationship:",
    "questionAr": "[السؤال 39] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
    "correctAnswerAr": "تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
    "explanationEn": "Engineering Analysis: The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
    "explanationAr": "التحليل الهندسي المعتمد: تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_40",
    "titleEn": "[MEDIUM] Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers - Analysis 40",
    "titleAr": "[مستوى متوسط] مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA - تحليل 40",
    "questionEn": "[Question 40] When analyzing hardware-software integration and operational control for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers, identify the correct engineering relationship:",
    "questionAr": "[السؤال 40] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Independent Watchdog Timers (IWDG) clocked by dedicated internal low-speed RC oscillators trigger a system reset if software fails to refresh the counter before timeout, preventing infinite lockups.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقوم مؤقتات المراقبة المستقلة (IWDG) ذات المذبذب المنفصل بإعادة تشغيل النظام فوراً إذا فشل البرنامج في تغذية المؤقت قبل نفاد الوقت، مانعة تجمد الروبوت.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Independent Watchdog Timers (IWDG) clocked by dedicated internal low-speed RC oscillators trigger a system reset if software fails to refresh the counter before timeout, preventing infinite lockups.",
    "correctAnswerAr": "تقوم مؤقتات المراقبة المستقلة (IWDG) ذات المذبذب المنفصل بإعادة تشغيل النظام فوراً إذا فشل البرنامج في تغذية المؤقت قبل نفاد الوقت، مانعة تجمد الروبوت.",
    "explanationEn": "Engineering Analysis: Independent Watchdog Timers (IWDG) clocked by dedicated internal low-speed RC oscillators trigger a system reset if software fails to refresh the counter before timeout, preventing infinite lockups.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مؤقتات المراقبة المستقلة (IWDG) ذات المذبذب المنفصل بإعادة تشغيل النظام فوراً إذا فشل البرنامج في تغذية المؤقت قبل نفاد الوقت، مانعة تجمد الروبوت.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_41",
    "titleEn": "[MEDIUM] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Analysis 41",
    "titleAr": "[مستوى متوسط] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - تحليل 41",
    "questionEn": "[Question 41] When analyzing hardware-software integration and operational control for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability, identify the correct engineering relationship:",
    "questionAr": "[السؤال 41] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF)، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "correctAnswerAr": "تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "explanationEn": "Engineering Analysis: Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "explanationAr": "التحليل الهندسي المعتمد: تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_42",
    "titleEn": "[MEDIUM] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Analysis 42",
    "titleAr": "[مستوى متوسط] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - تحليل 42",
    "questionEn": "[Question 42] When analyzing hardware-software integration and operational control for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles, identify the correct engineering relationship:",
    "questionAr": "[السؤال 42] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data)."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data).",
    "correctAnswerAr": "يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية).",
    "explanationEn": "Engineering Analysis: CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data).",
    "explanationAr": "التحليل الهندسي المعتمد: يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_43",
    "titleEn": "[MEDIUM] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Analysis 43",
    "titleAr": "[مستوى متوسط] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - تحليل 43",
    "questionEn": "[Question 43] When analyzing hardware-software integration and operational control for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration, identify the correct engineering relationship:",
    "questionAr": "[السؤال 43] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
    "correctAnswerAr": "تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
    "explanationEn": "Engineering Analysis: The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
    "explanationAr": "التحليل الهندسي المعتمد: تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_44",
    "titleEn": "[MEDIUM] Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers - Analysis 44",
    "titleAr": "[مستوى متوسط] مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA - تحليل 44",
    "questionEn": "[Question 44] When analyzing hardware-software integration and operational control for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers, identify the correct engineering relationship:",
    "questionAr": "[السؤال 44] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Independent Watchdog Timers (IWDG) clocked by dedicated internal low-speed RC oscillators trigger a system reset if software fails to refresh the counter before timeout, preventing infinite lockups.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "تقوم مؤقتات المراقبة المستقلة (IWDG) ذات المذبذب المنفصل بإعادة تشغيل النظام فوراً إذا فشل البرنامج في تغذية المؤقت قبل نفاد الوقت، مانعة تجمد الروبوت.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Independent Watchdog Timers (IWDG) clocked by dedicated internal low-speed RC oscillators trigger a system reset if software fails to refresh the counter before timeout, preventing infinite lockups.",
    "correctAnswerAr": "تقوم مؤقتات المراقبة المستقلة (IWDG) ذات المذبذب المنفصل بإعادة تشغيل النظام فوراً إذا فشل البرنامج في تغذية المؤقت قبل نفاد الوقت، مانعة تجمد الروبوت.",
    "explanationEn": "Engineering Analysis: Independent Watchdog Timers (IWDG) clocked by dedicated internal low-speed RC oscillators trigger a system reset if software fails to refresh the counter before timeout, preventing infinite lockups.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مؤقتات المراقبة المستقلة (IWDG) ذات المذبذب المنفصل بإعادة تشغيل النظام فوراً إذا فشل البرنامج في تغذية المؤقت قبل نفاد الوقت، مانعة تجمد الروبوت.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_45",
    "titleEn": "[MEDIUM] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Analysis 45",
    "titleAr": "[مستوى متوسط] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - تحليل 45",
    "questionEn": "[Question 45] When analyzing hardware-software integration and operational control for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability, identify the correct engineering relationship:",
    "questionAr": "[السؤال 45] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF)، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "correctAnswerAr": "تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "explanationEn": "Engineering Analysis: Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "explanationAr": "التحليل الهندسي المعتمد: تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_46",
    "titleEn": "[MEDIUM] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Analysis 46",
    "titleAr": "[مستوى متوسط] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - تحليل 46",
    "questionEn": "[Question 46] When analyzing hardware-software integration and operational control for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles, identify the correct engineering relationship:",
    "questionAr": "[السؤال 46] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data)."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data).",
    "correctAnswerAr": "يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية).",
    "explanationEn": "Engineering Analysis: CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data).",
    "explanationAr": "التحليل الهندسي المعتمد: يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_47",
    "titleEn": "[MEDIUM] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Analysis 47",
    "titleAr": "[مستوى متوسط] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - تحليل 47",
    "questionEn": "[Question 47] When analyzing hardware-software integration and operational control for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration, identify the correct engineering relationship:",
    "questionAr": "[السؤال 47] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
    "correctAnswerAr": "تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
    "explanationEn": "Engineering Analysis: The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
    "explanationAr": "التحليل الهندسي المعتمد: تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_48",
    "titleEn": "[MEDIUM] Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers - Analysis 48",
    "titleAr": "[مستوى متوسط] مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA - تحليل 48",
    "questionEn": "[Question 48] When analyzing hardware-software integration and operational control for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers, identify the correct engineering relationship:",
    "questionAr": "[السؤال 48] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Independent Watchdog Timers (IWDG) clocked by dedicated internal low-speed RC oscillators trigger a system reset if software fails to refresh the counter before timeout, preventing infinite lockups.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "تقوم مؤقتات المراقبة المستقلة (IWDG) ذات المذبذب المنفصل بإعادة تشغيل النظام فوراً إذا فشل البرنامج في تغذية المؤقت قبل نفاد الوقت، مانعة تجمد الروبوت.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Independent Watchdog Timers (IWDG) clocked by dedicated internal low-speed RC oscillators trigger a system reset if software fails to refresh the counter before timeout, preventing infinite lockups.",
    "correctAnswerAr": "تقوم مؤقتات المراقبة المستقلة (IWDG) ذات المذبذب المنفصل بإعادة تشغيل النظام فوراً إذا فشل البرنامج في تغذية المؤقت قبل نفاد الوقت، مانعة تجمد الروبوت.",
    "explanationEn": "Engineering Analysis: Independent Watchdog Timers (IWDG) clocked by dedicated internal low-speed RC oscillators trigger a system reset if software fails to refresh the counter before timeout, preventing infinite lockups.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مؤقتات المراقبة المستقلة (IWDG) ذات المذبذب المنفصل بإعادة تشغيل النظام فوراً إذا فشل البرنامج في تغذية المؤقت قبل نفاد الوقت، مانعة تجمد الروبوت.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_49",
    "titleEn": "[MEDIUM] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Analysis 49",
    "titleAr": "[مستوى متوسط] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - تحليل 49",
    "questionEn": "[Question 49] When analyzing hardware-software integration and operational control for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability, identify the correct engineering relationship:",
    "questionAr": "[السؤال 49] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF)، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "correctAnswerAr": "تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "explanationEn": "Engineering Analysis: Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "explanationAr": "التحليل الهندسي المعتمد: تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_50",
    "titleEn": "[MEDIUM] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Analysis 50",
    "titleAr": "[مستوى متوسط] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - تحليل 50",
    "questionEn": "[Question 50] When analyzing hardware-software integration and operational control for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles, identify the correct engineering relationship:",
    "questionAr": "[السؤال 50] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data)."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data).",
    "correctAnswerAr": "يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية).",
    "explanationEn": "Engineering Analysis: CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data).",
    "explanationAr": "التحليل الهندسي المعتمد: يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_51",
    "titleEn": "[MEDIUM] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Analysis 51",
    "titleAr": "[مستوى متوسط] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - تحليل 51",
    "questionEn": "[Question 51] When analyzing hardware-software integration and operational control for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration, identify the correct engineering relationship:",
    "questionAr": "[السؤال 51] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
    "correctAnswerAr": "تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
    "explanationEn": "Engineering Analysis: The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
    "explanationAr": "التحليل الهندسي المعتمد: تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_52",
    "titleEn": "[MEDIUM] Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers - Analysis 52",
    "titleAr": "[مستوى متوسط] مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA - تحليل 52",
    "questionEn": "[Question 52] When analyzing hardware-software integration and operational control for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers, identify the correct engineering relationship:",
    "questionAr": "[السؤال 52] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Independent Watchdog Timers (IWDG) clocked by dedicated internal low-speed RC oscillators trigger a system reset if software fails to refresh the counter before timeout, preventing infinite lockups.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقوم مؤقتات المراقبة المستقلة (IWDG) ذات المذبذب المنفصل بإعادة تشغيل النظام فوراً إذا فشل البرنامج في تغذية المؤقت قبل نفاد الوقت، مانعة تجمد الروبوت.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Independent Watchdog Timers (IWDG) clocked by dedicated internal low-speed RC oscillators trigger a system reset if software fails to refresh the counter before timeout, preventing infinite lockups.",
    "correctAnswerAr": "تقوم مؤقتات المراقبة المستقلة (IWDG) ذات المذبذب المنفصل بإعادة تشغيل النظام فوراً إذا فشل البرنامج في تغذية المؤقت قبل نفاد الوقت، مانعة تجمد الروبوت.",
    "explanationEn": "Engineering Analysis: Independent Watchdog Timers (IWDG) clocked by dedicated internal low-speed RC oscillators trigger a system reset if software fails to refresh the counter before timeout, preventing infinite lockups.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مؤقتات المراقبة المستقلة (IWDG) ذات المذبذب المنفصل بإعادة تشغيل النظام فوراً إذا فشل البرنامج في تغذية المؤقت قبل نفاد الوقت، مانعة تجمد الروبوت.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_53",
    "titleEn": "[MEDIUM] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Analysis 53",
    "titleAr": "[مستوى متوسط] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - تحليل 53",
    "questionEn": "[Question 53] When analyzing hardware-software integration and operational control for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability, identify the correct engineering relationship:",
    "questionAr": "[السؤال 53] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF)، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "correctAnswerAr": "تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "explanationEn": "Engineering Analysis: Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "explanationAr": "التحليل الهندسي المعتمد: تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_54",
    "titleEn": "[MEDIUM] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Analysis 54",
    "titleAr": "[مستوى متوسط] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - تحليل 54",
    "questionEn": "[Question 54] When analyzing hardware-software integration and operational control for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles, identify the correct engineering relationship:",
    "questionAr": "[السؤال 54] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data)."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data).",
    "correctAnswerAr": "يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية).",
    "explanationEn": "Engineering Analysis: CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data).",
    "explanationAr": "التحليل الهندسي المعتمد: يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_55",
    "titleEn": "[MEDIUM] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Analysis 55",
    "titleAr": "[مستوى متوسط] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - تحليل 55",
    "questionEn": "[Question 55] When analyzing hardware-software integration and operational control for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration, identify the correct engineering relationship:",
    "questionAr": "[السؤال 55] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
    "correctAnswerAr": "تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
    "explanationEn": "Engineering Analysis: The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
    "explanationAr": "التحليل الهندسي المعتمد: تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_56",
    "titleEn": "[MEDIUM] Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers - Analysis 56",
    "titleAr": "[مستوى متوسط] مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA - تحليل 56",
    "questionEn": "[Question 56] When analyzing hardware-software integration and operational control for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers, identify the correct engineering relationship:",
    "questionAr": "[السؤال 56] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Independent Watchdog Timers (IWDG) clocked by dedicated internal low-speed RC oscillators trigger a system reset if software fails to refresh the counter before timeout, preventing infinite lockups.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "تقوم مؤقتات المراقبة المستقلة (IWDG) ذات المذبذب المنفصل بإعادة تشغيل النظام فوراً إذا فشل البرنامج في تغذية المؤقت قبل نفاد الوقت، مانعة تجمد الروبوت.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Independent Watchdog Timers (IWDG) clocked by dedicated internal low-speed RC oscillators trigger a system reset if software fails to refresh the counter before timeout, preventing infinite lockups.",
    "correctAnswerAr": "تقوم مؤقتات المراقبة المستقلة (IWDG) ذات المذبذب المنفصل بإعادة تشغيل النظام فوراً إذا فشل البرنامج في تغذية المؤقت قبل نفاد الوقت، مانعة تجمد الروبوت.",
    "explanationEn": "Engineering Analysis: Independent Watchdog Timers (IWDG) clocked by dedicated internal low-speed RC oscillators trigger a system reset if software fails to refresh the counter before timeout, preventing infinite lockups.",
    "explanationAr": "التحليل الهندسي المعتمد: تقوم مؤقتات المراقبة المستقلة (IWDG) ذات المذبذب المنفصل بإعادة تشغيل النظام فوراً إذا فشل البرنامج في تغذية المؤقت قبل نفاد الوقت، مانعة تجمد الروبوت.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_57",
    "titleEn": "[MEDIUM] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Analysis 57",
    "titleAr": "[مستوى متوسط] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - تحليل 57",
    "questionEn": "[Question 57] When analyzing hardware-software integration and operational control for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability, identify the correct engineering relationship:",
    "questionAr": "[السؤال 57] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF)، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "correctAnswerAr": "تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "explanationEn": "Engineering Analysis: Liu and Layland theorem proves that Rate Monotonic Scheduling (assigning higher static priority to shorter periods) guarantees schedulability if total CPU utilization satisfies: $U = \\sum_{i=1}^n \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "explanationAr": "التحليل الهندسي المعتمد: تثبت مبرهنة ليو ولايلاند أن جدولة RMS (إعطاء أولوية أعلى للفترات الأقصر) تضمن نجاح المهام إذا حقق إجمالي استغلال المعالج الشرط: $U = \\sum \\frac{C_i}{T_i} \\le n(2^{1/n} - 1)$.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_58",
    "titleEn": "[MEDIUM] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Analysis 58",
    "titleAr": "[مستوى متوسط] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - تحليل 58",
    "questionEn": "[Question 58] When analyzing hardware-software integration and operational control for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles, identify the correct engineering relationship:",
    "questionAr": "[السؤال 58] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data)."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data).",
    "correctAnswerAr": "يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية).",
    "explanationEn": "Engineering Analysis: CANopen standardizes communication using Service Data Objects (SDO, asynchronous acyclic configuration) and Process Data Objects (PDO, synchronous cyclic real-time motion control data).",
    "explanationAr": "التحليل الهندسي المعتمد: يوحد بروتوكول CANopen الاتصال باستخدام كائنات SDO (لتهيئة البارامترات اللادورية) وكائنات PDO (لنقل بيانات التحكم الحركي الفورية الدورية).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "egbac_robotics_ch3_med_59",
    "titleEn": "[MEDIUM] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Analysis 59",
    "titleAr": "[مستوى متوسط] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - تحليل 59",
    "questionEn": "[Question 59] When analyzing hardware-software integration and operational control for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration, identify the correct engineering relationship:",
    "questionAr": "[السؤال 59] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
    "correctAnswerAr": "تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
    "explanationEn": "Engineering Analysis: The eProsima Micro XRCE-DDS client-agent architecture connects the embedded client over UART/USB to a micro-ROS agent running on a host Linux SBC, bridging micro-ROS messages into the DDS domain.",
    "explanationAr": "التحليل الهندسي المعتمد: تربط بنية العميل والوكيل في XRCE-DDS العميل المدمج عبر UART بوكيل يعمل على حاسوب لينكس، محولة الرسائل إلى نطاق DDS العام للروبوت.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  }
],
  hots: [
  {
    "id": "egbac_robotics_ch3_hots_1",
    "titleEn": "[HOTS] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Advanced Synthesis 1",
    "titleAr": "[تفكير عليا] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - تركيب متقدم 1",
    "questionEn": "[Question 1 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability. Determine the mathematically validated result:",
    "questionAr": "[السؤال 1 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF). احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability."
    ],
    "optionsAr": [
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "correctAnswerAr": "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "explanationEn": "Detailed Quantitative Solution: For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_2",
    "titleEn": "[HOTS] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Advanced Synthesis 2",
    "titleAr": "[تفكير عليا] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - تركيب متقدم 2",
    "questionEn": "[Question 2 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles. Determine the mathematically validated result:",
    "questionAr": "[السؤال 2 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only."
    ],
    "optionsAr": [
      "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "correctAnswerAr": "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "explanationEn": "Detailed Quantitative Solution: In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_3",
    "titleEn": "[HOTS] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Advanced Synthesis 3",
    "titleAr": "[تفكير عليا] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - تركيب متقدم 3",
    "questionEn": "[Question 3 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration. Determine the mathematically validated result:",
    "questionAr": "[السؤال 3 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
    "correctAnswerAr": "عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
    "explanationEn": "Detailed Quantitative Solution: A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_4",
    "titleEn": "[HOTS] Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers - Advanced Synthesis 4",
    "titleAr": "[تفكير عليا] مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA - تركيب متقدم 4",
    "questionEn": "[Question 4 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers. Determine the mathematically validated result:",
    "questionAr": "[السؤال 4 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices."
    ],
    "optionsAr": [
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
    "correctAnswerAr": "وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
    "explanationEn": "Detailed Quantitative Solution: Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_5",
    "titleEn": "[HOTS] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Advanced Synthesis 5",
    "titleAr": "[تفكير عليا] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - تركيب متقدم 5",
    "questionEn": "[Question 5 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability. Determine the mathematically validated result:",
    "questionAr": "[السؤال 5 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF). احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "correctAnswerAr": "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "explanationEn": "Detailed Quantitative Solution: For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_6",
    "titleEn": "[HOTS] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Advanced Synthesis 6",
    "titleAr": "[تفكير عليا] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - تركيب متقدم 6",
    "questionEn": "[Question 6 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles. Determine the mathematically validated result:",
    "questionAr": "[السؤال 6 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "correctAnswerAr": "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "explanationEn": "Detailed Quantitative Solution: In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_7",
    "titleEn": "[HOTS] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Advanced Synthesis 7",
    "titleAr": "[تفكير عليا] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - تركيب متقدم 7",
    "questionEn": "[Question 7 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration. Determine the mathematically validated result:",
    "questionAr": "[السؤال 7 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light."
    ],
    "optionsAr": [
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
    "correctAnswerAr": "عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
    "explanationEn": "Detailed Quantitative Solution: A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_8",
    "titleEn": "[HOTS] Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers - Advanced Synthesis 8",
    "titleAr": "[تفكير عليا] مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA - تركيب متقدم 8",
    "questionEn": "[Question 8 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers. Determine the mathematically validated result:",
    "questionAr": "[السؤال 8 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages."
    ],
    "optionsAr": [
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
    "correctAnswerAr": "وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
    "explanationEn": "Detailed Quantitative Solution: Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_9",
    "titleEn": "[HOTS] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Advanced Synthesis 9",
    "titleAr": "[تفكير عليا] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - تركيب متقدم 9",
    "questionEn": "[Question 9 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability. Determine the mathematically validated result:",
    "questionAr": "[السؤال 9 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF). احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "correctAnswerAr": "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "explanationEn": "Detailed Quantitative Solution: For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_10",
    "titleEn": "[HOTS] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Advanced Synthesis 10",
    "titleAr": "[تفكير عليا] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - تركيب متقدم 10",
    "questionEn": "[Question 10 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles. Determine the mathematically validated result:",
    "questionAr": "[السؤال 10 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "correctAnswerAr": "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "explanationEn": "Detailed Quantitative Solution: In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_11",
    "titleEn": "[HOTS] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Advanced Synthesis 11",
    "titleAr": "[تفكير عليا] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - تركيب متقدم 11",
    "questionEn": "[Question 11 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration. Determine the mathematically validated result:",
    "questionAr": "[السؤال 11 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction."
    ],
    "optionsAr": [
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
    "correctAnswerAr": "عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
    "explanationEn": "Detailed Quantitative Solution: A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_12",
    "titleEn": "[HOTS] Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers - Advanced Synthesis 12",
    "titleAr": "[تفكير عليا] مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA - تركيب متقدم 12",
    "questionEn": "[Question 12 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers. Determine the mathematically validated result:",
    "questionAr": "[السؤال 12 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
    "correctAnswerAr": "وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
    "explanationEn": "Detailed Quantitative Solution: Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_13",
    "titleEn": "[HOTS] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Advanced Synthesis 13",
    "titleAr": "[تفكير عليا] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - تركيب متقدم 13",
    "questionEn": "[Question 13 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability. Determine the mathematically validated result:",
    "questionAr": "[السؤال 13 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF). احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability."
    ],
    "optionsAr": [
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "correctAnswerAr": "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "explanationEn": "Detailed Quantitative Solution: For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_14",
    "titleEn": "[HOTS] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Advanced Synthesis 14",
    "titleAr": "[تفكير عليا] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - تركيب متقدم 14",
    "questionEn": "[Question 14 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles. Determine the mathematically validated result:",
    "questionAr": "[السؤال 14 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends."
    ],
    "optionsAr": [
      "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "correctAnswerAr": "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "explanationEn": "Detailed Quantitative Solution: In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_15",
    "titleEn": "[HOTS] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Advanced Synthesis 15",
    "titleAr": "[تفكير عليا] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - تركيب متقدم 15",
    "questionEn": "[Question 15 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration. Determine the mathematically validated result:",
    "questionAr": "[السؤال 15 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
    "correctAnswerAr": "عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
    "explanationEn": "Detailed Quantitative Solution: A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_16",
    "titleEn": "[HOTS] Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers - Advanced Synthesis 16",
    "titleAr": "[تفكير عليا] مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA - تركيب متقدم 16",
    "questionEn": "[Question 16 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers. Determine the mathematically validated result:",
    "questionAr": "[السؤال 16 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion."
    ],
    "optionsAr": [
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
    "correctAnswerAr": "وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
    "explanationEn": "Detailed Quantitative Solution: Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_17",
    "titleEn": "[HOTS] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Advanced Synthesis 17",
    "titleAr": "[تفكير عليا] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - تركيب متقدم 17",
    "questionEn": "[Question 17 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability. Determine the mathematically validated result:",
    "questionAr": "[السؤال 17 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF). احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability."
    ],
    "optionsAr": [
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "correctAnswerAr": "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "explanationEn": "Detailed Quantitative Solution: For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_18",
    "titleEn": "[HOTS] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Advanced Synthesis 18",
    "titleAr": "[تفكير عليا] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - تركيب متقدم 18",
    "questionEn": "[Question 18 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles. Determine the mathematically validated result:",
    "questionAr": "[السؤال 18 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "correctAnswerAr": "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "explanationEn": "Detailed Quantitative Solution: In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_19",
    "titleEn": "[HOTS] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Advanced Synthesis 19",
    "titleAr": "[تفكير عليا] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - تركيب متقدم 19",
    "questionEn": "[Question 19 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration. Determine the mathematically validated result:",
    "questionAr": "[السؤال 19 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices."
    ],
    "optionsAr": [
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
    "correctAnswerAr": "عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
    "explanationEn": "Detailed Quantitative Solution: A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_20",
    "titleEn": "[HOTS] Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers - Advanced Synthesis 20",
    "titleAr": "[تفكير عليا] مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA - تركيب متقدم 20",
    "questionEn": "[Question 20 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers. Determine the mathematically validated result:",
    "questionAr": "[السؤال 20 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
    "correctAnswerAr": "وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
    "explanationEn": "Detailed Quantitative Solution: Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_21",
    "titleEn": "[HOTS] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Advanced Synthesis 21",
    "titleAr": "[تفكير عليا] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - تركيب متقدم 21",
    "questionEn": "[Question 21 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability. Determine the mathematically validated result:",
    "questionAr": "[السؤال 21 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF). احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "correctAnswerAr": "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "explanationEn": "Detailed Quantitative Solution: For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_22",
    "titleEn": "[HOTS] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Advanced Synthesis 22",
    "titleAr": "[تفكير عليا] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - تركيب متقدم 22",
    "questionEn": "[Question 22 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles. Determine the mathematically validated result:",
    "questionAr": "[السؤال 22 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light."
    ],
    "optionsAr": [
      "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "correctAnswerAr": "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "explanationEn": "Detailed Quantitative Solution: In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_23",
    "titleEn": "[HOTS] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Advanced Synthesis 23",
    "titleAr": "[تفكير عليا] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - تركيب متقدم 23",
    "questionEn": "[Question 23 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration. Determine the mathematically validated result:",
    "questionAr": "[السؤال 23 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages."
    ],
    "optionsAr": [
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
    "correctAnswerAr": "عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
    "explanationEn": "Detailed Quantitative Solution: A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_24",
    "titleEn": "[HOTS] Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers - Advanced Synthesis 24",
    "titleAr": "[تفكير عليا] مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA - تركيب متقدم 24",
    "questionEn": "[Question 24 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers. Determine the mathematically validated result:",
    "questionAr": "[السؤال 24 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
    "correctAnswerAr": "وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
    "explanationEn": "Detailed Quantitative Solution: Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_25",
    "titleEn": "[HOTS] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Advanced Synthesis 25",
    "titleAr": "[تفكير عليا] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - تركيب متقدم 25",
    "questionEn": "[Question 25 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability. Determine the mathematically validated result:",
    "questionAr": "[السؤال 25 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF). احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "correctAnswerAr": "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "explanationEn": "Detailed Quantitative Solution: For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_26",
    "titleEn": "[HOTS] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Advanced Synthesis 26",
    "titleAr": "[تفكير عليا] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - تركيب متقدم 26",
    "questionEn": "[Question 26 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles. Determine the mathematically validated result:",
    "questionAr": "[السؤال 26 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction."
    ],
    "optionsAr": [
      "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "correctAnswerAr": "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "explanationEn": "Detailed Quantitative Solution: In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_27",
    "titleEn": "[HOTS] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Advanced Synthesis 27",
    "titleAr": "[تفكير عليا] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - تركيب متقدم 27",
    "questionEn": "[Question 27 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration. Determine the mathematically validated result:",
    "questionAr": "[السؤال 27 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
    "correctAnswerAr": "عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
    "explanationEn": "Detailed Quantitative Solution: A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_28",
    "titleEn": "[HOTS] Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers - Advanced Synthesis 28",
    "titleAr": "[تفكير عليا] مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA - تركيب متقدم 28",
    "questionEn": "[Question 28 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers. Determine the mathematically validated result:",
    "questionAr": "[السؤال 28 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting."
    ],
    "optionsAr": [
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
    "correctAnswerAr": "وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
    "explanationEn": "Detailed Quantitative Solution: Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_29",
    "titleEn": "[HOTS] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Advanced Synthesis 29",
    "titleAr": "[تفكير عليا] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - تركيب متقدم 29",
    "questionEn": "[Question 29 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability. Determine the mathematically validated result:",
    "questionAr": "[السؤال 29 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF). احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability."
    ],
    "optionsAr": [
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "correctAnswerAr": "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "explanationEn": "Detailed Quantitative Solution: For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_30",
    "titleEn": "[HOTS] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Advanced Synthesis 30",
    "titleAr": "[تفكير عليا] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - تركيب متقدم 30",
    "questionEn": "[Question 30 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles. Determine the mathematically validated result:",
    "questionAr": "[السؤال 30 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "correctAnswerAr": "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "explanationEn": "Detailed Quantitative Solution: In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_31",
    "titleEn": "[HOTS] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Advanced Synthesis 31",
    "titleAr": "[تفكير عليا] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - تركيب متقدم 31",
    "questionEn": "[Question 31 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration. Determine the mathematically validated result:",
    "questionAr": "[السؤال 31 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion."
    ],
    "optionsAr": [
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
    "correctAnswerAr": "عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
    "explanationEn": "Detailed Quantitative Solution: A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_32",
    "titleEn": "[HOTS] Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers - Advanced Synthesis 32",
    "titleAr": "[تفكير عليا] مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA - تركيب متقدم 32",
    "questionEn": "[Question 32 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers. Determine the mathematically validated result:",
    "questionAr": "[السؤال 32 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only."
    ],
    "optionsAr": [
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
    "correctAnswerAr": "وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
    "explanationEn": "Detailed Quantitative Solution: Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_33",
    "titleEn": "[HOTS] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Advanced Synthesis 33",
    "titleAr": "[تفكير عليا] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - تركيب متقدم 33",
    "questionEn": "[Question 33 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability. Determine the mathematically validated result:",
    "questionAr": "[السؤال 33 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF). احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "correctAnswerAr": "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "explanationEn": "Detailed Quantitative Solution: For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_34",
    "titleEn": "[HOTS] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Advanced Synthesis 34",
    "titleAr": "[تفكير عليا] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - تركيب متقدم 34",
    "questionEn": "[Question 34 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles. Determine the mathematically validated result:",
    "questionAr": "[السؤال 34 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices."
    ],
    "optionsAr": [
      "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "correctAnswerAr": "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "explanationEn": "Detailed Quantitative Solution: In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_35",
    "titleEn": "[HOTS] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Advanced Synthesis 35",
    "titleAr": "[تفكير عليا] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - تركيب متقدم 35",
    "questionEn": "[Question 35 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration. Determine the mathematically validated result:",
    "questionAr": "[السؤال 35 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
    "correctAnswerAr": "عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
    "explanationEn": "Detailed Quantitative Solution: A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_36",
    "titleEn": "[HOTS] Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers - Advanced Synthesis 36",
    "titleAr": "[تفكير عليا] مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA - تركيب متقدم 36",
    "questionEn": "[Question 36 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers. Determine the mathematically validated result:",
    "questionAr": "[السؤال 36 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
    "correctAnswerAr": "وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
    "explanationEn": "Detailed Quantitative Solution: Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_37",
    "titleEn": "[HOTS] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Advanced Synthesis 37",
    "titleAr": "[تفكير عليا] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - تركيب متقدم 37",
    "questionEn": "[Question 37 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability. Determine the mathematically validated result:",
    "questionAr": "[السؤال 37 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF). احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability."
    ],
    "optionsAr": [
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "correctAnswerAr": "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "explanationEn": "Detailed Quantitative Solution: For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_38",
    "titleEn": "[HOTS] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Advanced Synthesis 38",
    "titleAr": "[تفكير عليا] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - تركيب متقدم 38",
    "questionEn": "[Question 38 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles. Determine the mathematically validated result:",
    "questionAr": "[السؤال 38 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages."
    ],
    "optionsAr": [
      "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "correctAnswerAr": "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "explanationEn": "Detailed Quantitative Solution: In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_39",
    "titleEn": "[HOTS] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Advanced Synthesis 39",
    "titleAr": "[تفكير عليا] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - تركيب متقدم 39",
    "questionEn": "[Question 39 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration. Determine the mathematically validated result:",
    "questionAr": "[السؤال 39 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
    "correctAnswerAr": "عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
    "explanationEn": "Detailed Quantitative Solution: A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_40",
    "titleEn": "[HOTS] Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers - Advanced Synthesis 40",
    "titleAr": "[تفكير عليا] مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA - تركيب متقدم 40",
    "questionEn": "[Question 40 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers. Determine the mathematically validated result:",
    "questionAr": "[السؤال 40 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
    "correctAnswerAr": "وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
    "explanationEn": "Detailed Quantitative Solution: Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_41",
    "titleEn": "[HOTS] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Advanced Synthesis 41",
    "titleAr": "[تفكير عليا] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - تركيب متقدم 41",
    "questionEn": "[Question 41 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability. Determine the mathematically validated result:",
    "questionAr": "[السؤال 41 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF). احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability."
    ],
    "optionsAr": [
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "correctAnswerAr": "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "explanationEn": "Detailed Quantitative Solution: For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_42",
    "titleEn": "[HOTS] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Advanced Synthesis 42",
    "titleAr": "[تفكير عليا] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - تركيب متقدم 42",
    "questionEn": "[Question 42 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles. Determine the mathematically validated result:",
    "questionAr": "[السؤال 42 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "correctAnswerAr": "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "explanationEn": "Detailed Quantitative Solution: In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_43",
    "titleEn": "[HOTS] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Advanced Synthesis 43",
    "titleAr": "[تفكير عليا] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - تركيب متقدم 43",
    "questionEn": "[Question 43 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration. Determine the mathematically validated result:",
    "questionAr": "[السؤال 43 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting."
    ],
    "optionsAr": [
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
    "correctAnswerAr": "عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
    "explanationEn": "Detailed Quantitative Solution: A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_44",
    "titleEn": "[HOTS] Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers - Advanced Synthesis 44",
    "titleAr": "[تفكير عليا] مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA - تركيب متقدم 44",
    "questionEn": "[Question 44 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers. Determine the mathematically validated result:",
    "questionAr": "[السؤال 44 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends."
    ],
    "optionsAr": [
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
    "correctAnswerAr": "وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
    "explanationEn": "Detailed Quantitative Solution: Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_45",
    "titleEn": "[HOTS] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Advanced Synthesis 45",
    "titleAr": "[تفكير عليا] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - تركيب متقدم 45",
    "questionEn": "[Question 45 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability. Determine the mathematically validated result:",
    "questionAr": "[السؤال 45 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF). احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "correctAnswerAr": "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "explanationEn": "Detailed Quantitative Solution: For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_46",
    "titleEn": "[HOTS] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Advanced Synthesis 46",
    "titleAr": "[تفكير عليا] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - تركيب متقدم 46",
    "questionEn": "[Question 46 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles. Determine the mathematically validated result:",
    "questionAr": "[السؤال 46 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion."
    ],
    "optionsAr": [
      "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "correctAnswerAr": "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "explanationEn": "Detailed Quantitative Solution: In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_47",
    "titleEn": "[HOTS] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Advanced Synthesis 47",
    "titleAr": "[تفكير عليا] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - تركيب متقدم 47",
    "questionEn": "[Question 47 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration. Determine the mathematically validated result:",
    "questionAr": "[السؤال 47 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only."
    ],
    "optionsAr": [
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
    "correctAnswerAr": "عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
    "explanationEn": "Detailed Quantitative Solution: A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_48",
    "titleEn": "[HOTS] Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers - Advanced Synthesis 48",
    "titleAr": "[تفكير عليا] مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA - تركيب متقدم 48",
    "questionEn": "[Question 48 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers. Determine the mathematically validated result:",
    "questionAr": "[السؤال 48 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
    "correctAnswerAr": "وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
    "explanationEn": "Detailed Quantitative Solution: Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_49",
    "titleEn": "[HOTS] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Advanced Synthesis 49",
    "titleAr": "[تفكير عليا] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - تركيب متقدم 49",
    "questionEn": "[Question 49 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability. Determine the mathematically validated result:",
    "questionAr": "[السؤال 49 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF). احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability."
    ],
    "optionsAr": [
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "correctAnswerAr": "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "explanationEn": "Detailed Quantitative Solution: For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_50",
    "titleEn": "[HOTS] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Advanced Synthesis 50",
    "titleAr": "[تفكير عليا] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - تركيب متقدم 50",
    "questionEn": "[Question 50 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles. Determine the mathematically validated result:",
    "questionAr": "[السؤال 50 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "correctAnswerAr": "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "explanationEn": "Detailed Quantitative Solution: In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_51",
    "titleEn": "[HOTS] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Advanced Synthesis 51",
    "titleAr": "[تفكير عليا] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - تركيب متقدم 51",
    "questionEn": "[Question 51 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration. Determine the mathematically validated result:",
    "questionAr": "[السؤال 51 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
    "correctAnswerAr": "عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
    "explanationEn": "Detailed Quantitative Solution: A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_52",
    "titleEn": "[HOTS] Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers - Advanced Synthesis 52",
    "titleAr": "[تفكير عليا] مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA - تركيب متقدم 52",
    "questionEn": "[Question 52 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers. Determine the mathematically validated result:",
    "questionAr": "[السؤال 52 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light."
    ],
    "optionsAr": [
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
    "correctAnswerAr": "وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
    "explanationEn": "Detailed Quantitative Solution: Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_53",
    "titleEn": "[HOTS] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Advanced Synthesis 53",
    "titleAr": "[تفكير عليا] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - تركيب متقدم 53",
    "questionEn": "[Question 53 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability. Determine the mathematically validated result:",
    "questionAr": "[السؤال 53 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF). احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability."
    ],
    "optionsAr": [
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "correctAnswerAr": "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "explanationEn": "Detailed Quantitative Solution: For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_54",
    "titleEn": "[HOTS] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Advanced Synthesis 54",
    "titleAr": "[تفكير عليا] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - تركيب متقدم 54",
    "questionEn": "[Question 54 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles. Determine the mathematically validated result:",
    "questionAr": "[السؤال 54 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "correctAnswerAr": "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "explanationEn": "Detailed Quantitative Solution: In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_55",
    "titleEn": "[HOTS] Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration - Advanced Synthesis 55",
    "titleAr": "[تفكير عليا] معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة - تركيب متقدم 55",
    "questionEn": "[Question 55 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration. Determine the mathematically validated result:",
    "questionAr": "[السؤال 55 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
    "correctAnswerAr": "عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
    "explanationEn": "Detailed Quantitative Solution: A micro-ROS node on an STM32 publishing a `sensor_msgs/msg/Imu` packet ($96\\ bytes$) at $100\\ Hz$ over a UART serial link requires effective raw serial throughput: $96 \\times 10 \\times 100 = 96,000\\ bps$, comfortably fitting a standard $115,200\\ baud$ channel.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: عقدة micro-ROS على شريحة STM32 ترسل بيانات IMU (٩٦ بايت) بتردد $100\\ Hz$ عبر رابط تسلسلي تتطلب معدل نقل: ٩٦,٠٠٠ بت/ث، وهو ما يناسب قناة قياسية بسرعة $115,200\\ baud$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Micro-ROS Architecture & Embedded XRCE-DDS Middleware Integration.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معمارية Micro-ROS وتكامل وسيط XRCE-DDS في الأنظمة المدمجة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_56",
    "titleEn": "[HOTS] Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers - Advanced Synthesis 56",
    "titleAr": "[تفكير عليا] مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA - تركيب متقدم 56",
    "questionEn": "[Question 56 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers. Determine the mathematically validated result:",
    "questionAr": "[السؤال 56 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction."
    ],
    "optionsAr": [
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
    "correctAnswerAr": "وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
    "explanationEn": "Detailed Quantitative Solution: Under ISO 13849-1 functional safety, Category 4 architecture achieves Performance Level e (PL e) through dual-channel redundancy with cross-monitoring and Mean Time to Dangerous Failure $MTTF_d > 30\\ years$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: وفق معيار الأمان الوظيفي ISO 13849-1، تحقق بنية الفئة الرابعة مستوى أداء PL e باستخدام قناتين احتياطيتين مع مراقبة متبادلة وزمن تعطل خطر يتجاوز ٣٠ عاماً.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Safety-Critical Watchdogs, Fault-Tolerant Architectures & DMA Transfers.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة مؤقتات المراقبة لأمان الأعطال والأنظمة المتسامحة مع الخطأ ونقل DMA.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_57",
    "titleEn": "[HOTS] Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability - Advanced Synthesis 57",
    "titleAr": "[تفكير عليا] قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF) - تركيب متقدم 57",
    "questionEn": "[Question 57 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability. Determine the mathematically validated result:",
    "questionAr": "[السؤال 57 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF). احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "correctAnswerAr": "لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "explanationEn": "Detailed Quantitative Solution: For $n=3$ periodic tasks with utilization bound $U_{bound} = 3(2^{1/3} - 1) \\approx 0.7798$ ($78.0\\%$), tasks with $(C_1=1, T_1=5, U_1=0.20)$, $(C_2=2, T_2=8, U_2=0.25)$, and $(C_3=3, T_3=12, U_3=0.25)$ have total $U = 0.70 < 0.78$, guaranteeing hard real-time schedulability.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لثلاث مهام دورية ($n=3$) بحد أقصى لـ RMS قدره $78.0\\%$، فإن مهام بنسب استغلال $0.20$ و$0.25$ و$0.25$ بمجموع $U = 0.70 < 0.78$ تضمن تلبية المواعيد النهائية بنسبة ١٠٠٪.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Rate Monotonic (RMS) & Earliest Deadline First (EDF) Schedulability.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة قابلية الجدولة بالترتيب الرتيب للمعدل (RMS) والموعد النهائي الأبكر (EDF).",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "egbac_robotics_ch3_hots_58",
    "titleEn": "[HOTS] Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles - Advanced Synthesis 58",
    "titleAr": "[تفكير عليا] شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen - تركيب متقدم 58",
    "questionEn": "[Question 58 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles. Determine the mathematically validated result:",
    "questionAr": "[السؤال 58 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting."
    ],
    "optionsAr": [
      "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "correctAnswerAr": "في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "explanationEn": "Detailed Quantitative Solution: In CANopen CiA 402 drive profile, a servo amplifier transitions through the standardized state machine: Not Ready -> Switch On Disabled -> Ready to Switch On -> Switched On -> Operation Enabled.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في ملف محركات CANopen CiA 402، ينتقل مكبر السيرفو عبر آلة الحالات القياسية: غير جاهز -> منع التشغيل -> جاهز للتشغيل -> قيد التشغيل -> تفعيل العمليات.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Industrial Deterministic Fieldbuses: EtherCAT & CANopen Protocol Profiles.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة شبكات الحقل الصناعية الحتمية: بروتوكول EtherCAT وملفات تعريف CANopen.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  }
]
};
