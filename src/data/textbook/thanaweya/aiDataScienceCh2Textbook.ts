import type { SolvedProblem } from '../../../types/curriculum';

export const th_ai_data_science_ch2SolvedExamples: SolvedProblem[] = [
  {
    "id": "th_ai_data_science_ch2_solved_1",
    "titleEn": "Solved Example 1: Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions",
    "titleAr": "مثال محلول 1: الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 1] Design, formulate, and evaluate an AI/Data Science model architecture applying Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 1] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.\nStep 3: Execute numerical substitution: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.\nالخطوة ٣: التعويض العددي وحساب النتائج: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "Perform calculation: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "الحساب العددي الدقيق: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج."
  },
  {
    "id": "th_ai_data_science_ch2_solved_2",
    "titleEn": "Solved Example 2: Convolutional Layers, Pooling & ResNet Skip Connections",
    "titleAr": "مثال محلول 2: الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 2] Design, formulate, and evaluate an AI/Data Science model architecture applying Convolutional Layers, Pooling & ResNet Skip Connections. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 2] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.\nStep 3: Execute numerical substitution: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.\nالخطوة ٣: التعويض العددي وحساب النتائج: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "Perform calculation: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "الحساب العددي الدقيق: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Convolutional Layers, Pooling & ResNet Skip Connections.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Convolutional Layers, Pooling & ResNet Skip Connections.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet."
  },
  {
    "id": "th_ai_data_science_ch2_solved_3",
    "titleEn": "Solved Example 3: Object Detection Pipelines, YOLO Architecture & IoU Metrics",
    "titleAr": "مثال محلول 3: خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 3] Design, formulate, and evaluate an AI/Data Science model architecture applying Object Detection Pipelines, YOLO Architecture & IoU Metrics. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 3] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.\nStep 3: Execute numerical substitution: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.\nالخطوة ٣: التعويض العددي وحساب النتائج: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "Perform calculation: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "الحساب العددي الدقيق: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU."
  },
  {
    "id": "th_ai_data_science_ch2_solved_4",
    "titleEn": "Solved Example 4: Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions",
    "titleAr": "مثال محلول 4: الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 4] Design, formulate, and evaluate an AI/Data Science model architecture applying Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 4] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.\nStep 3: Execute numerical substitution: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.\nالخطوة ٣: التعويض العددي وحساب النتائج: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "Perform calculation: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "الحساب العددي الدقيق: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج."
  },
  {
    "id": "th_ai_data_science_ch2_solved_5",
    "titleEn": "Solved Example 5: Convolutional Layers, Pooling & ResNet Skip Connections",
    "titleAr": "مثال محلول 5: الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 5] Design, formulate, and evaluate an AI/Data Science model architecture applying Convolutional Layers, Pooling & ResNet Skip Connections. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 5] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.\nStep 3: Execute numerical substitution: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.\nالخطوة ٣: التعويض العددي وحساب النتائج: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "Perform calculation: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "الحساب العددي الدقيق: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Convolutional Layers, Pooling & ResNet Skip Connections.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Convolutional Layers, Pooling & ResNet Skip Connections.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet."
  },
  {
    "id": "th_ai_data_science_ch2_solved_6",
    "titleEn": "Solved Example 6: Object Detection Pipelines, YOLO Architecture & IoU Metrics",
    "titleAr": "مثال محلول 6: خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 6] Design, formulate, and evaluate an AI/Data Science model architecture applying Object Detection Pipelines, YOLO Architecture & IoU Metrics. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 6] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.\nStep 3: Execute numerical substitution: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.\nالخطوة ٣: التعويض العددي وحساب النتائج: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "Perform calculation: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "الحساب العددي الدقيق: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU."
  },
  {
    "id": "th_ai_data_science_ch2_solved_7",
    "titleEn": "Solved Example 7: Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions",
    "titleAr": "مثال محلول 7: الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 7] Design, formulate, and evaluate an AI/Data Science model architecture applying Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 7] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.\nStep 3: Execute numerical substitution: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.\nالخطوة ٣: التعويض العددي وحساب النتائج: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "Perform calculation: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "الحساب العددي الدقيق: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج."
  },
  {
    "id": "th_ai_data_science_ch2_solved_8",
    "titleEn": "Solved Example 8: Convolutional Layers, Pooling & ResNet Skip Connections",
    "titleAr": "مثال محلول 8: الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 8] Design, formulate, and evaluate an AI/Data Science model architecture applying Convolutional Layers, Pooling & ResNet Skip Connections. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 8] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.\nStep 3: Execute numerical substitution: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.\nالخطوة ٣: التعويض العددي وحساب النتائج: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "Perform calculation: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "الحساب العددي الدقيق: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Convolutional Layers, Pooling & ResNet Skip Connections.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Convolutional Layers, Pooling & ResNet Skip Connections.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet."
  },
  {
    "id": "th_ai_data_science_ch2_solved_9",
    "titleEn": "Solved Example 9: Object Detection Pipelines, YOLO Architecture & IoU Metrics",
    "titleAr": "مثال محلول 9: خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 9] Design, formulate, and evaluate an AI/Data Science model architecture applying Object Detection Pipelines, YOLO Architecture & IoU Metrics. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 9] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.\nStep 3: Execute numerical substitution: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.\nالخطوة ٣: التعويض العددي وحساب النتائج: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "Perform calculation: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "الحساب العددي الدقيق: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU."
  },
  {
    "id": "th_ai_data_science_ch2_solved_10",
    "titleEn": "Solved Example 10: Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions",
    "titleAr": "مثال محلول 10: الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 10] Design, formulate, and evaluate an AI/Data Science model architecture applying Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 10] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.\nStep 3: Execute numerical substitution: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.\nالخطوة ٣: التعويض العددي وحساب النتائج: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "Perform calculation: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "الحساب العددي الدقيق: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج."
  }
];

