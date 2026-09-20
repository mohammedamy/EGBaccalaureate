import type { QuestionBank } from '../../../types/curriculum';

export const roboticsCh3Databank: QuestionBank = {
  easy: [
  {
    "id": "th_robotics_ch3_easy_1",
    "titleEn": "[EASY] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Review 1",
    "titleAr": "[مستوى أساسي] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - سؤال 1",
    "questionEn": "[Question 1] In the context of Egyptian STEM robotics and mechatronics regarding ARM Cortex-M Architecture, Registers & Memory-Mapped I/O, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 1] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
    "correctAnswerAr": "تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
    "explanationEn": "Correct Principle: ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
    "explanationAr": "المبدأ العلمي الصحيح: تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_2",
    "titleEn": "[EASY] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Review 2",
    "titleAr": "[مستوى أساسي] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - سؤال 2",
    "questionEn": "[Question 2] In the context of Egyptian STEM robotics and mechatronics regarding NVIC Interrupt Handling, Preemption Priorities & Subpriorities, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 2] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
    "correctAnswerAr": "توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
    "explanationEn": "Correct Principle: The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
    "explanationAr": "المبدأ العلمي الصحيح: توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_3",
    "titleEn": "[EASY] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Review 3",
    "titleAr": "[مستوى أساسي] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - سؤال 3",
    "questionEn": "[Question 3] In the context of Egyptian STEM robotics and mechatronics regarding FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 3] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "FreeRTOS is an open-source real-time operating system kernel providing deterministic multitasking, tick-based preemptive priority scheduling, and inter-task communication primitives.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "يعتبر FreeRTOS نواة نظام تشغيل فوري مفتوح المصدر يوفر تعدد مهام حتمياً، وجدولة استباقية مبنية على نبضات الساعة، وأدوات للتواصل بين المهام.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "FreeRTOS is an open-source real-time operating system kernel providing deterministic multitasking, tick-based preemptive priority scheduling, and inter-task communication primitives.",
    "correctAnswerAr": "يعتبر FreeRTOS نواة نظام تشغيل فوري مفتوح المصدر يوفر تعدد مهام حتمياً، وجدولة استباقية مبنية على نبضات الساعة، وأدوات للتواصل بين المهام.",
    "explanationEn": "Correct Principle: FreeRTOS is an open-source real-time operating system kernel providing deterministic multitasking, tick-based preemptive priority scheduling, and inter-task communication primitives.",
    "explanationAr": "المبدأ العلمي الصحيح: يعتبر FreeRTOS نواة نظام تشغيل فوري مفتوح المصدر يوفر تعدد مهام حتمياً، وجدولة استباقية مبنية على نبضات الساعة، وأدوات للتواصل بين المهام.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_4",
    "titleEn": "[EASY] CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers - Review 4",
    "titleAr": "[مستوى أساسي] بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة - سؤال 4",
    "questionEn": "[Question 4] In the context of Egyptian STEM robotics and mechatronics regarding CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 4] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Controller Area Network (CAN) is a robust differential two-wire vehicle bus (CAN_H, CAN_L) utilizing non-destructive bitwise arbitration based on message identifiers."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "تعتبر شبكة CAN ناقلاً تفاضلياً سلكياً عالي الاعتمادية (CAN_H وCAN_L) يستخدم التحكيم غير المدمر بتتبع الخانات الثنائية لمعرف الرسالة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Controller Area Network (CAN) is a robust differential two-wire vehicle bus (CAN_H, CAN_L) utilizing non-destructive bitwise arbitration based on message identifiers.",
    "correctAnswerAr": "تعتبر شبكة CAN ناقلاً تفاضلياً سلكياً عالي الاعتمادية (CAN_H وCAN_L) يستخدم التحكيم غير المدمر بتتبع الخانات الثنائية لمعرف الرسالة.",
    "explanationEn": "Correct Principle: Controller Area Network (CAN) is a robust differential two-wire vehicle bus (CAN_H, CAN_L) utilizing non-destructive bitwise arbitration based on message identifiers.",
    "explanationAr": "المبدأ العلمي الصحيح: تعتبر شبكة CAN ناقلاً تفاضلياً سلكياً عالي الاعتمادية (CAN_H وCAN_L) يستخدم التحكيم غير المدمر بتتبع الخانات الثنائية لمعرف الرسالة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_5",
    "titleEn": "[EASY] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Review 5",
    "titleAr": "[مستوى أساسي] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - سؤال 5",
    "questionEn": "[Question 5] In the context of Egyptian STEM robotics and mechatronics regarding ARM Cortex-M Architecture, Registers & Memory-Mapped I/O, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 5] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
    "correctAnswerAr": "تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
    "explanationEn": "Correct Principle: ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
    "explanationAr": "المبدأ العلمي الصحيح: تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_6",
    "titleEn": "[EASY] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Review 6",
    "titleAr": "[مستوى أساسي] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - سؤال 6",
    "questionEn": "[Question 6] In the context of Egyptian STEM robotics and mechatronics regarding NVIC Interrupt Handling, Preemption Priorities & Subpriorities, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 6] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
    "correctAnswerAr": "توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
    "explanationEn": "Correct Principle: The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
    "explanationAr": "المبدأ العلمي الصحيح: توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_7",
    "titleEn": "[EASY] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Review 7",
    "titleAr": "[مستوى أساسي] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - سؤال 7",
    "questionEn": "[Question 7] In the context of Egyptian STEM robotics and mechatronics regarding FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 7] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "FreeRTOS is an open-source real-time operating system kernel providing deterministic multitasking, tick-based preemptive priority scheduling, and inter-task communication primitives.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "يعتبر FreeRTOS نواة نظام تشغيل فوري مفتوح المصدر يوفر تعدد مهام حتمياً، وجدولة استباقية مبنية على نبضات الساعة، وأدوات للتواصل بين المهام.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "FreeRTOS is an open-source real-time operating system kernel providing deterministic multitasking, tick-based preemptive priority scheduling, and inter-task communication primitives.",
    "correctAnswerAr": "يعتبر FreeRTOS نواة نظام تشغيل فوري مفتوح المصدر يوفر تعدد مهام حتمياً، وجدولة استباقية مبنية على نبضات الساعة، وأدوات للتواصل بين المهام.",
    "explanationEn": "Correct Principle: FreeRTOS is an open-source real-time operating system kernel providing deterministic multitasking, tick-based preemptive priority scheduling, and inter-task communication primitives.",
    "explanationAr": "المبدأ العلمي الصحيح: يعتبر FreeRTOS نواة نظام تشغيل فوري مفتوح المصدر يوفر تعدد مهام حتمياً، وجدولة استباقية مبنية على نبضات الساعة، وأدوات للتواصل بين المهام.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_8",
    "titleEn": "[EASY] CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers - Review 8",
    "titleAr": "[مستوى أساسي] بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة - سؤال 8",
    "questionEn": "[Question 8] In the context of Egyptian STEM robotics and mechatronics regarding CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 8] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "Controller Area Network (CAN) is a robust differential two-wire vehicle bus (CAN_H, CAN_L) utilizing non-destructive bitwise arbitration based on message identifiers."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تعتبر شبكة CAN ناقلاً تفاضلياً سلكياً عالي الاعتمادية (CAN_H وCAN_L) يستخدم التحكيم غير المدمر بتتبع الخانات الثنائية لمعرف الرسالة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Controller Area Network (CAN) is a robust differential two-wire vehicle bus (CAN_H, CAN_L) utilizing non-destructive bitwise arbitration based on message identifiers.",
    "correctAnswerAr": "تعتبر شبكة CAN ناقلاً تفاضلياً سلكياً عالي الاعتمادية (CAN_H وCAN_L) يستخدم التحكيم غير المدمر بتتبع الخانات الثنائية لمعرف الرسالة.",
    "explanationEn": "Correct Principle: Controller Area Network (CAN) is a robust differential two-wire vehicle bus (CAN_H, CAN_L) utilizing non-destructive bitwise arbitration based on message identifiers.",
    "explanationAr": "المبدأ العلمي الصحيح: تعتبر شبكة CAN ناقلاً تفاضلياً سلكياً عالي الاعتمادية (CAN_H وCAN_L) يستخدم التحكيم غير المدمر بتتبع الخانات الثنائية لمعرف الرسالة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_9",
    "titleEn": "[EASY] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Review 9",
    "titleAr": "[مستوى أساسي] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - سؤال 9",
    "questionEn": "[Question 9] In the context of Egyptian STEM robotics and mechatronics regarding ARM Cortex-M Architecture, Registers & Memory-Mapped I/O, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 9] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
    "correctAnswerAr": "تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
    "explanationEn": "Correct Principle: ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
    "explanationAr": "المبدأ العلمي الصحيح: تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_10",
    "titleEn": "[EASY] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Review 10",
    "titleAr": "[مستوى أساسي] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - سؤال 10",
    "questionEn": "[Question 10] In the context of Egyptian STEM robotics and mechatronics regarding NVIC Interrupt Handling, Preemption Priorities & Subpriorities, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 10] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
    "correctAnswerAr": "توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
    "explanationEn": "Correct Principle: The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
    "explanationAr": "المبدأ العلمي الصحيح: توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_11",
    "titleEn": "[EASY] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Review 11",
    "titleAr": "[مستوى أساسي] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - سؤال 11",
    "questionEn": "[Question 11] In the context of Egyptian STEM robotics and mechatronics regarding FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 11] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "FreeRTOS is an open-source real-time operating system kernel providing deterministic multitasking, tick-based preemptive priority scheduling, and inter-task communication primitives.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "يعتبر FreeRTOS نواة نظام تشغيل فوري مفتوح المصدر يوفر تعدد مهام حتمياً، وجدولة استباقية مبنية على نبضات الساعة، وأدوات للتواصل بين المهام.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "FreeRTOS is an open-source real-time operating system kernel providing deterministic multitasking, tick-based preemptive priority scheduling, and inter-task communication primitives.",
    "correctAnswerAr": "يعتبر FreeRTOS نواة نظام تشغيل فوري مفتوح المصدر يوفر تعدد مهام حتمياً، وجدولة استباقية مبنية على نبضات الساعة، وأدوات للتواصل بين المهام.",
    "explanationEn": "Correct Principle: FreeRTOS is an open-source real-time operating system kernel providing deterministic multitasking, tick-based preemptive priority scheduling, and inter-task communication primitives.",
    "explanationAr": "المبدأ العلمي الصحيح: يعتبر FreeRTOS نواة نظام تشغيل فوري مفتوح المصدر يوفر تعدد مهام حتمياً، وجدولة استباقية مبنية على نبضات الساعة، وأدوات للتواصل بين المهام.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_12",
    "titleEn": "[EASY] CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers - Review 12",
    "titleAr": "[مستوى أساسي] بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة - سؤال 12",
    "questionEn": "[Question 12] In the context of Egyptian STEM robotics and mechatronics regarding CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 12] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "Controller Area Network (CAN) is a robust differential two-wire vehicle bus (CAN_H, CAN_L) utilizing non-destructive bitwise arbitration based on message identifiers."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "تعتبر شبكة CAN ناقلاً تفاضلياً سلكياً عالي الاعتمادية (CAN_H وCAN_L) يستخدم التحكيم غير المدمر بتتبع الخانات الثنائية لمعرف الرسالة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Controller Area Network (CAN) is a robust differential two-wire vehicle bus (CAN_H, CAN_L) utilizing non-destructive bitwise arbitration based on message identifiers.",
    "correctAnswerAr": "تعتبر شبكة CAN ناقلاً تفاضلياً سلكياً عالي الاعتمادية (CAN_H وCAN_L) يستخدم التحكيم غير المدمر بتتبع الخانات الثنائية لمعرف الرسالة.",
    "explanationEn": "Correct Principle: Controller Area Network (CAN) is a robust differential two-wire vehicle bus (CAN_H, CAN_L) utilizing non-destructive bitwise arbitration based on message identifiers.",
    "explanationAr": "المبدأ العلمي الصحيح: تعتبر شبكة CAN ناقلاً تفاضلياً سلكياً عالي الاعتمادية (CAN_H وCAN_L) يستخدم التحكيم غير المدمر بتتبع الخانات الثنائية لمعرف الرسالة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_13",
    "titleEn": "[EASY] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Review 13",
    "titleAr": "[مستوى أساسي] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - سؤال 13",
    "questionEn": "[Question 13] In the context of Egyptian STEM robotics and mechatronics regarding ARM Cortex-M Architecture, Registers & Memory-Mapped I/O, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 13] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
    "correctAnswerAr": "تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
    "explanationEn": "Correct Principle: ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
    "explanationAr": "المبدأ العلمي الصحيح: تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_14",
    "titleEn": "[EASY] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Review 14",
    "titleAr": "[مستوى أساسي] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - سؤال 14",
    "questionEn": "[Question 14] In the context of Egyptian STEM robotics and mechatronics regarding NVIC Interrupt Handling, Preemption Priorities & Subpriorities, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 14] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
    "correctAnswerAr": "توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
    "explanationEn": "Correct Principle: The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
    "explanationAr": "المبدأ العلمي الصحيح: توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_15",
    "titleEn": "[EASY] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Review 15",
    "titleAr": "[مستوى أساسي] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - سؤال 15",
    "questionEn": "[Question 15] In the context of Egyptian STEM robotics and mechatronics regarding FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 15] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "FreeRTOS is an open-source real-time operating system kernel providing deterministic multitasking, tick-based preemptive priority scheduling, and inter-task communication primitives.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "يعتبر FreeRTOS نواة نظام تشغيل فوري مفتوح المصدر يوفر تعدد مهام حتمياً، وجدولة استباقية مبنية على نبضات الساعة، وأدوات للتواصل بين المهام.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "FreeRTOS is an open-source real-time operating system kernel providing deterministic multitasking, tick-based preemptive priority scheduling, and inter-task communication primitives.",
    "correctAnswerAr": "يعتبر FreeRTOS نواة نظام تشغيل فوري مفتوح المصدر يوفر تعدد مهام حتمياً، وجدولة استباقية مبنية على نبضات الساعة، وأدوات للتواصل بين المهام.",
    "explanationEn": "Correct Principle: FreeRTOS is an open-source real-time operating system kernel providing deterministic multitasking, tick-based preemptive priority scheduling, and inter-task communication primitives.",
    "explanationAr": "المبدأ العلمي الصحيح: يعتبر FreeRTOS نواة نظام تشغيل فوري مفتوح المصدر يوفر تعدد مهام حتمياً، وجدولة استباقية مبنية على نبضات الساعة، وأدوات للتواصل بين المهام.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_16",
    "titleEn": "[EASY] CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers - Review 16",
    "titleAr": "[مستوى أساسي] بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة - سؤال 16",
    "questionEn": "[Question 16] In the context of Egyptian STEM robotics and mechatronics regarding CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 16] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Controller Area Network (CAN) is a robust differential two-wire vehicle bus (CAN_H, CAN_L) utilizing non-destructive bitwise arbitration based on message identifiers."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تعتبر شبكة CAN ناقلاً تفاضلياً سلكياً عالي الاعتمادية (CAN_H وCAN_L) يستخدم التحكيم غير المدمر بتتبع الخانات الثنائية لمعرف الرسالة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Controller Area Network (CAN) is a robust differential two-wire vehicle bus (CAN_H, CAN_L) utilizing non-destructive bitwise arbitration based on message identifiers.",
    "correctAnswerAr": "تعتبر شبكة CAN ناقلاً تفاضلياً سلكياً عالي الاعتمادية (CAN_H وCAN_L) يستخدم التحكيم غير المدمر بتتبع الخانات الثنائية لمعرف الرسالة.",
    "explanationEn": "Correct Principle: Controller Area Network (CAN) is a robust differential two-wire vehicle bus (CAN_H, CAN_L) utilizing non-destructive bitwise arbitration based on message identifiers.",
    "explanationAr": "المبدأ العلمي الصحيح: تعتبر شبكة CAN ناقلاً تفاضلياً سلكياً عالي الاعتمادية (CAN_H وCAN_L) يستخدم التحكيم غير المدمر بتتبع الخانات الثنائية لمعرف الرسالة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_17",
    "titleEn": "[EASY] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Review 17",
    "titleAr": "[مستوى أساسي] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - سؤال 17",
    "questionEn": "[Question 17] In the context of Egyptian STEM robotics and mechatronics regarding ARM Cortex-M Architecture, Registers & Memory-Mapped I/O, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 17] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
    "correctAnswerAr": "تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
    "explanationEn": "Correct Principle: ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
    "explanationAr": "المبدأ العلمي الصحيح: تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_18",
    "titleEn": "[EASY] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Review 18",
    "titleAr": "[مستوى أساسي] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - سؤال 18",
    "questionEn": "[Question 18] In the context of Egyptian STEM robotics and mechatronics regarding NVIC Interrupt Handling, Preemption Priorities & Subpriorities, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 18] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
    "correctAnswerAr": "توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
    "explanationEn": "Correct Principle: The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
    "explanationAr": "المبدأ العلمي الصحيح: توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_19",
    "titleEn": "[EASY] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Review 19",
    "titleAr": "[مستوى أساسي] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - سؤال 19",
    "questionEn": "[Question 19] In the context of Egyptian STEM robotics and mechatronics regarding FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 19] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "FreeRTOS is an open-source real-time operating system kernel providing deterministic multitasking, tick-based preemptive priority scheduling, and inter-task communication primitives.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "يعتبر FreeRTOS نواة نظام تشغيل فوري مفتوح المصدر يوفر تعدد مهام حتمياً، وجدولة استباقية مبنية على نبضات الساعة، وأدوات للتواصل بين المهام.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "FreeRTOS is an open-source real-time operating system kernel providing deterministic multitasking, tick-based preemptive priority scheduling, and inter-task communication primitives.",
    "correctAnswerAr": "يعتبر FreeRTOS نواة نظام تشغيل فوري مفتوح المصدر يوفر تعدد مهام حتمياً، وجدولة استباقية مبنية على نبضات الساعة، وأدوات للتواصل بين المهام.",
    "explanationEn": "Correct Principle: FreeRTOS is an open-source real-time operating system kernel providing deterministic multitasking, tick-based preemptive priority scheduling, and inter-task communication primitives.",
    "explanationAr": "المبدأ العلمي الصحيح: يعتبر FreeRTOS نواة نظام تشغيل فوري مفتوح المصدر يوفر تعدد مهام حتمياً، وجدولة استباقية مبنية على نبضات الساعة، وأدوات للتواصل بين المهام.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_20",
    "titleEn": "[EASY] CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers - Review 20",
    "titleAr": "[مستوى أساسي] بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة - سؤال 20",
    "questionEn": "[Question 20] In the context of Egyptian STEM robotics and mechatronics regarding CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 20] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "Controller Area Network (CAN) is a robust differential two-wire vehicle bus (CAN_H, CAN_L) utilizing non-destructive bitwise arbitration based on message identifiers."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تعتبر شبكة CAN ناقلاً تفاضلياً سلكياً عالي الاعتمادية (CAN_H وCAN_L) يستخدم التحكيم غير المدمر بتتبع الخانات الثنائية لمعرف الرسالة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Controller Area Network (CAN) is a robust differential two-wire vehicle bus (CAN_H, CAN_L) utilizing non-destructive bitwise arbitration based on message identifiers.",
    "correctAnswerAr": "تعتبر شبكة CAN ناقلاً تفاضلياً سلكياً عالي الاعتمادية (CAN_H وCAN_L) يستخدم التحكيم غير المدمر بتتبع الخانات الثنائية لمعرف الرسالة.",
    "explanationEn": "Correct Principle: Controller Area Network (CAN) is a robust differential two-wire vehicle bus (CAN_H, CAN_L) utilizing non-destructive bitwise arbitration based on message identifiers.",
    "explanationAr": "المبدأ العلمي الصحيح: تعتبر شبكة CAN ناقلاً تفاضلياً سلكياً عالي الاعتمادية (CAN_H وCAN_L) يستخدم التحكيم غير المدمر بتتبع الخانات الثنائية لمعرف الرسالة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_21",
    "titleEn": "[EASY] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Review 21",
    "titleAr": "[مستوى أساسي] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - سؤال 21",
    "questionEn": "[Question 21] In the context of Egyptian STEM robotics and mechatronics regarding ARM Cortex-M Architecture, Registers & Memory-Mapped I/O, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 21] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
    "correctAnswerAr": "تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
    "explanationEn": "Correct Principle: ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
    "explanationAr": "المبدأ العلمي الصحيح: تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_22",
    "titleEn": "[EASY] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Review 22",
    "titleAr": "[مستوى أساسي] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - سؤال 22",
    "questionEn": "[Question 22] In the context of Egyptian STEM robotics and mechatronics regarding NVIC Interrupt Handling, Preemption Priorities & Subpriorities, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 22] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
    "correctAnswerAr": "توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
    "explanationEn": "Correct Principle: The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
    "explanationAr": "المبدأ العلمي الصحيح: توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_23",
    "titleEn": "[EASY] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Review 23",
    "titleAr": "[مستوى أساسي] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - سؤال 23",
    "questionEn": "[Question 23] In the context of Egyptian STEM robotics and mechatronics regarding FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 23] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "FreeRTOS is an open-source real-time operating system kernel providing deterministic multitasking, tick-based preemptive priority scheduling, and inter-task communication primitives.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "يعتبر FreeRTOS نواة نظام تشغيل فوري مفتوح المصدر يوفر تعدد مهام حتمياً، وجدولة استباقية مبنية على نبضات الساعة، وأدوات للتواصل بين المهام.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "FreeRTOS is an open-source real-time operating system kernel providing deterministic multitasking, tick-based preemptive priority scheduling, and inter-task communication primitives.",
    "correctAnswerAr": "يعتبر FreeRTOS نواة نظام تشغيل فوري مفتوح المصدر يوفر تعدد مهام حتمياً، وجدولة استباقية مبنية على نبضات الساعة، وأدوات للتواصل بين المهام.",
    "explanationEn": "Correct Principle: FreeRTOS is an open-source real-time operating system kernel providing deterministic multitasking, tick-based preemptive priority scheduling, and inter-task communication primitives.",
    "explanationAr": "المبدأ العلمي الصحيح: يعتبر FreeRTOS نواة نظام تشغيل فوري مفتوح المصدر يوفر تعدد مهام حتمياً، وجدولة استباقية مبنية على نبضات الساعة، وأدوات للتواصل بين المهام.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_24",
    "titleEn": "[EASY] CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers - Review 24",
    "titleAr": "[مستوى أساسي] بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة - سؤال 24",
    "questionEn": "[Question 24] In the context of Egyptian STEM robotics and mechatronics regarding CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 24] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Controller Area Network (CAN) is a robust differential two-wire vehicle bus (CAN_H, CAN_L) utilizing non-destructive bitwise arbitration based on message identifiers."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "تعتبر شبكة CAN ناقلاً تفاضلياً سلكياً عالي الاعتمادية (CAN_H وCAN_L) يستخدم التحكيم غير المدمر بتتبع الخانات الثنائية لمعرف الرسالة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Controller Area Network (CAN) is a robust differential two-wire vehicle bus (CAN_H, CAN_L) utilizing non-destructive bitwise arbitration based on message identifiers.",
    "correctAnswerAr": "تعتبر شبكة CAN ناقلاً تفاضلياً سلكياً عالي الاعتمادية (CAN_H وCAN_L) يستخدم التحكيم غير المدمر بتتبع الخانات الثنائية لمعرف الرسالة.",
    "explanationEn": "Correct Principle: Controller Area Network (CAN) is a robust differential two-wire vehicle bus (CAN_H, CAN_L) utilizing non-destructive bitwise arbitration based on message identifiers.",
    "explanationAr": "المبدأ العلمي الصحيح: تعتبر شبكة CAN ناقلاً تفاضلياً سلكياً عالي الاعتمادية (CAN_H وCAN_L) يستخدم التحكيم غير المدمر بتتبع الخانات الثنائية لمعرف الرسالة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_25",
    "titleEn": "[EASY] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Review 25",
    "titleAr": "[مستوى أساسي] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - سؤال 25",
    "questionEn": "[Question 25] In the context of Egyptian STEM robotics and mechatronics regarding ARM Cortex-M Architecture, Registers & Memory-Mapped I/O, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 25] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
    "correctAnswerAr": "تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
    "explanationEn": "Correct Principle: ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
    "explanationAr": "المبدأ العلمي الصحيح: تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_26",
    "titleEn": "[EASY] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Review 26",
    "titleAr": "[مستوى أساسي] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - سؤال 26",
    "questionEn": "[Question 26] In the context of Egyptian STEM robotics and mechatronics regarding NVIC Interrupt Handling, Preemption Priorities & Subpriorities, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 26] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
    "correctAnswerAr": "توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
    "explanationEn": "Correct Principle: The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
    "explanationAr": "المبدأ العلمي الصحيح: توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_27",
    "titleEn": "[EASY] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Review 27",
    "titleAr": "[مستوى أساسي] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - سؤال 27",
    "questionEn": "[Question 27] In the context of Egyptian STEM robotics and mechatronics regarding FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 27] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "FreeRTOS is an open-source real-time operating system kernel providing deterministic multitasking, tick-based preemptive priority scheduling, and inter-task communication primitives.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "يعتبر FreeRTOS نواة نظام تشغيل فوري مفتوح المصدر يوفر تعدد مهام حتمياً، وجدولة استباقية مبنية على نبضات الساعة، وأدوات للتواصل بين المهام.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "FreeRTOS is an open-source real-time operating system kernel providing deterministic multitasking, tick-based preemptive priority scheduling, and inter-task communication primitives.",
    "correctAnswerAr": "يعتبر FreeRTOS نواة نظام تشغيل فوري مفتوح المصدر يوفر تعدد مهام حتمياً، وجدولة استباقية مبنية على نبضات الساعة، وأدوات للتواصل بين المهام.",
    "explanationEn": "Correct Principle: FreeRTOS is an open-source real-time operating system kernel providing deterministic multitasking, tick-based preemptive priority scheduling, and inter-task communication primitives.",
    "explanationAr": "المبدأ العلمي الصحيح: يعتبر FreeRTOS نواة نظام تشغيل فوري مفتوح المصدر يوفر تعدد مهام حتمياً، وجدولة استباقية مبنية على نبضات الساعة، وأدوات للتواصل بين المهام.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_28",
    "titleEn": "[EASY] CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers - Review 28",
    "titleAr": "[مستوى أساسي] بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة - سؤال 28",
    "questionEn": "[Question 28] In the context of Egyptian STEM robotics and mechatronics regarding CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 28] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "Controller Area Network (CAN) is a robust differential two-wire vehicle bus (CAN_H, CAN_L) utilizing non-destructive bitwise arbitration based on message identifiers."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تعتبر شبكة CAN ناقلاً تفاضلياً سلكياً عالي الاعتمادية (CAN_H وCAN_L) يستخدم التحكيم غير المدمر بتتبع الخانات الثنائية لمعرف الرسالة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Controller Area Network (CAN) is a robust differential two-wire vehicle bus (CAN_H, CAN_L) utilizing non-destructive bitwise arbitration based on message identifiers.",
    "correctAnswerAr": "تعتبر شبكة CAN ناقلاً تفاضلياً سلكياً عالي الاعتمادية (CAN_H وCAN_L) يستخدم التحكيم غير المدمر بتتبع الخانات الثنائية لمعرف الرسالة.",
    "explanationEn": "Correct Principle: Controller Area Network (CAN) is a robust differential two-wire vehicle bus (CAN_H, CAN_L) utilizing non-destructive bitwise arbitration based on message identifiers.",
    "explanationAr": "المبدأ العلمي الصحيح: تعتبر شبكة CAN ناقلاً تفاضلياً سلكياً عالي الاعتمادية (CAN_H وCAN_L) يستخدم التحكيم غير المدمر بتتبع الخانات الثنائية لمعرف الرسالة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_29",
    "titleEn": "[EASY] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Review 29",
    "titleAr": "[مستوى أساسي] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - سؤال 29",
    "questionEn": "[Question 29] In the context of Egyptian STEM robotics and mechatronics regarding ARM Cortex-M Architecture, Registers & Memory-Mapped I/O, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 29] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
    "correctAnswerAr": "تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
    "explanationEn": "Correct Principle: ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
    "explanationAr": "المبدأ العلمي الصحيح: تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_30",
    "titleEn": "[EASY] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Review 30",
    "titleAr": "[مستوى أساسي] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - سؤال 30",
    "questionEn": "[Question 30] In the context of Egyptian STEM robotics and mechatronics regarding NVIC Interrupt Handling, Preemption Priorities & Subpriorities, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 30] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
    "correctAnswerAr": "توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
    "explanationEn": "Correct Principle: The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
    "explanationAr": "المبدأ العلمي الصحيح: توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_31",
    "titleEn": "[EASY] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Review 31",
    "titleAr": "[مستوى أساسي] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - سؤال 31",
    "questionEn": "[Question 31] In the context of Egyptian STEM robotics and mechatronics regarding FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 31] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "FreeRTOS is an open-source real-time operating system kernel providing deterministic multitasking, tick-based preemptive priority scheduling, and inter-task communication primitives.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "يعتبر FreeRTOS نواة نظام تشغيل فوري مفتوح المصدر يوفر تعدد مهام حتمياً، وجدولة استباقية مبنية على نبضات الساعة، وأدوات للتواصل بين المهام.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "FreeRTOS is an open-source real-time operating system kernel providing deterministic multitasking, tick-based preemptive priority scheduling, and inter-task communication primitives.",
    "correctAnswerAr": "يعتبر FreeRTOS نواة نظام تشغيل فوري مفتوح المصدر يوفر تعدد مهام حتمياً، وجدولة استباقية مبنية على نبضات الساعة، وأدوات للتواصل بين المهام.",
    "explanationEn": "Correct Principle: FreeRTOS is an open-source real-time operating system kernel providing deterministic multitasking, tick-based preemptive priority scheduling, and inter-task communication primitives.",
    "explanationAr": "المبدأ العلمي الصحيح: يعتبر FreeRTOS نواة نظام تشغيل فوري مفتوح المصدر يوفر تعدد مهام حتمياً، وجدولة استباقية مبنية على نبضات الساعة، وأدوات للتواصل بين المهام.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_32",
    "titleEn": "[EASY] CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers - Review 32",
    "titleAr": "[مستوى أساسي] بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة - سؤال 32",
    "questionEn": "[Question 32] In the context of Egyptian STEM robotics and mechatronics regarding CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 32] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "Controller Area Network (CAN) is a robust differential two-wire vehicle bus (CAN_H, CAN_L) utilizing non-destructive bitwise arbitration based on message identifiers."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "تعتبر شبكة CAN ناقلاً تفاضلياً سلكياً عالي الاعتمادية (CAN_H وCAN_L) يستخدم التحكيم غير المدمر بتتبع الخانات الثنائية لمعرف الرسالة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Controller Area Network (CAN) is a robust differential two-wire vehicle bus (CAN_H, CAN_L) utilizing non-destructive bitwise arbitration based on message identifiers.",
    "correctAnswerAr": "تعتبر شبكة CAN ناقلاً تفاضلياً سلكياً عالي الاعتمادية (CAN_H وCAN_L) يستخدم التحكيم غير المدمر بتتبع الخانات الثنائية لمعرف الرسالة.",
    "explanationEn": "Correct Principle: Controller Area Network (CAN) is a robust differential two-wire vehicle bus (CAN_H, CAN_L) utilizing non-destructive bitwise arbitration based on message identifiers.",
    "explanationAr": "المبدأ العلمي الصحيح: تعتبر شبكة CAN ناقلاً تفاضلياً سلكياً عالي الاعتمادية (CAN_H وCAN_L) يستخدم التحكيم غير المدمر بتتبع الخانات الثنائية لمعرف الرسالة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_33",
    "titleEn": "[EASY] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Review 33",
    "titleAr": "[مستوى أساسي] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - سؤال 33",
    "questionEn": "[Question 33] In the context of Egyptian STEM robotics and mechatronics regarding ARM Cortex-M Architecture, Registers & Memory-Mapped I/O, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 33] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
    "correctAnswerAr": "تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
    "explanationEn": "Correct Principle: ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
    "explanationAr": "المبدأ العلمي الصحيح: تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_34",
    "titleEn": "[EASY] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Review 34",
    "titleAr": "[مستوى أساسي] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - سؤال 34",
    "questionEn": "[Question 34] In the context of Egyptian STEM robotics and mechatronics regarding NVIC Interrupt Handling, Preemption Priorities & Subpriorities, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 34] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
    "correctAnswerAr": "توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
    "explanationEn": "Correct Principle: The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
    "explanationAr": "المبدأ العلمي الصحيح: توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_35",
    "titleEn": "[EASY] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Review 35",
    "titleAr": "[مستوى أساسي] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - سؤال 35",
    "questionEn": "[Question 35] In the context of Egyptian STEM robotics and mechatronics regarding FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 35] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "FreeRTOS is an open-source real-time operating system kernel providing deterministic multitasking, tick-based preemptive priority scheduling, and inter-task communication primitives.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "يعتبر FreeRTOS نواة نظام تشغيل فوري مفتوح المصدر يوفر تعدد مهام حتمياً، وجدولة استباقية مبنية على نبضات الساعة، وأدوات للتواصل بين المهام.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "FreeRTOS is an open-source real-time operating system kernel providing deterministic multitasking, tick-based preemptive priority scheduling, and inter-task communication primitives.",
    "correctAnswerAr": "يعتبر FreeRTOS نواة نظام تشغيل فوري مفتوح المصدر يوفر تعدد مهام حتمياً، وجدولة استباقية مبنية على نبضات الساعة، وأدوات للتواصل بين المهام.",
    "explanationEn": "Correct Principle: FreeRTOS is an open-source real-time operating system kernel providing deterministic multitasking, tick-based preemptive priority scheduling, and inter-task communication primitives.",
    "explanationAr": "المبدأ العلمي الصحيح: يعتبر FreeRTOS نواة نظام تشغيل فوري مفتوح المصدر يوفر تعدد مهام حتمياً، وجدولة استباقية مبنية على نبضات الساعة، وأدوات للتواصل بين المهام.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_36",
    "titleEn": "[EASY] CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers - Review 36",
    "titleAr": "[مستوى أساسي] بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة - سؤال 36",
    "questionEn": "[Question 36] In the context of Egyptian STEM robotics and mechatronics regarding CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 36] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Controller Area Network (CAN) is a robust differential two-wire vehicle bus (CAN_H, CAN_L) utilizing non-destructive bitwise arbitration based on message identifiers."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تعتبر شبكة CAN ناقلاً تفاضلياً سلكياً عالي الاعتمادية (CAN_H وCAN_L) يستخدم التحكيم غير المدمر بتتبع الخانات الثنائية لمعرف الرسالة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Controller Area Network (CAN) is a robust differential two-wire vehicle bus (CAN_H, CAN_L) utilizing non-destructive bitwise arbitration based on message identifiers.",
    "correctAnswerAr": "تعتبر شبكة CAN ناقلاً تفاضلياً سلكياً عالي الاعتمادية (CAN_H وCAN_L) يستخدم التحكيم غير المدمر بتتبع الخانات الثنائية لمعرف الرسالة.",
    "explanationEn": "Correct Principle: Controller Area Network (CAN) is a robust differential two-wire vehicle bus (CAN_H, CAN_L) utilizing non-destructive bitwise arbitration based on message identifiers.",
    "explanationAr": "المبدأ العلمي الصحيح: تعتبر شبكة CAN ناقلاً تفاضلياً سلكياً عالي الاعتمادية (CAN_H وCAN_L) يستخدم التحكيم غير المدمر بتتبع الخانات الثنائية لمعرف الرسالة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_37",
    "titleEn": "[EASY] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Review 37",
    "titleAr": "[مستوى أساسي] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - سؤال 37",
    "questionEn": "[Question 37] In the context of Egyptian STEM robotics and mechatronics regarding ARM Cortex-M Architecture, Registers & Memory-Mapped I/O, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 37] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
    "correctAnswerAr": "تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
    "explanationEn": "Correct Principle: ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
    "explanationAr": "المبدأ العلمي الصحيح: تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_38",
    "titleEn": "[EASY] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Review 38",
    "titleAr": "[مستوى أساسي] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - سؤال 38",
    "questionEn": "[Question 38] In the context of Egyptian STEM robotics and mechatronics regarding NVIC Interrupt Handling, Preemption Priorities & Subpriorities, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 38] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
    "correctAnswerAr": "توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
    "explanationEn": "Correct Principle: The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
    "explanationAr": "المبدأ العلمي الصحيح: توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_39",
    "titleEn": "[EASY] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Review 39",
    "titleAr": "[مستوى أساسي] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - سؤال 39",
    "questionEn": "[Question 39] In the context of Egyptian STEM robotics and mechatronics regarding FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 39] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "FreeRTOS is an open-source real-time operating system kernel providing deterministic multitasking, tick-based preemptive priority scheduling, and inter-task communication primitives.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "يعتبر FreeRTOS نواة نظام تشغيل فوري مفتوح المصدر يوفر تعدد مهام حتمياً، وجدولة استباقية مبنية على نبضات الساعة، وأدوات للتواصل بين المهام.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "FreeRTOS is an open-source real-time operating system kernel providing deterministic multitasking, tick-based preemptive priority scheduling, and inter-task communication primitives.",
    "correctAnswerAr": "يعتبر FreeRTOS نواة نظام تشغيل فوري مفتوح المصدر يوفر تعدد مهام حتمياً، وجدولة استباقية مبنية على نبضات الساعة، وأدوات للتواصل بين المهام.",
    "explanationEn": "Correct Principle: FreeRTOS is an open-source real-time operating system kernel providing deterministic multitasking, tick-based preemptive priority scheduling, and inter-task communication primitives.",
    "explanationAr": "المبدأ العلمي الصحيح: يعتبر FreeRTOS نواة نظام تشغيل فوري مفتوح المصدر يوفر تعدد مهام حتمياً، وجدولة استباقية مبنية على نبضات الساعة، وأدوات للتواصل بين المهام.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_40",
    "titleEn": "[EASY] CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers - Review 40",
    "titleAr": "[مستوى أساسي] بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة - سؤال 40",
    "questionEn": "[Question 40] In the context of Egyptian STEM robotics and mechatronics regarding CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 40] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "Controller Area Network (CAN) is a robust differential two-wire vehicle bus (CAN_H, CAN_L) utilizing non-destructive bitwise arbitration based on message identifiers."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تعتبر شبكة CAN ناقلاً تفاضلياً سلكياً عالي الاعتمادية (CAN_H وCAN_L) يستخدم التحكيم غير المدمر بتتبع الخانات الثنائية لمعرف الرسالة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Controller Area Network (CAN) is a robust differential two-wire vehicle bus (CAN_H, CAN_L) utilizing non-destructive bitwise arbitration based on message identifiers.",
    "correctAnswerAr": "تعتبر شبكة CAN ناقلاً تفاضلياً سلكياً عالي الاعتمادية (CAN_H وCAN_L) يستخدم التحكيم غير المدمر بتتبع الخانات الثنائية لمعرف الرسالة.",
    "explanationEn": "Correct Principle: Controller Area Network (CAN) is a robust differential two-wire vehicle bus (CAN_H, CAN_L) utilizing non-destructive bitwise arbitration based on message identifiers.",
    "explanationAr": "المبدأ العلمي الصحيح: تعتبر شبكة CAN ناقلاً تفاضلياً سلكياً عالي الاعتمادية (CAN_H وCAN_L) يستخدم التحكيم غير المدمر بتتبع الخانات الثنائية لمعرف الرسالة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_41",
    "titleEn": "[EASY] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Review 41",
    "titleAr": "[مستوى أساسي] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - سؤال 41",
    "questionEn": "[Question 41] In the context of Egyptian STEM robotics and mechatronics regarding ARM Cortex-M Architecture, Registers & Memory-Mapped I/O, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 41] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
    "correctAnswerAr": "تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
    "explanationEn": "Correct Principle: ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
    "explanationAr": "المبدأ العلمي الصحيح: تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_42",
    "titleEn": "[EASY] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Review 42",
    "titleAr": "[مستوى أساسي] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - سؤال 42",
    "questionEn": "[Question 42] In the context of Egyptian STEM robotics and mechatronics regarding NVIC Interrupt Handling, Preemption Priorities & Subpriorities, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 42] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
    "correctAnswerAr": "توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
    "explanationEn": "Correct Principle: The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
    "explanationAr": "المبدأ العلمي الصحيح: توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_43",
    "titleEn": "[EASY] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Review 43",
    "titleAr": "[مستوى أساسي] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - سؤال 43",
    "questionEn": "[Question 43] In the context of Egyptian STEM robotics and mechatronics regarding FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 43] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "FreeRTOS is an open-source real-time operating system kernel providing deterministic multitasking, tick-based preemptive priority scheduling, and inter-task communication primitives.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "يعتبر FreeRTOS نواة نظام تشغيل فوري مفتوح المصدر يوفر تعدد مهام حتمياً، وجدولة استباقية مبنية على نبضات الساعة، وأدوات للتواصل بين المهام.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "FreeRTOS is an open-source real-time operating system kernel providing deterministic multitasking, tick-based preemptive priority scheduling, and inter-task communication primitives.",
    "correctAnswerAr": "يعتبر FreeRTOS نواة نظام تشغيل فوري مفتوح المصدر يوفر تعدد مهام حتمياً، وجدولة استباقية مبنية على نبضات الساعة، وأدوات للتواصل بين المهام.",
    "explanationEn": "Correct Principle: FreeRTOS is an open-source real-time operating system kernel providing deterministic multitasking, tick-based preemptive priority scheduling, and inter-task communication primitives.",
    "explanationAr": "المبدأ العلمي الصحيح: يعتبر FreeRTOS نواة نظام تشغيل فوري مفتوح المصدر يوفر تعدد مهام حتمياً، وجدولة استباقية مبنية على نبضات الساعة، وأدوات للتواصل بين المهام.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_44",
    "titleEn": "[EASY] CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers - Review 44",
    "titleAr": "[مستوى أساسي] بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة - سؤال 44",
    "questionEn": "[Question 44] In the context of Egyptian STEM robotics and mechatronics regarding CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 44] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Controller Area Network (CAN) is a robust differential two-wire vehicle bus (CAN_H, CAN_L) utilizing non-destructive bitwise arbitration based on message identifiers."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "تعتبر شبكة CAN ناقلاً تفاضلياً سلكياً عالي الاعتمادية (CAN_H وCAN_L) يستخدم التحكيم غير المدمر بتتبع الخانات الثنائية لمعرف الرسالة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Controller Area Network (CAN) is a robust differential two-wire vehicle bus (CAN_H, CAN_L) utilizing non-destructive bitwise arbitration based on message identifiers.",
    "correctAnswerAr": "تعتبر شبكة CAN ناقلاً تفاضلياً سلكياً عالي الاعتمادية (CAN_H وCAN_L) يستخدم التحكيم غير المدمر بتتبع الخانات الثنائية لمعرف الرسالة.",
    "explanationEn": "Correct Principle: Controller Area Network (CAN) is a robust differential two-wire vehicle bus (CAN_H, CAN_L) utilizing non-destructive bitwise arbitration based on message identifiers.",
    "explanationAr": "المبدأ العلمي الصحيح: تعتبر شبكة CAN ناقلاً تفاضلياً سلكياً عالي الاعتمادية (CAN_H وCAN_L) يستخدم التحكيم غير المدمر بتتبع الخانات الثنائية لمعرف الرسالة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_45",
    "titleEn": "[EASY] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Review 45",
    "titleAr": "[مستوى أساسي] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - سؤال 45",
    "questionEn": "[Question 45] In the context of Egyptian STEM robotics and mechatronics regarding ARM Cortex-M Architecture, Registers & Memory-Mapped I/O, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 45] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
    "correctAnswerAr": "تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
    "explanationEn": "Correct Principle: ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
    "explanationAr": "المبدأ العلمي الصحيح: تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_46",
    "titleEn": "[EASY] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Review 46",
    "titleAr": "[مستوى أساسي] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - سؤال 46",
    "questionEn": "[Question 46] In the context of Egyptian STEM robotics and mechatronics regarding NVIC Interrupt Handling, Preemption Priorities & Subpriorities, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 46] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
    "correctAnswerAr": "توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
    "explanationEn": "Correct Principle: The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
    "explanationAr": "المبدأ العلمي الصحيح: توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_47",
    "titleEn": "[EASY] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Review 47",
    "titleAr": "[مستوى أساسي] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - سؤال 47",
    "questionEn": "[Question 47] In the context of Egyptian STEM robotics and mechatronics regarding FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 47] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "FreeRTOS is an open-source real-time operating system kernel providing deterministic multitasking, tick-based preemptive priority scheduling, and inter-task communication primitives.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "يعتبر FreeRTOS نواة نظام تشغيل فوري مفتوح المصدر يوفر تعدد مهام حتمياً، وجدولة استباقية مبنية على نبضات الساعة، وأدوات للتواصل بين المهام.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "FreeRTOS is an open-source real-time operating system kernel providing deterministic multitasking, tick-based preemptive priority scheduling, and inter-task communication primitives.",
    "correctAnswerAr": "يعتبر FreeRTOS نواة نظام تشغيل فوري مفتوح المصدر يوفر تعدد مهام حتمياً، وجدولة استباقية مبنية على نبضات الساعة، وأدوات للتواصل بين المهام.",
    "explanationEn": "Correct Principle: FreeRTOS is an open-source real-time operating system kernel providing deterministic multitasking, tick-based preemptive priority scheduling, and inter-task communication primitives.",
    "explanationAr": "المبدأ العلمي الصحيح: يعتبر FreeRTOS نواة نظام تشغيل فوري مفتوح المصدر يوفر تعدد مهام حتمياً، وجدولة استباقية مبنية على نبضات الساعة، وأدوات للتواصل بين المهام.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_48",
    "titleEn": "[EASY] CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers - Review 48",
    "titleAr": "[مستوى أساسي] بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة - سؤال 48",
    "questionEn": "[Question 48] In the context of Egyptian STEM robotics and mechatronics regarding CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 48] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "Controller Area Network (CAN) is a robust differential two-wire vehicle bus (CAN_H, CAN_L) utilizing non-destructive bitwise arbitration based on message identifiers."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تعتبر شبكة CAN ناقلاً تفاضلياً سلكياً عالي الاعتمادية (CAN_H وCAN_L) يستخدم التحكيم غير المدمر بتتبع الخانات الثنائية لمعرف الرسالة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Controller Area Network (CAN) is a robust differential two-wire vehicle bus (CAN_H, CAN_L) utilizing non-destructive bitwise arbitration based on message identifiers.",
    "correctAnswerAr": "تعتبر شبكة CAN ناقلاً تفاضلياً سلكياً عالي الاعتمادية (CAN_H وCAN_L) يستخدم التحكيم غير المدمر بتتبع الخانات الثنائية لمعرف الرسالة.",
    "explanationEn": "Correct Principle: Controller Area Network (CAN) is a robust differential two-wire vehicle bus (CAN_H, CAN_L) utilizing non-destructive bitwise arbitration based on message identifiers.",
    "explanationAr": "المبدأ العلمي الصحيح: تعتبر شبكة CAN ناقلاً تفاضلياً سلكياً عالي الاعتمادية (CAN_H وCAN_L) يستخدم التحكيم غير المدمر بتتبع الخانات الثنائية لمعرف الرسالة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_49",
    "titleEn": "[EASY] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Review 49",
    "titleAr": "[مستوى أساسي] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - سؤال 49",
    "questionEn": "[Question 49] In the context of Egyptian STEM robotics and mechatronics regarding ARM Cortex-M Architecture, Registers & Memory-Mapped I/O, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 49] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
    "correctAnswerAr": "تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
    "explanationEn": "Correct Principle: ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
    "explanationAr": "المبدأ العلمي الصحيح: تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_50",
    "titleEn": "[EASY] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Review 50",
    "titleAr": "[مستوى أساسي] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - سؤال 50",
    "questionEn": "[Question 50] In the context of Egyptian STEM robotics and mechatronics regarding NVIC Interrupt Handling, Preemption Priorities & Subpriorities, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 50] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
    "correctAnswerAr": "توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
    "explanationEn": "Correct Principle: The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
    "explanationAr": "المبدأ العلمي الصحيح: توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_51",
    "titleEn": "[EASY] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Review 51",
    "titleAr": "[مستوى أساسي] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - سؤال 51",
    "questionEn": "[Question 51] In the context of Egyptian STEM robotics and mechatronics regarding FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 51] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "FreeRTOS is an open-source real-time operating system kernel providing deterministic multitasking, tick-based preemptive priority scheduling, and inter-task communication primitives.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "يعتبر FreeRTOS نواة نظام تشغيل فوري مفتوح المصدر يوفر تعدد مهام حتمياً، وجدولة استباقية مبنية على نبضات الساعة، وأدوات للتواصل بين المهام.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "FreeRTOS is an open-source real-time operating system kernel providing deterministic multitasking, tick-based preemptive priority scheduling, and inter-task communication primitives.",
    "correctAnswerAr": "يعتبر FreeRTOS نواة نظام تشغيل فوري مفتوح المصدر يوفر تعدد مهام حتمياً، وجدولة استباقية مبنية على نبضات الساعة، وأدوات للتواصل بين المهام.",
    "explanationEn": "Correct Principle: FreeRTOS is an open-source real-time operating system kernel providing deterministic multitasking, tick-based preemptive priority scheduling, and inter-task communication primitives.",
    "explanationAr": "المبدأ العلمي الصحيح: يعتبر FreeRTOS نواة نظام تشغيل فوري مفتوح المصدر يوفر تعدد مهام حتمياً، وجدولة استباقية مبنية على نبضات الساعة، وأدوات للتواصل بين المهام.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_52",
    "titleEn": "[EASY] CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers - Review 52",
    "titleAr": "[مستوى أساسي] بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة - سؤال 52",
    "questionEn": "[Question 52] In the context of Egyptian STEM robotics and mechatronics regarding CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 52] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "Controller Area Network (CAN) is a robust differential two-wire vehicle bus (CAN_H, CAN_L) utilizing non-destructive bitwise arbitration based on message identifiers."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "تعتبر شبكة CAN ناقلاً تفاضلياً سلكياً عالي الاعتمادية (CAN_H وCAN_L) يستخدم التحكيم غير المدمر بتتبع الخانات الثنائية لمعرف الرسالة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Controller Area Network (CAN) is a robust differential two-wire vehicle bus (CAN_H, CAN_L) utilizing non-destructive bitwise arbitration based on message identifiers.",
    "correctAnswerAr": "تعتبر شبكة CAN ناقلاً تفاضلياً سلكياً عالي الاعتمادية (CAN_H وCAN_L) يستخدم التحكيم غير المدمر بتتبع الخانات الثنائية لمعرف الرسالة.",
    "explanationEn": "Correct Principle: Controller Area Network (CAN) is a robust differential two-wire vehicle bus (CAN_H, CAN_L) utilizing non-destructive bitwise arbitration based on message identifiers.",
    "explanationAr": "المبدأ العلمي الصحيح: تعتبر شبكة CAN ناقلاً تفاضلياً سلكياً عالي الاعتمادية (CAN_H وCAN_L) يستخدم التحكيم غير المدمر بتتبع الخانات الثنائية لمعرف الرسالة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_53",
    "titleEn": "[EASY] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Review 53",
    "titleAr": "[مستوى أساسي] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - سؤال 53",
    "questionEn": "[Question 53] In the context of Egyptian STEM robotics and mechatronics regarding ARM Cortex-M Architecture, Registers & Memory-Mapped I/O, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 53] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
    "correctAnswerAr": "تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
    "explanationEn": "Correct Principle: ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
    "explanationAr": "المبدأ العلمي الصحيح: تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_54",
    "titleEn": "[EASY] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Review 54",
    "titleAr": "[مستوى أساسي] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - سؤال 54",
    "questionEn": "[Question 54] In the context of Egyptian STEM robotics and mechatronics regarding NVIC Interrupt Handling, Preemption Priorities & Subpriorities, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 54] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
    "correctAnswerAr": "توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
    "explanationEn": "Correct Principle: The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
    "explanationAr": "المبدأ العلمي الصحيح: توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_55",
    "titleEn": "[EASY] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Review 55",
    "titleAr": "[مستوى أساسي] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - سؤال 55",
    "questionEn": "[Question 55] In the context of Egyptian STEM robotics and mechatronics regarding FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 55] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "FreeRTOS is an open-source real-time operating system kernel providing deterministic multitasking, tick-based preemptive priority scheduling, and inter-task communication primitives.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "يعتبر FreeRTOS نواة نظام تشغيل فوري مفتوح المصدر يوفر تعدد مهام حتمياً، وجدولة استباقية مبنية على نبضات الساعة، وأدوات للتواصل بين المهام.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "FreeRTOS is an open-source real-time operating system kernel providing deterministic multitasking, tick-based preemptive priority scheduling, and inter-task communication primitives.",
    "correctAnswerAr": "يعتبر FreeRTOS نواة نظام تشغيل فوري مفتوح المصدر يوفر تعدد مهام حتمياً، وجدولة استباقية مبنية على نبضات الساعة، وأدوات للتواصل بين المهام.",
    "explanationEn": "Correct Principle: FreeRTOS is an open-source real-time operating system kernel providing deterministic multitasking, tick-based preemptive priority scheduling, and inter-task communication primitives.",
    "explanationAr": "المبدأ العلمي الصحيح: يعتبر FreeRTOS نواة نظام تشغيل فوري مفتوح المصدر يوفر تعدد مهام حتمياً، وجدولة استباقية مبنية على نبضات الساعة، وأدوات للتواصل بين المهام.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_56",
    "titleEn": "[EASY] CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers - Review 56",
    "titleAr": "[مستوى أساسي] بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة - سؤال 56",
    "questionEn": "[Question 56] In the context of Egyptian STEM robotics and mechatronics regarding CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 56] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Controller Area Network (CAN) is a robust differential two-wire vehicle bus (CAN_H, CAN_L) utilizing non-destructive bitwise arbitration based on message identifiers."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تعتبر شبكة CAN ناقلاً تفاضلياً سلكياً عالي الاعتمادية (CAN_H وCAN_L) يستخدم التحكيم غير المدمر بتتبع الخانات الثنائية لمعرف الرسالة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Controller Area Network (CAN) is a robust differential two-wire vehicle bus (CAN_H, CAN_L) utilizing non-destructive bitwise arbitration based on message identifiers.",
    "correctAnswerAr": "تعتبر شبكة CAN ناقلاً تفاضلياً سلكياً عالي الاعتمادية (CAN_H وCAN_L) يستخدم التحكيم غير المدمر بتتبع الخانات الثنائية لمعرف الرسالة.",
    "explanationEn": "Correct Principle: Controller Area Network (CAN) is a robust differential two-wire vehicle bus (CAN_H, CAN_L) utilizing non-destructive bitwise arbitration based on message identifiers.",
    "explanationAr": "المبدأ العلمي الصحيح: تعتبر شبكة CAN ناقلاً تفاضلياً سلكياً عالي الاعتمادية (CAN_H وCAN_L) يستخدم التحكيم غير المدمر بتتبع الخانات الثنائية لمعرف الرسالة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_57",
    "titleEn": "[EASY] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Review 57",
    "titleAr": "[مستوى أساسي] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - سؤال 57",
    "questionEn": "[Question 57] In the context of Egyptian STEM robotics and mechatronics regarding ARM Cortex-M Architecture, Registers & Memory-Mapped I/O, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 57] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
    "correctAnswerAr": "تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
    "explanationEn": "Correct Principle: ARM Cortex-M microcontrollers feature a 32-bit RISC architecture, Harvard bus structure (separate instruction and data buses), and standardized memory-mapped peripheral registers.",
    "explanationAr": "المبدأ العلمي الصحيح: تتميز متحكمات ARM Cortex-M بمعمارية حاسوب بمجموعة تعليمات مخفضة (RISC) بعرض ٣٢ بت، وهيكل ناقل هارفارد، ومنافذ محيطية معنونة ضمن فضاء الذاكرة الموحد.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch3_easy_58",
    "titleEn": "[EASY] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Review 58",
    "titleAr": "[مستوى أساسي] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - سؤال 58",
    "questionEn": "[Question 58] In the context of Egyptian STEM robotics and mechatronics regarding NVIC Interrupt Handling, Preemption Priorities & Subpriorities, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 58] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
    "correctAnswerAr": "توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
    "explanationEn": "Correct Principle: The Nested Vectored Interrupt Controller (NVIC) provides low-latency hardware interrupt handling with automatic register stacking and deterministic execution of Interrupt Service Routines (ISRs).",
    "explanationAr": "المبدأ العلمي الصحيح: توفر وحدة التحكم بالمقاطعات المتجهية المتداخلة (NVIC) معالجة سريعة للمقاطعات مع حفظ السجلات في المكدس عتادياً وتنفيذاً حتمياً لروتينات خدمة المقاطعة (ISRs).",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  }
],
  medium: [
  {
    "id": "th_robotics_ch3_med_1",
    "titleEn": "[MEDIUM] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Analysis 1",
    "titleAr": "[مستوى متوسط] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - تحليل 1",
    "questionEn": "[Question 1] When analyzing hardware-software integration and operational control for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O, identify the correct engineering relationship:",
    "questionAr": "[السؤال 1] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
    "correctAnswerAr": "يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
    "explanationEn": "Engineering Analysis: The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
    "explanationAr": "التحليل الهندسي المعتمد: يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_2",
    "titleEn": "[MEDIUM] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Analysis 2",
    "titleAr": "[مستوى متوسط] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - تحليل 2",
    "questionEn": "[Question 2] When analyzing hardware-software integration and operational control for NVIC Interrupt Handling, Preemption Priorities & Subpriorities, identify the correct engineering relationship:",
    "questionAr": "[السؤال 2] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs)."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs).",
    "correctAnswerAr": "يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن).",
    "explanationEn": "Engineering Analysis: NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs).",
    "explanationAr": "التحليل الهندسي المعتمد: يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_3",
    "titleEn": "[MEDIUM] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Analysis 3",
    "titleAr": "[مستوى متوسط] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - تحليل 3",
    "questionEn": "[Question 3] When analyzing hardware-software integration and operational control for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion, identify the correct engineering relationship:",
    "questionAr": "[السؤال 3] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
    "correctAnswerAr": "يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
    "explanationEn": "Engineering Analysis: Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
    "explanationAr": "التحليل الهندسي المعتمد: يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_4",
    "titleEn": "[MEDIUM] CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers - Analysis 4",
    "titleAr": "[مستوى متوسط] بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة - تحليل 4",
    "questionEn": "[Question 4] When analyzing hardware-software integration and operational control for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers, identify the correct engineering relationship:",
    "questionAr": "[السؤال 4] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "CAN bus logic uses dominant (logic 0, $V_{diff} \\approx 2.0\\ V$) and recessive (logic 1, $V_{diff} \\approx 0.0\\ V$) states; if two nodes transmit simultaneously, the lower numerical ID wins arbitration.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تستخدم شبكة CAN الحالة السائدة (الصفر المنطقي بجهد تفاضلي ٢ فولت) والحالة المتنحية (الواحد بجهد صفر فولت)؛ وإذا أرسلت عقدتان معاً، يفوز المعرف الرقمي الأصغر.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "CAN bus logic uses dominant (logic 0, $V_{diff} \\approx 2.0\\ V$) and recessive (logic 1, $V_{diff} \\approx 0.0\\ V$) states; if two nodes transmit simultaneously, the lower numerical ID wins arbitration.",
    "correctAnswerAr": "تستخدم شبكة CAN الحالة السائدة (الصفر المنطقي بجهد تفاضلي ٢ فولت) والحالة المتنحية (الواحد بجهد صفر فولت)؛ وإذا أرسلت عقدتان معاً، يفوز المعرف الرقمي الأصغر.",
    "explanationEn": "Engineering Analysis: CAN bus logic uses dominant (logic 0, $V_{diff} \\approx 2.0\\ V$) and recessive (logic 1, $V_{diff} \\approx 0.0\\ V$) states; if two nodes transmit simultaneously, the lower numerical ID wins arbitration.",
    "explanationAr": "التحليل الهندسي المعتمد: تستخدم شبكة CAN الحالة السائدة (الصفر المنطقي بجهد تفاضلي ٢ فولت) والحالة المتنحية (الواحد بجهد صفر فولت)؛ وإذا أرسلت عقدتان معاً، يفوز المعرف الرقمي الأصغر.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_5",
    "titleEn": "[MEDIUM] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Analysis 5",
    "titleAr": "[مستوى متوسط] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - تحليل 5",
    "questionEn": "[Question 5] When analyzing hardware-software integration and operational control for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O, identify the correct engineering relationship:",
    "questionAr": "[السؤال 5] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
    "correctAnswerAr": "يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
    "explanationEn": "Engineering Analysis: The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
    "explanationAr": "التحليل الهندسي المعتمد: يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_6",
    "titleEn": "[MEDIUM] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Analysis 6",
    "titleAr": "[مستوى متوسط] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - تحليل 6",
    "questionEn": "[Question 6] When analyzing hardware-software integration and operational control for NVIC Interrupt Handling, Preemption Priorities & Subpriorities, identify the correct engineering relationship:",
    "questionAr": "[السؤال 6] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs)."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs).",
    "correctAnswerAr": "يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن).",
    "explanationEn": "Engineering Analysis: NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs).",
    "explanationAr": "التحليل الهندسي المعتمد: يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_7",
    "titleEn": "[MEDIUM] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Analysis 7",
    "titleAr": "[مستوى متوسط] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - تحليل 7",
    "questionEn": "[Question 7] When analyzing hardware-software integration and operational control for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion, identify the correct engineering relationship:",
    "questionAr": "[السؤال 7] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
    "correctAnswerAr": "يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
    "explanationEn": "Engineering Analysis: Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
    "explanationAr": "التحليل الهندسي المعتمد: يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_8",
    "titleEn": "[MEDIUM] CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers - Analysis 8",
    "titleAr": "[مستوى متوسط] بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة - تحليل 8",
    "questionEn": "[Question 8] When analyzing hardware-software integration and operational control for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers, identify the correct engineering relationship:",
    "questionAr": "[السؤال 8] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "CAN bus logic uses dominant (logic 0, $V_{diff} \\approx 2.0\\ V$) and recessive (logic 1, $V_{diff} \\approx 0.0\\ V$) states; if two nodes transmit simultaneously, the lower numerical ID wins arbitration.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "تستخدم شبكة CAN الحالة السائدة (الصفر المنطقي بجهد تفاضلي ٢ فولت) والحالة المتنحية (الواحد بجهد صفر فولت)؛ وإذا أرسلت عقدتان معاً، يفوز المعرف الرقمي الأصغر.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "CAN bus logic uses dominant (logic 0, $V_{diff} \\approx 2.0\\ V$) and recessive (logic 1, $V_{diff} \\approx 0.0\\ V$) states; if two nodes transmit simultaneously, the lower numerical ID wins arbitration.",
    "correctAnswerAr": "تستخدم شبكة CAN الحالة السائدة (الصفر المنطقي بجهد تفاضلي ٢ فولت) والحالة المتنحية (الواحد بجهد صفر فولت)؛ وإذا أرسلت عقدتان معاً، يفوز المعرف الرقمي الأصغر.",
    "explanationEn": "Engineering Analysis: CAN bus logic uses dominant (logic 0, $V_{diff} \\approx 2.0\\ V$) and recessive (logic 1, $V_{diff} \\approx 0.0\\ V$) states; if two nodes transmit simultaneously, the lower numerical ID wins arbitration.",
    "explanationAr": "التحليل الهندسي المعتمد: تستخدم شبكة CAN الحالة السائدة (الصفر المنطقي بجهد تفاضلي ٢ فولت) والحالة المتنحية (الواحد بجهد صفر فولت)؛ وإذا أرسلت عقدتان معاً، يفوز المعرف الرقمي الأصغر.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_9",
    "titleEn": "[MEDIUM] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Analysis 9",
    "titleAr": "[مستوى متوسط] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - تحليل 9",
    "questionEn": "[Question 9] When analyzing hardware-software integration and operational control for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O, identify the correct engineering relationship:",
    "questionAr": "[السؤال 9] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
    "correctAnswerAr": "يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
    "explanationEn": "Engineering Analysis: The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
    "explanationAr": "التحليل الهندسي المعتمد: يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_10",
    "titleEn": "[MEDIUM] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Analysis 10",
    "titleAr": "[مستوى متوسط] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - تحليل 10",
    "questionEn": "[Question 10] When analyzing hardware-software integration and operational control for NVIC Interrupt Handling, Preemption Priorities & Subpriorities, identify the correct engineering relationship:",
    "questionAr": "[السؤال 10] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs)."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs).",
    "correctAnswerAr": "يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن).",
    "explanationEn": "Engineering Analysis: NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs).",
    "explanationAr": "التحليل الهندسي المعتمد: يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_11",
    "titleEn": "[MEDIUM] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Analysis 11",
    "titleAr": "[مستوى متوسط] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - تحليل 11",
    "questionEn": "[Question 11] When analyzing hardware-software integration and operational control for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion, identify the correct engineering relationship:",
    "questionAr": "[السؤال 11] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
    "correctAnswerAr": "يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
    "explanationEn": "Engineering Analysis: Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
    "explanationAr": "التحليل الهندسي المعتمد: يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_12",
    "titleEn": "[MEDIUM] CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers - Analysis 12",
    "titleAr": "[مستوى متوسط] بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة - تحليل 12",
    "questionEn": "[Question 12] When analyzing hardware-software integration and operational control for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers, identify the correct engineering relationship:",
    "questionAr": "[السؤال 12] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "CAN bus logic uses dominant (logic 0, $V_{diff} \\approx 2.0\\ V$) and recessive (logic 1, $V_{diff} \\approx 0.0\\ V$) states; if two nodes transmit simultaneously, the lower numerical ID wins arbitration.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "تستخدم شبكة CAN الحالة السائدة (الصفر المنطقي بجهد تفاضلي ٢ فولت) والحالة المتنحية (الواحد بجهد صفر فولت)؛ وإذا أرسلت عقدتان معاً، يفوز المعرف الرقمي الأصغر.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "CAN bus logic uses dominant (logic 0, $V_{diff} \\approx 2.0\\ V$) and recessive (logic 1, $V_{diff} \\approx 0.0\\ V$) states; if two nodes transmit simultaneously, the lower numerical ID wins arbitration.",
    "correctAnswerAr": "تستخدم شبكة CAN الحالة السائدة (الصفر المنطقي بجهد تفاضلي ٢ فولت) والحالة المتنحية (الواحد بجهد صفر فولت)؛ وإذا أرسلت عقدتان معاً، يفوز المعرف الرقمي الأصغر.",
    "explanationEn": "Engineering Analysis: CAN bus logic uses dominant (logic 0, $V_{diff} \\approx 2.0\\ V$) and recessive (logic 1, $V_{diff} \\approx 0.0\\ V$) states; if two nodes transmit simultaneously, the lower numerical ID wins arbitration.",
    "explanationAr": "التحليل الهندسي المعتمد: تستخدم شبكة CAN الحالة السائدة (الصفر المنطقي بجهد تفاضلي ٢ فولت) والحالة المتنحية (الواحد بجهد صفر فولت)؛ وإذا أرسلت عقدتان معاً، يفوز المعرف الرقمي الأصغر.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_13",
    "titleEn": "[MEDIUM] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Analysis 13",
    "titleAr": "[مستوى متوسط] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - تحليل 13",
    "questionEn": "[Question 13] When analyzing hardware-software integration and operational control for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O, identify the correct engineering relationship:",
    "questionAr": "[السؤال 13] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
    "correctAnswerAr": "يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
    "explanationEn": "Engineering Analysis: The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
    "explanationAr": "التحليل الهندسي المعتمد: يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_14",
    "titleEn": "[MEDIUM] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Analysis 14",
    "titleAr": "[مستوى متوسط] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - تحليل 14",
    "questionEn": "[Question 14] When analyzing hardware-software integration and operational control for NVIC Interrupt Handling, Preemption Priorities & Subpriorities, identify the correct engineering relationship:",
    "questionAr": "[السؤال 14] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs)."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs).",
    "correctAnswerAr": "يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن).",
    "explanationEn": "Engineering Analysis: NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs).",
    "explanationAr": "التحليل الهندسي المعتمد: يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_15",
    "titleEn": "[MEDIUM] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Analysis 15",
    "titleAr": "[مستوى متوسط] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - تحليل 15",
    "questionEn": "[Question 15] When analyzing hardware-software integration and operational control for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion, identify the correct engineering relationship:",
    "questionAr": "[السؤال 15] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
    "correctAnswerAr": "يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
    "explanationEn": "Engineering Analysis: Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
    "explanationAr": "التحليل الهندسي المعتمد: يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_16",
    "titleEn": "[MEDIUM] CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers - Analysis 16",
    "titleAr": "[مستوى متوسط] بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة - تحليل 16",
    "questionEn": "[Question 16] When analyzing hardware-software integration and operational control for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers, identify the correct engineering relationship:",
    "questionAr": "[السؤال 16] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "CAN bus logic uses dominant (logic 0, $V_{diff} \\approx 2.0\\ V$) and recessive (logic 1, $V_{diff} \\approx 0.0\\ V$) states; if two nodes transmit simultaneously, the lower numerical ID wins arbitration.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تستخدم شبكة CAN الحالة السائدة (الصفر المنطقي بجهد تفاضلي ٢ فولت) والحالة المتنحية (الواحد بجهد صفر فولت)؛ وإذا أرسلت عقدتان معاً، يفوز المعرف الرقمي الأصغر.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "CAN bus logic uses dominant (logic 0, $V_{diff} \\approx 2.0\\ V$) and recessive (logic 1, $V_{diff} \\approx 0.0\\ V$) states; if two nodes transmit simultaneously, the lower numerical ID wins arbitration.",
    "correctAnswerAr": "تستخدم شبكة CAN الحالة السائدة (الصفر المنطقي بجهد تفاضلي ٢ فولت) والحالة المتنحية (الواحد بجهد صفر فولت)؛ وإذا أرسلت عقدتان معاً، يفوز المعرف الرقمي الأصغر.",
    "explanationEn": "Engineering Analysis: CAN bus logic uses dominant (logic 0, $V_{diff} \\approx 2.0\\ V$) and recessive (logic 1, $V_{diff} \\approx 0.0\\ V$) states; if two nodes transmit simultaneously, the lower numerical ID wins arbitration.",
    "explanationAr": "التحليل الهندسي المعتمد: تستخدم شبكة CAN الحالة السائدة (الصفر المنطقي بجهد تفاضلي ٢ فولت) والحالة المتنحية (الواحد بجهد صفر فولت)؛ وإذا أرسلت عقدتان معاً، يفوز المعرف الرقمي الأصغر.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_17",
    "titleEn": "[MEDIUM] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Analysis 17",
    "titleAr": "[مستوى متوسط] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - تحليل 17",
    "questionEn": "[Question 17] When analyzing hardware-software integration and operational control for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O, identify the correct engineering relationship:",
    "questionAr": "[السؤال 17] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
    "correctAnswerAr": "يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
    "explanationEn": "Engineering Analysis: The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
    "explanationAr": "التحليل الهندسي المعتمد: يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_18",
    "titleEn": "[MEDIUM] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Analysis 18",
    "titleAr": "[مستوى متوسط] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - تحليل 18",
    "questionEn": "[Question 18] When analyzing hardware-software integration and operational control for NVIC Interrupt Handling, Preemption Priorities & Subpriorities, identify the correct engineering relationship:",
    "questionAr": "[السؤال 18] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs)."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs).",
    "correctAnswerAr": "يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن).",
    "explanationEn": "Engineering Analysis: NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs).",
    "explanationAr": "التحليل الهندسي المعتمد: يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_19",
    "titleEn": "[MEDIUM] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Analysis 19",
    "titleAr": "[مستوى متوسط] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - تحليل 19",
    "questionEn": "[Question 19] When analyzing hardware-software integration and operational control for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion, identify the correct engineering relationship:",
    "questionAr": "[السؤال 19] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
    "correctAnswerAr": "يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
    "explanationEn": "Engineering Analysis: Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
    "explanationAr": "التحليل الهندسي المعتمد: يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_20",
    "titleEn": "[MEDIUM] CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers - Analysis 20",
    "titleAr": "[مستوى متوسط] بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة - تحليل 20",
    "questionEn": "[Question 20] When analyzing hardware-software integration and operational control for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers, identify the correct engineering relationship:",
    "questionAr": "[السؤال 20] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "CAN bus logic uses dominant (logic 0, $V_{diff} \\approx 2.0\\ V$) and recessive (logic 1, $V_{diff} \\approx 0.0\\ V$) states; if two nodes transmit simultaneously, the lower numerical ID wins arbitration.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "تستخدم شبكة CAN الحالة السائدة (الصفر المنطقي بجهد تفاضلي ٢ فولت) والحالة المتنحية (الواحد بجهد صفر فولت)؛ وإذا أرسلت عقدتان معاً، يفوز المعرف الرقمي الأصغر.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "CAN bus logic uses dominant (logic 0, $V_{diff} \\approx 2.0\\ V$) and recessive (logic 1, $V_{diff} \\approx 0.0\\ V$) states; if two nodes transmit simultaneously, the lower numerical ID wins arbitration.",
    "correctAnswerAr": "تستخدم شبكة CAN الحالة السائدة (الصفر المنطقي بجهد تفاضلي ٢ فولت) والحالة المتنحية (الواحد بجهد صفر فولت)؛ وإذا أرسلت عقدتان معاً، يفوز المعرف الرقمي الأصغر.",
    "explanationEn": "Engineering Analysis: CAN bus logic uses dominant (logic 0, $V_{diff} \\approx 2.0\\ V$) and recessive (logic 1, $V_{diff} \\approx 0.0\\ V$) states; if two nodes transmit simultaneously, the lower numerical ID wins arbitration.",
    "explanationAr": "التحليل الهندسي المعتمد: تستخدم شبكة CAN الحالة السائدة (الصفر المنطقي بجهد تفاضلي ٢ فولت) والحالة المتنحية (الواحد بجهد صفر فولت)؛ وإذا أرسلت عقدتان معاً، يفوز المعرف الرقمي الأصغر.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_21",
    "titleEn": "[MEDIUM] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Analysis 21",
    "titleAr": "[مستوى متوسط] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - تحليل 21",
    "questionEn": "[Question 21] When analyzing hardware-software integration and operational control for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O, identify the correct engineering relationship:",
    "questionAr": "[السؤال 21] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
    "correctAnswerAr": "يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
    "explanationEn": "Engineering Analysis: The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
    "explanationAr": "التحليل الهندسي المعتمد: يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_22",
    "titleEn": "[MEDIUM] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Analysis 22",
    "titleAr": "[مستوى متوسط] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - تحليل 22",
    "questionEn": "[Question 22] When analyzing hardware-software integration and operational control for NVIC Interrupt Handling, Preemption Priorities & Subpriorities, identify the correct engineering relationship:",
    "questionAr": "[السؤال 22] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs)."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs).",
    "correctAnswerAr": "يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن).",
    "explanationEn": "Engineering Analysis: NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs).",
    "explanationAr": "التحليل الهندسي المعتمد: يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_23",
    "titleEn": "[MEDIUM] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Analysis 23",
    "titleAr": "[مستوى متوسط] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - تحليل 23",
    "questionEn": "[Question 23] When analyzing hardware-software integration and operational control for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion, identify the correct engineering relationship:",
    "questionAr": "[السؤال 23] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
    "correctAnswerAr": "يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
    "explanationEn": "Engineering Analysis: Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
    "explanationAr": "التحليل الهندسي المعتمد: يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_24",
    "titleEn": "[MEDIUM] CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers - Analysis 24",
    "titleAr": "[مستوى متوسط] بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة - تحليل 24",
    "questionEn": "[Question 24] When analyzing hardware-software integration and operational control for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers, identify the correct engineering relationship:",
    "questionAr": "[السؤال 24] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "CAN bus logic uses dominant (logic 0, $V_{diff} \\approx 2.0\\ V$) and recessive (logic 1, $V_{diff} \\approx 0.0\\ V$) states; if two nodes transmit simultaneously, the lower numerical ID wins arbitration.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "تستخدم شبكة CAN الحالة السائدة (الصفر المنطقي بجهد تفاضلي ٢ فولت) والحالة المتنحية (الواحد بجهد صفر فولت)؛ وإذا أرسلت عقدتان معاً، يفوز المعرف الرقمي الأصغر.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "CAN bus logic uses dominant (logic 0, $V_{diff} \\approx 2.0\\ V$) and recessive (logic 1, $V_{diff} \\approx 0.0\\ V$) states; if two nodes transmit simultaneously, the lower numerical ID wins arbitration.",
    "correctAnswerAr": "تستخدم شبكة CAN الحالة السائدة (الصفر المنطقي بجهد تفاضلي ٢ فولت) والحالة المتنحية (الواحد بجهد صفر فولت)؛ وإذا أرسلت عقدتان معاً، يفوز المعرف الرقمي الأصغر.",
    "explanationEn": "Engineering Analysis: CAN bus logic uses dominant (logic 0, $V_{diff} \\approx 2.0\\ V$) and recessive (logic 1, $V_{diff} \\approx 0.0\\ V$) states; if two nodes transmit simultaneously, the lower numerical ID wins arbitration.",
    "explanationAr": "التحليل الهندسي المعتمد: تستخدم شبكة CAN الحالة السائدة (الصفر المنطقي بجهد تفاضلي ٢ فولت) والحالة المتنحية (الواحد بجهد صفر فولت)؛ وإذا أرسلت عقدتان معاً، يفوز المعرف الرقمي الأصغر.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_25",
    "titleEn": "[MEDIUM] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Analysis 25",
    "titleAr": "[مستوى متوسط] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - تحليل 25",
    "questionEn": "[Question 25] When analyzing hardware-software integration and operational control for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O, identify the correct engineering relationship:",
    "questionAr": "[السؤال 25] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
    "correctAnswerAr": "يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
    "explanationEn": "Engineering Analysis: The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
    "explanationAr": "التحليل الهندسي المعتمد: يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_26",
    "titleEn": "[MEDIUM] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Analysis 26",
    "titleAr": "[مستوى متوسط] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - تحليل 26",
    "questionEn": "[Question 26] When analyzing hardware-software integration and operational control for NVIC Interrupt Handling, Preemption Priorities & Subpriorities, identify the correct engineering relationship:",
    "questionAr": "[السؤال 26] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs)."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs).",
    "correctAnswerAr": "يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن).",
    "explanationEn": "Engineering Analysis: NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs).",
    "explanationAr": "التحليل الهندسي المعتمد: يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_27",
    "titleEn": "[MEDIUM] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Analysis 27",
    "titleAr": "[مستوى متوسط] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - تحليل 27",
    "questionEn": "[Question 27] When analyzing hardware-software integration and operational control for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion, identify the correct engineering relationship:",
    "questionAr": "[السؤال 27] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
    "correctAnswerAr": "يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
    "explanationEn": "Engineering Analysis: Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
    "explanationAr": "التحليل الهندسي المعتمد: يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_28",
    "titleEn": "[MEDIUM] CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers - Analysis 28",
    "titleAr": "[مستوى متوسط] بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة - تحليل 28",
    "questionEn": "[Question 28] When analyzing hardware-software integration and operational control for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers, identify the correct engineering relationship:",
    "questionAr": "[السؤال 28] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "CAN bus logic uses dominant (logic 0, $V_{diff} \\approx 2.0\\ V$) and recessive (logic 1, $V_{diff} \\approx 0.0\\ V$) states; if two nodes transmit simultaneously, the lower numerical ID wins arbitration.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تستخدم شبكة CAN الحالة السائدة (الصفر المنطقي بجهد تفاضلي ٢ فولت) والحالة المتنحية (الواحد بجهد صفر فولت)؛ وإذا أرسلت عقدتان معاً، يفوز المعرف الرقمي الأصغر.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "CAN bus logic uses dominant (logic 0, $V_{diff} \\approx 2.0\\ V$) and recessive (logic 1, $V_{diff} \\approx 0.0\\ V$) states; if two nodes transmit simultaneously, the lower numerical ID wins arbitration.",
    "correctAnswerAr": "تستخدم شبكة CAN الحالة السائدة (الصفر المنطقي بجهد تفاضلي ٢ فولت) والحالة المتنحية (الواحد بجهد صفر فولت)؛ وإذا أرسلت عقدتان معاً، يفوز المعرف الرقمي الأصغر.",
    "explanationEn": "Engineering Analysis: CAN bus logic uses dominant (logic 0, $V_{diff} \\approx 2.0\\ V$) and recessive (logic 1, $V_{diff} \\approx 0.0\\ V$) states; if two nodes transmit simultaneously, the lower numerical ID wins arbitration.",
    "explanationAr": "التحليل الهندسي المعتمد: تستخدم شبكة CAN الحالة السائدة (الصفر المنطقي بجهد تفاضلي ٢ فولت) والحالة المتنحية (الواحد بجهد صفر فولت)؛ وإذا أرسلت عقدتان معاً، يفوز المعرف الرقمي الأصغر.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_29",
    "titleEn": "[MEDIUM] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Analysis 29",
    "titleAr": "[مستوى متوسط] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - تحليل 29",
    "questionEn": "[Question 29] When analyzing hardware-software integration and operational control for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O, identify the correct engineering relationship:",
    "questionAr": "[السؤال 29] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
    "correctAnswerAr": "يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
    "explanationEn": "Engineering Analysis: The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
    "explanationAr": "التحليل الهندسي المعتمد: يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_30",
    "titleEn": "[MEDIUM] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Analysis 30",
    "titleAr": "[مستوى متوسط] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - تحليل 30",
    "questionEn": "[Question 30] When analyzing hardware-software integration and operational control for NVIC Interrupt Handling, Preemption Priorities & Subpriorities, identify the correct engineering relationship:",
    "questionAr": "[السؤال 30] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs)."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs).",
    "correctAnswerAr": "يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن).",
    "explanationEn": "Engineering Analysis: NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs).",
    "explanationAr": "التحليل الهندسي المعتمد: يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_31",
    "titleEn": "[MEDIUM] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Analysis 31",
    "titleAr": "[مستوى متوسط] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - تحليل 31",
    "questionEn": "[Question 31] When analyzing hardware-software integration and operational control for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion, identify the correct engineering relationship:",
    "questionAr": "[السؤال 31] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
    "correctAnswerAr": "يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
    "explanationEn": "Engineering Analysis: Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
    "explanationAr": "التحليل الهندسي المعتمد: يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_32",
    "titleEn": "[MEDIUM] CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers - Analysis 32",
    "titleAr": "[مستوى متوسط] بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة - تحليل 32",
    "questionEn": "[Question 32] When analyzing hardware-software integration and operational control for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers, identify the correct engineering relationship:",
    "questionAr": "[السؤال 32] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "CAN bus logic uses dominant (logic 0, $V_{diff} \\approx 2.0\\ V$) and recessive (logic 1, $V_{diff} \\approx 0.0\\ V$) states; if two nodes transmit simultaneously, the lower numerical ID wins arbitration.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "تستخدم شبكة CAN الحالة السائدة (الصفر المنطقي بجهد تفاضلي ٢ فولت) والحالة المتنحية (الواحد بجهد صفر فولت)؛ وإذا أرسلت عقدتان معاً، يفوز المعرف الرقمي الأصغر.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "CAN bus logic uses dominant (logic 0, $V_{diff} \\approx 2.0\\ V$) and recessive (logic 1, $V_{diff} \\approx 0.0\\ V$) states; if two nodes transmit simultaneously, the lower numerical ID wins arbitration.",
    "correctAnswerAr": "تستخدم شبكة CAN الحالة السائدة (الصفر المنطقي بجهد تفاضلي ٢ فولت) والحالة المتنحية (الواحد بجهد صفر فولت)؛ وإذا أرسلت عقدتان معاً، يفوز المعرف الرقمي الأصغر.",
    "explanationEn": "Engineering Analysis: CAN bus logic uses dominant (logic 0, $V_{diff} \\approx 2.0\\ V$) and recessive (logic 1, $V_{diff} \\approx 0.0\\ V$) states; if two nodes transmit simultaneously, the lower numerical ID wins arbitration.",
    "explanationAr": "التحليل الهندسي المعتمد: تستخدم شبكة CAN الحالة السائدة (الصفر المنطقي بجهد تفاضلي ٢ فولت) والحالة المتنحية (الواحد بجهد صفر فولت)؛ وإذا أرسلت عقدتان معاً، يفوز المعرف الرقمي الأصغر.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_33",
    "titleEn": "[MEDIUM] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Analysis 33",
    "titleAr": "[مستوى متوسط] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - تحليل 33",
    "questionEn": "[Question 33] When analyzing hardware-software integration and operational control for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O, identify the correct engineering relationship:",
    "questionAr": "[السؤال 33] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
    "correctAnswerAr": "يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
    "explanationEn": "Engineering Analysis: The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
    "explanationAr": "التحليل الهندسي المعتمد: يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_34",
    "titleEn": "[MEDIUM] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Analysis 34",
    "titleAr": "[مستوى متوسط] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - تحليل 34",
    "questionEn": "[Question 34] When analyzing hardware-software integration and operational control for NVIC Interrupt Handling, Preemption Priorities & Subpriorities, identify the correct engineering relationship:",
    "questionAr": "[السؤال 34] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs)."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs).",
    "correctAnswerAr": "يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن).",
    "explanationEn": "Engineering Analysis: NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs).",
    "explanationAr": "التحليل الهندسي المعتمد: يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_35",
    "titleEn": "[MEDIUM] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Analysis 35",
    "titleAr": "[مستوى متوسط] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - تحليل 35",
    "questionEn": "[Question 35] When analyzing hardware-software integration and operational control for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion, identify the correct engineering relationship:",
    "questionAr": "[السؤال 35] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
    "correctAnswerAr": "يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
    "explanationEn": "Engineering Analysis: Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
    "explanationAr": "التحليل الهندسي المعتمد: يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_36",
    "titleEn": "[MEDIUM] CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers - Analysis 36",
    "titleAr": "[مستوى متوسط] بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة - تحليل 36",
    "questionEn": "[Question 36] When analyzing hardware-software integration and operational control for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers, identify the correct engineering relationship:",
    "questionAr": "[السؤال 36] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "CAN bus logic uses dominant (logic 0, $V_{diff} \\approx 2.0\\ V$) and recessive (logic 1, $V_{diff} \\approx 0.0\\ V$) states; if two nodes transmit simultaneously, the lower numerical ID wins arbitration.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "تستخدم شبكة CAN الحالة السائدة (الصفر المنطقي بجهد تفاضلي ٢ فولت) والحالة المتنحية (الواحد بجهد صفر فولت)؛ وإذا أرسلت عقدتان معاً، يفوز المعرف الرقمي الأصغر.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "CAN bus logic uses dominant (logic 0, $V_{diff} \\approx 2.0\\ V$) and recessive (logic 1, $V_{diff} \\approx 0.0\\ V$) states; if two nodes transmit simultaneously, the lower numerical ID wins arbitration.",
    "correctAnswerAr": "تستخدم شبكة CAN الحالة السائدة (الصفر المنطقي بجهد تفاضلي ٢ فولت) والحالة المتنحية (الواحد بجهد صفر فولت)؛ وإذا أرسلت عقدتان معاً، يفوز المعرف الرقمي الأصغر.",
    "explanationEn": "Engineering Analysis: CAN bus logic uses dominant (logic 0, $V_{diff} \\approx 2.0\\ V$) and recessive (logic 1, $V_{diff} \\approx 0.0\\ V$) states; if two nodes transmit simultaneously, the lower numerical ID wins arbitration.",
    "explanationAr": "التحليل الهندسي المعتمد: تستخدم شبكة CAN الحالة السائدة (الصفر المنطقي بجهد تفاضلي ٢ فولت) والحالة المتنحية (الواحد بجهد صفر فولت)؛ وإذا أرسلت عقدتان معاً، يفوز المعرف الرقمي الأصغر.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_37",
    "titleEn": "[MEDIUM] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Analysis 37",
    "titleAr": "[مستوى متوسط] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - تحليل 37",
    "questionEn": "[Question 37] When analyzing hardware-software integration and operational control for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O, identify the correct engineering relationship:",
    "questionAr": "[السؤال 37] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
    "correctAnswerAr": "يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
    "explanationEn": "Engineering Analysis: The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
    "explanationAr": "التحليل الهندسي المعتمد: يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_38",
    "titleEn": "[MEDIUM] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Analysis 38",
    "titleAr": "[مستوى متوسط] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - تحليل 38",
    "questionEn": "[Question 38] When analyzing hardware-software integration and operational control for NVIC Interrupt Handling, Preemption Priorities & Subpriorities, identify the correct engineering relationship:",
    "questionAr": "[السؤال 38] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs)."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs).",
    "correctAnswerAr": "يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن).",
    "explanationEn": "Engineering Analysis: NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs).",
    "explanationAr": "التحليل الهندسي المعتمد: يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_39",
    "titleEn": "[MEDIUM] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Analysis 39",
    "titleAr": "[مستوى متوسط] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - تحليل 39",
    "questionEn": "[Question 39] When analyzing hardware-software integration and operational control for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion, identify the correct engineering relationship:",
    "questionAr": "[السؤال 39] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
    "correctAnswerAr": "يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
    "explanationEn": "Engineering Analysis: Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
    "explanationAr": "التحليل الهندسي المعتمد: يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_40",
    "titleEn": "[MEDIUM] CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers - Analysis 40",
    "titleAr": "[مستوى متوسط] بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة - تحليل 40",
    "questionEn": "[Question 40] When analyzing hardware-software integration and operational control for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers, identify the correct engineering relationship:",
    "questionAr": "[السؤال 40] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "CAN bus logic uses dominant (logic 0, $V_{diff} \\approx 2.0\\ V$) and recessive (logic 1, $V_{diff} \\approx 0.0\\ V$) states; if two nodes transmit simultaneously, the lower numerical ID wins arbitration.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تستخدم شبكة CAN الحالة السائدة (الصفر المنطقي بجهد تفاضلي ٢ فولت) والحالة المتنحية (الواحد بجهد صفر فولت)؛ وإذا أرسلت عقدتان معاً، يفوز المعرف الرقمي الأصغر.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "CAN bus logic uses dominant (logic 0, $V_{diff} \\approx 2.0\\ V$) and recessive (logic 1, $V_{diff} \\approx 0.0\\ V$) states; if two nodes transmit simultaneously, the lower numerical ID wins arbitration.",
    "correctAnswerAr": "تستخدم شبكة CAN الحالة السائدة (الصفر المنطقي بجهد تفاضلي ٢ فولت) والحالة المتنحية (الواحد بجهد صفر فولت)؛ وإذا أرسلت عقدتان معاً، يفوز المعرف الرقمي الأصغر.",
    "explanationEn": "Engineering Analysis: CAN bus logic uses dominant (logic 0, $V_{diff} \\approx 2.0\\ V$) and recessive (logic 1, $V_{diff} \\approx 0.0\\ V$) states; if two nodes transmit simultaneously, the lower numerical ID wins arbitration.",
    "explanationAr": "التحليل الهندسي المعتمد: تستخدم شبكة CAN الحالة السائدة (الصفر المنطقي بجهد تفاضلي ٢ فولت) والحالة المتنحية (الواحد بجهد صفر فولت)؛ وإذا أرسلت عقدتان معاً، يفوز المعرف الرقمي الأصغر.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_41",
    "titleEn": "[MEDIUM] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Analysis 41",
    "titleAr": "[مستوى متوسط] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - تحليل 41",
    "questionEn": "[Question 41] When analyzing hardware-software integration and operational control for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O, identify the correct engineering relationship:",
    "questionAr": "[السؤال 41] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
    "correctAnswerAr": "يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
    "explanationEn": "Engineering Analysis: The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
    "explanationAr": "التحليل الهندسي المعتمد: يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_42",
    "titleEn": "[MEDIUM] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Analysis 42",
    "titleAr": "[مستوى متوسط] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - تحليل 42",
    "questionEn": "[Question 42] When analyzing hardware-software integration and operational control for NVIC Interrupt Handling, Preemption Priorities & Subpriorities, identify the correct engineering relationship:",
    "questionAr": "[السؤال 42] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs)."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs).",
    "correctAnswerAr": "يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن).",
    "explanationEn": "Engineering Analysis: NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs).",
    "explanationAr": "التحليل الهندسي المعتمد: يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_43",
    "titleEn": "[MEDIUM] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Analysis 43",
    "titleAr": "[مستوى متوسط] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - تحليل 43",
    "questionEn": "[Question 43] When analyzing hardware-software integration and operational control for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion, identify the correct engineering relationship:",
    "questionAr": "[السؤال 43] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
    "correctAnswerAr": "يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
    "explanationEn": "Engineering Analysis: Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
    "explanationAr": "التحليل الهندسي المعتمد: يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_44",
    "titleEn": "[MEDIUM] CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers - Analysis 44",
    "titleAr": "[مستوى متوسط] بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة - تحليل 44",
    "questionEn": "[Question 44] When analyzing hardware-software integration and operational control for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers, identify the correct engineering relationship:",
    "questionAr": "[السؤال 44] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "CAN bus logic uses dominant (logic 0, $V_{diff} \\approx 2.0\\ V$) and recessive (logic 1, $V_{diff} \\approx 0.0\\ V$) states; if two nodes transmit simultaneously, the lower numerical ID wins arbitration.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "تستخدم شبكة CAN الحالة السائدة (الصفر المنطقي بجهد تفاضلي ٢ فولت) والحالة المتنحية (الواحد بجهد صفر فولت)؛ وإذا أرسلت عقدتان معاً، يفوز المعرف الرقمي الأصغر.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "CAN bus logic uses dominant (logic 0, $V_{diff} \\approx 2.0\\ V$) and recessive (logic 1, $V_{diff} \\approx 0.0\\ V$) states; if two nodes transmit simultaneously, the lower numerical ID wins arbitration.",
    "correctAnswerAr": "تستخدم شبكة CAN الحالة السائدة (الصفر المنطقي بجهد تفاضلي ٢ فولت) والحالة المتنحية (الواحد بجهد صفر فولت)؛ وإذا أرسلت عقدتان معاً، يفوز المعرف الرقمي الأصغر.",
    "explanationEn": "Engineering Analysis: CAN bus logic uses dominant (logic 0, $V_{diff} \\approx 2.0\\ V$) and recessive (logic 1, $V_{diff} \\approx 0.0\\ V$) states; if two nodes transmit simultaneously, the lower numerical ID wins arbitration.",
    "explanationAr": "التحليل الهندسي المعتمد: تستخدم شبكة CAN الحالة السائدة (الصفر المنطقي بجهد تفاضلي ٢ فولت) والحالة المتنحية (الواحد بجهد صفر فولت)؛ وإذا أرسلت عقدتان معاً، يفوز المعرف الرقمي الأصغر.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_45",
    "titleEn": "[MEDIUM] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Analysis 45",
    "titleAr": "[مستوى متوسط] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - تحليل 45",
    "questionEn": "[Question 45] When analyzing hardware-software integration and operational control for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O, identify the correct engineering relationship:",
    "questionAr": "[السؤال 45] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
    "correctAnswerAr": "يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
    "explanationEn": "Engineering Analysis: The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
    "explanationAr": "التحليل الهندسي المعتمد: يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_46",
    "titleEn": "[MEDIUM] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Analysis 46",
    "titleAr": "[مستوى متوسط] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - تحليل 46",
    "questionEn": "[Question 46] When analyzing hardware-software integration and operational control for NVIC Interrupt Handling, Preemption Priorities & Subpriorities, identify the correct engineering relationship:",
    "questionAr": "[السؤال 46] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs)."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs).",
    "correctAnswerAr": "يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن).",
    "explanationEn": "Engineering Analysis: NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs).",
    "explanationAr": "التحليل الهندسي المعتمد: يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_47",
    "titleEn": "[MEDIUM] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Analysis 47",
    "titleAr": "[مستوى متوسط] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - تحليل 47",
    "questionEn": "[Question 47] When analyzing hardware-software integration and operational control for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion, identify the correct engineering relationship:",
    "questionAr": "[السؤال 47] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
    "correctAnswerAr": "يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
    "explanationEn": "Engineering Analysis: Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
    "explanationAr": "التحليل الهندسي المعتمد: يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_48",
    "titleEn": "[MEDIUM] CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers - Analysis 48",
    "titleAr": "[مستوى متوسط] بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة - تحليل 48",
    "questionEn": "[Question 48] When analyzing hardware-software integration and operational control for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers, identify the correct engineering relationship:",
    "questionAr": "[السؤال 48] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "CAN bus logic uses dominant (logic 0, $V_{diff} \\approx 2.0\\ V$) and recessive (logic 1, $V_{diff} \\approx 0.0\\ V$) states; if two nodes transmit simultaneously, the lower numerical ID wins arbitration.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "تستخدم شبكة CAN الحالة السائدة (الصفر المنطقي بجهد تفاضلي ٢ فولت) والحالة المتنحية (الواحد بجهد صفر فولت)؛ وإذا أرسلت عقدتان معاً، يفوز المعرف الرقمي الأصغر.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "CAN bus logic uses dominant (logic 0, $V_{diff} \\approx 2.0\\ V$) and recessive (logic 1, $V_{diff} \\approx 0.0\\ V$) states; if two nodes transmit simultaneously, the lower numerical ID wins arbitration.",
    "correctAnswerAr": "تستخدم شبكة CAN الحالة السائدة (الصفر المنطقي بجهد تفاضلي ٢ فولت) والحالة المتنحية (الواحد بجهد صفر فولت)؛ وإذا أرسلت عقدتان معاً، يفوز المعرف الرقمي الأصغر.",
    "explanationEn": "Engineering Analysis: CAN bus logic uses dominant (logic 0, $V_{diff} \\approx 2.0\\ V$) and recessive (logic 1, $V_{diff} \\approx 0.0\\ V$) states; if two nodes transmit simultaneously, the lower numerical ID wins arbitration.",
    "explanationAr": "التحليل الهندسي المعتمد: تستخدم شبكة CAN الحالة السائدة (الصفر المنطقي بجهد تفاضلي ٢ فولت) والحالة المتنحية (الواحد بجهد صفر فولت)؛ وإذا أرسلت عقدتان معاً، يفوز المعرف الرقمي الأصغر.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_49",
    "titleEn": "[MEDIUM] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Analysis 49",
    "titleAr": "[مستوى متوسط] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - تحليل 49",
    "questionEn": "[Question 49] When analyzing hardware-software integration and operational control for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O, identify the correct engineering relationship:",
    "questionAr": "[السؤال 49] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
    "correctAnswerAr": "يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
    "explanationEn": "Engineering Analysis: The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
    "explanationAr": "التحليل الهندسي المعتمد: يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_50",
    "titleEn": "[MEDIUM] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Analysis 50",
    "titleAr": "[مستوى متوسط] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - تحليل 50",
    "questionEn": "[Question 50] When analyzing hardware-software integration and operational control for NVIC Interrupt Handling, Preemption Priorities & Subpriorities, identify the correct engineering relationship:",
    "questionAr": "[السؤال 50] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs)."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs).",
    "correctAnswerAr": "يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن).",
    "explanationEn": "Engineering Analysis: NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs).",
    "explanationAr": "التحليل الهندسي المعتمد: يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_51",
    "titleEn": "[MEDIUM] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Analysis 51",
    "titleAr": "[مستوى متوسط] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - تحليل 51",
    "questionEn": "[Question 51] When analyzing hardware-software integration and operational control for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion, identify the correct engineering relationship:",
    "questionAr": "[السؤال 51] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
    "correctAnswerAr": "يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
    "explanationEn": "Engineering Analysis: Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
    "explanationAr": "التحليل الهندسي المعتمد: يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_52",
    "titleEn": "[MEDIUM] CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers - Analysis 52",
    "titleAr": "[مستوى متوسط] بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة - تحليل 52",
    "questionEn": "[Question 52] When analyzing hardware-software integration and operational control for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers, identify the correct engineering relationship:",
    "questionAr": "[السؤال 52] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "CAN bus logic uses dominant (logic 0, $V_{diff} \\approx 2.0\\ V$) and recessive (logic 1, $V_{diff} \\approx 0.0\\ V$) states; if two nodes transmit simultaneously, the lower numerical ID wins arbitration.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تستخدم شبكة CAN الحالة السائدة (الصفر المنطقي بجهد تفاضلي ٢ فولت) والحالة المتنحية (الواحد بجهد صفر فولت)؛ وإذا أرسلت عقدتان معاً، يفوز المعرف الرقمي الأصغر.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "CAN bus logic uses dominant (logic 0, $V_{diff} \\approx 2.0\\ V$) and recessive (logic 1, $V_{diff} \\approx 0.0\\ V$) states; if two nodes transmit simultaneously, the lower numerical ID wins arbitration.",
    "correctAnswerAr": "تستخدم شبكة CAN الحالة السائدة (الصفر المنطقي بجهد تفاضلي ٢ فولت) والحالة المتنحية (الواحد بجهد صفر فولت)؛ وإذا أرسلت عقدتان معاً، يفوز المعرف الرقمي الأصغر.",
    "explanationEn": "Engineering Analysis: CAN bus logic uses dominant (logic 0, $V_{diff} \\approx 2.0\\ V$) and recessive (logic 1, $V_{diff} \\approx 0.0\\ V$) states; if two nodes transmit simultaneously, the lower numerical ID wins arbitration.",
    "explanationAr": "التحليل الهندسي المعتمد: تستخدم شبكة CAN الحالة السائدة (الصفر المنطقي بجهد تفاضلي ٢ فولت) والحالة المتنحية (الواحد بجهد صفر فولت)؛ وإذا أرسلت عقدتان معاً، يفوز المعرف الرقمي الأصغر.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_53",
    "titleEn": "[MEDIUM] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Analysis 53",
    "titleAr": "[مستوى متوسط] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - تحليل 53",
    "questionEn": "[Question 53] When analyzing hardware-software integration and operational control for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O, identify the correct engineering relationship:",
    "questionAr": "[السؤال 53] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
    "correctAnswerAr": "يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
    "explanationEn": "Engineering Analysis: The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
    "explanationAr": "التحليل الهندسي المعتمد: يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_54",
    "titleEn": "[MEDIUM] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Analysis 54",
    "titleAr": "[مستوى متوسط] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - تحليل 54",
    "questionEn": "[Question 54] When analyzing hardware-software integration and operational control for NVIC Interrupt Handling, Preemption Priorities & Subpriorities, identify the correct engineering relationship:",
    "questionAr": "[السؤال 54] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs)."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs).",
    "correctAnswerAr": "يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن).",
    "explanationEn": "Engineering Analysis: NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs).",
    "explanationAr": "التحليل الهندسي المعتمد: يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_55",
    "titleEn": "[MEDIUM] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Analysis 55",
    "titleAr": "[مستوى متوسط] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - تحليل 55",
    "questionEn": "[Question 55] When analyzing hardware-software integration and operational control for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion, identify the correct engineering relationship:",
    "questionAr": "[السؤال 55] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
    "correctAnswerAr": "يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
    "explanationEn": "Engineering Analysis: Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
    "explanationAr": "التحليل الهندسي المعتمد: يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_56",
    "titleEn": "[MEDIUM] CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers - Analysis 56",
    "titleAr": "[مستوى متوسط] بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة - تحليل 56",
    "questionEn": "[Question 56] When analyzing hardware-software integration and operational control for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers, identify the correct engineering relationship:",
    "questionAr": "[السؤال 56] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "CAN bus logic uses dominant (logic 0, $V_{diff} \\approx 2.0\\ V$) and recessive (logic 1, $V_{diff} \\approx 0.0\\ V$) states; if two nodes transmit simultaneously, the lower numerical ID wins arbitration.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "تستخدم شبكة CAN الحالة السائدة (الصفر المنطقي بجهد تفاضلي ٢ فولت) والحالة المتنحية (الواحد بجهد صفر فولت)؛ وإذا أرسلت عقدتان معاً، يفوز المعرف الرقمي الأصغر.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "CAN bus logic uses dominant (logic 0, $V_{diff} \\approx 2.0\\ V$) and recessive (logic 1, $V_{diff} \\approx 0.0\\ V$) states; if two nodes transmit simultaneously, the lower numerical ID wins arbitration.",
    "correctAnswerAr": "تستخدم شبكة CAN الحالة السائدة (الصفر المنطقي بجهد تفاضلي ٢ فولت) والحالة المتنحية (الواحد بجهد صفر فولت)؛ وإذا أرسلت عقدتان معاً، يفوز المعرف الرقمي الأصغر.",
    "explanationEn": "Engineering Analysis: CAN bus logic uses dominant (logic 0, $V_{diff} \\approx 2.0\\ V$) and recessive (logic 1, $V_{diff} \\approx 0.0\\ V$) states; if two nodes transmit simultaneously, the lower numerical ID wins arbitration.",
    "explanationAr": "التحليل الهندسي المعتمد: تستخدم شبكة CAN الحالة السائدة (الصفر المنطقي بجهد تفاضلي ٢ فولت) والحالة المتنحية (الواحد بجهد صفر فولت)؛ وإذا أرسلت عقدتان معاً، يفوز المعرف الرقمي الأصغر.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_57",
    "titleEn": "[MEDIUM] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Analysis 57",
    "titleAr": "[مستوى متوسط] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - تحليل 57",
    "questionEn": "[Question 57] When analyzing hardware-software integration and operational control for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O, identify the correct engineering relationship:",
    "questionAr": "[السؤال 57] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
    "correctAnswerAr": "يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
    "explanationEn": "Engineering Analysis: The core register file contains 16 core registers (R0-R15), where R13 is the Stack Pointer (MSP/PSP), R14 is the Link Register (LR), and R15 is the Program Counter (PC).",
    "explanationAr": "التحليل الهندسي المعتمد: يحتوي ملف سجلات المعالج على ١٦ سجلاً أساسياً (R0-R15)، حيث يمثل R13 مؤشر المكدس، وR14 سجل الربط لحفظ عنوان العودة، وR15 عداد البرنامج.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_58",
    "titleEn": "[MEDIUM] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Analysis 58",
    "titleAr": "[مستوى متوسط] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - تحليل 58",
    "questionEn": "[Question 58] When analyzing hardware-software integration and operational control for NVIC Interrupt Handling, Preemption Priorities & Subpriorities, identify the correct engineering relationship:",
    "questionAr": "[السؤال 58] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs)."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs).",
    "correctAnswerAr": "يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن).",
    "explanationEn": "Engineering Analysis: NVIC priority grouping splits priority bits into preemption priority (determining which ISR can interrupt an executing ISR) and subpriority (determining execution order among pending simultaneous ISRs).",
    "explanationAr": "التحليل الهندسي المعتمد: يقسم تجميع أولويات NVIC خانات الأولوية إلى أولوية استباق (تحدد أي روتين يمكنه مقاطعة روتين جارٍ تنفيذه) وأولوية فرعية (لتحديد ترتيب التنفيذ عند التزامن).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch3_med_59",
    "titleEn": "[MEDIUM] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Analysis 59",
    "titleAr": "[مستوى متوسط] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - تحليل 59",
    "questionEn": "[Question 59] When analyzing hardware-software integration and operational control for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion, identify the correct engineering relationship:",
    "questionAr": "[السؤال 59] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
    "correctAnswerAr": "يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
    "explanationEn": "Engineering Analysis: Priority inversion occurs when a low-priority task holds a shared resource needed by a high-priority task while a medium task preempts the low task; FreeRTOS mutexes resolve this via Priority Inheritance.",
    "explanationAr": "التحليل الهندسي المعتمد: يحدث انعكاس الأولويات عندما تحجز مهمة منخفضة الأولوية مورداً مشتركاً تحتاجه مهمة عالية، بينما تستبقها مهمة متوسطة؛ وتعالج كائنات الميوتكس ذلك بتوريث الأولوية.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  }
],
  hots: [
  {
    "id": "th_robotics_ch3_hots_1",
    "titleEn": "[HOTS] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Advanced Synthesis 1",
    "titleAr": "[تفكير عليا] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - تركيب متقدم 1",
    "questionEn": "[Question 1 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O. Determine the mathematically validated result:",
    "questionAr": "[السؤال 1 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards."
    ],
    "optionsAr": [
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "correctAnswerAr": "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "explanationEn": "Detailed Quantitative Solution: To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_2",
    "titleEn": "[HOTS] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Advanced Synthesis 2",
    "titleAr": "[تفكير عليا] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - تركيب متقدم 2",
    "questionEn": "[Question 2 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for NVIC Interrupt Handling, Preemption Priorities & Subpriorities. Determine the mathematically validated result:",
    "questionAr": "[السؤال 2 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only."
    ],
    "optionsAr": [
      "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "correctAnswerAr": "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "explanationEn": "Detailed Quantitative Solution: In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_3",
    "titleEn": "[HOTS] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Advanced Synthesis 3",
    "titleAr": "[تفكير عليا] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - تركيب متقدم 3",
    "questionEn": "[Question 3 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion. Determine the mathematically validated result:",
    "questionAr": "[السؤال 3 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
    "correctAnswerAr": "في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
    "explanationEn": "Detailed Quantitative Solution: In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_4",
    "titleEn": "[HOTS] CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers - Advanced Synthesis 4",
    "titleAr": "[تفكير عليا] بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة - تركيب متقدم 4",
    "questionEn": "[Question 4 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers. Determine the mathematically validated result:",
    "questionAr": "[السؤال 4 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices."
    ],
    "optionsAr": [
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
    "correctAnswerAr": "شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
    "explanationEn": "Detailed Quantitative Solution: A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_5",
    "titleEn": "[HOTS] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Advanced Synthesis 5",
    "titleAr": "[تفكير عليا] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - تركيب متقدم 5",
    "questionEn": "[Question 5 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O. Determine the mathematically validated result:",
    "questionAr": "[السؤال 5 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "correctAnswerAr": "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "explanationEn": "Detailed Quantitative Solution: To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_6",
    "titleEn": "[HOTS] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Advanced Synthesis 6",
    "titleAr": "[تفكير عليا] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - تركيب متقدم 6",
    "questionEn": "[Question 6 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for NVIC Interrupt Handling, Preemption Priorities & Subpriorities. Determine the mathematically validated result:",
    "questionAr": "[السؤال 6 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "correctAnswerAr": "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "explanationEn": "Detailed Quantitative Solution: In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_7",
    "titleEn": "[HOTS] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Advanced Synthesis 7",
    "titleAr": "[تفكير عليا] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - تركيب متقدم 7",
    "questionEn": "[Question 7 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion. Determine the mathematically validated result:",
    "questionAr": "[السؤال 7 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light."
    ],
    "optionsAr": [
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
    "correctAnswerAr": "في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
    "explanationEn": "Detailed Quantitative Solution: In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_8",
    "titleEn": "[HOTS] CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers - Advanced Synthesis 8",
    "titleAr": "[تفكير عليا] بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة - تركيب متقدم 8",
    "questionEn": "[Question 8 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers. Determine the mathematically validated result:",
    "questionAr": "[السؤال 8 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages."
    ],
    "optionsAr": [
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
    "correctAnswerAr": "شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
    "explanationEn": "Detailed Quantitative Solution: A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_9",
    "titleEn": "[HOTS] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Advanced Synthesis 9",
    "titleAr": "[تفكير عليا] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - تركيب متقدم 9",
    "questionEn": "[Question 9 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O. Determine the mathematically validated result:",
    "questionAr": "[السؤال 9 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "correctAnswerAr": "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "explanationEn": "Detailed Quantitative Solution: To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_10",
    "titleEn": "[HOTS] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Advanced Synthesis 10",
    "titleAr": "[تفكير عليا] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - تركيب متقدم 10",
    "questionEn": "[Question 10 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for NVIC Interrupt Handling, Preemption Priorities & Subpriorities. Determine the mathematically validated result:",
    "questionAr": "[السؤال 10 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "correctAnswerAr": "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "explanationEn": "Detailed Quantitative Solution: In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_11",
    "titleEn": "[HOTS] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Advanced Synthesis 11",
    "titleAr": "[تفكير عليا] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - تركيب متقدم 11",
    "questionEn": "[Question 11 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion. Determine the mathematically validated result:",
    "questionAr": "[السؤال 11 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction."
    ],
    "optionsAr": [
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
    "correctAnswerAr": "في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
    "explanationEn": "Detailed Quantitative Solution: In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_12",
    "titleEn": "[HOTS] CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers - Advanced Synthesis 12",
    "titleAr": "[تفكير عليا] بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة - تركيب متقدم 12",
    "questionEn": "[Question 12 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers. Determine the mathematically validated result:",
    "questionAr": "[السؤال 12 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
    "correctAnswerAr": "شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
    "explanationEn": "Detailed Quantitative Solution: A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_13",
    "titleEn": "[HOTS] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Advanced Synthesis 13",
    "titleAr": "[تفكير عليا] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - تركيب متقدم 13",
    "questionEn": "[Question 13 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O. Determine the mathematically validated result:",
    "questionAr": "[السؤال 13 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards."
    ],
    "optionsAr": [
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "correctAnswerAr": "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "explanationEn": "Detailed Quantitative Solution: To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_14",
    "titleEn": "[HOTS] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Advanced Synthesis 14",
    "titleAr": "[تفكير عليا] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - تركيب متقدم 14",
    "questionEn": "[Question 14 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for NVIC Interrupt Handling, Preemption Priorities & Subpriorities. Determine the mathematically validated result:",
    "questionAr": "[السؤال 14 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends."
    ],
    "optionsAr": [
      "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "correctAnswerAr": "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "explanationEn": "Detailed Quantitative Solution: In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_15",
    "titleEn": "[HOTS] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Advanced Synthesis 15",
    "titleAr": "[تفكير عليا] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - تركيب متقدم 15",
    "questionEn": "[Question 15 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion. Determine the mathematically validated result:",
    "questionAr": "[السؤال 15 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
    "correctAnswerAr": "في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
    "explanationEn": "Detailed Quantitative Solution: In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_16",
    "titleEn": "[HOTS] CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers - Advanced Synthesis 16",
    "titleAr": "[تفكير عليا] بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة - تركيب متقدم 16",
    "questionEn": "[Question 16 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers. Determine the mathematically validated result:",
    "questionAr": "[السؤال 16 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion."
    ],
    "optionsAr": [
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
    "correctAnswerAr": "شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
    "explanationEn": "Detailed Quantitative Solution: A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_17",
    "titleEn": "[HOTS] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Advanced Synthesis 17",
    "titleAr": "[تفكير عليا] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - تركيب متقدم 17",
    "questionEn": "[Question 17 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O. Determine the mathematically validated result:",
    "questionAr": "[السؤال 17 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards."
    ],
    "optionsAr": [
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "correctAnswerAr": "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "explanationEn": "Detailed Quantitative Solution: To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_18",
    "titleEn": "[HOTS] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Advanced Synthesis 18",
    "titleAr": "[تفكير عليا] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - تركيب متقدم 18",
    "questionEn": "[Question 18 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for NVIC Interrupt Handling, Preemption Priorities & Subpriorities. Determine the mathematically validated result:",
    "questionAr": "[السؤال 18 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "correctAnswerAr": "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "explanationEn": "Detailed Quantitative Solution: In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_19",
    "titleEn": "[HOTS] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Advanced Synthesis 19",
    "titleAr": "[تفكير عليا] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - تركيب متقدم 19",
    "questionEn": "[Question 19 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion. Determine the mathematically validated result:",
    "questionAr": "[السؤال 19 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices."
    ],
    "optionsAr": [
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
    "correctAnswerAr": "في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
    "explanationEn": "Detailed Quantitative Solution: In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_20",
    "titleEn": "[HOTS] CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers - Advanced Synthesis 20",
    "titleAr": "[تفكير عليا] بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة - تركيب متقدم 20",
    "questionEn": "[Question 20 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers. Determine the mathematically validated result:",
    "questionAr": "[السؤال 20 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
    "correctAnswerAr": "شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
    "explanationEn": "Detailed Quantitative Solution: A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_21",
    "titleEn": "[HOTS] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Advanced Synthesis 21",
    "titleAr": "[تفكير عليا] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - تركيب متقدم 21",
    "questionEn": "[Question 21 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O. Determine the mathematically validated result:",
    "questionAr": "[السؤال 21 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "correctAnswerAr": "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "explanationEn": "Detailed Quantitative Solution: To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_22",
    "titleEn": "[HOTS] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Advanced Synthesis 22",
    "titleAr": "[تفكير عليا] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - تركيب متقدم 22",
    "questionEn": "[Question 22 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for NVIC Interrupt Handling, Preemption Priorities & Subpriorities. Determine the mathematically validated result:",
    "questionAr": "[السؤال 22 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light."
    ],
    "optionsAr": [
      "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "correctAnswerAr": "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "explanationEn": "Detailed Quantitative Solution: In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_23",
    "titleEn": "[HOTS] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Advanced Synthesis 23",
    "titleAr": "[تفكير عليا] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - تركيب متقدم 23",
    "questionEn": "[Question 23 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion. Determine the mathematically validated result:",
    "questionAr": "[السؤال 23 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages."
    ],
    "optionsAr": [
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
    "correctAnswerAr": "في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
    "explanationEn": "Detailed Quantitative Solution: In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_24",
    "titleEn": "[HOTS] CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers - Advanced Synthesis 24",
    "titleAr": "[تفكير عليا] بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة - تركيب متقدم 24",
    "questionEn": "[Question 24 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers. Determine the mathematically validated result:",
    "questionAr": "[السؤال 24 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
    "correctAnswerAr": "شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
    "explanationEn": "Detailed Quantitative Solution: A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_25",
    "titleEn": "[HOTS] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Advanced Synthesis 25",
    "titleAr": "[تفكير عليا] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - تركيب متقدم 25",
    "questionEn": "[Question 25 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O. Determine the mathematically validated result:",
    "questionAr": "[السؤال 25 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "correctAnswerAr": "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "explanationEn": "Detailed Quantitative Solution: To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_26",
    "titleEn": "[HOTS] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Advanced Synthesis 26",
    "titleAr": "[تفكير عليا] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - تركيب متقدم 26",
    "questionEn": "[Question 26 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for NVIC Interrupt Handling, Preemption Priorities & Subpriorities. Determine the mathematically validated result:",
    "questionAr": "[السؤال 26 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction."
    ],
    "optionsAr": [
      "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "correctAnswerAr": "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "explanationEn": "Detailed Quantitative Solution: In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_27",
    "titleEn": "[HOTS] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Advanced Synthesis 27",
    "titleAr": "[تفكير عليا] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - تركيب متقدم 27",
    "questionEn": "[Question 27 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion. Determine the mathematically validated result:",
    "questionAr": "[السؤال 27 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
    "correctAnswerAr": "في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
    "explanationEn": "Detailed Quantitative Solution: In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_28",
    "titleEn": "[HOTS] CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers - Advanced Synthesis 28",
    "titleAr": "[تفكير عليا] بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة - تركيب متقدم 28",
    "questionEn": "[Question 28 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers. Determine the mathematically validated result:",
    "questionAr": "[السؤال 28 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting."
    ],
    "optionsAr": [
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
    "correctAnswerAr": "شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
    "explanationEn": "Detailed Quantitative Solution: A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_29",
    "titleEn": "[HOTS] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Advanced Synthesis 29",
    "titleAr": "[تفكير عليا] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - تركيب متقدم 29",
    "questionEn": "[Question 29 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O. Determine the mathematically validated result:",
    "questionAr": "[السؤال 29 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards."
    ],
    "optionsAr": [
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "correctAnswerAr": "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "explanationEn": "Detailed Quantitative Solution: To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_30",
    "titleEn": "[HOTS] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Advanced Synthesis 30",
    "titleAr": "[تفكير عليا] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - تركيب متقدم 30",
    "questionEn": "[Question 30 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for NVIC Interrupt Handling, Preemption Priorities & Subpriorities. Determine the mathematically validated result:",
    "questionAr": "[السؤال 30 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "correctAnswerAr": "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "explanationEn": "Detailed Quantitative Solution: In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_31",
    "titleEn": "[HOTS] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Advanced Synthesis 31",
    "titleAr": "[تفكير عليا] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - تركيب متقدم 31",
    "questionEn": "[Question 31 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion. Determine the mathematically validated result:",
    "questionAr": "[السؤال 31 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion."
    ],
    "optionsAr": [
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
    "correctAnswerAr": "في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
    "explanationEn": "Detailed Quantitative Solution: In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_32",
    "titleEn": "[HOTS] CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers - Advanced Synthesis 32",
    "titleAr": "[تفكير عليا] بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة - تركيب متقدم 32",
    "questionEn": "[Question 32 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers. Determine the mathematically validated result:",
    "questionAr": "[السؤال 32 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only."
    ],
    "optionsAr": [
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
    "correctAnswerAr": "شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
    "explanationEn": "Detailed Quantitative Solution: A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_33",
    "titleEn": "[HOTS] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Advanced Synthesis 33",
    "titleAr": "[تفكير عليا] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - تركيب متقدم 33",
    "questionEn": "[Question 33 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O. Determine the mathematically validated result:",
    "questionAr": "[السؤال 33 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "correctAnswerAr": "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "explanationEn": "Detailed Quantitative Solution: To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_34",
    "titleEn": "[HOTS] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Advanced Synthesis 34",
    "titleAr": "[تفكير عليا] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - تركيب متقدم 34",
    "questionEn": "[Question 34 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for NVIC Interrupt Handling, Preemption Priorities & Subpriorities. Determine the mathematically validated result:",
    "questionAr": "[السؤال 34 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices."
    ],
    "optionsAr": [
      "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "correctAnswerAr": "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "explanationEn": "Detailed Quantitative Solution: In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_35",
    "titleEn": "[HOTS] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Advanced Synthesis 35",
    "titleAr": "[تفكير عليا] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - تركيب متقدم 35",
    "questionEn": "[Question 35 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion. Determine the mathematically validated result:",
    "questionAr": "[السؤال 35 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
    "correctAnswerAr": "في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
    "explanationEn": "Detailed Quantitative Solution: In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_36",
    "titleEn": "[HOTS] CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers - Advanced Synthesis 36",
    "titleAr": "[تفكير عليا] بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة - تركيب متقدم 36",
    "questionEn": "[Question 36 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers. Determine the mathematically validated result:",
    "questionAr": "[السؤال 36 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
    "correctAnswerAr": "شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
    "explanationEn": "Detailed Quantitative Solution: A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_37",
    "titleEn": "[HOTS] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Advanced Synthesis 37",
    "titleAr": "[تفكير عليا] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - تركيب متقدم 37",
    "questionEn": "[Question 37 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O. Determine the mathematically validated result:",
    "questionAr": "[السؤال 37 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards."
    ],
    "optionsAr": [
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "correctAnswerAr": "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "explanationEn": "Detailed Quantitative Solution: To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_38",
    "titleEn": "[HOTS] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Advanced Synthesis 38",
    "titleAr": "[تفكير عليا] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - تركيب متقدم 38",
    "questionEn": "[Question 38 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for NVIC Interrupt Handling, Preemption Priorities & Subpriorities. Determine the mathematically validated result:",
    "questionAr": "[السؤال 38 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages."
    ],
    "optionsAr": [
      "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "correctAnswerAr": "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "explanationEn": "Detailed Quantitative Solution: In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_39",
    "titleEn": "[HOTS] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Advanced Synthesis 39",
    "titleAr": "[تفكير عليا] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - تركيب متقدم 39",
    "questionEn": "[Question 39 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion. Determine the mathematically validated result:",
    "questionAr": "[السؤال 39 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
    "correctAnswerAr": "في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
    "explanationEn": "Detailed Quantitative Solution: In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_40",
    "titleEn": "[HOTS] CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers - Advanced Synthesis 40",
    "titleAr": "[تفكير عليا] بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة - تركيب متقدم 40",
    "questionEn": "[Question 40 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers. Determine the mathematically validated result:",
    "questionAr": "[السؤال 40 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
    "correctAnswerAr": "شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
    "explanationEn": "Detailed Quantitative Solution: A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_41",
    "titleEn": "[HOTS] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Advanced Synthesis 41",
    "titleAr": "[تفكير عليا] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - تركيب متقدم 41",
    "questionEn": "[Question 41 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O. Determine the mathematically validated result:",
    "questionAr": "[السؤال 41 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards."
    ],
    "optionsAr": [
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "correctAnswerAr": "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "explanationEn": "Detailed Quantitative Solution: To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_42",
    "titleEn": "[HOTS] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Advanced Synthesis 42",
    "titleAr": "[تفكير عليا] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - تركيب متقدم 42",
    "questionEn": "[Question 42 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for NVIC Interrupt Handling, Preemption Priorities & Subpriorities. Determine the mathematically validated result:",
    "questionAr": "[السؤال 42 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "correctAnswerAr": "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "explanationEn": "Detailed Quantitative Solution: In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_43",
    "titleEn": "[HOTS] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Advanced Synthesis 43",
    "titleAr": "[تفكير عليا] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - تركيب متقدم 43",
    "questionEn": "[Question 43 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion. Determine the mathematically validated result:",
    "questionAr": "[السؤال 43 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting."
    ],
    "optionsAr": [
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
    "correctAnswerAr": "في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
    "explanationEn": "Detailed Quantitative Solution: In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_44",
    "titleEn": "[HOTS] CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers - Advanced Synthesis 44",
    "titleAr": "[تفكير عليا] بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة - تركيب متقدم 44",
    "questionEn": "[Question 44 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers. Determine the mathematically validated result:",
    "questionAr": "[السؤال 44 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends."
    ],
    "optionsAr": [
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
    "correctAnswerAr": "شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
    "explanationEn": "Detailed Quantitative Solution: A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_45",
    "titleEn": "[HOTS] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Advanced Synthesis 45",
    "titleAr": "[تفكير عليا] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - تركيب متقدم 45",
    "questionEn": "[Question 45 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O. Determine the mathematically validated result:",
    "questionAr": "[السؤال 45 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "correctAnswerAr": "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "explanationEn": "Detailed Quantitative Solution: To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_46",
    "titleEn": "[HOTS] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Advanced Synthesis 46",
    "titleAr": "[تفكير عليا] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - تركيب متقدم 46",
    "questionEn": "[Question 46 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for NVIC Interrupt Handling, Preemption Priorities & Subpriorities. Determine the mathematically validated result:",
    "questionAr": "[السؤال 46 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion."
    ],
    "optionsAr": [
      "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "correctAnswerAr": "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "explanationEn": "Detailed Quantitative Solution: In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_47",
    "titleEn": "[HOTS] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Advanced Synthesis 47",
    "titleAr": "[تفكير عليا] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - تركيب متقدم 47",
    "questionEn": "[Question 47 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion. Determine the mathematically validated result:",
    "questionAr": "[السؤال 47 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only."
    ],
    "optionsAr": [
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
    "correctAnswerAr": "في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
    "explanationEn": "Detailed Quantitative Solution: In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_48",
    "titleEn": "[HOTS] CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers - Advanced Synthesis 48",
    "titleAr": "[تفكير عليا] بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة - تركيب متقدم 48",
    "questionEn": "[Question 48 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers. Determine the mathematically validated result:",
    "questionAr": "[السؤال 48 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
    "correctAnswerAr": "شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
    "explanationEn": "Detailed Quantitative Solution: A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_49",
    "titleEn": "[HOTS] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Advanced Synthesis 49",
    "titleAr": "[تفكير عليا] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - تركيب متقدم 49",
    "questionEn": "[Question 49 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O. Determine the mathematically validated result:",
    "questionAr": "[السؤال 49 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards."
    ],
    "optionsAr": [
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "correctAnswerAr": "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "explanationEn": "Detailed Quantitative Solution: To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_50",
    "titleEn": "[HOTS] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Advanced Synthesis 50",
    "titleAr": "[تفكير عليا] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - تركيب متقدم 50",
    "questionEn": "[Question 50 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for NVIC Interrupt Handling, Preemption Priorities & Subpriorities. Determine the mathematically validated result:",
    "questionAr": "[السؤال 50 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "correctAnswerAr": "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "explanationEn": "Detailed Quantitative Solution: In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_51",
    "titleEn": "[HOTS] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Advanced Synthesis 51",
    "titleAr": "[تفكير عليا] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - تركيب متقدم 51",
    "questionEn": "[Question 51 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion. Determine the mathematically validated result:",
    "questionAr": "[السؤال 51 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
    "correctAnswerAr": "في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
    "explanationEn": "Detailed Quantitative Solution: In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_52",
    "titleEn": "[HOTS] CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers - Advanced Synthesis 52",
    "titleAr": "[تفكير عليا] بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة - تركيب متقدم 52",
    "questionEn": "[Question 52 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers. Determine the mathematically validated result:",
    "questionAr": "[السؤال 52 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light."
    ],
    "optionsAr": [
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
    "correctAnswerAr": "شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
    "explanationEn": "Detailed Quantitative Solution: A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_53",
    "titleEn": "[HOTS] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Advanced Synthesis 53",
    "titleAr": "[تفكير عليا] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - تركيب متقدم 53",
    "questionEn": "[Question 53 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O. Determine the mathematically validated result:",
    "questionAr": "[السؤال 53 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards."
    ],
    "optionsAr": [
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "correctAnswerAr": "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "explanationEn": "Detailed Quantitative Solution: To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_54",
    "titleEn": "[HOTS] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Advanced Synthesis 54",
    "titleAr": "[تفكير عليا] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - تركيب متقدم 54",
    "questionEn": "[Question 54 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for NVIC Interrupt Handling, Preemption Priorities & Subpriorities. Determine the mathematically validated result:",
    "questionAr": "[السؤال 54 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "correctAnswerAr": "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "explanationEn": "Detailed Quantitative Solution: In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_55",
    "titleEn": "[HOTS] FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion - Advanced Synthesis 55",
    "titleAr": "[تفكير عليا] الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات - تركيب متقدم 55",
    "questionEn": "[Question 55 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion. Determine the mathematically validated result:",
    "questionAr": "[السؤال 55 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
    "correctAnswerAr": "في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
    "explanationEn": "Detailed Quantitative Solution: In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_56",
    "titleEn": "[HOTS] CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers - Advanced Synthesis 56",
    "titleAr": "[تفكير عليا] بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة - تركيب متقدم 56",
    "questionEn": "[Question 56 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers. Determine the mathematically validated result:",
    "questionAr": "[السؤال 56 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction."
    ],
    "optionsAr": [
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
    "correctAnswerAr": "شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
    "explanationEn": "Detailed Quantitative Solution: A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_57",
    "titleEn": "[HOTS] ARM Cortex-M Architecture, Registers & Memory-Mapped I/O - Advanced Synthesis 57",
    "titleAr": "[تفكير عليا] معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة - تركيب متقدم 57",
    "questionEn": "[Question 57 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O. Determine the mathematically validated result:",
    "questionAr": "[السؤال 57 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "correctAnswerAr": "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "explanationEn": "Detailed Quantitative Solution: To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_hots_58",
    "titleEn": "[HOTS] NVIC Interrupt Handling, Preemption Priorities & Subpriorities - Advanced Synthesis 58",
    "titleAr": "[تفكير عليا] معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية - تركيب متقدم 58",
    "questionEn": "[Question 58 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for NVIC Interrupt Handling, Preemption Priorities & Subpriorities. Determine the mathematically validated result:",
    "questionAr": "[السؤال 58 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting."
    ],
    "optionsAr": [
      "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "correctAnswerAr": "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "explanationEn": "Detailed Quantitative Solution: In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  }
]
};
