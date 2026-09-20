import type { SolvedProblem } from '../../../types/curriculum';

export const roboticsCh3SolvedExamples: SolvedProblem[] = [
  {
    "id": "th_robotics_ch3_solved_1",
    "titleEn": "Solved Pedagogical Example 1: ARM Cortex-M Architecture, Registers & Memory-Mapped I/O",
    "titleAr": "مثال محلول نموذجي 1: معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة",
    "questionEn": "[Solved Example 1] Quantitative engineering analysis for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 1] تحليل هندسي وحسابي تطبيقي لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion."
    ],
    "optionsAr": [
      "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "correctAnswerAr": "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "explanationEn": "Pedagogical Solution: To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "explanationAr": "الحل النموذجي المعتمد: لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_solved_2",
    "titleEn": "Solved Pedagogical Example 2: NVIC Interrupt Handling, Preemption Priorities & Subpriorities",
    "titleAr": "مثال محلول نموذجي 2: معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية",
    "questionEn": "[Solved Example 2] Quantitative engineering analysis for NVIC Interrupt Handling, Preemption Priorities & Subpriorities. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 2] تحليل هندسي وحسابي تطبيقي لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only."
    ],
    "optionsAr": [
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "correctAnswerAr": "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "explanationEn": "Pedagogical Solution: In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "explanationAr": "الحل النموذجي المعتمد: في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_solved_3",
    "titleEn": "Solved Pedagogical Example 3: FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion",
    "titleAr": "مثال محلول نموذجي 3: الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات",
    "questionEn": "[Solved Example 3] Quantitative engineering analysis for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 3] تحليل هندسي وحسابي تطبيقي لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
    "correctAnswerAr": "في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
    "explanationEn": "Pedagogical Solution: In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
    "explanationAr": "الحل النموذجي المعتمد: في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_solved_4",
    "titleEn": "Solved Pedagogical Example 4: CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers",
    "titleAr": "مثال محلول نموذجي 4: بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة",
    "questionEn": "[Solved Example 4] Quantitative engineering analysis for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 4] تحليل هندسي وحسابي تطبيقي لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$."
    ],
    "optionsAr": [
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
    "correctAnswerAr": "شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
    "explanationEn": "Pedagogical Solution: A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
    "explanationAr": "الحل النموذجي المعتمد: شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_solved_5",
    "titleEn": "Solved Pedagogical Example 5: ARM Cortex-M Architecture, Registers & Memory-Mapped I/O",
    "titleAr": "مثال محلول نموذجي 5: معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة",
    "questionEn": "[Solved Example 5] Quantitative engineering analysis for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 5] تحليل هندسي وحسابي تطبيقي لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "correctAnswerAr": "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "explanationEn": "Pedagogical Solution: To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "explanationAr": "الحل النموذجي المعتمد: لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_solved_6",
    "titleEn": "Solved Pedagogical Example 6: NVIC Interrupt Handling, Preemption Priorities & Subpriorities",
    "titleAr": "مثال محلول نموذجي 6: معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية",
    "questionEn": "[Solved Example 6] Quantitative engineering analysis for NVIC Interrupt Handling, Preemption Priorities & Subpriorities. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 6] تحليل هندسي وحسابي تطبيقي لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "correctAnswerAr": "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "explanationEn": "Pedagogical Solution: In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "explanationAr": "الحل النموذجي المعتمد: في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_solved_7",
    "titleEn": "Solved Pedagogical Example 7: FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion",
    "titleAr": "مثال محلول نموذجي 7: الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات",
    "questionEn": "[Solved Example 7] Quantitative engineering analysis for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 7] تحليل هندسي وحسابي تطبيقي لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light."
    ],
    "optionsAr": [
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
    "correctAnswerAr": "في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
    "explanationEn": "Pedagogical Solution: In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
    "explanationAr": "الحل النموذجي المعتمد: في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_solved_8",
    "titleEn": "Solved Pedagogical Example 8: CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers",
    "titleAr": "مثال محلول نموذجي 8: بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة",
    "questionEn": "[Solved Example 8] Quantitative engineering analysis for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 8] تحليل هندسي وحسابي تطبيقي لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$."
    ],
    "optionsAr": [
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
    "correctAnswerAr": "شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
    "explanationEn": "Pedagogical Solution: A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
    "explanationAr": "الحل النموذجي المعتمد: شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_solved_9",
    "titleEn": "Solved Pedagogical Example 9: ARM Cortex-M Architecture, Registers & Memory-Mapped I/O",
    "titleAr": "مثال محلول نموذجي 9: معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة",
    "questionEn": "[Solved Example 9] Quantitative engineering analysis for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 9] تحليل هندسي وحسابي تطبيقي لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "correctAnswerAr": "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "explanationEn": "Pedagogical Solution: To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "explanationAr": "الحل النموذجي المعتمد: لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch3_solved_10",
    "titleEn": "Solved Pedagogical Example 10: NVIC Interrupt Handling, Preemption Priorities & Subpriorities",
    "titleAr": "مثال محلول نموذجي 10: معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية",
    "questionEn": "[Solved Example 10] Quantitative engineering analysis for NVIC Interrupt Handling, Preemption Priorities & Subpriorities. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 10] تحليل هندسي وحسابي تطبيقي لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "correctAnswerAr": "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "explanationEn": "Pedagogical Solution: In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "explanationAr": "الحل النموذجي المعتمد: في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  }
];