export const th_ai_data_science_ch2ExerciseProblems: SolvedProblem[] = [
  {
    "id": "th_ai_data_science_ch2_ex_1",
    "titleEn": "Exercise Problem 1: Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions",
    "titleAr": "تمرين 1: الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 1] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 1] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.\n- Calculation & Results: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.\n- خطوات الحساب والنتيجة: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "Calculate final values: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "حساب الناتج النهائي: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
    "hintAr": "طبق القانون الأساسي: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch2_ex_2",
    "titleEn": "Exercise Problem 2: Convolutional Layers, Pooling & ResNet Skip Connections",
    "titleAr": "تمرين 2: الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 2] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Convolutional Layers, Pooling & ResNet Skip Connections. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 2] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.\n- Calculation & Results: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.\n- خطوات الحساب والنتيجة: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "Calculate final values: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "حساب الناتج النهائي: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
    "hintAr": "طبق القانون الأساسي: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch2_ex_3",
    "titleEn": "Exercise Problem 3: Object Detection Pipelines, YOLO Architecture & IoU Metrics",
    "titleAr": "تمرين 3: خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 3] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Object Detection Pipelines, YOLO Architecture & IoU Metrics. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 3] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.\n- Calculation & Results: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.\n- خطوات الحساب والنتيجة: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "Calculate final values: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "حساب الناتج النهائي: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
    "hintAr": "طبق القانون الأساسي: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch2_ex_4",
    "titleEn": "Exercise Problem 4: Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions",
    "titleAr": "تمرين 4: الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 4] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 4] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.\n- Calculation & Results: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.\n- خطوات الحساب والنتيجة: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "Calculate final values: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "حساب الناتج النهائي: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
    "hintAr": "طبق القانون الأساسي: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch2_ex_5",
    "titleEn": "Exercise Problem 5: Convolutional Layers, Pooling & ResNet Skip Connections",
    "titleAr": "تمرين 5: الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 5] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Convolutional Layers, Pooling & ResNet Skip Connections. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 5] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.\n- Calculation & Results: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.\n- خطوات الحساب والنتيجة: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "Calculate final values: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "حساب الناتج النهائي: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
    "hintAr": "طبق القانون الأساسي: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch2_ex_6",
    "titleEn": "Exercise Problem 6: Object Detection Pipelines, YOLO Architecture & IoU Metrics",
    "titleAr": "تمرين 6: خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 6] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Object Detection Pipelines, YOLO Architecture & IoU Metrics. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 6] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.\n- Calculation & Results: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.\n- خطوات الحساب والنتيجة: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "Calculate final values: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "حساب الناتج النهائي: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
    "hintAr": "طبق القانون الأساسي: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch2_ex_7",
    "titleEn": "Exercise Problem 7: Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions",
    "titleAr": "تمرين 7: الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 7] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 7] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.\n- Calculation & Results: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.\n- خطوات الحساب والنتيجة: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "Calculate final values: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "حساب الناتج النهائي: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
    "hintAr": "طبق القانون الأساسي: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch2_ex_8",
    "titleEn": "Exercise Problem 8: Convolutional Layers, Pooling & ResNet Skip Connections",
    "titleAr": "تمرين 8: الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 8] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Convolutional Layers, Pooling & ResNet Skip Connections. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 8] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.\n- Calculation & Results: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.\n- خطوات الحساب والنتيجة: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "Calculate final values: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "حساب الناتج النهائي: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
    "hintAr": "طبق القانون الأساسي: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch2_ex_9",
    "titleEn": "Exercise Problem 9: Object Detection Pipelines, YOLO Architecture & IoU Metrics",
    "titleAr": "تمرين 9: خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 9] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Object Detection Pipelines, YOLO Architecture & IoU Metrics. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 9] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.\n- Calculation & Results: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.\n- خطوات الحساب والنتيجة: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "Calculate final values: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "حساب الناتج النهائي: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
    "hintAr": "طبق القانون الأساسي: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch2_ex_10",
    "titleEn": "Exercise Problem 10: Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions",
    "titleAr": "تمرين 10: الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 10] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 10] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.\n- Calculation & Results: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.\n- خطوات الحساب والنتيجة: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "Calculate final values: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "حساب الناتج النهائي: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
    "hintAr": "طبق القانون الأساسي: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch2_ex_11",
    "titleEn": "Exercise Problem 11: Convolutional Layers, Pooling & ResNet Skip Connections",
    "titleAr": "تمرين 11: الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 11] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Convolutional Layers, Pooling & ResNet Skip Connections. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 11] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.\n- Calculation & Results: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.\n- خطوات الحساب والنتيجة: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "Calculate final values: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "حساب الناتج النهائي: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
    "hintAr": "طبق القانون الأساسي: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch2_ex_12",
    "titleEn": "Exercise Problem 12: Object Detection Pipelines, YOLO Architecture & IoU Metrics",
    "titleAr": "تمرين 12: خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 12] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Object Detection Pipelines, YOLO Architecture & IoU Metrics. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 12] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.\n- Calculation & Results: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.\n- خطوات الحساب والنتيجة: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "Calculate final values: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "حساب الناتج النهائي: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
    "hintAr": "طبق القانون الأساسي: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch2_ex_13",
    "titleEn": "Exercise Problem 13: Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions",
    "titleAr": "تمرين 13: الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 13] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 13] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.\n- Calculation & Results: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.\n- خطوات الحساب والنتيجة: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "Calculate final values: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "حساب الناتج النهائي: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
    "hintAr": "طبق القانون الأساسي: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch2_ex_14",
    "titleEn": "Exercise Problem 14: Convolutional Layers, Pooling & ResNet Skip Connections",
    "titleAr": "تمرين 14: الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 14] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Convolutional Layers, Pooling & ResNet Skip Connections. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 14] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.\n- Calculation & Results: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.\n- خطوات الحساب والنتيجة: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "Calculate final values: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "حساب الناتج النهائي: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
    "hintAr": "طبق القانون الأساسي: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch2_ex_15",
    "titleEn": "Exercise Problem 15: Object Detection Pipelines, YOLO Architecture & IoU Metrics",
    "titleAr": "تمرين 15: خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 15] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Object Detection Pipelines, YOLO Architecture & IoU Metrics. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 15] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.\n- Calculation & Results: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.\n- خطوات الحساب والنتيجة: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "Calculate final values: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "حساب الناتج النهائي: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
    "hintAr": "طبق القانون الأساسي: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  }
];
