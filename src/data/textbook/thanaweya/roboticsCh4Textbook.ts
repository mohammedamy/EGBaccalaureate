import type { SolvedProblem } from '../../../types/curriculum';

export const roboticsCh4SolvedExamples: SolvedProblem[] = [
  {
    "id": "th_robotics_ch4_solved_1",
    "titleEn": "Solved Pedagogical Example 1: ROS2 Computational Graph Architecture: Nodes, Topics & Services",
    "titleAr": "مثال محلول نموذجي 1: بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات",
    "questionEn": "[Solved Example 1] Quantitative engineering analysis for ROS2 Computational Graph Architecture: Nodes, Topics & Services. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 1] تحليل هندسي وحسابي تطبيقي لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion."
    ],
    "optionsAr": [
      "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "correctAnswerAr": "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "explanationEn": "Pedagogical Solution: In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "explanationAr": "الحل النموذجي المعتمد: في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_solved_2",
    "titleEn": "Solved Pedagogical Example 2: Nav2 Mobile Navigation Stack, Costmaps & Path Planners",
    "titleAr": "مثال محلول نموذجي 2: حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار",
    "questionEn": "[Solved Example 2] Quantitative engineering analysis for Nav2 Mobile Navigation Stack, Costmaps & Path Planners. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 2] تحليل هندسي وحسابي تطبيقي لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only."
    ],
    "optionsAr": [
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "correctAnswerAr": "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "explanationEn": "Pedagogical Solution: Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "explanationAr": "الحل النموذجي المعتمد: تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_solved_3",
    "titleEn": "Solved Pedagogical Example 3: 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer",
    "titleAr": "مثال محلول نموذجي 3: رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer",
    "questionEn": "[Solved Example 3] Quantitative engineering analysis for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 3] تحليل هندسي وحسابي تطبيقي لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
    "correctAnswerAr": "خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
    "explanationEn": "Pedagogical Solution: An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
    "explanationAr": "الحل النموذجي المعتمد: خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_solved_4",
    "titleEn": "Solved Pedagogical Example 4: Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic",
    "titleAr": "مثال محلول نموذجي 4: الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية",
    "questionEn": "[Solved Example 4] Quantitative engineering analysis for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 4] تحليل هندسي وحسابي تطبيقي لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung."
    ],
    "optionsAr": [
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
    "correctAnswerAr": "في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
    "explanationEn": "Pedagogical Solution: In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
    "explanationAr": "الحل النموذجي المعتمد: في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_solved_5",
    "titleEn": "Solved Pedagogical Example 5: ROS2 Computational Graph Architecture: Nodes, Topics & Services",
    "titleAr": "مثال محلول نموذجي 5: بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات",
    "questionEn": "[Solved Example 5] Quantitative engineering analysis for ROS2 Computational Graph Architecture: Nodes, Topics & Services. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 5] تحليل هندسي وحسابي تطبيقي لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "correctAnswerAr": "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "explanationEn": "Pedagogical Solution: In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "explanationAr": "الحل النموذجي المعتمد: في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_solved_6",
    "titleEn": "Solved Pedagogical Example 6: Nav2 Mobile Navigation Stack, Costmaps & Path Planners",
    "titleAr": "مثال محلول نموذجي 6: حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار",
    "questionEn": "[Solved Example 6] Quantitative engineering analysis for Nav2 Mobile Navigation Stack, Costmaps & Path Planners. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 6] تحليل هندسي وحسابي تطبيقي لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "correctAnswerAr": "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "explanationEn": "Pedagogical Solution: Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "explanationAr": "الحل النموذجي المعتمد: تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_solved_7",
    "titleEn": "Solved Pedagogical Example 7: 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer",
    "titleAr": "مثال محلول نموذجي 7: رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer",
    "questionEn": "[Solved Example 7] Quantitative engineering analysis for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 7] تحليل هندسي وحسابي تطبيقي لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light."
    ],
    "optionsAr": [
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
    "correctAnswerAr": "خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
    "explanationEn": "Pedagogical Solution: An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
    "explanationAr": "الحل النموذجي المعتمد: خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_solved_8",
    "titleEn": "Solved Pedagogical Example 8: Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic",
    "titleAr": "مثال محلول نموذجي 8: الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية",
    "questionEn": "[Solved Example 8] Quantitative engineering analysis for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 8] تحليل هندسي وحسابي تطبيقي لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung."
    ],
    "optionsAr": [
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
    "correctAnswerAr": "في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
    "explanationEn": "Pedagogical Solution: In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
    "explanationAr": "الحل النموذجي المعتمد: في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_solved_9",
    "titleEn": "Solved Pedagogical Example 9: ROS2 Computational Graph Architecture: Nodes, Topics & Services",
    "titleAr": "مثال محلول نموذجي 9: بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات",
    "questionEn": "[Solved Example 9] Quantitative engineering analysis for ROS2 Computational Graph Architecture: Nodes, Topics & Services. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 9] تحليل هندسي وحسابي تطبيقي لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "correctAnswerAr": "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "explanationEn": "Pedagogical Solution: In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "explanationAr": "الحل النموذجي المعتمد: في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_solved_10",
    "titleEn": "Solved Pedagogical Example 10: Nav2 Mobile Navigation Stack, Costmaps & Path Planners",
    "titleAr": "مثال محلول نموذجي 10: حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار",
    "questionEn": "[Solved Example 10] Quantitative engineering analysis for Nav2 Mobile Navigation Stack, Costmaps & Path Planners. Determine the design parameter using Egyptian STEM robotics specifications.",
    "questionAr": "[مثال محلول 10] تحليل هندسي وحسابي تطبيقي لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار. احسب محددات التصميم وفق معايير مناهج الروبوتات لمدارس STEM المصرية.",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "correctAnswerAr": "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "explanationEn": "Pedagogical Solution: Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "explanationAr": "الحل النموذجي المعتمد: تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "stepByStepSolutionEn": [
      "Step 1: Identify the fundamental governing law for Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Step 2: Substitute official ministerial engineering design parameters.",
      "Step 3: Execute numerical solution to arrive at: Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحديد القانون الهندسي الأساسي الحاكم لـ حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "الخطوة ٢: التعويض بالمعايير الهندسية المعتمدة لمنهج الروبوتات.",
      "الخطوة ٣: استخراج الناتج الرياضي النهائي: تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.."
    ],
    "hintEn": "Recall the governing kinematic formulas or circuit parameters for Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
    "hintAr": "تذكر القوانين الكينماتيكية الحاكمة ومعادلات الدوائر لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
    "teacherTipEn": "Ensure dimensional consistency across units (radians vs degrees, seconds vs milliseconds).",
    "teacherTipAr": "تأكد من اتساق الوحدات الهندسية (مثل التحويل بين الراديان والدرجات أو الثواني والمللي ثانية).",
    "difficulty": "exam_standard",
    "bloomLevel": "Analyzing"
  }
];