export const roboticsCh3ExerciseProblems: SolvedProblem[] = [
  {
    "id": "th_robotics_ch3_exercise_1",
    "titleEn": "Practice Exercise 1: ARM Cortex-M Architecture, Registers & Memory-Mapped I/O",
    "titleAr": "تمرين تطبيقي 1: معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة",
    "questionEn": "[Practice Exercise 1] Mechatronics Case Study on ARM Cortex-M Architecture, Registers & Memory-Mapped I/O. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 1] دراسة حالة ميكاترونكس لـ معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages."
    ],
    "optionsAr": [
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "correctAnswerAr": "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "explanationEn": "Independent Verification: To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "explanationAr": "التحقق المستقل: لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (C) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
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
    "id": "th_robotics_ch3_exercise_2",
    "titleEn": "Practice Exercise 2: NVIC Interrupt Handling, Preemption Priorities & Subpriorities",
    "titleAr": "تمرين تطبيقي 2: معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية",
    "questionEn": "[Practice Exercise 2] Mechatronics Case Study on NVIC Interrupt Handling, Preemption Priorities & Subpriorities. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 2] دراسة حالة ميكاترونكس لـ معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency."
    ],
    "optionsAr": [
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "correctAnswerAr": "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "explanationEn": "Independent Verification: In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "explanationAr": "التحقق المستقل: في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (D) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
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
    "id": "th_robotics_ch3_exercise_3",
    "titleEn": "Practice Exercise 3: FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion",
    "titleAr": "تمرين تطبيقي 3: الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات",
    "questionEn": "[Practice Exercise 3] Mechatronics Case Study on FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 3] دراسة حالة ميكاترونكس لـ الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
    "correctAnswerAr": "في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
    "explanationEn": "Independent Verification: In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
    "explanationAr": "التحقق المستقل: في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (A) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
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
    "id": "th_robotics_ch3_exercise_4",
    "titleEn": "Practice Exercise 4: CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers",
    "titleAr": "تمرين تطبيقي 4: بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة",
    "questionEn": "[Practice Exercise 4] Mechatronics Case Study on CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 4] دراسة حالة ميكاترونكس لـ بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only."
    ],
    "optionsAr": [
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
    "correctAnswerAr": "شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
    "explanationEn": "Independent Verification: A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
    "explanationAr": "التحقق المستقل: شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (B) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
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
    "id": "th_robotics_ch3_exercise_5",
    "titleEn": "Practice Exercise 5: ARM Cortex-M Architecture, Registers & Memory-Mapped I/O",
    "titleAr": "تمرين تطبيقي 5: معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة",
    "questionEn": "[Practice Exercise 5] Mechatronics Case Study on ARM Cortex-M Architecture, Registers & Memory-Mapped I/O. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 5] دراسة حالة ميكاترونكس لـ معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "correctAnswerAr": "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "explanationEn": "Independent Verification: To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "explanationAr": "التحقق المستقل: لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (C) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
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
    "id": "th_robotics_ch3_exercise_6",
    "titleEn": "Practice Exercise 6: NVIC Interrupt Handling, Preemption Priorities & Subpriorities",
    "titleAr": "تمرين تطبيقي 6: معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية",
    "questionEn": "[Practice Exercise 6] Mechatronics Case Study on NVIC Interrupt Handling, Preemption Priorities & Subpriorities. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 6] دراسة حالة ميكاترونكس لـ معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "correctAnswerAr": "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "explanationEn": "Independent Verification: In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "explanationAr": "التحقق المستقل: في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (D) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
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
    "id": "th_robotics_ch3_exercise_7",
    "titleEn": "Practice Exercise 7: FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion",
    "titleAr": "تمرين تطبيقي 7: الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات",
    "questionEn": "[Practice Exercise 7] Mechatronics Case Study on FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 7] دراسة حالة ميكاترونكس لـ الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction."
    ],
    "optionsAr": [
      "في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
    "correctAnswerAr": "في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
    "explanationEn": "Independent Verification: In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
    "explanationAr": "التحقق المستقل: في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (A) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
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
    "id": "th_robotics_ch3_exercise_8",
    "titleEn": "Practice Exercise 8: CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers",
    "titleAr": "تمرين تطبيقي 8: بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة",
    "questionEn": "[Practice Exercise 8] Mechatronics Case Study on CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 8] دراسة حالة ميكاترونكس لـ بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices."
    ],
    "optionsAr": [
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
    "correctAnswerAr": "شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
    "explanationEn": "Independent Verification: A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
    "explanationAr": "التحقق المستقل: شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (B) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
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
    "id": "th_robotics_ch3_exercise_9",
    "titleEn": "Practice Exercise 9: ARM Cortex-M Architecture, Registers & Memory-Mapped I/O",
    "titleAr": "تمرين تطبيقي 9: معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة",
    "questionEn": "[Practice Exercise 9] Mechatronics Case Study on ARM Cortex-M Architecture, Registers & Memory-Mapped I/O. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 9] دراسة حالة ميكاترونكس لـ معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "correctAnswerAr": "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "explanationEn": "Independent Verification: To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "explanationAr": "التحقق المستقل: لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (C) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
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
    "id": "th_robotics_ch3_exercise_10",
    "titleEn": "Practice Exercise 10: NVIC Interrupt Handling, Preemption Priorities & Subpriorities",
    "titleAr": "تمرين تطبيقي 10: معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية",
    "questionEn": "[Practice Exercise 10] Mechatronics Case Study on NVIC Interrupt Handling, Preemption Priorities & Subpriorities. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 10] دراسة حالة ميكاترونكس لـ معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "correctAnswerAr": "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "explanationEn": "Independent Verification: In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "explanationAr": "التحقق المستقل: في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (D) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
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
    "id": "th_robotics_ch3_exercise_11",
    "titleEn": "Practice Exercise 11: FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion",
    "titleAr": "تمرين تطبيقي 11: الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات",
    "questionEn": "[Practice Exercise 11] Mechatronics Case Study on FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 11] دراسة حالة ميكاترونكس لـ الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting."
    ],
    "optionsAr": [
      "في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
    "correctAnswerAr": "في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
    "explanationEn": "Independent Verification: In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
    "explanationAr": "التحقق المستقل: في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (A) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
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
    "id": "th_robotics_ch3_exercise_12",
    "titleEn": "Practice Exercise 12: CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers",
    "titleAr": "تمرين تطبيقي 12: بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة",
    "questionEn": "[Practice Exercise 12] Mechatronics Case Study on CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 12] دراسة حالة ميكاترونكس لـ بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
    "correctAnswerAr": "شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
    "explanationEn": "Independent Verification: A high-speed CAN 2.0B bus running at $500\\ kbps$ (bit time $T_{bit} = 2.0\\ \\mu s$) terminates both cable ends with $120\\ \\Omega$ resistors in parallel, presenting a characteristic DC bus resistance of $R_{eq} = 60\\ \\Omega$.",
    "explanationAr": "التحقق المستقل: شبكة CAN 2.0B بسرعة $500\\ kbps$ (زمن الخانة $2.0\\ \\mu s$) تنتهي بمقاومتي $120\\ \\Omega$ على التوازي عند الطرفين، مما يعطي مقاومة خط كلية مكافئة $R_{eq} = 60\\ \\Omega$.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for CAN Bus 2.0B / CAN FD Architecture, Arbitration & Transceivers.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (B) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة بنية شبكة CAN Bus 2.0B وCAN FD والتحكيم العتادي ومحولات الإشارة.",
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
    "id": "th_robotics_ch3_exercise_13",
    "titleEn": "Practice Exercise 13: ARM Cortex-M Architecture, Registers & Memory-Mapped I/O",
    "titleAr": "تمرين تطبيقي 13: معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة",
    "questionEn": "[Practice Exercise 13] Mechatronics Case Study on ARM Cortex-M Architecture, Registers & Memory-Mapped I/O. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 13] دراسة حالة ميكاترونكس لـ معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends."
    ],
    "optionsAr": [
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "correctAnswerAr": "لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "explanationEn": "Independent Verification: To toggle GPIO pin 5 on port A using bit-banding or Atomic Bit Set/Reset Register (BSRR), writing $(1 \\ll 5)$ to `GPIOA->BSRR` sets pin high in 1 clock cycle without read-modify-write race hazards.",
    "explanationAr": "التحقق المستقل: لتغيير حالة الطرف 5 في المنفذ A ذرياً باستخدام سجل BSRR، فإن كتابة $(1 \\ll 5)$ ترفع الطرف للجهد العالي في نبضة ساعة واحدة دون مخاطر القراءة والتعديل المتزامنة.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for ARM Cortex-M Architecture, Registers & Memory-Mapped I/O.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (C) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة معمارية ARM Cortex-M وسجلاتها والمنافذ المعنونة في الذاكرة.",
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
    "id": "th_robotics_ch3_exercise_14",
    "titleEn": "Practice Exercise 14: NVIC Interrupt Handling, Preemption Priorities & Subpriorities",
    "titleAr": "تمرين تطبيقي 14: معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية",
    "questionEn": "[Practice Exercise 14] Mechatronics Case Study on NVIC Interrupt Handling, Preemption Priorities & Subpriorities. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 14] دراسة حالة ميكاترونكس لـ معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency."
    ],
    "optionsAr": [
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "correctAnswerAr": "في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "explanationEn": "Independent Verification: In a 4-bit priority system with 2 bits for preemption and 2 bits for subpriority, an interrupt with priority $(0, 3)$ preempts an active interrupt with priority $(1, 0)$ because lower numerical preemption indicates higher hardware urgency.",
    "explanationAr": "التحقق المستقل: في نظام أولويات بـ ٤ خانات (خانتان للاستباق وخانتان للفرعية)، فإن مقاطعة بأولوية $(0, 3)$ تستبق مقاطعة جارية بأولوية $(1, 0)$ لأن القيمة الرقمية الأقل تعني أسبقية أعلى.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for NVIC Interrupt Handling, Preemption Priorities & Subpriorities.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (D) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة معالجة المقاطعات بوحدة NVIC وأولويات الاستباق والأولويات الفرعية.",
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
    "id": "th_robotics_ch3_exercise_15",
    "titleEn": "Practice Exercise 15: FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion",
    "titleAr": "تمرين تطبيقي 15: الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات",
    "questionEn": "[Practice Exercise 15] Mechatronics Case Study on FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 15] دراسة حالة ميكاترونكس لـ الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
    "correctAnswerAr": "في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
    "explanationEn": "Independent Verification: In tickless idle mode with system tick frequency $f_{tick} = 1,000\\ Hz$ (tick period $1\\ ms$), calling `vTaskDelay(pdMS_TO_TICKS(250))` transitions the task to the Blocked state for exactly 250 milliseconds.",
    "explanationAr": "التحقق المستقل: في نمط التوقف الموفر للطاقة بتردد ساعة $1,000\\ Hz$ (زمن النبضة $1\\ ms$)، فإن استدعاء `vTaskDelay(pdMS_TO_TICKS(250))` ينقل المهمة لحالة الحظر لمدة ٢٥٠ مللي ثانية تماماً.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for FreeRTOS Preemptive Scheduling, Semaphores & Priority Inversion.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (A) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة الجدولة الاستباقية في FreeRTOS والسيمافورات وانعكاس الأولويات.",
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
