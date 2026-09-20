import type { ChapterDatabank } from '../../../types/curriculum';

export const th_ai_data_science_ch1Databank: ChapterDatabank = {
  "easy": [
    {
      "id": "th_ai_data_science_ch1_easy_1",
      "titleEn": "[EASY] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Review 1",
      "titleAr": "[مستوى أساسي] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - سؤال 1",
      "questionEn": "[AI & Data Science Core Concept] Regarding Singular Value Decomposition (SVD) & Principal Component Analysis (PCA), which of the following statements is theoretically and mathematically sound? (Variant 1)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 1)",
      "optionsEn": [
        "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "correctAnswerEn": "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "correctAnswerAr": "يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_2",
      "titleEn": "[EASY] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Review 2",
      "titleAr": "[مستوى أساسي] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - سؤال 2",
      "questionEn": "[AI & Data Science Core Concept] Regarding Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam), which of the following statements is theoretically and mathematically sound? (Variant 2)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 2)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "correctAnswerEn": "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "correctAnswerAr": "يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_3",
      "titleEn": "[EASY] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Review 3",
      "titleAr": "[مستوى أساسي] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - سؤال 3",
      "questionEn": "[AI & Data Science Core Concept] Regarding L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction, which of the following statements is theoretically and mathematically sound? (Variant 3)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 3)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "correctAnswerEn": "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "correctAnswerAr": "يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_4",
      "titleEn": "[EASY] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Review 4",
      "titleAr": "[مستوى أساسي] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - سؤال 4",
      "questionEn": "[AI & Data Science Core Concept] Regarding Singular Value Decomposition (SVD) & Principal Component Analysis (PCA), which of the following statements is theoretically and mathematically sound? (Variant 4)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 4)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات."
      ],
      "correctAnswer": "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "correctAnswerEn": "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "correctAnswerAr": "يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_5",
      "titleEn": "[EASY] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Review 5",
      "titleAr": "[مستوى أساسي] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - سؤال 5",
      "questionEn": "[AI & Data Science Core Concept] Regarding Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam), which of the following statements is theoretically and mathematically sound? (Variant 5)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 5)",
      "optionsEn": [
        "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "correctAnswerEn": "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "correctAnswerAr": "يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_6",
      "titleEn": "[EASY] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Review 6",
      "titleAr": "[مستوى أساسي] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - سؤال 6",
      "questionEn": "[AI & Data Science Core Concept] Regarding L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction, which of the following statements is theoretically and mathematically sound? (Variant 6)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 6)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "correctAnswerEn": "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "correctAnswerAr": "يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_7",
      "titleEn": "[EASY] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Review 7",
      "titleAr": "[مستوى أساسي] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - سؤال 7",
      "questionEn": "[AI & Data Science Core Concept] Regarding Singular Value Decomposition (SVD) & Principal Component Analysis (PCA), which of the following statements is theoretically and mathematically sound? (Variant 7)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 7)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "correctAnswerEn": "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "correctAnswerAr": "يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_8",
      "titleEn": "[EASY] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Review 8",
      "titleAr": "[مستوى أساسي] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - سؤال 8",
      "questionEn": "[AI & Data Science Core Concept] Regarding Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam), which of the following statements is theoretically and mathematically sound? (Variant 8)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 8)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم."
      ],
      "correctAnswer": "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "correctAnswerEn": "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "correctAnswerAr": "يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_9",
      "titleEn": "[EASY] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Review 9",
      "titleAr": "[مستوى أساسي] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - سؤال 9",
      "questionEn": "[AI & Data Science Core Concept] Regarding L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction, which of the following statements is theoretically and mathematically sound? (Variant 9)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 9)",
      "optionsEn": [
        "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "correctAnswerEn": "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "correctAnswerAr": "يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_10",
      "titleEn": "[EASY] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Review 10",
      "titleAr": "[مستوى أساسي] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - سؤال 10",
      "questionEn": "[AI & Data Science Core Concept] Regarding Singular Value Decomposition (SVD) & Principal Component Analysis (PCA), which of the following statements is theoretically and mathematically sound? (Variant 10)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 10)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "correctAnswerEn": "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "correctAnswerAr": "يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_11",
      "titleEn": "[EASY] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Review 11",
      "titleAr": "[مستوى أساسي] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - سؤال 11",
      "questionEn": "[AI & Data Science Core Concept] Regarding Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam), which of the following statements is theoretically and mathematically sound? (Variant 11)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 11)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "correctAnswerEn": "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "correctAnswerAr": "يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_12",
      "titleEn": "[EASY] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Review 12",
      "titleAr": "[مستوى أساسي] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - سؤال 12",
      "questionEn": "[AI & Data Science Core Concept] Regarding L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction, which of the following statements is theoretically and mathematically sound? (Variant 12)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 12)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات."
      ],
      "correctAnswer": "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "correctAnswerEn": "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "correctAnswerAr": "يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_13",
      "titleEn": "[EASY] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Review 13",
      "titleAr": "[مستوى أساسي] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - سؤال 13",
      "questionEn": "[AI & Data Science Core Concept] Regarding Singular Value Decomposition (SVD) & Principal Component Analysis (PCA), which of the following statements is theoretically and mathematically sound? (Variant 13)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 13)",
      "optionsEn": [
        "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "correctAnswerEn": "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "correctAnswerAr": "يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_14",
      "titleEn": "[EASY] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Review 14",
      "titleAr": "[مستوى أساسي] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - سؤال 14",
      "questionEn": "[AI & Data Science Core Concept] Regarding Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam), which of the following statements is theoretically and mathematically sound? (Variant 14)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 14)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "correctAnswerEn": "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "correctAnswerAr": "يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_15",
      "titleEn": "[EASY] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Review 15",
      "titleAr": "[مستوى أساسي] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - سؤال 15",
      "questionEn": "[AI & Data Science Core Concept] Regarding L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction, which of the following statements is theoretically and mathematically sound? (Variant 15)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 15)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "correctAnswerEn": "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "correctAnswerAr": "يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_16",
      "titleEn": "[EASY] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Review 16",
      "titleAr": "[مستوى أساسي] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - سؤال 16",
      "questionEn": "[AI & Data Science Core Concept] Regarding Singular Value Decomposition (SVD) & Principal Component Analysis (PCA), which of the following statements is theoretically and mathematically sound? (Variant 16)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 16)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات."
      ],
      "correctAnswer": "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "correctAnswerEn": "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "correctAnswerAr": "يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_17",
      "titleEn": "[EASY] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Review 17",
      "titleAr": "[مستوى أساسي] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - سؤال 17",
      "questionEn": "[AI & Data Science Core Concept] Regarding Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam), which of the following statements is theoretically and mathematically sound? (Variant 17)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 17)",
      "optionsEn": [
        "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "correctAnswerEn": "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "correctAnswerAr": "يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_18",
      "titleEn": "[EASY] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Review 18",
      "titleAr": "[مستوى أساسي] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - سؤال 18",
      "questionEn": "[AI & Data Science Core Concept] Regarding L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction, which of the following statements is theoretically and mathematically sound? (Variant 18)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 18)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "correctAnswerEn": "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "correctAnswerAr": "يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_19",
      "titleEn": "[EASY] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Review 19",
      "titleAr": "[مستوى أساسي] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - سؤال 19",
      "questionEn": "[AI & Data Science Core Concept] Regarding Singular Value Decomposition (SVD) & Principal Component Analysis (PCA), which of the following statements is theoretically and mathematically sound? (Variant 19)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 19)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "correctAnswerEn": "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "correctAnswerAr": "يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_20",
      "titleEn": "[EASY] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Review 20",
      "titleAr": "[مستوى أساسي] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - سؤال 20",
      "questionEn": "[AI & Data Science Core Concept] Regarding Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam), which of the following statements is theoretically and mathematically sound? (Variant 20)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 20)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم."
      ],
      "correctAnswer": "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "correctAnswerEn": "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "correctAnswerAr": "يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_21",
      "titleEn": "[EASY] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Review 21",
      "titleAr": "[مستوى أساسي] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - سؤال 21",
      "questionEn": "[AI & Data Science Core Concept] Regarding L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction, which of the following statements is theoretically and mathematically sound? (Variant 21)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 21)",
      "optionsEn": [
        "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "correctAnswerEn": "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "correctAnswerAr": "يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_22",
      "titleEn": "[EASY] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Review 22",
      "titleAr": "[مستوى أساسي] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - سؤال 22",
      "questionEn": "[AI & Data Science Core Concept] Regarding Singular Value Decomposition (SVD) & Principal Component Analysis (PCA), which of the following statements is theoretically and mathematically sound? (Variant 22)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 22)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "correctAnswerEn": "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "correctAnswerAr": "يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_23",
      "titleEn": "[EASY] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Review 23",
      "titleAr": "[مستوى أساسي] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - سؤال 23",
      "questionEn": "[AI & Data Science Core Concept] Regarding Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam), which of the following statements is theoretically and mathematically sound? (Variant 23)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 23)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "correctAnswerEn": "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "correctAnswerAr": "يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_24",
      "titleEn": "[EASY] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Review 24",
      "titleAr": "[مستوى أساسي] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - سؤال 24",
      "questionEn": "[AI & Data Science Core Concept] Regarding L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction, which of the following statements is theoretically and mathematically sound? (Variant 24)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 24)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات."
      ],
      "correctAnswer": "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "correctAnswerEn": "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "correctAnswerAr": "يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_25",
      "titleEn": "[EASY] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Review 25",
      "titleAr": "[مستوى أساسي] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - سؤال 25",
      "questionEn": "[AI & Data Science Core Concept] Regarding Singular Value Decomposition (SVD) & Principal Component Analysis (PCA), which of the following statements is theoretically and mathematically sound? (Variant 25)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 25)",
      "optionsEn": [
        "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "correctAnswerEn": "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "correctAnswerAr": "يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_26",
      "titleEn": "[EASY] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Review 26",
      "titleAr": "[مستوى أساسي] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - سؤال 26",
      "questionEn": "[AI & Data Science Core Concept] Regarding Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam), which of the following statements is theoretically and mathematically sound? (Variant 26)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 26)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "correctAnswerEn": "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "correctAnswerAr": "يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_27",
      "titleEn": "[EASY] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Review 27",
      "titleAr": "[مستوى أساسي] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - سؤال 27",
      "questionEn": "[AI & Data Science Core Concept] Regarding L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction, which of the following statements is theoretically and mathematically sound? (Variant 27)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 27)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "correctAnswerEn": "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "correctAnswerAr": "يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_28",
      "titleEn": "[EASY] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Review 28",
      "titleAr": "[مستوى أساسي] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - سؤال 28",
      "questionEn": "[AI & Data Science Core Concept] Regarding Singular Value Decomposition (SVD) & Principal Component Analysis (PCA), which of the following statements is theoretically and mathematically sound? (Variant 28)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 28)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات."
      ],
      "correctAnswer": "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "correctAnswerEn": "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "correctAnswerAr": "يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_29",
      "titleEn": "[EASY] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Review 29",
      "titleAr": "[مستوى أساسي] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - سؤال 29",
      "questionEn": "[AI & Data Science Core Concept] Regarding Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam), which of the following statements is theoretically and mathematically sound? (Variant 29)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 29)",
      "optionsEn": [
        "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "correctAnswerEn": "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "correctAnswerAr": "يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_30",
      "titleEn": "[EASY] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Review 30",
      "titleAr": "[مستوى أساسي] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - سؤال 30",
      "questionEn": "[AI & Data Science Core Concept] Regarding L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction, which of the following statements is theoretically and mathematically sound? (Variant 30)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 30)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "correctAnswerEn": "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "correctAnswerAr": "يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_31",
      "titleEn": "[EASY] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Review 31",
      "titleAr": "[مستوى أساسي] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - سؤال 31",
      "questionEn": "[AI & Data Science Core Concept] Regarding Singular Value Decomposition (SVD) & Principal Component Analysis (PCA), which of the following statements is theoretically and mathematically sound? (Variant 31)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 31)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "correctAnswerEn": "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "correctAnswerAr": "يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_32",
      "titleEn": "[EASY] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Review 32",
      "titleAr": "[مستوى أساسي] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - سؤال 32",
      "questionEn": "[AI & Data Science Core Concept] Regarding Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam), which of the following statements is theoretically and mathematically sound? (Variant 32)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 32)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم."
      ],
      "correctAnswer": "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "correctAnswerEn": "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "correctAnswerAr": "يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_33",
      "titleEn": "[EASY] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Review 33",
      "titleAr": "[مستوى أساسي] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - سؤال 33",
      "questionEn": "[AI & Data Science Core Concept] Regarding L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction, which of the following statements is theoretically and mathematically sound? (Variant 33)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 33)",
      "optionsEn": [
        "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "correctAnswerEn": "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "correctAnswerAr": "يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_34",
      "titleEn": "[EASY] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Review 34",
      "titleAr": "[مستوى أساسي] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - سؤال 34",
      "questionEn": "[AI & Data Science Core Concept] Regarding Singular Value Decomposition (SVD) & Principal Component Analysis (PCA), which of the following statements is theoretically and mathematically sound? (Variant 34)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 34)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "correctAnswerEn": "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "correctAnswerAr": "يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_35",
      "titleEn": "[EASY] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Review 35",
      "titleAr": "[مستوى أساسي] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - سؤال 35",
      "questionEn": "[AI & Data Science Core Concept] Regarding Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam), which of the following statements is theoretically and mathematically sound? (Variant 35)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 35)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "correctAnswerEn": "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "correctAnswerAr": "يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_36",
      "titleEn": "[EASY] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Review 36",
      "titleAr": "[مستوى أساسي] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - سؤال 36",
      "questionEn": "[AI & Data Science Core Concept] Regarding L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction, which of the following statements is theoretically and mathematically sound? (Variant 36)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 36)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات."
      ],
      "correctAnswer": "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "correctAnswerEn": "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "correctAnswerAr": "يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_37",
      "titleEn": "[EASY] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Review 37",
      "titleAr": "[مستوى أساسي] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - سؤال 37",
      "questionEn": "[AI & Data Science Core Concept] Regarding Singular Value Decomposition (SVD) & Principal Component Analysis (PCA), which of the following statements is theoretically and mathematically sound? (Variant 37)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 37)",
      "optionsEn": [
        "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "correctAnswerEn": "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "correctAnswerAr": "يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_38",
      "titleEn": "[EASY] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Review 38",
      "titleAr": "[مستوى أساسي] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - سؤال 38",
      "questionEn": "[AI & Data Science Core Concept] Regarding Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam), which of the following statements is theoretically and mathematically sound? (Variant 38)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 38)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "correctAnswerEn": "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "correctAnswerAr": "يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_39",
      "titleEn": "[EASY] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Review 39",
      "titleAr": "[مستوى أساسي] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - سؤال 39",
      "questionEn": "[AI & Data Science Core Concept] Regarding L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction, which of the following statements is theoretically and mathematically sound? (Variant 39)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 39)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "correctAnswerEn": "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "correctAnswerAr": "يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_40",
      "titleEn": "[EASY] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Review 40",
      "titleAr": "[مستوى أساسي] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - سؤال 40",
      "questionEn": "[AI & Data Science Core Concept] Regarding Singular Value Decomposition (SVD) & Principal Component Analysis (PCA), which of the following statements is theoretically and mathematically sound? (Variant 40)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 40)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات."
      ],
      "correctAnswer": "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "correctAnswerEn": "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "correctAnswerAr": "يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_41",
      "titleEn": "[EASY] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Review 41",
      "titleAr": "[مستوى أساسي] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - سؤال 41",
      "questionEn": "[AI & Data Science Core Concept] Regarding Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam), which of the following statements is theoretically and mathematically sound? (Variant 41)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 41)",
      "optionsEn": [
        "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "correctAnswerEn": "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "correctAnswerAr": "يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_42",
      "titleEn": "[EASY] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Review 42",
      "titleAr": "[مستوى أساسي] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - سؤال 42",
      "questionEn": "[AI & Data Science Core Concept] Regarding L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction, which of the following statements is theoretically and mathematically sound? (Variant 42)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 42)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "correctAnswerEn": "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "correctAnswerAr": "يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_43",
      "titleEn": "[EASY] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Review 43",
      "titleAr": "[مستوى أساسي] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - سؤال 43",
      "questionEn": "[AI & Data Science Core Concept] Regarding Singular Value Decomposition (SVD) & Principal Component Analysis (PCA), which of the following statements is theoretically and mathematically sound? (Variant 43)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 43)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "correctAnswerEn": "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "correctAnswerAr": "يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_44",
      "titleEn": "[EASY] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Review 44",
      "titleAr": "[مستوى أساسي] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - سؤال 44",
      "questionEn": "[AI & Data Science Core Concept] Regarding Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam), which of the following statements is theoretically and mathematically sound? (Variant 44)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 44)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم."
      ],
      "correctAnswer": "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "correctAnswerEn": "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "correctAnswerAr": "يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_45",
      "titleEn": "[EASY] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Review 45",
      "titleAr": "[مستوى أساسي] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - سؤال 45",
      "questionEn": "[AI & Data Science Core Concept] Regarding L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction, which of the following statements is theoretically and mathematically sound? (Variant 45)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 45)",
      "optionsEn": [
        "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "correctAnswerEn": "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "correctAnswerAr": "يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_46",
      "titleEn": "[EASY] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Review 46",
      "titleAr": "[مستوى أساسي] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - سؤال 46",
      "questionEn": "[AI & Data Science Core Concept] Regarding Singular Value Decomposition (SVD) & Principal Component Analysis (PCA), which of the following statements is theoretically and mathematically sound? (Variant 46)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 46)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "correctAnswerEn": "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "correctAnswerAr": "يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_47",
      "titleEn": "[EASY] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Review 47",
      "titleAr": "[مستوى أساسي] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - سؤال 47",
      "questionEn": "[AI & Data Science Core Concept] Regarding Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam), which of the following statements is theoretically and mathematically sound? (Variant 47)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 47)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "correctAnswerEn": "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "correctAnswerAr": "يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_48",
      "titleEn": "[EASY] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Review 48",
      "titleAr": "[مستوى أساسي] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - سؤال 48",
      "questionEn": "[AI & Data Science Core Concept] Regarding L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction, which of the following statements is theoretically and mathematically sound? (Variant 48)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 48)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات."
      ],
      "correctAnswer": "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "correctAnswerEn": "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "correctAnswerAr": "يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_49",
      "titleEn": "[EASY] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Review 49",
      "titleAr": "[مستوى أساسي] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - سؤال 49",
      "questionEn": "[AI & Data Science Core Concept] Regarding Singular Value Decomposition (SVD) & Principal Component Analysis (PCA), which of the following statements is theoretically and mathematically sound? (Variant 49)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 49)",
      "optionsEn": [
        "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "correctAnswerEn": "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "correctAnswerAr": "يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_50",
      "titleEn": "[EASY] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Review 50",
      "titleAr": "[مستوى أساسي] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - سؤال 50",
      "questionEn": "[AI & Data Science Core Concept] Regarding Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam), which of the following statements is theoretically and mathematically sound? (Variant 50)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 50)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "correctAnswerEn": "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "correctAnswerAr": "يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_51",
      "titleEn": "[EASY] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Review 51",
      "titleAr": "[مستوى أساسي] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - سؤال 51",
      "questionEn": "[AI & Data Science Core Concept] Regarding L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction, which of the following statements is theoretically and mathematically sound? (Variant 51)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 51)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "correctAnswerEn": "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "correctAnswerAr": "يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_52",
      "titleEn": "[EASY] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Review 52",
      "titleAr": "[مستوى أساسي] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - سؤال 52",
      "questionEn": "[AI & Data Science Core Concept] Regarding Singular Value Decomposition (SVD) & Principal Component Analysis (PCA), which of the following statements is theoretically and mathematically sound? (Variant 52)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 52)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات."
      ],
      "correctAnswer": "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "correctAnswerEn": "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "correctAnswerAr": "يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_53",
      "titleEn": "[EASY] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Review 53",
      "titleAr": "[مستوى أساسي] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - سؤال 53",
      "questionEn": "[AI & Data Science Core Concept] Regarding Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam), which of the following statements is theoretically and mathematically sound? (Variant 53)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 53)",
      "optionsEn": [
        "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "correctAnswerEn": "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "correctAnswerAr": "يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_54",
      "titleEn": "[EASY] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Review 54",
      "titleAr": "[مستوى أساسي] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - سؤال 54",
      "questionEn": "[AI & Data Science Core Concept] Regarding L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction, which of the following statements is theoretically and mathematically sound? (Variant 54)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 54)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "correctAnswerEn": "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "correctAnswerAr": "يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_55",
      "titleEn": "[EASY] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Review 55",
      "titleAr": "[مستوى أساسي] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - سؤال 55",
      "questionEn": "[AI & Data Science Core Concept] Regarding Singular Value Decomposition (SVD) & Principal Component Analysis (PCA), which of the following statements is theoretically and mathematically sound? (Variant 55)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 55)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "correctAnswerEn": "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "correctAnswerAr": "يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_56",
      "titleEn": "[EASY] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Review 56",
      "titleAr": "[مستوى أساسي] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - سؤال 56",
      "questionEn": "[AI & Data Science Core Concept] Regarding Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam), which of the following statements is theoretically and mathematically sound? (Variant 56)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 56)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم."
      ],
      "correctAnswer": "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "correctAnswerEn": "Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "correctAnswerAr": "يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Gradient descent updates model parameter vector $\\theta$ iteratively in the opposite direction of the loss gradient: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$, where $\\eta$ is the learning rate.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحدث الانحدار التدريجي متجهات معاملات النموذج $\\theta$ تكرارياً في الاتجاه المعاكس لتدرج دالة الخسارة: $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$، حيث $\\eta$ هو معدل التعلم.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_57",
      "titleEn": "[EASY] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Review 57",
      "titleAr": "[مستوى أساسي] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - سؤال 57",
      "questionEn": "[AI & Data Science Core Concept] Regarding L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction, which of the following statements is theoretically and mathematically sound? (Variant 57)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 57)",
      "optionsEn": [
        "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "correctAnswerEn": "L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "correctAnswerAr": "يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: L1 regularization (Lasso) adds a penalty proportional to the absolute values of weights ($\\lambda \\sum |w_i|$), inducing exact zero weights and performing automatic feature selection.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يضيف تنظيم L1 (Lasso) عقوبة تتناسب طردياً مع القيم المطلقة للأوزان ($\\lambda \\sum |w_i|$)، مما يصفر أوزان الخصائص غير المؤثرة وينفذ اختياراً تلقائياً للمتغيرات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch1_easy_58",
      "titleEn": "[EASY] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Review 58",
      "titleAr": "[مستوى أساسي] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - سؤال 58",
      "questionEn": "[AI & Data Science Core Concept] Regarding Singular Value Decomposition (SVD) & Principal Component Analysis (PCA), which of the following statements is theoretically and mathematically sound? (Variant 58)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 58)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "correctAnswerEn": "Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "correctAnswerAr": "يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Principal Component Analysis (PCA) projects high-dimensional data onto orthogonal axes of maximum variance, computed via the eigenvectors of the data covariance matrix.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يسقط تحليل المكونات الرئيسية (PCA) البيانات متعددة الأبعاد على محاور متعامدة تعظم التباين، وتُحسب عبر المتجهات الذاتية لمصفوفة التغاير للبيانات.."
      ],
      "difficulty": "easy"
    }
  ],
  "medium": [
    {
      "id": "th_ai_data_science_ch1_med_1",
      "titleEn": "[MEDIUM] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Analysis 1",
      "titleAr": "[مستوى متوسط] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - تحليل 1",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Singular Value Decomposition (SVD) & Principal Component Analysis (PCA), what is the precise analytical formulation or operative rule? (Item 1)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 1)",
      "optionsEn": [
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves."
      ],
      "optionsAr": [
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية."
      ],
      "correctAnswer": "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctAnswerEn": "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctAnswerAr": "يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_2",
      "titleEn": "[MEDIUM] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Analysis 2",
      "titleAr": "[مستوى متوسط] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - تحليل 2",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam), what is the precise analytical formulation or operative rule? (Item 2)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 2)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctAnswerEn": "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctAnswerAr": "يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_3",
      "titleEn": "[MEDIUM] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Analysis 3",
      "titleAr": "[مستوى متوسط] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - تحليل 3",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction, what is the precise analytical formulation or operative rule? (Item 3)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 3)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية."
      ],
      "correctAnswer": "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "correctAnswerEn": "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "correctAnswerAr": "يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_4",
      "titleEn": "[MEDIUM] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Analysis 4",
      "titleAr": "[مستوى متوسط] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - تحليل 4",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Singular Value Decomposition (SVD) & Principal Component Analysis (PCA), what is the precise analytical formulation or operative rule? (Item 4)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 4)",
      "optionsEn": [
        "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent."
      ],
      "optionsAr": [
        "يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة."
      ],
      "correctAnswer": "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctAnswerEn": "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctAnswerAr": "يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_5",
      "titleEn": "[MEDIUM] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Analysis 5",
      "titleAr": "[مستوى متوسط] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - تحليل 5",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam), what is the precise analytical formulation or operative rule? (Item 5)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 5)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctAnswerEn": "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctAnswerAr": "يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_6",
      "titleEn": "[MEDIUM] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Analysis 6",
      "titleAr": "[مستوى متوسط] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - تحليل 6",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction, what is the precise analytical formulation or operative rule? (Item 6)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 6)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين."
      ],
      "correctAnswer": "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "correctAnswerEn": "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "correctAnswerAr": "يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_7",
      "titleEn": "[MEDIUM] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Analysis 7",
      "titleAr": "[مستوى متوسط] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - تحليل 7",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Singular Value Decomposition (SVD) & Principal Component Analysis (PCA), what is the precise analytical formulation or operative rule? (Item 7)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 7)",
      "optionsEn": [
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$."
      ],
      "optionsAr": [
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$."
      ],
      "correctAnswer": "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctAnswerEn": "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctAnswerAr": "يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_8",
      "titleEn": "[MEDIUM] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Analysis 8",
      "titleAr": "[مستوى متوسط] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - تحليل 8",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam), what is the precise analytical formulation or operative rule? (Item 8)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 8)",
      "optionsEn": [
        "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctAnswerEn": "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctAnswerAr": "يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_9",
      "titleEn": "[MEDIUM] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Analysis 9",
      "titleAr": "[مستوى متوسط] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - تحليل 9",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction, what is the precise analytical formulation or operative rule? (Item 9)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 9)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة."
      ],
      "correctAnswer": "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "correctAnswerEn": "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "correctAnswerAr": "يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_10",
      "titleEn": "[MEDIUM] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Analysis 10",
      "titleAr": "[مستوى متوسط] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - تحليل 10",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Singular Value Decomposition (SVD) & Principal Component Analysis (PCA), what is the precise analytical formulation or operative rule? (Item 10)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 10)",
      "optionsEn": [
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence."
      ],
      "optionsAr": [
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية."
      ],
      "correctAnswer": "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctAnswerEn": "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctAnswerAr": "يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_11",
      "titleEn": "[MEDIUM] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Analysis 11",
      "titleAr": "[مستوى متوسط] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - تحليل 11",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam), what is the precise analytical formulation or operative rule? (Item 11)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 11)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$."
      ],
      "correctAnswer": "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctAnswerEn": "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctAnswerAr": "يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_12",
      "titleEn": "[MEDIUM] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Analysis 12",
      "titleAr": "[مستوى متوسط] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - تحليل 12",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction, what is the precise analytical formulation or operative rule? (Item 12)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 12)",
      "optionsEn": [
        "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data."
      ],
      "optionsAr": [
        "يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش."
      ],
      "correctAnswer": "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "correctAnswerEn": "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "correctAnswerAr": "يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_13",
      "titleEn": "[MEDIUM] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Analysis 13",
      "titleAr": "[مستوى متوسط] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - تحليل 13",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Singular Value Decomposition (SVD) & Principal Component Analysis (PCA), what is the precise analytical formulation or operative rule? (Item 13)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 13)",
      "optionsEn": [
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan."
      ],
      "optionsAr": [
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG)."
      ],
      "correctAnswer": "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctAnswerEn": "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctAnswerAr": "يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_14",
      "titleEn": "[MEDIUM] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Analysis 14",
      "titleAr": "[مستوى متوسط] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - تحليل 14",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam), what is the precise analytical formulation or operative rule? (Item 14)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 14)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctAnswerEn": "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctAnswerAr": "يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_15",
      "titleEn": "[MEDIUM] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Analysis 15",
      "titleAr": "[مستوى متوسط] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - تحليل 15",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction, what is the precise analytical formulation or operative rule? (Item 15)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 15)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية."
      ],
      "correctAnswer": "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "correctAnswerEn": "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "correctAnswerAr": "يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_16",
      "titleEn": "[MEDIUM] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Analysis 16",
      "titleAr": "[مستوى متوسط] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - تحليل 16",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Singular Value Decomposition (SVD) & Principal Component Analysis (PCA), what is the precise analytical formulation or operative rule? (Item 16)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 16)",
      "optionsEn": [
        "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves."
      ],
      "optionsAr": [
        "يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية."
      ],
      "correctAnswer": "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctAnswerEn": "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctAnswerAr": "يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_17",
      "titleEn": "[MEDIUM] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Analysis 17",
      "titleAr": "[مستوى متوسط] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - تحليل 17",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam), what is the precise analytical formulation or operative rule? (Item 17)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 17)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctAnswerEn": "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctAnswerAr": "يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_18",
      "titleEn": "[MEDIUM] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Analysis 18",
      "titleAr": "[مستوى متوسط] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - تحليل 18",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction, what is the precise analytical formulation or operative rule? (Item 18)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 18)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي."
      ],
      "correctAnswer": "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "correctAnswerEn": "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "correctAnswerAr": "يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_19",
      "titleEn": "[MEDIUM] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Analysis 19",
      "titleAr": "[مستوى متوسط] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - تحليل 19",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Singular Value Decomposition (SVD) & Principal Component Analysis (PCA), what is the precise analytical formulation or operative rule? (Item 19)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 19)",
      "optionsEn": [
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$."
      ],
      "optionsAr": [
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$."
      ],
      "correctAnswer": "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctAnswerEn": "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctAnswerAr": "يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_20",
      "titleEn": "[MEDIUM] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Analysis 20",
      "titleAr": "[مستوى متوسط] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - تحليل 20",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam), what is the precise analytical formulation or operative rule? (Item 20)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 20)",
      "optionsEn": [
        "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctAnswerEn": "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctAnswerAr": "يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_21",
      "titleEn": "[MEDIUM] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Analysis 21",
      "titleAr": "[مستوى متوسط] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - تحليل 21",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction, what is the precise analytical formulation or operative rule? (Item 21)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 21)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين."
      ],
      "correctAnswer": "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "correctAnswerEn": "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "correctAnswerAr": "يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_22",
      "titleEn": "[MEDIUM] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Analysis 22",
      "titleAr": "[مستوى متوسط] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - تحليل 22",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Singular Value Decomposition (SVD) & Principal Component Analysis (PCA), what is the precise analytical formulation or operative rule? (Item 22)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 22)",
      "optionsEn": [
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance."
      ],
      "optionsAr": [
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر."
      ],
      "correctAnswer": "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctAnswerEn": "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctAnswerAr": "يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_23",
      "titleEn": "[MEDIUM] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Analysis 23",
      "titleAr": "[مستوى متوسط] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - تحليل 23",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam), what is the precise analytical formulation or operative rule? (Item 23)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 23)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$."
      ],
      "correctAnswer": "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctAnswerEn": "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctAnswerAr": "يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_24",
      "titleEn": "[MEDIUM] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Analysis 24",
      "titleAr": "[مستوى متوسط] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - تحليل 24",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction, what is the precise analytical formulation or operative rule? (Item 24)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 24)",
      "optionsEn": [
        "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs."
      ],
      "optionsAr": [
        "يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة."
      ],
      "correctAnswer": "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "correctAnswerEn": "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "correctAnswerAr": "يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_25",
      "titleEn": "[MEDIUM] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Analysis 25",
      "titleAr": "[مستوى متوسط] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - تحليل 25",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Singular Value Decomposition (SVD) & Principal Component Analysis (PCA), what is the precise analytical formulation or operative rule? (Item 25)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 25)",
      "optionsEn": [
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence."
      ],
      "optionsAr": [
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية."
      ],
      "correctAnswer": "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctAnswerEn": "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctAnswerAr": "يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_26",
      "titleEn": "[MEDIUM] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Analysis 26",
      "titleAr": "[مستوى متوسط] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - تحليل 26",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam), what is the precise analytical formulation or operative rule? (Item 26)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 26)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctAnswerEn": "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctAnswerAr": "يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_27",
      "titleEn": "[MEDIUM] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Analysis 27",
      "titleAr": "[مستوى متوسط] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - تحليل 27",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction, what is the precise analytical formulation or operative rule? (Item 27)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 27)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية."
      ],
      "correctAnswer": "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "correctAnswerEn": "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "correctAnswerAr": "يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_28",
      "titleEn": "[MEDIUM] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Analysis 28",
      "titleAr": "[مستوى متوسط] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - تحليل 28",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Singular Value Decomposition (SVD) & Principal Component Analysis (PCA), what is the precise analytical formulation or operative rule? (Item 28)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 28)",
      "optionsEn": [
        "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan."
      ],
      "optionsAr": [
        "يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG)."
      ],
      "correctAnswer": "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctAnswerEn": "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctAnswerAr": "يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_29",
      "titleEn": "[MEDIUM] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Analysis 29",
      "titleAr": "[مستوى متوسط] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - تحليل 29",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam), what is the precise analytical formulation or operative rule? (Item 29)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 29)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctAnswerEn": "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctAnswerAr": "يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_30",
      "titleEn": "[MEDIUM] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Analysis 30",
      "titleAr": "[مستوى متوسط] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - تحليل 30",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction, what is the precise analytical formulation or operative rule? (Item 30)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 30)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم."
      ],
      "correctAnswer": "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "correctAnswerEn": "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "correctAnswerAr": "يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_31",
      "titleEn": "[MEDIUM] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Analysis 31",
      "titleAr": "[مستوى متوسط] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - تحليل 31",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Singular Value Decomposition (SVD) & Principal Component Analysis (PCA), what is the precise analytical formulation or operative rule? (Item 31)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 31)",
      "optionsEn": [
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$."
      ],
      "optionsAr": [
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$."
      ],
      "correctAnswer": "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctAnswerEn": "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctAnswerAr": "يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_32",
      "titleEn": "[MEDIUM] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Analysis 32",
      "titleAr": "[مستوى متوسط] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - تحليل 32",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam), what is the precise analytical formulation or operative rule? (Item 32)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 32)",
      "optionsEn": [
        "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctAnswerEn": "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctAnswerAr": "يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_33",
      "titleEn": "[MEDIUM] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Analysis 33",
      "titleAr": "[مستوى متوسط] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - تحليل 33",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction, what is the precise analytical formulation or operative rule? (Item 33)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 33)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي."
      ],
      "correctAnswer": "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "correctAnswerEn": "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "correctAnswerAr": "يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_34",
      "titleEn": "[MEDIUM] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Analysis 34",
      "titleAr": "[مستوى متوسط] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - تحليل 34",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Singular Value Decomposition (SVD) & Principal Component Analysis (PCA), what is the precise analytical formulation or operative rule? (Item 34)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 34)",
      "optionsEn": [
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent."
      ],
      "optionsAr": [
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة."
      ],
      "correctAnswer": "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctAnswerEn": "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctAnswerAr": "يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_35",
      "titleEn": "[MEDIUM] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Analysis 35",
      "titleAr": "[مستوى متوسط] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - تحليل 35",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam), what is the precise analytical formulation or operative rule? (Item 35)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 35)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$."
      ],
      "correctAnswer": "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctAnswerEn": "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctAnswerAr": "يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_36",
      "titleEn": "[MEDIUM] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Analysis 36",
      "titleAr": "[مستوى متوسط] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - تحليل 36",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction, what is the precise analytical formulation or operative rule? (Item 36)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 36)",
      "optionsEn": [
        "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step."
      ],
      "optionsAr": [
        "يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين."
      ],
      "correctAnswer": "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "correctAnswerEn": "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "correctAnswerAr": "يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_37",
      "titleEn": "[MEDIUM] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Analysis 37",
      "titleAr": "[مستوى متوسط] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - تحليل 37",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Singular Value Decomposition (SVD) & Principal Component Analysis (PCA), what is the precise analytical formulation or operative rule? (Item 37)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 37)",
      "optionsEn": [
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance."
      ],
      "optionsAr": [
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر."
      ],
      "correctAnswer": "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctAnswerEn": "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctAnswerAr": "يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_38",
      "titleEn": "[MEDIUM] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Analysis 38",
      "titleAr": "[مستوى متوسط] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - تحليل 38",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam), what is the precise analytical formulation or operative rule? (Item 38)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 38)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctAnswerEn": "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctAnswerAr": "يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_39",
      "titleEn": "[MEDIUM] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Analysis 39",
      "titleAr": "[مستوى متوسط] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - تحليل 39",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction, what is the precise analytical formulation or operative rule? (Item 39)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 39)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية."
      ],
      "correctAnswer": "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "correctAnswerEn": "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "correctAnswerAr": "يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_40",
      "titleEn": "[MEDIUM] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Analysis 40",
      "titleAr": "[مستوى متوسط] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - تحليل 40",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Singular Value Decomposition (SVD) & Principal Component Analysis (PCA), what is the precise analytical formulation or operative rule? (Item 40)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 40)",
      "optionsEn": [
        "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence."
      ],
      "optionsAr": [
        "يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية."
      ],
      "correctAnswer": "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctAnswerEn": "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctAnswerAr": "يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_41",
      "titleEn": "[MEDIUM] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Analysis 41",
      "titleAr": "[مستوى متوسط] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - تحليل 41",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam), what is the precise analytical formulation or operative rule? (Item 41)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 41)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctAnswerEn": "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctAnswerAr": "يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_42",
      "titleEn": "[MEDIUM] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Analysis 42",
      "titleAr": "[مستوى متوسط] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - تحليل 42",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction, what is the precise analytical formulation or operative rule? (Item 42)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 42)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش."
      ],
      "correctAnswer": "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "correctAnswerEn": "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "correctAnswerAr": "يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_43",
      "titleEn": "[MEDIUM] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Analysis 43",
      "titleAr": "[مستوى متوسط] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - تحليل 43",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Singular Value Decomposition (SVD) & Principal Component Analysis (PCA), what is the precise analytical formulation or operative rule? (Item 43)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 43)",
      "optionsEn": [
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$."
      ],
      "optionsAr": [
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$."
      ],
      "correctAnswer": "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctAnswerEn": "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctAnswerAr": "يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_44",
      "titleEn": "[MEDIUM] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Analysis 44",
      "titleAr": "[مستوى متوسط] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - تحليل 44",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam), what is the precise analytical formulation or operative rule? (Item 44)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 44)",
      "optionsEn": [
        "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctAnswerEn": "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctAnswerAr": "يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_45",
      "titleEn": "[MEDIUM] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Analysis 45",
      "titleAr": "[مستوى متوسط] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - تحليل 45",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction, what is the precise analytical formulation or operative rule? (Item 45)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 45)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم."
      ],
      "correctAnswer": "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "correctAnswerEn": "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "correctAnswerAr": "يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_46",
      "titleEn": "[MEDIUM] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Analysis 46",
      "titleAr": "[مستوى متوسط] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - تحليل 46",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Singular Value Decomposition (SVD) & Principal Component Analysis (PCA), what is the precise analytical formulation or operative rule? (Item 46)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 46)",
      "optionsEn": [
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves."
      ],
      "optionsAr": [
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية."
      ],
      "correctAnswer": "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctAnswerEn": "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctAnswerAr": "يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_47",
      "titleEn": "[MEDIUM] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Analysis 47",
      "titleAr": "[مستوى متوسط] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - تحليل 47",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam), what is the precise analytical formulation or operative rule? (Item 47)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 47)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$."
      ],
      "correctAnswer": "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctAnswerEn": "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctAnswerAr": "يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_48",
      "titleEn": "[MEDIUM] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Analysis 48",
      "titleAr": "[مستوى متوسط] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - تحليل 48",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction, what is the precise analytical formulation or operative rule? (Item 48)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 48)",
      "optionsEn": [
        "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation."
      ],
      "optionsAr": [
        "يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي."
      ],
      "correctAnswer": "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "correctAnswerEn": "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "correctAnswerAr": "يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_49",
      "titleEn": "[MEDIUM] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Analysis 49",
      "titleAr": "[مستوى متوسط] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - تحليل 49",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Singular Value Decomposition (SVD) & Principal Component Analysis (PCA), what is the precise analytical formulation or operative rule? (Item 49)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 49)",
      "optionsEn": [
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent."
      ],
      "optionsAr": [
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة."
      ],
      "correctAnswer": "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctAnswerEn": "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctAnswerAr": "يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_50",
      "titleEn": "[MEDIUM] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Analysis 50",
      "titleAr": "[مستوى متوسط] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - تحليل 50",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam), what is the precise analytical formulation or operative rule? (Item 50)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 50)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctAnswerEn": "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctAnswerAr": "يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_51",
      "titleEn": "[MEDIUM] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Analysis 51",
      "titleAr": "[مستوى متوسط] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - تحليل 51",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction, what is the precise analytical formulation or operative rule? (Item 51)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 51)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية."
      ],
      "correctAnswer": "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "correctAnswerEn": "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "correctAnswerAr": "يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_52",
      "titleEn": "[MEDIUM] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Analysis 52",
      "titleAr": "[مستوى متوسط] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - تحليل 52",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Singular Value Decomposition (SVD) & Principal Component Analysis (PCA), what is the precise analytical formulation or operative rule? (Item 52)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 52)",
      "optionsEn": [
        "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance."
      ],
      "optionsAr": [
        "يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر."
      ],
      "correctAnswer": "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctAnswerEn": "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctAnswerAr": "يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_53",
      "titleEn": "[MEDIUM] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Analysis 53",
      "titleAr": "[مستوى متوسط] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - تحليل 53",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam), what is the precise analytical formulation or operative rule? (Item 53)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 53)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctAnswerEn": "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctAnswerAr": "يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_54",
      "titleEn": "[MEDIUM] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Analysis 54",
      "titleAr": "[مستوى متوسط] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - تحليل 54",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction, what is the precise analytical formulation or operative rule? (Item 54)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 54)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة."
      ],
      "correctAnswer": "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "correctAnswerEn": "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "correctAnswerAr": "يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_55",
      "titleEn": "[MEDIUM] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Analysis 55",
      "titleAr": "[مستوى متوسط] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - تحليل 55",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Singular Value Decomposition (SVD) & Principal Component Analysis (PCA), what is the precise analytical formulation or operative rule? (Item 55)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 55)",
      "optionsEn": [
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$."
      ],
      "optionsAr": [
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$."
      ],
      "correctAnswer": "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctAnswerEn": "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctAnswerAr": "يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_56",
      "titleEn": "[MEDIUM] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Analysis 56",
      "titleAr": "[مستوى متوسط] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - تحليل 56",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam), what is the precise analytical formulation or operative rule? (Item 56)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 56)",
      "optionsEn": [
        "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctAnswerEn": "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctAnswerAr": "يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_57",
      "titleEn": "[MEDIUM] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Analysis 57",
      "titleAr": "[مستوى متوسط] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - تحليل 57",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction, what is the precise analytical formulation or operative rule? (Item 57)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 57)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش."
      ],
      "correctAnswer": "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "correctAnswerEn": "L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "correctAnswerAr": "يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_58",
      "titleEn": "[MEDIUM] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Analysis 58",
      "titleAr": "[مستوى متوسط] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - تحليل 58",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Singular Value Decomposition (SVD) & Principal Component Analysis (PCA), what is the precise analytical formulation or operative rule? (Item 58)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 58)",
      "optionsEn": [
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan."
      ],
      "optionsAr": [
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG)."
      ],
      "correctAnswer": "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctAnswerEn": "Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctAnswerAr": "يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch1_med_59",
      "titleEn": "[MEDIUM] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Analysis 59",
      "titleAr": "[مستوى متوسط] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - تحليل 59",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam), what is the precise analytical formulation or operative rule? (Item 59)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 59)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$."
      ],
      "correctAnswer": "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctAnswerEn": "The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctAnswerAr": "يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.."
      ],
      "difficulty": "medium"
    }
  ],
  "hots": [
    {
      "id": "th_ai_data_science_ch1_hots_1",
      "titleEn": "[HOTS] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Evaluation 1",
      "titleAr": "[تفكير عليا] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - تقييم 1",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Singular Value Decomposition (SVD) & Principal Component Analysis (PCA): (Problem 1)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA): (مسألة 1)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "correctAnswerEn": "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "correctAnswerAr": "لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_2",
      "titleEn": "[HOTS] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Evaluation 2",
      "titleAr": "[تفكير عليا] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - تقييم 2",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam): (Problem 2)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam): (مسألة 2)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$."
      ],
      "correctAnswer": "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "correctAnswerEn": "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "correctAnswerAr": "عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_3",
      "titleEn": "[HOTS] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Evaluation 3",
      "titleAr": "[تفكير عليا] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - تقييم 3",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction: (Problem 3)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة: (مسألة 3)",
      "optionsEn": [
        "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "correctAnswerEn": "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "correctAnswerAr": "عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_4",
      "titleEn": "[HOTS] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Evaluation 4",
      "titleAr": "[تفكير عليا] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - تقييم 4",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Singular Value Decomposition (SVD) & Principal Component Analysis (PCA): (Problem 4)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA): (مسألة 4)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "correctAnswerEn": "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "correctAnswerAr": "لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_5",
      "titleEn": "[HOTS] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Evaluation 5",
      "titleAr": "[تفكير عليا] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - تقييم 5",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam): (Problem 5)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam): (مسألة 5)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "correctAnswerEn": "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "correctAnswerAr": "عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_6",
      "titleEn": "[HOTS] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Evaluation 6",
      "titleAr": "[تفكير عليا] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - تقييم 6",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction: (Problem 6)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة: (مسألة 6)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$."
      ],
      "correctAnswer": "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "correctAnswerEn": "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "correctAnswerAr": "عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_7",
      "titleEn": "[HOTS] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Evaluation 7",
      "titleAr": "[تفكير عليا] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - تقييم 7",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Singular Value Decomposition (SVD) & Principal Component Analysis (PCA): (Problem 7)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA): (مسألة 7)",
      "optionsEn": [
        "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "correctAnswerEn": "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "correctAnswerAr": "لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_8",
      "titleEn": "[HOTS] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Evaluation 8",
      "titleAr": "[تفكير عليا] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - تقييم 8",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam): (Problem 8)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam): (مسألة 8)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "correctAnswerEn": "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "correctAnswerAr": "عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_9",
      "titleEn": "[HOTS] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Evaluation 9",
      "titleAr": "[تفكير عليا] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - تقييم 9",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction: (Problem 9)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة: (مسألة 9)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "correctAnswerEn": "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "correctAnswerAr": "عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_10",
      "titleEn": "[HOTS] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Evaluation 10",
      "titleAr": "[تفكير عليا] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - تقييم 10",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Singular Value Decomposition (SVD) & Principal Component Analysis (PCA): (Problem 10)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA): (مسألة 10)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$."
      ],
      "correctAnswer": "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "correctAnswerEn": "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "correctAnswerAr": "لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_11",
      "titleEn": "[HOTS] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Evaluation 11",
      "titleAr": "[تفكير عليا] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - تقييم 11",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam): (Problem 11)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam): (مسألة 11)",
      "optionsEn": [
        "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "correctAnswerEn": "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "correctAnswerAr": "عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_12",
      "titleEn": "[HOTS] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Evaluation 12",
      "titleAr": "[تفكير عليا] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - تقييم 12",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction: (Problem 12)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة: (مسألة 12)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "correctAnswerEn": "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "correctAnswerAr": "عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_13",
      "titleEn": "[HOTS] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Evaluation 13",
      "titleAr": "[تفكير عليا] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - تقييم 13",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Singular Value Decomposition (SVD) & Principal Component Analysis (PCA): (Problem 13)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA): (مسألة 13)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "correctAnswerEn": "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "correctAnswerAr": "لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_14",
      "titleEn": "[HOTS] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Evaluation 14",
      "titleAr": "[تفكير عليا] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - تقييم 14",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam): (Problem 14)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam): (مسألة 14)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$."
      ],
      "correctAnswer": "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "correctAnswerEn": "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "correctAnswerAr": "عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_15",
      "titleEn": "[HOTS] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Evaluation 15",
      "titleAr": "[تفكير عليا] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - تقييم 15",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction: (Problem 15)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة: (مسألة 15)",
      "optionsEn": [
        "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "correctAnswerEn": "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "correctAnswerAr": "عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_16",
      "titleEn": "[HOTS] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Evaluation 16",
      "titleAr": "[تفكير عليا] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - تقييم 16",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Singular Value Decomposition (SVD) & Principal Component Analysis (PCA): (Problem 16)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA): (مسألة 16)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "correctAnswerEn": "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "correctAnswerAr": "لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_17",
      "titleEn": "[HOTS] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Evaluation 17",
      "titleAr": "[تفكير عليا] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - تقييم 17",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam): (Problem 17)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam): (مسألة 17)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "correctAnswerEn": "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "correctAnswerAr": "عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_18",
      "titleEn": "[HOTS] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Evaluation 18",
      "titleAr": "[تفكير عليا] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - تقييم 18",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction: (Problem 18)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة: (مسألة 18)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$."
      ],
      "correctAnswer": "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "correctAnswerEn": "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "correctAnswerAr": "عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_19",
      "titleEn": "[HOTS] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Evaluation 19",
      "titleAr": "[تفكير عليا] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - تقييم 19",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Singular Value Decomposition (SVD) & Principal Component Analysis (PCA): (Problem 19)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA): (مسألة 19)",
      "optionsEn": [
        "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "correctAnswerEn": "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "correctAnswerAr": "لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_20",
      "titleEn": "[HOTS] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Evaluation 20",
      "titleAr": "[تفكير عليا] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - تقييم 20",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam): (Problem 20)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam): (مسألة 20)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "correctAnswerEn": "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "correctAnswerAr": "عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_21",
      "titleEn": "[HOTS] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Evaluation 21",
      "titleAr": "[تفكير عليا] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - تقييم 21",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction: (Problem 21)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة: (مسألة 21)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "correctAnswerEn": "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "correctAnswerAr": "عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_22",
      "titleEn": "[HOTS] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Evaluation 22",
      "titleAr": "[تفكير عليا] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - تقييم 22",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Singular Value Decomposition (SVD) & Principal Component Analysis (PCA): (Problem 22)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA): (مسألة 22)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$."
      ],
      "correctAnswer": "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "correctAnswerEn": "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "correctAnswerAr": "لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_23",
      "titleEn": "[HOTS] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Evaluation 23",
      "titleAr": "[تفكير عليا] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - تقييم 23",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam): (Problem 23)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam): (مسألة 23)",
      "optionsEn": [
        "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "correctAnswerEn": "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "correctAnswerAr": "عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_24",
      "titleEn": "[HOTS] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Evaluation 24",
      "titleAr": "[تفكير عليا] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - تقييم 24",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction: (Problem 24)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة: (مسألة 24)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "correctAnswerEn": "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "correctAnswerAr": "عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_25",
      "titleEn": "[HOTS] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Evaluation 25",
      "titleAr": "[تفكير عليا] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - تقييم 25",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Singular Value Decomposition (SVD) & Principal Component Analysis (PCA): (Problem 25)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA): (مسألة 25)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "correctAnswerEn": "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "correctAnswerAr": "لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_26",
      "titleEn": "[HOTS] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Evaluation 26",
      "titleAr": "[تفكير عليا] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - تقييم 26",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam): (Problem 26)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam): (مسألة 26)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$."
      ],
      "correctAnswer": "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "correctAnswerEn": "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "correctAnswerAr": "عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_27",
      "titleEn": "[HOTS] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Evaluation 27",
      "titleAr": "[تفكير عليا] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - تقييم 27",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction: (Problem 27)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة: (مسألة 27)",
      "optionsEn": [
        "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "correctAnswerEn": "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "correctAnswerAr": "عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_28",
      "titleEn": "[HOTS] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Evaluation 28",
      "titleAr": "[تفكير عليا] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - تقييم 28",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Singular Value Decomposition (SVD) & Principal Component Analysis (PCA): (Problem 28)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA): (مسألة 28)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "correctAnswerEn": "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "correctAnswerAr": "لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_29",
      "titleEn": "[HOTS] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Evaluation 29",
      "titleAr": "[تفكير عليا] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - تقييم 29",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam): (Problem 29)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam): (مسألة 29)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "correctAnswerEn": "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "correctAnswerAr": "عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_30",
      "titleEn": "[HOTS] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Evaluation 30",
      "titleAr": "[تفكير عليا] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - تقييم 30",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction: (Problem 30)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة: (مسألة 30)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$."
      ],
      "correctAnswer": "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "correctAnswerEn": "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "correctAnswerAr": "عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_31",
      "titleEn": "[HOTS] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Evaluation 31",
      "titleAr": "[تفكير عليا] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - تقييم 31",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Singular Value Decomposition (SVD) & Principal Component Analysis (PCA): (Problem 31)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA): (مسألة 31)",
      "optionsEn": [
        "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "correctAnswerEn": "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "correctAnswerAr": "لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_32",
      "titleEn": "[HOTS] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Evaluation 32",
      "titleAr": "[تفكير عليا] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - تقييم 32",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam): (Problem 32)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam): (مسألة 32)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "correctAnswerEn": "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "correctAnswerAr": "عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_33",
      "titleEn": "[HOTS] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Evaluation 33",
      "titleAr": "[تفكير عليا] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - تقييم 33",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction: (Problem 33)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة: (مسألة 33)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "correctAnswerEn": "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "correctAnswerAr": "عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_34",
      "titleEn": "[HOTS] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Evaluation 34",
      "titleAr": "[تفكير عليا] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - تقييم 34",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Singular Value Decomposition (SVD) & Principal Component Analysis (PCA): (Problem 34)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA): (مسألة 34)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$."
      ],
      "correctAnswer": "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "correctAnswerEn": "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "correctAnswerAr": "لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_35",
      "titleEn": "[HOTS] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Evaluation 35",
      "titleAr": "[تفكير عليا] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - تقييم 35",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam): (Problem 35)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam): (مسألة 35)",
      "optionsEn": [
        "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "correctAnswerEn": "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "correctAnswerAr": "عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_36",
      "titleEn": "[HOTS] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Evaluation 36",
      "titleAr": "[تفكير عليا] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - تقييم 36",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction: (Problem 36)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة: (مسألة 36)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "correctAnswerEn": "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "correctAnswerAr": "عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_37",
      "titleEn": "[HOTS] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Evaluation 37",
      "titleAr": "[تفكير عليا] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - تقييم 37",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Singular Value Decomposition (SVD) & Principal Component Analysis (PCA): (Problem 37)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA): (مسألة 37)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "correctAnswerEn": "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "correctAnswerAr": "لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_38",
      "titleEn": "[HOTS] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Evaluation 38",
      "titleAr": "[تفكير عليا] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - تقييم 38",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam): (Problem 38)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam): (مسألة 38)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$."
      ],
      "correctAnswer": "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "correctAnswerEn": "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "correctAnswerAr": "عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_39",
      "titleEn": "[HOTS] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Evaluation 39",
      "titleAr": "[تفكير عليا] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - تقييم 39",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction: (Problem 39)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة: (مسألة 39)",
      "optionsEn": [
        "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "correctAnswerEn": "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "correctAnswerAr": "عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_40",
      "titleEn": "[HOTS] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Evaluation 40",
      "titleAr": "[تفكير عليا] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - تقييم 40",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Singular Value Decomposition (SVD) & Principal Component Analysis (PCA): (Problem 40)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA): (مسألة 40)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "correctAnswerEn": "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "correctAnswerAr": "لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_41",
      "titleEn": "[HOTS] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Evaluation 41",
      "titleAr": "[تفكير عليا] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - تقييم 41",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam): (Problem 41)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam): (مسألة 41)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "correctAnswerEn": "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "correctAnswerAr": "عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_42",
      "titleEn": "[HOTS] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Evaluation 42",
      "titleAr": "[تفكير عليا] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - تقييم 42",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction: (Problem 42)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة: (مسألة 42)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$."
      ],
      "correctAnswer": "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "correctAnswerEn": "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "correctAnswerAr": "عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_43",
      "titleEn": "[HOTS] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Evaluation 43",
      "titleAr": "[تفكير عليا] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - تقييم 43",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Singular Value Decomposition (SVD) & Principal Component Analysis (PCA): (Problem 43)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA): (مسألة 43)",
      "optionsEn": [
        "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "correctAnswerEn": "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "correctAnswerAr": "لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_44",
      "titleEn": "[HOTS] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Evaluation 44",
      "titleAr": "[تفكير عليا] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - تقييم 44",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam): (Problem 44)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam): (مسألة 44)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "correctAnswerEn": "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "correctAnswerAr": "عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_45",
      "titleEn": "[HOTS] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Evaluation 45",
      "titleAr": "[تفكير عليا] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - تقييم 45",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction: (Problem 45)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة: (مسألة 45)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "correctAnswerEn": "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "correctAnswerAr": "عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_46",
      "titleEn": "[HOTS] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Evaluation 46",
      "titleAr": "[تفكير عليا] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - تقييم 46",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Singular Value Decomposition (SVD) & Principal Component Analysis (PCA): (Problem 46)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA): (مسألة 46)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$."
      ],
      "correctAnswer": "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "correctAnswerEn": "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "correctAnswerAr": "لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_47",
      "titleEn": "[HOTS] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Evaluation 47",
      "titleAr": "[تفكير عليا] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - تقييم 47",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam): (Problem 47)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam): (مسألة 47)",
      "optionsEn": [
        "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "correctAnswerEn": "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "correctAnswerAr": "عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_48",
      "titleEn": "[HOTS] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Evaluation 48",
      "titleAr": "[تفكير عليا] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - تقييم 48",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction: (Problem 48)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة: (مسألة 48)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "correctAnswerEn": "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "correctAnswerAr": "عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_49",
      "titleEn": "[HOTS] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Evaluation 49",
      "titleAr": "[تفكير عليا] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - تقييم 49",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Singular Value Decomposition (SVD) & Principal Component Analysis (PCA): (Problem 49)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA): (مسألة 49)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "correctAnswerEn": "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "correctAnswerAr": "لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_50",
      "titleEn": "[HOTS] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Evaluation 50",
      "titleAr": "[تفكير عليا] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - تقييم 50",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam): (Problem 50)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam): (مسألة 50)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$."
      ],
      "correctAnswer": "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "correctAnswerEn": "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "correctAnswerAr": "عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_51",
      "titleEn": "[HOTS] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Evaluation 51",
      "titleAr": "[تفكير عليا] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - تقييم 51",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction: (Problem 51)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة: (مسألة 51)",
      "optionsEn": [
        "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "correctAnswerEn": "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "correctAnswerAr": "عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_52",
      "titleEn": "[HOTS] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Evaluation 52",
      "titleAr": "[تفكير عليا] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - تقييم 52",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Singular Value Decomposition (SVD) & Principal Component Analysis (PCA): (Problem 52)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA): (مسألة 52)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "correctAnswerEn": "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "correctAnswerAr": "لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_53",
      "titleEn": "[HOTS] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Evaluation 53",
      "titleAr": "[تفكير عليا] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - تقييم 53",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam): (Problem 53)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam): (مسألة 53)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "correctAnswerEn": "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "correctAnswerAr": "عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_54",
      "titleEn": "[HOTS] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Evaluation 54",
      "titleAr": "[تفكير عليا] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - تقييم 54",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction: (Problem 54)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة: (مسألة 54)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$."
      ],
      "correctAnswer": "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "correctAnswerEn": "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "correctAnswerAr": "عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_55",
      "titleEn": "[HOTS] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Evaluation 55",
      "titleAr": "[تفكير عليا] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - تقييم 55",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Singular Value Decomposition (SVD) & Principal Component Analysis (PCA): (Problem 55)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA): (مسألة 55)",
      "optionsEn": [
        "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "correctAnswerEn": "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "correctAnswerAr": "لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_56",
      "titleEn": "[HOTS] Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam) - Evaluation 56",
      "titleAr": "[تفكير عليا] التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam) - تقييم 56",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam): (Problem 56)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam): (مسألة 56)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "correctAnswerEn": "In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "correctAnswerAr": "عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_57",
      "titleEn": "[HOTS] L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction - Evaluation 57",
      "titleAr": "[تفكير عليا] التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة - تقييم 57",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction: (Problem 57)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة: (مسألة 57)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "correctAnswerEn": "When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "correctAnswerAr": "عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch1_hots_58",
      "titleEn": "[HOTS] Singular Value Decomposition (SVD) & Principal Component Analysis (PCA) - Evaluation 58",
      "titleAr": "[تفكير عليا] تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA) - تقييم 58",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Singular Value Decomposition (SVD) & Principal Component Analysis (PCA): (Problem 58)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA): (مسألة 58)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$."
      ],
      "correctAnswer": "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "correctAnswerEn": "For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "correctAnswerAr": "لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.."
      ],
      "difficulty": "hots"
    }
  ]
};