export const roboticsCh4ExerciseProblems: SolvedProblem[] = [
  {
    "id": "th_robotics_ch4_exercise_1",
    "titleEn": "Practice Exercise 1: ROS2 Computational Graph Architecture: Nodes, Topics & Services",
    "titleAr": "تمرين تطبيقي 1: بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات",
    "questionEn": "[Practice Exercise 1] Mechatronics Case Study on ROS2 Computational Graph Architecture: Nodes, Topics & Services. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 1] دراسة حالة ميكاترونكس لـ بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages."
    ],
    "optionsAr": [
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "correctAnswerAr": "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "explanationEn": "Independent Verification: In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "explanationAr": "التحقق المستقل: في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (C) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
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
    "id": "th_robotics_ch4_exercise_2",
    "titleEn": "Practice Exercise 2: Nav2 Mobile Navigation Stack, Costmaps & Path Planners",
    "titleAr": "تمرين تطبيقي 2: حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار",
    "questionEn": "[Practice Exercise 2] Mechatronics Case Study on Nav2 Mobile Navigation Stack, Costmaps & Path Planners. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 2] دراسة حالة ميكاترونكس لـ حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders."
    ],
    "optionsAr": [
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "correctAnswerAr": "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "explanationEn": "Independent Verification: Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "explanationAr": "التحقق المستقل: تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (D) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
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
    "id": "th_robotics_ch4_exercise_3",
    "titleEn": "Practice Exercise 3: 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer",
    "titleAr": "تمرين تطبيقي 3: رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer",
    "questionEn": "[Practice Exercise 3] Mechatronics Case Study on 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 3] دراسة حالة ميكاترونكس لـ رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
    "correctAnswerAr": "خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
    "explanationEn": "Independent Verification: An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
    "explanationAr": "التحقق المستقل: خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (A) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
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
    "id": "th_robotics_ch4_exercise_4",
    "titleEn": "Practice Exercise 4: Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic",
    "titleAr": "تمرين تطبيقي 4: الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية",
    "questionEn": "[Practice Exercise 4] Mechatronics Case Study on Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 4] دراسة حالة ميكاترونكس لـ الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only."
    ],
    "optionsAr": [
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
    "correctAnswerAr": "في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
    "explanationEn": "Independent Verification: In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
    "explanationAr": "التحقق المستقل: في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (B) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
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
    "id": "th_robotics_ch4_exercise_5",
    "titleEn": "Practice Exercise 5: ROS2 Computational Graph Architecture: Nodes, Topics & Services",
    "titleAr": "تمرين تطبيقي 5: بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات",
    "questionEn": "[Practice Exercise 5] Mechatronics Case Study on ROS2 Computational Graph Architecture: Nodes, Topics & Services. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 5] دراسة حالة ميكاترونكس لـ بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "correctAnswerAr": "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "explanationEn": "Independent Verification: In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "explanationAr": "التحقق المستقل: في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (C) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
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
    "id": "th_robotics_ch4_exercise_6",
    "titleEn": "Practice Exercise 6: Nav2 Mobile Navigation Stack, Costmaps & Path Planners",
    "titleAr": "تمرين تطبيقي 6: حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار",
    "questionEn": "[Practice Exercise 6] Mechatronics Case Study on Nav2 Mobile Navigation Stack, Costmaps & Path Planners. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 6] دراسة حالة ميكاترونكس لـ حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "correctAnswerAr": "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "explanationEn": "Independent Verification: Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "explanationAr": "التحقق المستقل: تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (D) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
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
    "id": "th_robotics_ch4_exercise_7",
    "titleEn": "Practice Exercise 7: 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer",
    "titleAr": "تمرين تطبيقي 7: رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer",
    "questionEn": "[Practice Exercise 7] Mechatronics Case Study on 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 7] دراسة حالة ميكاترونكس لـ رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction."
    ],
    "optionsAr": [
      "خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
    "correctAnswerAr": "خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
    "explanationEn": "Independent Verification: An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
    "explanationAr": "التحقق المستقل: خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (A) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
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
    "id": "th_robotics_ch4_exercise_8",
    "titleEn": "Practice Exercise 8: Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic",
    "titleAr": "تمرين تطبيقي 8: الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية",
    "questionEn": "[Practice Exercise 8] Mechatronics Case Study on Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 8] دراسة حالة ميكاترونكس لـ الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices."
    ],
    "optionsAr": [
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
    "correctAnswerAr": "في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
    "explanationEn": "Independent Verification: In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
    "explanationAr": "التحقق المستقل: في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (B) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
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
    "id": "th_robotics_ch4_exercise_9",
    "titleEn": "Practice Exercise 9: ROS2 Computational Graph Architecture: Nodes, Topics & Services",
    "titleAr": "تمرين تطبيقي 9: بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات",
    "questionEn": "[Practice Exercise 9] Mechatronics Case Study on ROS2 Computational Graph Architecture: Nodes, Topics & Services. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 9] دراسة حالة ميكاترونكس لـ بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "correctAnswerAr": "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "explanationEn": "Independent Verification: In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "explanationAr": "التحقق المستقل: في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (C) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
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
    "id": "th_robotics_ch4_exercise_10",
    "titleEn": "Practice Exercise 10: Nav2 Mobile Navigation Stack, Costmaps & Path Planners",
    "titleAr": "تمرين تطبيقي 10: حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار",
    "questionEn": "[Practice Exercise 10] Mechatronics Case Study on Nav2 Mobile Navigation Stack, Costmaps & Path Planners. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 10] دراسة حالة ميكاترونكس لـ حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "correctAnswerAr": "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "explanationEn": "Independent Verification: Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "explanationAr": "التحقق المستقل: تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (D) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
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
    "id": "th_robotics_ch4_exercise_11",
    "titleEn": "Practice Exercise 11: 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer",
    "titleAr": "تمرين تطبيقي 11: رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer",
    "questionEn": "[Practice Exercise 11] Mechatronics Case Study on 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 11] دراسة حالة ميكاترونكس لـ رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting."
    ],
    "optionsAr": [
      "خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
    "correctAnswerAr": "خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
    "explanationEn": "Independent Verification: An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
    "explanationAr": "التحقق المستقل: خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (A) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
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
    "id": "th_robotics_ch4_exercise_12",
    "titleEn": "Practice Exercise 12: Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic",
    "titleAr": "تمرين تطبيقي 12: الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية",
    "questionEn": "[Practice Exercise 12] Mechatronics Case Study on Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 12] دراسة حالة ميكاترونكس لـ الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
    "correctAnswerAr": "في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
    "explanationEn": "Independent Verification: In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
    "explanationAr": "التحقق المستقل: في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (B) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
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
    "id": "th_robotics_ch4_exercise_13",
    "titleEn": "Practice Exercise 13: ROS2 Computational Graph Architecture: Nodes, Topics & Services",
    "titleAr": "تمرين تطبيقي 13: بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات",
    "questionEn": "[Practice Exercise 13] Mechatronics Case Study on ROS2 Computational Graph Architecture: Nodes, Topics & Services. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 13] دراسة حالة ميكاترونكس لـ بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends."
    ],
    "optionsAr": [
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "correctAnswerAr": "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "explanationEn": "Independent Verification: In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "explanationAr": "التحقق المستقل: في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (C) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
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
    "id": "th_robotics_ch4_exercise_14",
    "titleEn": "Practice Exercise 14: Nav2 Mobile Navigation Stack, Costmaps & Path Planners",
    "titleAr": "تمرين تطبيقي 14: حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار",
    "questionEn": "[Practice Exercise 14] Mechatronics Case Study on Nav2 Mobile Navigation Stack, Costmaps & Path Planners. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 14] دراسة حالة ميكاترونكس لـ حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders."
    ],
    "optionsAr": [
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "correctAnswerAr": "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "explanationEn": "Independent Verification: Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "explanationAr": "التحقق المستقل: تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (D) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
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
    "id": "th_robotics_ch4_exercise_15",
    "titleEn": "Practice Exercise 15: 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer",
    "titleAr": "تمرين تطبيقي 15: رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer",
    "questionEn": "[Practice Exercise 15] Mechatronics Case Study on 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer. Solve for the required performance parameter.",
    "questionAr": "[تمرين تطبيقي 15] دراسة حالة ميكاترونكس لـ رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer. احسب معامل الأداء المطلوب للمنظومة بدقة.",
    "optionsEn": [
      "An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
    "correctAnswerAr": "خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
    "explanationEn": "Independent Verification: An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
    "explanationAr": "التحقق المستقل: خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
    "stepByStepSolutionEn": [
      "Step 1: Parse input conditions for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Step 2: Eliminate distractors violating physical conservation laws or timing bounds.",
      "Step 3: Conclude that option (A) is the correct value."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل معطيات المسألة لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
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
